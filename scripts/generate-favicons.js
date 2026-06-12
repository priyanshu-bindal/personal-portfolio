const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2];
const publicDir = path.join(__dirname, '../public');
const appDir = path.join(__dirname, '../src/app');

async function generate() {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generate 16x16
  await sharp(inputPath).resize(16, 16).toFile(path.join(publicDir, 'favicon-16x16.png'));
  // Generate 32x32
  await sharp(inputPath).resize(32, 32).toFile(path.join(publicDir, 'favicon-32x32.png'));
  // Apple Touch Icon
  await sharp(inputPath).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  // Android Chrome 192
  await sharp(inputPath).resize(192, 192).toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  // Android Chrome 512
  await sharp(inputPath).resize(512, 512).toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  
  // favicon.ico (Next.js automatically uses icon.ico or favicon.ico in app dir)
  await sharp(inputPath).resize(32, 32).toFile(path.join(appDir, 'favicon.ico'));
  
  // opengraph-image.png (Next.js app router automatically uses this)
  await sharp(inputPath).resize(1200, 630, { fit: 'contain', background: { r: 5, g: 5, b: 5, alpha: 1 } }).toFile(path.join(appDir, 'opengraph-image.png'));

  // Create site.webmanifest
  const manifest = {
    "name": "Priyanshu Bindal",
    "short_name": "PB",
    "icons": [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#000000",
    "background_color": "#050505",
    "display": "standalone"
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 4));

  console.log("Assets generated successfully.");
}

generate().catch(console.error);
