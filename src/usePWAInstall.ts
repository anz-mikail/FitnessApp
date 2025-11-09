import { useState, useEffect, useRef } from 'react';


// Объявление типа для события beforeinstallprompt (для TypeScript)
interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>;
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed',
        platform: string
    }>;
    prompt(): Promise<void>;
}

const usePWAInstall = () => {
    const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const installPromptRef = useRef<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        const handler = (event: Event) => {
            // Предотвращаем автоматическое появление стандартного баннера
            event.preventDefault();
            // Сохраняем событие, чтобы использовать его позже
            setInstallPrompt(event as BeforeInstallPromptEvent);
            installPromptRef.current = event as BeforeInstallPromptEvent;
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstallClick = () => {
        const promptEvent = installPromptRef.current;
        if (!promptEvent) {
            return;
        }
        // Показываем диалог установки пользователю
        promptEvent.prompt();
        // Отслеживаем выбор пользователя
        promptEvent.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Пользователь принял приглашение на установку PWA');
            } else {
                console.log('Пользователь отклонил приглашение на установку PWA');
            }
            // Сбрасываем сохраненное событие после использования
            setInstallPrompt(null);
            installPromptRef.current = null;
        });
    };

    return { installPrompt, handleInstallClick };
};


export default usePWAInstall;