/**
 * Level Selector for Cyber Security Assessment
 * 
 * Provides a dropdown to select between different security levels:
 * - Level 1 (Essential)
 * - Level 2 (Serious)
 * - Level 3 (Paranoid)
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
          <label for="security-level" class="level-selector-label"></label>
          <select id="security-level" class="level-select">
            <option value="level1">${getTranslation('Essential')} (${getTranslation('level1')})</option>
            <option value="level2">${getTranslation('Serious')} (${getTranslation('level2')})</option>
            <option value="level3">${getTranslation('Paranoid')} (${getTranslation('level3')})</option>
          </select>
          <button id="apply-level" class="apply-level-btn">${getTranslation('applyLevel')}</button>
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
      const applyLevelBtn = document.getElementById('apply-level');
      const levelDescription = document.getElementById('level-description');
      
      // Update description when level changes
      securityLevelSelect.addEventListener('change', function() {
        updateLevelDescription(this.value);
      });
      
      // Apply level button clicked
      applyLevelBtn.addEventListener('click', function() {
        const selectedLevel = securityLevelSelect.value;
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
    const getTranslation = (key) => window.i18n && window.i18n.__ ? window.i18n.__(key) : key;
    
    const descriptions = {
      level1: getTranslation('essentialDescription') || 'Fundamental security practices everyone should implement',
      level2: getTranslation('seriousDescription') || 'For those who want stronger security or have sensitive information',
      level3: getTranslation('paranoidDescription') || 'For high-security needs or those with specific threat models'
    };
    
    levelDescription.textContent = descriptions[level] || '';
  }
  
  // Apply the selected security level
  function applySecurityLevel(level) {
    // Store the selected level in localStorage
    localStorage.setItem('selectedSecurityLevel', level);
    
    // Reload the assessment with the new level
    if (typeof window.loadAssessmentData === 'function') {
      window.loadAssessmentData(level);
    } else {
      console.error('loadAssessmentData function not available');
      // Fallback: reload the page
      window.location.reload();
    }
  }
})();
