/**
 * Level Selector for Cyber Security Assessment
 * 
 * Provides a dropdown to select between different security levels:
 * - Level 1 (Essential)
 * - Level 2 (Serious)
 * - Level 3 (Paranoid)
 * 
 * Changes are automatically applied when the user selects a different level.
 */

(function() {
  // Initialize level selector when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Create the level selector UI
    const createLevelSelector = function() {
      const container = document.createElement('div');
      container.className = 'level-selector-container';
      
      // Get translations if available
      const getTranslation = (key) => window.i18n && window.i18n.__ ? window.i18n.__(key) : key;
      
      // Create HTML for the selector
      container.innerHTML = `
        <div class="level-selector">
          <label for="security-level" class="level-selector-label">${getTranslation('securityLevel')}:</label>
          <select id="security-level" class="level-select">
            <option value="level1">${getTranslation('Essential')} (${getTranslation('level1')})</option>
            <option value="level2">${getTranslation('Serious')} (${getTranslation('level2')})</option>
            <option value="level3">${getTranslation('Paranoid')} (${getTranslation('level3')})</option>
          </select>
        </div>
        <p class="level-description" id="level-description"></p>
      `;
      
      return container;
    };
    
    // Insert the level selector at the top of the assessment
    const assessmentContainer = document.getElementById('assessment-container');
    if (assessmentContainer) {
      const levelSelector = createLevelSelector();
      
      // Insert at the beginning
      if (assessmentContainer.firstChild) {
        assessmentContainer.insertBefore(levelSelector, assessmentContainer.firstChild);
      } else {
        assessmentContainer.appendChild(levelSelector);
      }
      
      // Setup event handlers
      const securityLevelSelect = document.getElementById('security-level');
      const levelDescription = document.getElementById('level-description');
      
      // Update description and apply level when changed (automatic)
      securityLevelSelect.addEventListener('change', function() {
        const selectedLevel = this.value;
        updateLevelDescription(selectedLevel);
        applySecurityLevel(selectedLevel);
      });
      
      // Set initial description
      updateLevelDescription(securityLevelSelect.value);
    }
  });
  
  // Update the level description text
  function updateLevelDescription(level) {
    const levelDescription = document.getElementById('level-description');
    if (!levelDescription) return;
    
    // Get translated descriptions if available
    const getTranslation = (key, defaultValue) => {
      if (window.i18n && typeof window.i18n.__ === 'function') {
        const translation = window.i18n.__(key);
        return translation !== key ? translation : defaultValue || key;
      } else {
        return defaultValue || key;
      }
    };
    
    const descriptions = {
      level1: getTranslation('essentialDescription', 'Fundamental security practices everyone should implement'),
      level2: getTranslation('seriousDescription', 'For those who want stronger security or have sensitive information'),
      level3: getTranslation('paranoidDescription', 'For high-security needs or those with specific threat models')
    };
    
    levelDescription.textContent = descriptions[level] || '';
  }
  
  // Apply the selected security level
  function applySecurityLevel(level) {
    // Store the selected level in localStorage
    localStorage.setItem('selectedSecurityLevel', level);
    
    const levelDescription = document.getElementById('level-description');
    const originalText = levelDescription.textContent;
    
    // Reload the assessment with the new level
    setTimeout(() => {
      if (typeof window.loadAssessmentData === 'function') {
        window.loadAssessmentData(level);
      } else {
        console.error('loadAssessmentData function not available');
        // Fallback: reload the page
        window.location.reload();
      }
    }, 100); // Small delay for better UX
  }
})();
