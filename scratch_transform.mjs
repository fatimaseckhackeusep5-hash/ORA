import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const userUploadsDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\5af8fe5a-1020-44c9-b70a-23f878b3e970\\.user_uploaded';
const outputDir = 'c:\\Users\\hp\\Downloads\\Site web époustouflant\\public\\images';

const images = [
  { file: 'media_1788622156425.png', name: 'sandale_femme_indigo.jpg', title: 'Sandale Denim Indigo' },
  { file: 'media_1788622176267.png', name: 'sandale_femme_ebene.jpg', title: 'Mule Lin & Ébène' },
  { file: 'media_1788622195435.jpg', name: 'sandale_femme_mandingue.jpg', title: 'Sandale Graphique Mandingue' },
  { file: 'media_1788622233082.png', name: 'sandale_femme_royale.jpg', title: 'Sandale Royale Bicolore' },
];

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [h * 360, s, l];
}

function hslToRgb(h, s, l) {
  let r, g, b;
  h /= 360;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

async function processImage(imgObj) {
  const inputPath = path.join(userUploadsDir, imgObj.file);
  const outputPath = path.join(outputDir, imgObj.name);

  console.log(`Processing ${imgObj.file} -> ${imgObj.name}...`);

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const len = data.length;

  for (let i = 0; i < len; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const [h, s, l] = rgbToHsl(r, g, b);

    // Keep white nail polish crisp and white
    const isWhiteNail = l > 0.74 && s < 0.28 && Math.abs(r - g) < 28 && Math.abs(g - b) < 28;
    
    // Avoid non-skin elements (denim blue, grey background tile, neutral darks)
    const isBlue = (h >= 180 && h <= 265 && s > 0.15) || (b > r + 15 && b > g);
    const isBlackStrap = l < 0.15 && s < 0.3;
    const isNeutralGrey = s < 0.10 && Math.abs(r - g) < 10 && Math.abs(g - b) < 10 && (l > 0.35 && l < 0.75);

    // Skin detection in HSL and RGB
    const isSkinHue = (h >= 10 && h <= 48) || (h >= 350 && h <= 360);
    const isSkinRGB = (r > g + 10) && (g > b - 10);
    const isSkinLightness = l > 0.30 && l < 0.94;

    if (!isWhiteNail && !isBlue && !isBlackStrap && !isNeutralGrey && isSkinHue && isSkinRGB && isSkinLightness) {
      // Calculate depth from original lighting
      const skinDepth = Math.max(0, Math.min(1, (l - 0.30) / 0.60));
      
      // Target rich melanin African skin tone (deep warm bronze / mahogany)
      const newL = 0.18 + skinDepth * 0.28;
      const newH = 24 + (h - 25) * 0.2;
      const newS = Math.min(0.60, Math.max(0.36, s * 0.85 + 0.15));

      const [newR, newG, newB] = hslToRgb(newH, newS, newL);

      data[i] = newR;
      data[i + 1] = newG;
      data[i + 2] = newB;
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    },
  })
  .jpeg({ quality: 95 })
  .toFile(outputPath);

  console.log(`Saved ${outputPath}`);
}

async function run() {
  for (const img of images) {
    await processImage(img);
  }
  console.log('All images processed successfully!');
}

run().catch(console.error);
