const fs = require('fs');
const path = require('path');

function walk(dir, extList) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        results = results.concat(walk(fullPath, extList));
      }
    } else {
      if (extList.some(ext => file.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = walk('src', ['.css', '.jsx']);
console.log(`Found ${files.length} files to check.`);

const findings = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    const lineNum = index + 1;
    // Check for hardcoded large widths
    const widthMatch = line.match(/(?:min-width|width)\s*:\s*(\d+)px/i);
    if (widthMatch) {
      const val = parseInt(widthMatch[1], 10);
      if (val >= 350 && !line.includes('max-width') && !line.includes('@media')) {
        findings.push({ file, lineNum, type: 'Large fixed width', text: line.trim() });
      }
    }

    // Check for inline style fixed width in JSX
    const inlineWidth = line.match(/style=\{\{[^}]*width:\s*['"]?(\d+)px['"]?/i);
    if (inlineWidth) {
      const val = parseInt(inlineWidth[1], 10);
      if (val >= 350) {
        findings.push({ file, lineNum, type: 'Large inline width', text: line.trim() });
      }
    }

    // Check for grid with fixed columns
    if (/grid-template-columns:\s*repeat\(\s*[3-9]/.test(line) && !line.includes('auto-fit') && !line.includes('auto-fill')) {
      findings.push({ file, lineNum, type: 'Fixed grid columns (3+)', text: line.trim() });
    }

    // Check for nowrap in flex containers
    if (/flex-wrap:\s*nowrap/i.test(line) || (/display:\s*flex/i.test(line) && line.includes('nowrap'))) {
      findings.push({ file, lineNum, type: 'Flex nowrap', text: line.trim() });
    }

    // Check for white-space: nowrap on large text/containers
    if (/white-space:\s*nowrap/i.test(line) && (line.includes('nav') || line.includes('menu') || line.includes('container') || line.includes('tabs') || line.includes('title'))) {
      findings.push({ file, lineNum, type: 'white-space: nowrap', text: line.trim() });
    }
  });
});

console.log(`Total potential defects/issues found: ${findings.length}`);
const summaryByType = {};
findings.forEach(f => {
  summaryByType[f.type] = (summaryByType[f.type] || 0) + 1;
});
console.log('Summary by type:', summaryByType);

// Group by file
const byFile = {};
findings.forEach(f => {
  if (!byFile[f.file]) byFile[f.file] = [];
  byFile[f.file].push(f);
});

Object.keys(byFile).forEach(f => {
  console.log(`\n=== ${f} (${byFile[f].length} issues) ===`);
  byFile[f].slice(0, 10).forEach(item => {
    console.log(`  L${item.lineNum} [${item.type}]: ${item.text}`);
  });
  if (byFile[f].length > 10) {
    console.log(`  ... and ${byFile[f].length - 10} more`);
  }
});
