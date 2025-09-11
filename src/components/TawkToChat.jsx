import { useEffect } from 'react';

function TawkToChat() {
  useEffect(() => {
    // Check if Tawk.to script is already loaded
    if (window.Tawk_API) {
      return;
    }

    // Load Tawk.to script
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/68c1663259c3c91924fec42e/1j4pneeal';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Store references globally
    window.Tawk_API = Tawk_API;
    window.Tawk_LoadStart = Tawk_LoadStart;

    // Cleanup function to remove the script when component unmounts
    return () => {
      // Hide the chat widget when leaving the contact page
      if (window.Tawk_API && window.Tawk_API.hideWidget) {
        window.Tawk_API.hideWidget();
      }
    };
  }, []);

  // Show the widget when component mounts (on contact page)
  useEffect(() => {
    const showWidget = () => {
      if (window.Tawk_API && window.Tawk_API.showWidget) {
        window.Tawk_API.showWidget();
      }
    };

    // If Tawk is already loaded, show immediately
    if (window.Tawk_API) {
      showWidget();
    } else {
      // Otherwise wait for it to load
      const checkTawk = setInterval(() => {
        if (window.Tawk_API) {
          showWidget();
          clearInterval(checkTawk);
        }
      }, 100);

      return () => clearInterval(checkTawk);
    }
  }, []);

  return null; // This component doesn't render anything visible
}

export default TawkToChat;
