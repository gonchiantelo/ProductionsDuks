export default function Topbar() {
  return (
    <div className="topbar">
  <button className="hamburger" id="hamburgerBtn" aria-label="Menú">
    <span></span><span></span><span></span>
  </button>
  <div className="topbar-logo">🎛️ <em>Manual</em> Producción Vocal</div>
  <div className="topbar-genre">
    <button className="gbtn on" data-g="general">🎸 General</button>
    <button className="gbtn" data-g="pop">🎵 Pop</button>
    <button className="gbtn" data-g="trap">🔊 Trap</button>
    <button className="gbtn" data-g="reggaeton">🎶 Reggaeton</button>
    <button className="gbtn" data-g="salsa">🎺 Salsa</button>
  </div>
</div>
  );
}
