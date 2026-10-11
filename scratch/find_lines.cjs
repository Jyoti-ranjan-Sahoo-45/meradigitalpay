const fs = require('fs');
const css = fs.readFileSync('src/index.css', 'utf8');
const lines = css.split(/\r?\n/);
lines.forEach((l, i) => {
  if (l.includes('.app-wraper') || l.includes('download-phone-mockup') || l.includes('video-cards-carousel-wrap')) {
    console.log(`L${i+1}: ${l.substring(0, 120)}`);
  }
});
