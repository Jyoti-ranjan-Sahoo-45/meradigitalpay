    const fs = require('fs');

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const issues = [];

  lines.forEach((line, i) => {
    const l = line.trim();
    const lineNum = i + 1;
    // Hardcoded pixel widths >= 320px without max-width
    const mWidth = l.match(/(?:^|[^a-zA-Z-])(width|min-width)\s*:\s*(\d+)px/);
    if (mWidth) {
      const val = parseInt(mWidth[2], 10);
      if (val >= 350 && !l.includes('max-width') && !l.startsWith('@media')) {
        issues.push({ lineNum, type: 'Fixed Width >= 350px', text: l });
      }
    }

    // Grid columns repeat(N, ...) where N >= 3 without media query
    const mGrid = l.match(/grid-template-columns\s*:\s*repeat\(\s*([3-9]|\d{2,})/);
    if (mGrid) {
      issues.push({ lineNum, type: 'Fixed Grid Column Repeat >= 3', text: l });
    }

    // display: flex with flex-wrap: nowrap or white-space: nowrap in nav/bars
    if (l.includes('flex-wrap: nowrap') || l.includes('white-space: nowrap')) {
      issues.push({ lineNum, type: 'No-wrap element', text: l });
    }
  });

  return issues;
}

['src/index.css', 'src/meradigitalpay-theme.css', 'src/meradigitalpay-inline.css'].forEach(f => {
  if (fs.existsSync(f)) {
    const issues = analyzeFile(f);
    console.log(`\n========================================`);
    console.log(`File: ${f} (Total issues: ${issues.length})`);
    console.log(`========================================`);
    issues.slice(0, 30).forEach(iss => {
      console.log(`[L${iss.lineNum}] ${iss.type} -> ${iss.text}`);
    });
    if (issues.length > 30) {
      console.log(`... and ${issues.length - 30} more.`);
    }
  }
});
