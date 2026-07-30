import Topbar from './Topbar';
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
