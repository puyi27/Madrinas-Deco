const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public', 'images');
const portfolioDir = path.join(__dirname, 'public', 'portfolio');
const dataDir = path.join(__dirname, 'src', 'data');

const categories = ['mesas-dulces', 'globos', 'eventos'];

// Create folders
[...categories, 'videos'].forEach(folder => {
  const fullPath = path.join(portfolioDir, folder);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Read all files
const files = fs.readdirSync(publicDir);

const portfolioData = [];
const videoData = [];

let catIndex = 0;

files.forEach(file => {
  if (file.startsWith('WhatsApp')) {
    const oldPath = path.join(publicDir, file);
    const ext = path.extname(file).toLowerCase();
    
    // Create a clean filename
    const cleanName = `madrinas-${Date.now()}-${Math.random().toString(36).substring(7)}${ext}`;

    if (ext === '.mp4') {
      const newPath = path.join(portfolioDir, 'videos', cleanName);
      fs.copyFileSync(oldPath, newPath);
      videoData.push({
        src: `/portfolio/videos/${cleanName}`
      });
    } else if (ext === '.jpeg' || ext === '.jpg' || ext === '.png') {
      const category = categories[catIndex % categories.length];
      const newPath = path.join(portfolioDir, category, cleanName);
      fs.copyFileSync(oldPath, newPath);
      portfolioData.push({
        src: `/portfolio/${category}/${cleanName}`,
        category: category
      });
      catIndex++;
    }
  }
});

fs.writeFileSync(path.join(dataDir, 'portfolio.json'), JSON.stringify(portfolioData, null, 2));
fs.writeFileSync(path.join(dataDir, 'videos.json'), JSON.stringify(videoData, null, 2));

console.log('Organización completada.');
