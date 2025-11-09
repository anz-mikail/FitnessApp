import usePWAInstall from './usePWAInstall';
import './App.css'


function App() {
    const { installPrompt, handleInstallClick } = usePWAInstall();
    return (
        <div>
            {installPrompt && (
                <button onClick={handleInstallClick}>
                    Установить приложение
                </button>
            )}
            <h1>Мое PWA приложение test22</h1>
        </div>
    )
}


export default App
