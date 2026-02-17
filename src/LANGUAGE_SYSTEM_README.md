# 🌐 SAMBHAV NGO - Language System Documentation

## Supported Languages (7 Total)

| Code | Language | Native Name | Use Case |
|------|----------|-------------|----------|
| `en` | English | English | Default, Global |
| `hi` | Hindi | हिंदी | Local (India) |
| `es` | Spanish | Español | Global donors |
| `fr` | French | Français | Global donors |
| `de` | German | Deutsch | Global donors |
| `pt` | Portuguese | Português | Global donors |
| `zh` | Chinese Simplified | 中文（简体） | Global donors |

## System Architecture

### Translation Key System

All text uses a key-based translation system:

```typescript
const translations: Record<string, Record<Language, string>> = {
  'hero.heading': {
    en: 'Making Change Possible, One Child at a Time',
    hi: 'एक-एक बच्चे के माध्यम से बदलाव को संभव बनाना',
    es: 'Haciendo Posible el Cambio, Un Niño a la Vez',
    // ... other languages
  }
};
```

### Usage in Components

```tsx
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

function MyComponent() {
  const { t } = useThemeLanguage();
  
  return <h1>{t('hero.heading')}</h1>;
}
```

## Language Detection

### First Visit Flow

1. Check `localStorage` for saved preference
2. If no saved preference → Detect browser language
3. If browser language is supported → Use it
4. Else → Default to English

### Browser Language Detection

```typescript
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.includes('hi')) return 'hi';
  if (browserLang.includes('es')) return 'es';
  // ... other checks
  
  return 'en'; // Default
};
```

## User Language Selection

### Footer Language Switcher

- **Location**: Footer bottom-right
- **Style**: Globe icon + current language code
- **Dropdown**: Shows all 7 languages in native names
- **Behavior**: 
  - Instant switch (no reload)
  - Persists in localStorage
  - Applies to entire website

### Language Dropdown Order

1. English
2. हिंदी (Hindi)
3. Español (Spanish)
4. Français (French)
5. Deutsch (German)
6. Português (Portuguese)
7. 中文（简体） (Chinese Simplified)

## Font Support

### Included Fonts

- **Inter**: Latin scripts (English, Spanish, French, German, Portuguese)
- **Noto Sans Devanagari**: Hindi (Devanagari script)
- **Noto Sans SC**: Chinese Simplified

### Implementation

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap');

body {
  font-family: 
    'Inter', 
    'Noto Sans', 
    'Noto Sans Devanagari', 
    'Noto Sans SC', 
    -apple-system, 
    BlinkMacSystemFont, 
    sans-serif;
}
```

## Storage & Persistence

### LocalStorage Key

- **Key**: `sambhav-language`
- **Value**: One of `'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh'`

### Persistence Behavior

- Language persists across:
  - Page refreshes
  - Browser sessions
  - All pages on the website
  - Chatbot interactions

## Chatbot Language Sync

The chatbot automatically inherits the selected website language:

```tsx
const { language } = useThemeLanguage();

// Chatbot uses same language for responses
const botResponse = getBotResponse(userInput, language);
```

## Translation Coverage

### Components with Translations

✅ Header (all navigation items)
✅ Hero Section (heading, description, CTAs)
✅ Impact Section (metrics, programs)
✅ CTA Strip
✅ Footer (all sections)
❌ Chatbot (to be implemented)
❌ Forms (to be implemented)

### Adding New Translations

1. Add key to `translations` object in `ThemeLanguageContext.tsx`
2. Provide translations for all 7 languages
3. Use `t('your.key')` in component

Example:

```typescript
// In ThemeLanguageContext.tsx
'new.textKey': {
  en: 'English text',
  hi: 'हिंदी पाठ',
  es: 'Texto español',
  fr: 'Texte français',
  de: 'Deutscher Text',
  pt: 'Texto português',
  zh: '中文文本'
}

// In Component
const { t } = useThemeLanguage();
<p>{t('new.textKey')}</p>
```

## Accessibility Features

✅ Native language names (no flags)
✅ ARIA labels for language switcher
✅ Keyboard accessible dropdown
✅ Touch-friendly (44px+ targets)
✅ Screen reader support
✅ No mixed languages on same screen
✅ Proper contrast in all languages

## Best Practices

### ✅ DO

- Use translation keys for ALL visible text
- Test all languages before deployment
- Provide fallback to English
- Keep translations culturally appropriate
- Test with native speakers

### ❌ DON'T

- Don't hardcode text strings
- Don't mix languages in one sentence
- Don't auto-translate legal content without review
- Don't reset language on page refresh
- Don't hide language controls

## Testing Checklist

- [ ] All 7 languages display correctly
- [ ] Fonts render properly (Devanagari, Chinese)
- [ ] No layout shifts when changing language
- [ ] Language persists on page refresh
- [ ] Language applies to all components
- [ ] Dropdown is accessible via keyboard
- [ ] Mobile responsive language switcher
- [ ] Proper contrast in light and dark themes

## Future Enhancements

1. Add RTL support for Arabic/Hebrew (if needed)
2. Chatbot language-specific responses
3. Form validation messages in all languages
4. Language-specific date/time formatting
5. Currency formatting based on language
6. Language-specific content (blog posts, etc.)

## Support & Maintenance

- **Translation Updates**: Update `ThemeLanguageContext.tsx`
- **Font Updates**: Update Google Fonts import in `globals.css`
- **New Languages**: Follow the 7-language template
- **Quality Assurance**: Regular native speaker reviews

---

**Last Updated**: 2026-01-30
**Version**: 1.0.0
**Maintainer**: Sambhav NGO Development Team
