import usePWAInstall from './usePWAInstall';
import './App.css'


function App() {
    const { installPrompt, handleInstallClick } = usePWAInstall();
    return (
        <div>
            <h1>Мое PWA приложение test1</h1>
            {installPrompt && (
                <button onClick={handleInstallClick}>
                    Установить приложение
                </button>
            )}
        </div>
    )
}


export default App
