import sharp from 'sharp';
import path from 'path';

const userUploadsDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\5af8fe5a-1020-44c9-b70a-23f878b3e970\\.user_uploaded';
const publicDir = 'c:\\Users\\hp\\Downloads\\Site web époustouflant\\public\\images';
const srcAssetsDir = 'c:\\Users\\hp\\Downloads\\Site web époustouflant\\src\\assets\\images';

const newImages = [
  { src: 'media_1788623465323.png', dest: 'sandale_bebe_fleurs_crochet.png' },
  { src: 'media_1788623491052.png', dest: 'sandale_bebe_crochet_croise.png' },
  { src: 'media_1788623595182.png', dest: 'sandale_enfant_cuir_noir.png' },
  { src: 'media_1788623642958.png', dest: 'sandale_enfant_tressage_blanc.png' },
];

async function processKidsImages() {
  for (const item of newImages) {
    const inputPath = path.join(userUploadsDir, item.src);
    const publicPath = path.join(publicDir, item.dest);
    const srcPath = path.join(srcAssetsDir, item.dest);

    console.log(`Processing ${item.src} -> ${item.dest}...`);
    
    await sharp(inputPath)
      .png({ quality: 95 })
      .toFile(publicPath);

    await sharp(inputPath)
      .png({ quality: 95 })
      .toFile(srcPath);
      
    console.log(`Saved ${item.dest} in public and src/assets`);
  }
}

processKidsImages().catch(console.error);
