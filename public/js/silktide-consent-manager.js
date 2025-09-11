// Cookie Consent Manager
window.silktideCookieBannerManager = (function() {
  let config = {};
  let consentData = {};
  
  // Default configuration
  const defaultConfig = {
    background: {
      showBackground: true
    },
    cookieIcon: {
      position: "bottomLeft"
    },
    cookieTypes: [],
    text: {
      banner: {
        description: "We use cookies to enhance your experience.",
        acceptAllButtonText: "Accept all",
        rejectNonEssentialButtonText: "Reject non-essential",
        preferencesButtonText: "Preferences"
      },
      preferences: {
        title: "Cookie Preferences",
        description: "Manage your cookie preferences."
      }
    },
    position: {
      banner: "bottomLeft"
    }
  };

  function init() {
    // Load existing consent
    loadConsent();
    
    // Create banner HTML
    createBannerHTML();
    
    // Show banner if no consent given
    if (!hasConsent()) {
      showBanner();
    } else {
      showCookieIcon();
      applyConsent();
    }
  }

  function updateCookieBannerConfig(newConfig) {
    config = { ...defaultConfig, ...newConfig };
    init();
  }

  function createBannerHTML() {
    // Remove existing elements
    const existingBanner = document.getElementById('cookie-consent-banner');
    const existingIcon = document.getElementById('cookie-icon');
    const existingModal = document.getElementById('cookie-preferences-modal');
    
    if (existingBanner) existingBanner.remove();
    if (existingIcon) existingIcon.remove();
    if (existingModal) existingModal.remove();

    // Create banner
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.className = 'cookie-consent-banner hidden';
    banner.innerHTML = `
      <h3>🍪 Cookie Settings</h3>
      <div>${config.text.banner.description}</div>
      <div class="cookie-consent-buttons">
        <button class="cookie-consent-button accept-all" onclick="silktideCookieBannerManager.acceptAll()">
          ${config.text.banner.acceptAllButtonText}
        </button>
        <button class="cookie-consent-button reject" onclick="silktideCookieBannerManager.rejectNonEssential()">
          ${config.text.banner.rejectNonEssentialButtonText}
        </button>
        <button class="cookie-consent-button preferences" onclick="silktideCookieBannerManager.showPreferences()">
          ${config.text.banner.preferencesButtonText}
        </button>
      </div>
    `;

    // Create cookie icon
    const icon = document.createElement('div');
    icon.id = 'cookie-icon';
    icon.className = 'cookie-icon hidden';
    icon.onclick = () => showPreferences();
    icon.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12C21,11.5 20.96,11 20.87,10.5C20.6,10 20,10 20,10.5A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.18,4 12.35,4 12.53,4.05C13,4.12 13,3.5 12.5,3.5C12.33,3.5 12.17,3.5 12,3M15,6A1,1 0 0,0 14,7A1,1 0 0,0 15,8A1,1 0 0,0 16,7A1,1 0 0,0 15,6M17,10A1,1 0 0,0 16,11A1,1 0 0,0 17,12A1,1 0 0,0 18,11A1,1 0 0,0 17,10M19,14A1,1 0 0,0 18,15A1,1 0 0,0 19,16A1,1 0 0,0 20,15A1,1 0 0,0 19,14Z"/>
      </svg>
    `;

    // Create preferences modal
    const modal = document.createElement('div');
    modal.id = 'cookie-preferences-modal';
    modal.className = 'cookie-preferences-modal hidden';
    modal.innerHTML = createPreferencesHTML();

    // Add to page
    document.body.appendChild(banner);
    document.body.appendChild(icon);
    document.body.appendChild(modal);
  }

  function createPreferencesHTML() {
    let cookieTypesHTML = '';
    
    config.cookieTypes.forEach(type => {
      const isRequired = type.required || false;
      const isActive = consentData[type.id] !== false;
      
      cookieTypesHTML += `
        <div class="cookie-type">
          <div class="cookie-type-header">
            <h3>${type.name}</h3>
            <div class="cookie-toggle ${isActive ? 'active' : ''} ${isRequired ? 'disabled' : ''}" 
                 onclick="${isRequired ? '' : `silktideCookieBannerManager.toggleCookieType('${type.id}')`}">
              <div class="cookie-toggle-slider"></div>
            </div>
          </div>
          <p>${type.description}</p>
        </div>
      `;
    });

    return `
      <div class="cookie-preferences-content">
        <h2>${config.text.preferences.title}</h2>
        <p>${config.text.preferences.description}</p>
        ${cookieTypesHTML}
        <div class="preferences-buttons">
          <button class="cookie-consent-button reject" onclick="silktideCookieBannerManager.closePreferences()">
            Cancel
          </button>
          <button class="cookie-consent-button accept-all" onclick="silktideCookieBannerManager.savePreferences()">
            Save Preferences
          </button>
        </div>
      </div>
    `;
  }

  function showBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) banner.classList.remove('hidden');
  }

  function hideBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) banner.classList.add('hidden');
  }

  function showCookieIcon() {
    const icon = document.getElementById('cookie-icon');
    if (icon) icon.classList.remove('hidden');
  }

  function showPreferences() {
    const modal = document.getElementById('cookie-preferences-modal');
    if (modal) {
      // Refresh the modal content
      modal.innerHTML = createPreferencesHTML();
      modal.classList.remove('hidden');
    }
  }

  function closePreferences() {
    const modal = document.getElementById('cookie-preferences-modal');
    if (modal) modal.classList.add('hidden');
  }

  function acceptAll() {
    config.cookieTypes.forEach(type => {
      consentData[type.id] = true;
      if (type.onAccept) type.onAccept();
    });
    saveConsent();
    hideBanner();
    showCookieIcon();
  }

  function rejectNonEssential() {
    config.cookieTypes.forEach(type => {
      if (type.required) {
        consentData[type.id] = true;
        if (type.onAccept) type.onAccept();
      } else {
        consentData[type.id] = false;
        if (type.onReject) type.onReject();
      }
    });
    saveConsent();
    hideBanner();
    showCookieIcon();
  }

  function toggleCookieType(typeId) {
    const type = config.cookieTypes.find(t => t.id === typeId);
    if (type && !type.required) {
      consentData[typeId] = !consentData[typeId];
      
      // Update toggle UI
      const toggle = document.querySelector(`[onclick*="${typeId}"]`);
      if (toggle) {
        if (consentData[typeId]) {
          toggle.classList.add('active');
        } else {
          toggle.classList.remove('active');
        }
      }
    }
  }

  function savePreferences() {
    config.cookieTypes.forEach(type => {
      if (consentData[type.id]) {
        if (type.onAccept) type.onAccept();
      } else {
        if (type.onReject) type.onReject();
      }
    });
    saveConsent();
    closePreferences();
    hideBanner();
    showCookieIcon();
  }

  function saveConsent() {
    localStorage.setItem('cookie-consent', JSON.stringify({
      timestamp: Date.now(),
      consent: consentData
    }));
    applyConsent();
  }

  function loadConsent() {
    const saved = localStorage.getItem('cookie-consent');
    if (saved) {
      const data = JSON.parse(saved);
      consentData = data.consent || {};
    } else {
      // Set defaults
      config.cookieTypes.forEach(type => {
        consentData[type.id] = type.defaultValue !== undefined ? type.defaultValue : type.required || false;
      });
    }
  }

  function hasConsent() {
    const saved = localStorage.getItem('cookie-consent');
    return !!saved;
  }

  function applyConsent() {
    // Apply consent decisions
    config.cookieTypes.forEach(type => {
      if (consentData[type.id] && type.onAccept) {
        type.onAccept();
      } else if (!consentData[type.id] && type.onReject) {
        type.onReject();
      }
    });
  }

  // Public API
  return {
    updateCookieBannerConfig,
    acceptAll,
    rejectNonEssential,
    showPreferences,
    closePreferences,
    toggleCookieType,
    savePreferences
  };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Will be initialized when config is set
  });
}
