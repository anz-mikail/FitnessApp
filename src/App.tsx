import {useState} from "react";
import usePWAInstall from './usePWAInstall';
import './App.css'


function App() {
    const { installPrompt, handleInstallClick } = usePWAInstall();
    const [counter, setCounter] = useState<number>(0);

    const clickUp = () => {setCounter(counter+1)};
    const clickDown = () => {setCounter(counter-1)};

    return (
        <div>
            {installPrompt && (
                <button onClick={handleInstallClick}>
                    Установить приложение
                </button>
            )}
            <h1>PWA приложение test44</h1>
            <button onClick={clickUp}>+</button>
            {counter}
            <button onClick={clickDown}>-</button>
        </div>
    );
}


export default App;
