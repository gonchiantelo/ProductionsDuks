export default function Sidebar() {
  return (
    <nav className="sidebar" id="sidebar">
    <div className="sidebar-section">
      <div className="sidebar-label">Fundamentos</div>
      <a className="sidebar-item active" data-tab="glosario">
        <span className="si-icon">📖</span> Glosario
      </a>
      <a className="sidebar-item" data-tab="mentalidad">
        <span className="si-icon">🧠</span> Mentalidad
      </a>
      <a className="sidebar-item" data-tab="diagnostico">
        <span className="si-icon">🔧</span> Diagnóstico
        <span className="si-badge">12</span>
      </a>
    </div>
    <div className="sidebar-section">
      <div className="sidebar-label">Cadena de señal</div>
      <a className="sidebar-item" data-tab="cadena">
        <span className="si-icon">🔗</span> Vista general
      </a>
    </div>
    <div className="sidebar-section">
      <div className="sidebar-label">Canales</div>
      <a className="sidebar-item" data-tab="vocal">
        <span className="si-icon">🎤</span> Vocal
      </a>
      <a className="sidebar-item" data-tab="beat">
        <span className="si-icon">🎵</span> Beat
      </a>
      <a className="sidebar-item" data-tab="master">
        <span className="si-icon">🎚️</span> Master
      </a>
    </div>
    <div className="sidebar-section">
      <div className="sidebar-label">Por Género</div>
      <a className="sidebar-item" data-tab="generos">
        <span className="si-icon">🎸</span> General
      </a>
      <a className="sidebar-item" data-tab="generos" data-genre="pop">
        <span className="si-icon">🎵</span> Pop
      </a>
      <a className="sidebar-item" data-tab="generos" data-genre="trap">
        <span className="si-icon">🔊</span> Trap
      </a>
      <a className="sidebar-item" data-tab="generos" data-genre="reggaeton">
        <span className="si-icon">🎶</span> Reggaeton
      </a>
      <a className="sidebar-item" data-tab="generos" data-genre="salsa">
        <span className="si-icon">🎺</span> Salsa
      </a>
    </div>
  </nav>
  );
}
