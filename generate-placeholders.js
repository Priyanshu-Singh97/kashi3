/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder
function createPlaceholder(width, height, text, color) {
    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;
}

const images = [
    { name: 'hero-kashi.jpg', text: 'Hero Kashi', color: '#8B4513' },
    { name: 'boat-ganges.jpg', text: 'Boat on Ganges', color: '#4682B4' },
    { name: 'ganga-aarti.jpg', text: 'Ganga Aarti', color: '#FF8C00' },
    { name: 'manikarnika-ghat.jpg', text: 'Manikarnika Ghat', color: '#A0522D' },
    { name: 'narrow-lanes.jpg', text: 'Narrow Lanes', color: '#8B7355' },
    { name: 'banarasi-saree.jpg', text: 'Banarasi Saree', color: '#DC143C' },
    { name: 'dev-deepawali.jpg', text: 'Dev Deepawali', color: '#FFD700' },
    { name: 'ramnagar-fort.jpg', text: 'Ramnagar Fort', color: '#CD853F' },
    { name: 'malaiyo.jpg', text: 'Malaiyo', color: '#F5DEB3' },
    { name: 'sarnath.jpg', text: 'Sarnath', color: '#DAA520' },
    { name: 'hidden-temple.jpg', text: 'Hidden Temple', color: '#8B4513' },
    { name: 'secret-ghat.jpg', text: 'Secret Ghat', color: '#5F9EA0' },
    { name: 'forgotten-alley.jpg', text: 'Forgotten Alley', color: '#696969' },
    { name: 'sadhu.jpg', text: 'Sadhu', color: '#FF6347' },
    { name: 'midnight-aarti.jpg', text: 'Midnight Aarti', color: '#191970' },
    { name: 'ancient-arch.jpg', text: 'Ancient Arch', color: '#A0522D' },
    { name: 'rituals.jpg', text: 'Rituals', color: '#FF8C00' },
    { name: 'weaving.jpg', text: 'Weaving', color: '#8B0000' },
    { name: 'local-food.jpg', text: 'Local Food', color: '#FF4500' },
    { name: 'guide-1.jpg', text: 'Guide 1', color: '#4682B4' },
    { name: 'guide-2.jpg', text: 'Guide 2', color: '#2E8B57' },
    { name: 'guide-3.jpg', text: 'Guide 3', color: '#8B4513' },
    { name: 'guide-4.jpg', text: 'Guide 4', color: '#483D8B' },
];

const imagesDir = path.join(__dirname, 'public', 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate placeholder images
images.forEach(({ name, text, color }) => {
    const svg = createPlaceholder(1200, 800, text, color);
    const filePath = path.join(imagesDir, name.replace('.jpg', '.svg'));
    fs.writeFileSync(filePath, svg);
    console.log(`Created: ${filePath}`);
});

console.log('All placeholder images created successfully!');
