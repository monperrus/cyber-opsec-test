/**
 * Internationalization support for Cyber Opsec Assessment
 */

// Available languages
const availableLanguages = {
  'en': 'English',
  'fr': 'Français',
  'es': 'Español',
  'de': 'Deutsch',
  'zh': '中文',
  'ru': 'Русский'
};

// Current language
let currentLanguage = 'en';

// Translation dictionaries
const translations = {
  // English (default language - keys match the actual text in the HTML)
  'en': {
    'pageTitle': 'Cyber Opsec Assessment',
    'currentScore': 'Current Score',
    'questions': 'questions',
    'loadingData': 'Loading assessment data...',
    'securityScore': 'Your Security Score',
    'restartButton': 'Take Assessment Again',
    'iDo': 'I Do',
    'iDoSometimes': 'I Do Sometimes',
    'iDont': 'I Don\'t',
    'iDontUnderstand': 'I Don\'t Understand',
    'youDoThis': '✓ You do this',
    'youDoThisSometimes': '~ You do this sometimes',
    'youDontDoThis': '✗ You don\'t do this',
    'youDontUnderstand': '? You don\'t understand this question',
    'excellent': 'Excellent! Your security practices are top-notch.',
    'goodJob': 'Good job! You have solid security habits, but there\'s room for improvement.',
    'onTrack': 'You\'re on the right track, but should consider adopting more security practices.',
    'needsImprovement': 'Your security practices need significant improvement. Consider implementing more of the suggested practices.',
    'didntUnderstand': 'You didn\'t understand {0} question{s}.',
    'securityPractices': '{0} Security Practices',
    'selectLanguage': 'Select Language',
    'loadingLanguageData': 'Loading language-specific assessment data...',
    'languageDataNotFound': 'Language-specific data not found, using default data.',
    'essential': 'Essential',
    'serious': 'Serious',
    'paranoid': 'Paranoid',
    'passwordManagement': 'Password Management',
    'deviceSecurity': 'Device Security',
    'emailSecurity': 'Email Security',
    'generalSecurityPractices': 'General Security Practices',
    'networkSecurity': 'Network Security',
    'browserSecurity': 'Browser Security',
    'developerSecurity': 'Developer Security',
    'advancedDeviceSecurity': 'Advanced Device Security',
    'operationalSecurity': 'Operational Security',
    'mobileDeviceSecurity': 'Mobile Device Security',
    'physicalSecurity': 'Physical Security'
  },
  
  // French translations
  'fr': {
    'pageTitle': 'Évaluation de la Cybersécurité',
    'currentScore': 'Score Actuel',
    'questions': 'questions',
    'loadingData': 'Chargement des données d\'évaluation...',
    'securityScore': 'Votre Score de Sécurité',
    'restartButton': 'Refaire l\'Évaluation',
    'iDo': 'Je le fais',
    'iDoSometimes': 'Je le fais parfois',
    'iDont': 'Je ne le fais pas',
    'iDontUnderstand': 'Je ne comprends pas',
    'youDoThis': '✓ Vous le faites',
    'youDoThisSometimes': '~ Vous le faites parfois',
    'youDontDoThis': '✗ Vous ne le faites pas',
    'youDontUnderstand': '? Vous ne comprenez pas cette question',
    'excellent': 'Excellent ! Vos pratiques de sécurité sont exemplaires.',
    'goodJob': 'Bon travail ! Vos habitudes de sécurité sont solides, mais il y a place à l\'amélioration.',
    'onTrack': 'Vous êtes sur la bonne voie, mais vous devriez adopter davantage de pratiques de sécurité.',
    'needsImprovement': 'Vos pratiques de sécurité nécessitent une amélioration significative. Envisagez de mettre en œuvre plus de pratiques suggérées.',
    'didntUnderstand': 'Vous n\'avez pas compris {0} question{s}.',
    'securityPractices': 'Pratiques de Sécurité {0}',
    'selectLanguage': 'Sélectionner la Langue',
    'loadingLanguageData': 'Chargement des données d\'évaluation spécifiques à la langue...',
    'languageDataNotFound': 'Données spécifiques à la langue non trouvées, utilisation des données par défaut.',
    'essential': 'Essentiel',
    'serious': 'Sérieux',
    'paranoid': 'Paranoïaque',
    'passwordManagement': 'Gestion des Mots de Passe',
    'deviceSecurity': 'Sécurité des Appareils',
    'emailSecurity': 'Sécurité des Emails',
    'generalSecurityPractices': 'Pratiques Générales de Sécurité',
    'networkSecurity': 'Sécurité des Réseaux',
    'browserSecurity': 'Sécurité du Navigateur',
    'developerSecurity': 'Sécurité du Développeur',
    'advancedDeviceSecurity': 'Sécurité Avancée des Appareils',
    'operationalSecurity': 'Sécurité Opérationnelle',
    'mobileDeviceSecurity': 'Sécurité des Appareils Mobiles',
    'physicalSecurity': 'Sécurité Physique'
  },
  
  // Spanish translations
  'es': {
    'pageTitle': 'Evaluación de Seguridad Cibernética',
    'currentScore': 'Puntuación Actual',
    'questions': 'preguntas',
    'loadingData': 'Cargando datos de evaluación...',
    'securityScore': 'Tu Puntuación de Seguridad',
    'restartButton': 'Realizar la Evaluación de Nuevo',
    'iDo': 'Lo hago',
    'iDoSometimes': 'Lo hago a veces',
    'iDont': 'No lo hago',
    'iDontUnderstand': 'No lo entiendo',
    'youDoThis': '✓ Lo haces',
    'youDoThisSometimes': '~ Lo haces a veces',
    'youDontDoThis': '✗ No lo haces',
    'youDontUnderstand': '? No entiendes esta pregunta',
    'excellent': '¡Excelente! Tus prácticas de seguridad son de primera categoría.',
    'goodJob': '¡Buen trabajo! Tienes buenos hábitos de seguridad, pero hay margen de mejora.',
    'onTrack': 'Estás en el camino correcto, pero deberías considerar adoptar más prácticas de seguridad.',
    'needsImprovement': 'Tus prácticas de seguridad necesitan una mejora significativa. Considera implementar más de las prácticas sugeridas.',
    'didntUnderstand': 'No entendiste {0} pregunta{s}.',
    'securityPractices': 'Prácticas de Seguridad {0}',
    'selectLanguage': 'Seleccionar Idioma',
    'loadingLanguageData': 'Cargando datos de evaluación específicos del idioma...',
    'languageDataNotFound': 'No se encontraron datos específicos del idioma, utilizando datos predeterminados.',
    'essential': 'Esencial',
    'serious': 'Serio',
    'paranoid': 'Paranoico',
    'passwordManagement': 'Gestión de Contraseñas',
    'deviceSecurity': 'Seguridad de Dispositivos',
    'emailSecurity': 'Seguridad de Correo Electrónico',
    'generalSecurityPractices': 'Prácticas Generales de Seguridad',
    'networkSecurity': 'Seguridad de Red',
    'browserSecurity': 'Seguridad del Navegador',
    'developerSecurity': 'Seguridad del Desarrollador',
    'advancedDeviceSecurity': 'Seguridad Avanzada de Dispositivos',
    'operationalSecurity': 'Seguridad Operacional',
    'mobileDeviceSecurity': 'Seguridad de Dispositivos Móviles',
    'physicalSecurity': 'Seguridad Física'
  },
  
  // German translations
  'de': {
    'pageTitle': 'Cyber-Sicherheitsbewertung',
    'currentScore': 'Aktueller Punktestand',
    'questions': 'Fragen',
    'loadingData': 'Bewertungsdaten werden geladen...',
    'securityScore': 'Ihr Sicherheitswert',
    'restartButton': 'Bewertung erneut durchführen',
    'iDo': 'Ich mache das',
    'iDoSometimes': 'Ich mache das manchmal',
    'iDont': 'Ich mache das nicht',
    'iDontUnderstand': 'Ich verstehe das nicht',
    'youDoThis': '✓ Sie machen das',
    'youDoThisSometimes': '~ Sie machen das manchmal',
    'youDontDoThis': '✗ Sie machen das nicht',
    'youDontUnderstand': '? Sie verstehen diese Frage nicht',
    'excellent': 'Ausgezeichnet! Ihre Sicherheitspraktiken sind erstklassig.',
    'goodJob': 'Gute Arbeit! Sie haben solide Sicherheitsgewohnheiten, aber es gibt Raum für Verbesserungen.',
    'onTrack': 'Sie sind auf dem richtigen Weg, sollten aber mehr Sicherheitspraktiken übernehmen.',
    'needsImprovement': 'Ihre Sicherheitspraktiken müssen erheblich verbessert werden. Erwägen Sie, mehr der vorgeschlagenen Praktiken umzusetzen.',
    'didntUnderstand': 'Sie haben {0} Frage{s} nicht verstanden.',
    'securityPractices': '{0} Sicherheitspraktiken',
    'selectLanguage': 'Sprache wählen',
    'loadingLanguageData': 'Sprachspezifische Bewertungsdaten werden geladen...',
    'languageDataNotFound': 'Sprachspezifische Daten nicht gefunden, es werden Standarddaten verwendet.',
    'essential': 'Wesentlich',
    'serious': 'Ernsthaft',
    'paranoid': 'Paranoid',
    'passwordManagement': 'Passwort-Management',
    'deviceSecurity': 'Gerätesicherheit',
    'emailSecurity': 'E-Mail-Sicherheit',
    'generalSecurityPractices': 'Allgemeine Sicherheitspraktiken',
    'networkSecurity': 'Netzwerksicherheit',
    'browserSecurity': 'Browser-Sicherheit',
    'developerSecurity': 'Entwickler-Sicherheit',
    'advancedDeviceSecurity': 'Erweiterte Gerätesicherheit',
    'operationalSecurity': 'Operative Sicherheit',
    'mobileDeviceSecurity': 'Sicherheit Mobiler Geräte',
    'physicalSecurity': 'Physische Sicherheit'
  },
  
  // Chinese translations
  'zh': {
    'pageTitle': '网络安全评估',
    'currentScore': '当前得分',
    'questions': '问题',
    'loadingData': '正在加载评估数据...',
    'securityScore': '您的安全得分',
    'restartButton': '重新进行评估',
    'iDo': '我做到了',
    'iDoSometimes': '我有时做到',
    'iDont': '我没做到',
    'iDontUnderstand': '我不理解',
    'youDoThis': '✓ 您做到了',
    'youDoThisSometimes': '~ 您有时做到',
    'youDontDoThis': '✗ 您没做到',
    'youDontUnderstand': '? 您不理解这个问题',
    'excellent': '太棒了！您的安全实践非常出色。',
    'goodJob': '做得好！您有良好的安全习惯，但仍有改进空间。',
    'onTrack': '您走在正确的道路上，但应考虑采用更多的安全实践。',
    'needsImprovement': '您的安全实践需要显著改进。考虑实施更多建议的实践。',
    'didntUnderstand': '您不理解 {0} 个问题。',
    'securityPractices': '{0} 安全实践',
    'selectLanguage': '选择语言',
    'loadingLanguageData': '正在加载特定语言的评估数据...',
    'languageDataNotFound': '未找到特定语言的数据，正在使用默认数据。',
    'essential': '基础',
    'serious': '进阶',
    'paranoid': '高级',
    'passwordManagement': '密码管理',
    'deviceSecurity': '设备安全',
    'emailSecurity': '电子邮件安全',
    'generalSecurityPractices': '一般安全实践',
    'networkSecurity': '网络安全',
    'browserSecurity': '浏览器安全',
    'developerSecurity': '开发人员安全',
    'advancedDeviceSecurity': '高级设备安全',
    'operationalSecurity': '操作安全',
    'mobileDeviceSecurity': '移动设备安全',
    'physicalSecurity': '物理安全'
  },
  
  // Russian translations
  'ru': {
    'pageTitle': 'Оценка кибербезопасности',
    'currentScore': 'Текущий счет',
    'questions': 'вопросы',
    'loadingData': 'Загрузка данных оценки...',
    'securityScore': 'Ваш показатель безопасности',
    'restartButton': 'Пройти оценку снова',
    'iDo': 'Я делаю',
    'iDoSometimes': 'Иногда делаю',
    'iDont': 'Я не делаю',
    'iDontUnderstand': 'Я не понимаю',
    'youDoThis': '✓ Вы это делаете',
    'youDoThisSometimes': '~ Вы иногда это делаете',
    'youDontDoThis': '✗ Вы этого не делаете',
    'youDontUnderstand': '? Вы не понимаете этот вопрос',
    'excellent': 'Превосходно! Ваши методы обеспечения безопасности на высоком уровне.',
    'goodJob': 'Хорошая работа! У вас прочные привычки безопасности, но есть возможности для улучшения.',
    'onTrack': 'Вы на правильном пути, но стоит рассмотреть внедрение большего количества методов безопасности.',
    'needsImprovement': 'Ваши методы обеспечения безопасности нуждаются в значительном улучшении. Рассмотрите возможность внедрения большего количества предложенных методов.',
    'didntUnderstand': 'Вы не поняли {0} вопрос(ов).',
    'securityPractices': '{0} Методы безопасности',
    'selectLanguage': 'Выбрать язык',
    'loadingLanguageData': 'Загрузка данных оценки для конкретного языка...',
    'languageDataNotFound': 'Данные для конкретного языка не найдены, используются данные по умолчанию.',
    'essential': 'Основной',
    'serious': 'Серьезный',
    'paranoid': 'Параноидальный',
    'passwordManagement': 'Управление паролями',
    'deviceSecurity': 'Безопасность устройства',
    'emailSecurity': 'Безопасность электронной почты',
    'generalSecurityPractices': 'Общие методы безопасности',
    'networkSecurity': 'Безопасность сети',
    'browserSecurity': 'Безопасность браузера',
    'developerSecurity': 'Безопасность разработки',
    'advancedDeviceSecurity': 'Расширенная безопасность устройств',
    'operationalSecurity': 'Операционная безопасность',
    'mobileDeviceSecurity': 'Безопасность мобильных устройств',
    'physicalSecurity': 'Физическая безопасность'
  }
};

/**
 * Load assessment data based on the current language
 * @returns {Promise} Promise that resolves with the loaded data
 */
function loadLanguageData() {
  return new Promise((resolve, reject) => {
    // First try to load language-specific data file
    const langFile = `data-${currentLanguage}.json`;
    
    console.log(`Attempting to load language-specific data file: ${langFile}`);
    
    fetch(langFile)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            // If language-specific file not found, use default data.json
            console.log('Language-specific data file not found, falling back to default data.json');
            return fetch('data.json');
          } else {
            throw new Error(`HTTP error: ${response.status}`);
          }
        }
        return response;
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(`Successfully loaded ${langFile !== 'data.json' ? 'language-specific' : 'default'} data`);
        resolve(data);
      })
      .catch(error => {
        console.error('Error loading data:', error);
        reject(error);
      });
  });
}

/**
 * Get a translated string
 * @param {string} key - The translation key
 * @param {Array} params - Optional parameters for placeholder replacement
 * @returns {string} - Translated string
 */
function __(key, ...params) {
  const lang = translations[currentLanguage] || translations['en'];
  let text = lang[key] || key;
  
  // Handle category names specially (convert from camelCase)
  if (key.match(/^[a-z]+[A-Z][a-zA-Z]*$/)) {
    // This looks like a camelCase category name
    const camelCaseKey = key.charAt(0).toLowerCase() + key.slice(1);
    if (lang[camelCaseKey]) {
      text = lang[camelCaseKey];
    }
  }
  
  // Special case for level names
  if (key === 'Essential' || key === 'Serious' || key === 'Paranoid') {
    const lowercaseKey = key.toLowerCase();
    text = lang[lowercaseKey] || key;
  }
  
  // Replace parameters
  if (params && params.length > 0) {
    for (let i = 0; i < params.length; i++) {
      // Handle plural form for parameter {s}
      if (text.includes(`{${i}}`)) {
        text = text.replace(`{${i}}`, params[i]);
      }
      // Replace plural marker {s} with 's' if count > 1, otherwise empty string
      if (i === 0 && text.includes('{s}')) {
        const pluralSuffix = 's';
        text = text.replace('{s}', params[0] > 1 ? pluralSuffix : '');
      }
    }
  }
  
  return text;
}

/**
 * Change the current language and update the UI
 * @param {string} lang - Language code to change to
 */
function changeLanguage(lang) {
  if (translations[lang]) {
    const previousLanguage = currentLanguage;
    currentLanguage = lang;
    updatePageLanguage();
    
    // Store the language preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Update the language selector
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
      langSelector.value = lang;
    }
    
    // If the language changed, reload the data
    if (previousLanguage !== lang && window.reloadAssessmentData) {
      window.reloadAssessmentData();
    }
  }
}

/**
 * Update all translatable elements on the page
 */
function updatePageLanguage() {
  // Update page title
  document.title = __('pageTitle');
  
  // Update static UI elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      element.textContent = __(key);
    }
  });
  
  // Update level names if assessment is loaded
  document.querySelectorAll('.level-indicator').forEach(element => {
    const text = element.textContent;
    if (text === 'Essential' || text === 'Serious' || text === 'Paranoid') {
      element.textContent = __(text);
    }
  });
  
  // Update category titles
  document.querySelectorAll('.category-title').forEach(element => {
    const text = element.textContent.split(' ')[0]; // Get first word which might be a category name
    if (text && !text.includes('Security')) { // Avoid replacing already-processed text
      // Try to find a translation for the category name
      const formattedText = text.charAt(0).toUpperCase() + text.slice(1);
      const translated = __(formattedText);
      if (translated !== formattedText) {
        element.textContent = element.textContent.replace(text, translated);
      }
    }
  });
  
  // Update floating score text
  const floatProgress = document.getElementById('float-progress');
  if (floatProgress && window.totalQuestions > 0) {
    floatProgress.textContent = `${window.answeredQuestions} / ${window.totalQuestions} ${__('questions')}`;
  }
}

/**
 * Initialize language support
 */
function initLanguages() {
  // Create language selector
  const languageSelector = document.createElement('div');
  languageSelector.className = 'language-selector';
  languageSelector.innerHTML = `
    <label for="language-selector" data-i18n="selectLanguage">Select Language</label>
    <select id="language-selector">
      ${Object.entries(availableLanguages).map(([code, name]) => 
        `<option value="${code}"${code === currentLanguage ? ' selected' : ''}>${name}</option>`
      ).join('')}
    </select>
  `;
  
  // Add selector to the page
  document.body.insertBefore(languageSelector, document.body.firstChild);
  
  // Add event listener to language selector
  document.getElementById('language-selector').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
  });
  
  // Check for stored language preference
  const storedLang = localStorage.getItem('preferredLanguage');
  if (storedLang && translations[storedLang]) {
    currentLanguage = storedLang;
    document.getElementById('language-selector').value = storedLang;
  } else {
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      currentLanguage = browserLang;
      document.getElementById('language-selector').value = browserLang;
    }
  }
  
  // Initial language update
  updatePageLanguage();
}

// Export functionality
window.i18n = {
  __,
  changeLanguage,
  getCurrentLanguage: () => currentLanguage,
  getAvailableLanguages: () => ({ ...availableLanguages }),
  initLanguages,
  loadLanguageData
};
