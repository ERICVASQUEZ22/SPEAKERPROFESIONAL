import React from 'react'

export default function OratoriaPage() {
  return (
    <div>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#f0f0f0'
      }}>
        <h1>Oratoria Pro</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="30" />
          </a>
          <a href="https://youtube.com/@tuusuario" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="30" />
          </a>
          <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="30" />
          </a>
        </div>
      </header>
      <main style={{ padding: '2rem' }}>
        <h2>Bienvenido a tu nueva página de oratoria</h2>
        <p>Ofrecemos servicios, cursos y charlas para potenciar tu voz.</p>
      </main>
    </div>
  )
}

