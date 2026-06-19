const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, 'public', 'portfolio');

const moves = {
  'eventos': [
    'eventos/madrinas-1781796412088-qon8i9.jpeg',
    'eventos/madrinas-1781796412134-lc5tdn.jpeg',
    'eventos/madrinas-1781796412169-fymt3e.jpeg',
    'globos/madrinas-1781796412084-irpqm6.jpeg',
    'globos/madrinas-1781796412096-1x8oz9.jpeg',
    'globos/madrinas-1781796412130-5jucvk.jpeg',
    'mesas-dulces/madrinas-1781796412125-n399lh.jpeg',
    'mesas-dulces/madrinas-1781796412197-0qq05.jpeg'
  ],
  'globos': [
    'eventos/madrinas-1781796412099-kawubm.jpeg',
    'globos/madrinas-1781796412166-lm6au.jpeg',
    'mesas-dulces/madrinas-1781796412080-5cawgj.jpeg',
    'mesas-dulces/madrinas-1781796412102-2a3w3.jpeg',
    'mesas-dulces/madrinas-1781796412114-za3cj.jpeg',
    'mesas-dulces/madrinas-1781796412163-wwzqt.jpeg',
    'mesas-dulces/madrinas-1781796412184-3ks3ob8.jpeg'
  ],
  'mesas-dulces': [
    'eventos/madrinas-1781796412110-1jiwy4.jpeg',
    'eventos/madrinas-1781796412121-8idb5m.jpeg',
    'eventos/madrinas-1781796412146-d0l7wp.jpeg',
    'eventos/madrinas-1781796412158-p63ca.jpeg',
    'eventos/madrinas-1781796412180-1kydk.jpeg',
    'eventos/madrinas-1781796412193-s0tke8.jpeg',
    'eventos/madrinas-1781796412203-35rfv.jpeg',
    'globos/madrinas-1781796412107-oh5ipe.jpeg',
    'globos/madrinas-1781796412117-eza8e.jpeg',
    'globos/madrinas-1781796412142-8dfetg.jpeg',
    'globos/madrinas-1781796412153-ykcssi.jpeg',
    'globos/madrinas-1781796412177-4s4z1g.jpeg',
    'globos/madrinas-1781796412188-gwhiusi.jpeg',
    'globos/madrinas-1781796412200-oabg0fh.jpeg',
    'mesas-dulces/madrinas-1781796412092-ufnyu.jpeg',
    'mesas-dulces/madrinas-1781796412137-e48ddr.jpeg',
    'mesas-dulces/madrinas-1781796412150-eg1clq.jpeg',
    'mesas-dulces/madrinas-1781796412173-gvlpdf.jpeg'
  ]
};

// First, move everything to a temp folder to avoid collisions
const tempDir = path.join(__dirname, 'public', 'portfolio_temp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

const newMapping = [];

Object.entries(moves).forEach(([targetFolder, files]) => {
  files.forEach(file => {
    const srcPath = path.join(portfolioDir, file);
    const fileName = path.basename(file);
    const tempPath = path.join(tempDir, fileName);
    if (fs.existsSync(srcPath)) {
      fs.renameSync(srcPath, tempPath);
      newMapping.push({
        targetFolder,
        fileName,
        tempPath
      });
    }
  });
});

// Now move from temp to final destination and build JSON
const portfolioJson = {
  categories: [
    {
      id: "eventos",
      title: "Eventos",
      images: []
    },
    {
      id: "mesas-dulces",
      title: "Mesas Dulces",
      images: []
    },
    {
      id: "globos",
      title: "Decoración con Globos",
      images: []
    }
  ]
};

newMapping.forEach(({targetFolder, fileName, tempPath}) => {
  const destFolder = path.join(portfolioDir, targetFolder);
  if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, {recursive: true});
  const finalPath = path.join(destFolder, fileName);
  fs.renameSync(tempPath, finalPath);

  const cat = portfolioJson.categories.find(c => c.id === targetFolder);
  cat.images.push({
    src: `/portfolio/${targetFolder}/${fileName}`,
    alt: `Madrinas Decoración - ${targetFolder}`
  });
});

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'portfolio.json'), JSON.stringify(portfolioJson, null, 2));

console.log('Successfully reorganized files and updated portfolio.json');
fs.rmdirSync(tempDir);
