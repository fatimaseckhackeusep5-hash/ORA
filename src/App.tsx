import { useState, useEffect } from 'react';
import type { Page, Product } from './data';
import { products } from './data';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CartSidebar, { type CartItem } from './components/CartSidebar';
import HomePage from './components/HomePage';
import CollectionPage from './components/CollectionPage';
import ProductPage from './components/ProductPage';
import ArtisansPage from './components/ArtisansPage';
import HistoirePage from './components/HistoirePage';
import BlogPage from './components/BlogPage';
import CheckoutPage from './components/CheckoutPage';
import ComptePage from './components/ComptePage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>(products[0].id);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = (newPage: Page, productId?: string) => {
    if (productId) setSelectedProductId(productId);
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product, size?: number, color?: string) => {
    const sz = size ?? product.sizes[Math.floor(product.sizes.length / 2)] ?? 42;
    const col = color ?? product.colors[0]?.name ?? 'Standard';
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.size === sz && i.color === col
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.size === sz && i.color === col
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, size: sz, color: col, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId: string, size: number) => {
    setCart((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.size === size))
    );
  };

  const changeQuantity = (productId: string, size: number, qty: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.size === size ? { ...i, quantity: qty } : i
      )
    );
  };

  const clearCart = () => setCart([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <HomePage
            navigate={navigate}
            onAddToCart={(p, size, color) => addToCart(p, size, color)}
          />
        );
      case 'boutique':
      case 'collection':
        return (
          <CollectionPage
            navigate={navigate}
            onAddToCart={(p, size, color) => addToCart(p, size, color)}
          />
        );
      case 'product':
        return (
          <ProductPage
            productId={selectedProductId}
            navigate={navigate}
            onAddToCart={(p, size, color) => addToCart(p, size, color)}
          />
        );
      case 'artisans':
        return <ArtisansPage />;
      case 'histoire':
        return <HistoirePage navigate={navigate} />;
      case 'blog':
        return <BlogPage navigate={navigate} />;
      case 'checkout':
        return (
          <CheckoutPage
            cart={cart}
            navigate={navigate}
            onOrderComplete={clearCart}
          />
        );
      case 'compte':
        return <ComptePage navigate={navigate} />;
      case 'contact':
      case 'livraison':
        return <ContactPage />;
      default:
        return (
          <HomePage
            navigate={navigate}
            onAddToCart={(p, size, color) => addToCart(p, size, color)}
          />
        );
    }
  };

  return (
    <div className="min-h-full flex flex-col bg-[#FAF6F0] text-[#1A1009] selection:bg-[#D4A359] selection:text-[#1A1009]">
      <Nav
        currentPage={page}
        navigate={navigate}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <div className="flex-1">
        {renderPage()}
      </div>

      <Footer navigate={navigate} />

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onQuantityChange={changeQuantity}
        onCheckout={() => navigate('checkout')}
      />
    </div>
  );
}
