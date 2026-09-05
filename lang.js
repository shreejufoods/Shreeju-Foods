// Multi-Language Translation Script (Hindi, Marathi, Gujarati, etc.)

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'hi,mr,gu,bn,te,ta,pa,en', // Hindi, Marathi, Gujarati, Bengali, Telugu, Tamil, Punjabi, English
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

  // Clean UI: Hide Google's top banner if it appears
  const style = document.createElement('style');
  style.innerHTML = `
    .goog-te-banner-frame.skiptranslate { display: none !important; }
    body { top: 0px !important; }
    #google_translate_element select {
      background-color: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 4px 8px;
      font-size: 11px;
      font-weight: 600;
      color: #334155;
      outline: none;
    }
  `;
  document.head.appendChild(style);
})();
