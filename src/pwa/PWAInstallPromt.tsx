// components/PWAInstallPrompt.tsx

import { useEffect, useState } from 'react';

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any | null>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó instalar la PWA');
        } else {
          console.log('El usuario canceló la instalación de la PWA');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    deferredPrompt && (
      <div className="pwa-install-prompt fixed bottom-4 left-4 right-4 bg-white border border-gray-300 rounded-lg shadow-md px-4 py-3 flex justify-between items-center">
        <p className="text-sm">
          ¡Instala nuestra aplicación para una mejor experiencia!
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
          onClick={handleInstallClick}
        >
          Instalar
        </button>
      </div>
    )
  );
};

export default PWAInstallPrompt;
