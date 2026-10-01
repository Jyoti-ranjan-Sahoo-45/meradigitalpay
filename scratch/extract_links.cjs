const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const html = await fetchUrl('https://www.meradigitalpay.com/');
  fs.writeFileSync('scratch/official_index.html', html);

  const scriptTags = [...html.matchAll(/<script[^>]*src=["']([^"']+)["']/g)].map(m => m[1]);
  console.log('Scripts:', scriptTags);

  for (const src of scriptTags) {
    const fullUrl = src.startsWith('http') ? src : 'https://www.meradigitalpay.com' + src;
    console.log('Fetching:', fullUrl);
    const js = await fetchUrl(fullUrl);
    fs.writeFileSync('scratch/official_bundle.js', js);
    
    // Find all urls
    const matches = js.match(/https?:\/\/[a-zA-Z0-9_\-\.\/\?=&%#+@:~]+/g) || [];
    console.log('Total URLs found:', matches.length);
    const unique = [...new Set(matches)];
    console.log('--- ALL URLS ---');
    unique.forEach(u => console.log(u));
  }
}

main().catch(console.error);
