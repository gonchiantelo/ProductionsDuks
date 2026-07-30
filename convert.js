const fs = require('fs');

const html = fs.readFileSync('manual-mezcla-vocal-completo.html', 'utf8');

// 1. Extract CSS
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  const existingCss = fs.readFileSync('src/app/globals.css', 'utf8');
  fs.writeFileSync('src/app/globals.css', existingCss + '\n' + styleMatch[1]);
  console.log('CSS extracted');
}

// 2. Extract Topbar
const topbarMatch = html.match(/<div class="topbar">([\s\S]*?)<\/div>\s*<div class="sidebar-overlay/);
let topbarHtml = '<div class="topbar">' + topbarMatch[1] + '</div>';
topbarHtml = topbarHtml.replace(/class=/g, 'className=');
fs.writeFileSync('src/app/Topbar.tsx', `export default function Topbar() {\n  return (\n    ${topbarHtml}\n  );\n}\n`);

// 3. Extract Sidebar
const sidebarMatch = html.match(/<nav class="sidebar" id="sidebar">([\s\S]*?)<\/nav>/);
let sidebarHtml = '<nav className="sidebar" id="sidebar">' + sidebarMatch[1] + '</nav>';
sidebarHtml = sidebarHtml.replace(/class=/g, 'className=');
fs.writeFileSync('src/app/Sidebar.tsx', `export default function Sidebar() {\n  return (\n    ${sidebarHtml}\n  );\n}\n`);

// 4. Extract Main Content
// Because Main Content is huge and has inline styles, we use dangerouslySetInnerHTML
const mainMatch = html.match(/<main class="main">([\s\S]*?)<\/main>/);
const mainHtml = mainMatch[1];
fs.writeFileSync('src/app/MainContent.tsx', `export default function MainContent() {
  return (
    <main className="main" dangerouslySetInnerHTML={{ __html: \`${mainHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
  );
}
`);

// 5. Update page.tsx
const pageTsx = `import Topbar from './Topbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="sidebar-overlay" id="sidebarOverlay"></div>
      <div className="layout">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}
`;
fs.writeFileSync('src/app/page.tsx', pageTsx);

console.log('Done!');
