// Multi-Language Translation Script (Hindi, Marathi, Gujarati, etc.)

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'hi,mr,gu,bn,te,ta,pa,en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}

// Load Google Translate Engine Asynchronously
(function() {
  const gtScript = document.createElement('script');
  gtScript.type = 'text/javascript';
  gtScript.async = true;
  gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(gtScript);

  // Clean UI: Sleek styling to match header buttons
  const style = document.createElement('style');
  style.innerHTML = `
    .goog-te-banner-frame.skiptranslate { display: none !important; }
    body { top: 0px !important; }
    .goog-te-gadget { 
      font-size: 0px !important; 
      display: flex !important;
      align-items: center !important;
    }
    .goog-te-gadget span { display: none !important; }
    .goog-te-gadget .goog-te-combo {
      margin: 0 !important;
      padding: 6px 10px !important;
      border: 1px solid #d1d5db !important;
      border-radius: 8px !important;
      background-color: #ffffff !important;
      color: #1f2937 !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      outline: none !important;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05) !important;
      height: 32px !important;
    }
  `;
  document.head.appendChild(style);
})();
