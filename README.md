
# Cyber Opsec Assessment

A web-based assessment tool for evaluating your cybersecurity practices.

## Features

- Interactive questionnaire to assess your security practices
- Three levels of security practices: Essential, Serious, and Paranoid
- Multiple categories of security practices
- Real-time scoring and progress tracking
- Localization support (currently available in English and French)
- Mobile-responsive design

## Running the Application

Simply open the `index.html` file in your web browser or use a local server:

```
python -m http.server 8000
```

Then navigate to http://localhost:8000 in your browser.

## Development

### Structure

- `index.html` - Main application HTML
- `styles-i18n.css` - CSS styles for internationalization
- `i18n.js` - Internationalization support
- `data.json` - Default (English) assessment data
- `data-fr.json` - French assessment data
- `debug-i18n.html` - Tool for debugging internationalization

### Testing

The application includes automated tests using Jest and Puppeteer. To run the tests:

1. Install dependencies:
   ```
   npm install
   ```

2. Run the tests:
   ```
   npm test
   ```

The test suite includes:

- **DOM Tests** - Test HTML structure and basic functionality using JSDOM
- **Browser Tests** - E2E testing using Puppeteer in a real browser
- **i18n Tests** - Test internationalization functionality
- **Data Tests** - Verify data structure and content

## Adding New Languages

To add a new language:

1. Add the language to the `availableLanguages` object in `i18n.js`
2. Add translations to the `translations` object in `i18n.js`
3. Optionally create a language-specific data file (e.g., `data-de.json` for German)
