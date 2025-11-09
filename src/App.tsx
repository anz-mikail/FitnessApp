
import usePWAInstall from './usePWAInstall'; // Путь к созданному хуку
import './App.css'


function App() {
    const { installPrompt, handleInstallClick } = usePWAInstall();
  return (
      <>
          <h1>FitnessApp</h1>
          <div>
              <h1>Мое PWA приложение</h1>
              {/* Отображаем кнопку/ссылку только если установка доступна */}
              {installPrompt && (
                  <button onClick={handleInstallClick} style={{
                      padding: '10px 20px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      // Стилизуйте как ссылку, если хотите
                      background: 'none',
                      border: 'none',
                      color: 'blue',
                      textDecoration: 'underline'
                  }}>
                      Установить приложение
                  </button>
              )}
              {/* ... остальная часть вашего приложения ... */}
          </div>
      </>
  )
}

export default App
