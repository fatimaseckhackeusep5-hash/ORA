import sharp from 'sharp';
import path from 'path';

const userUploadsDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\5af8fe5a-1020-44c9-b70a-23f878b3e970\\.user_uploaded';
const outputDir = 'c:\\Users\\hp\\Downloads\\Site web époustouflant\\public\\images';

const newImages = [
  { src: 'media_1788622392547.png', dest: 'sandale_emmarh_prestige.jpg' },
  { src: 'media_1788622419099.png', dest: 'mule_daim_glands.jpg' },
  { src: 'media_1788622445349.png', dest: 'sandale_double_bride_noir.jpg' },
  { src: 'media_1788622475973.png', dest: 'sandale_minimaliste_vamp.jpg' },
];

async function processNewImages() {
  for (const item of newImages) {
    const inputPath = path.join(userUploadsDir, item.src);
    const outputPath = path.join(outputDir, item.dest);
    console.log(`Processing ${item.src} -> ${item.dest}...`);
    
    await sharp(inputPath)
      .jpeg({ quality: 95 })
      .toFile(outputPath);
      
    console.log(`Successfully saved ${outputPath}`);
  }
}

processNewImages().catch(console.error);
