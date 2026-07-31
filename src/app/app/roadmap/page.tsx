import React from 'react';

export default function RoadmapPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg0)', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--t1)', marginBottom: '10px' }}>
          🗺️ Bienvenido al Roadmap
        </h1>
        <p style={{ color: 'var(--vocal)', fontSize: '1.2rem', fontWeight: 600 }}>
          En construcción 🚧
        </p>
      </div>
    </div>
  );
}
