const fs = require('fs');
['src/index.css', 'src/meradigitalpay-theme.css', 'src/meradigitalpay-inline.css'].forEach(file => {
  const css = fs.readFileSync(file, 'utf8');
  const lines = css.split(/\r?\n/);
  lines.forEach((l, i) => {
    if (l.includes('app-wraper')) {
      console.log(`${file}:L${i+1}: ${l.substring(0, 120)}`);
    }
  });
});
