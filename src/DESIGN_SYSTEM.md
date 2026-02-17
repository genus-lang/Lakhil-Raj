# 🎨 Sambhav NGO - Design System

## Color Palette

### Primary Colors
```css
--hope-green: #1E7A6E
--hope-green-dark: #176b60
--hope-green-light: #4FD1C5
--warm-optimism: #F4B400
```

### Light Mode
```css
--background: #F9FAFB
--card-bg: #FFFFFF
--text-primary: #111827
--text-secondary: #6B7280
--border: #E5E7EB
```

### Dark Mode
```css
--background: #0B1F1D
--card-bg: #112F2B
--section-bg: #1F4D47
--text-primary: #E5E7EB
--text-secondary: #9CA3AF
--border: #1F4D47
```

---

## Typography

### Font Families
```css
/* Headings */
font-family: 'Poppins', sans-serif;

/* Body Text */
font-family: 'Inter', 'Noto Sans', 'Noto Sans Devanagari', 'Noto Sans SC', sans-serif;
```

### Font Sizes (Tailwind)
- Heading 1: text-[38px] md:text-[42px]
- Heading 2: text-[32px] md:text-[38px]
- Heading 3: text-[26px]
- Heading 4: text-[18px]
- Body: text-[16px]
- Small: text-[14px]
- Tiny: text-[12px]

### Font Weights
- Bold: font-bold (700)
- Semibold: font-semibold (600)
- Medium: font-medium (500)
- Regular: font-normal (400)

---

## Spacing System

### Section Padding
```css
py-12 md:py-16  /* Vertical section padding */
px-6            /* Horizontal container padding */
max-w-[1200px]  /* Maximum content width */
mx-auto         /* Center alignment */
```

### Gap Utilities
- Small gaps: gap-2, gap-3
- Medium gaps: gap-4, gap-6
- Large gaps: gap-8, gap-10

### Grid Systems
```css
/* 2 columns */
grid sm:grid-cols-2 gap-6

/* 3 columns */
grid sm:grid-cols-2 lg:grid-cols-3 gap-6

/* 4 columns */
grid grid-cols-2 lg:grid-cols-4 gap-6
```

---

## Border Radius

```css
rounded-lg    /* 8px - Cards */
rounded-[16px] /* 16px - Large cards, images */
rounded-full  /* Buttons, avatars */
```

---

## Shadows

```css
shadow-md     /* Medium shadow - Cards */
shadow-lg     /* Large shadow - Elevated cards */
shadow-xl     /* Extra large - Modals, dropdowns */
shadow-2xl    /* Maximum shadow - Chat window */
```

---

## Transitions

### Duration
```css
duration-200  /* Fast interactions - Buttons */
duration-300  /* Medium - Component appearance */
duration-500  /* Slow - Section fade-ins */
duration-700  /* Very slow - Full section animations */
```

### Animation Types
```css
/* Fade In */
animate-in fade-in duration-300

/* Slide In */
slide-in-from-bottom-4

/* Scale */
hover:scale-105
active:scale-95

/* Transform */
hover:translate-x-1
```

---

## Components

### Button Styles

**Primary Button**
```tsx
className="bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white px-8 py-3 rounded-lg hover:bg-[#176b60] dark:hover:bg-[#3DB9AD] hover:scale-105 active:scale-95 transition-all duration-200 font-semibold"
```

**Secondary Button**
```tsx
className="border-2 border-[#1E7A6E] dark:border-[#4FD1C5] text-[#1E7A6E] dark:text-[#4FD1C5] px-8 py-3 rounded-lg hover:bg-[#1E7A6E] hover:text-white dark:hover:bg-[#4FD1C5] dark:hover:text-[#0B1F1D] hover:scale-105 active:scale-95 transition-all duration-200 font-semibold"
```

**Link Button**
```tsx
className="text-[#1E7A6E] dark:text-[#4FD1C5] hover:gap-3 transition-all duration-200 font-semibold"
```

### Card Styles

**Standard Card**
```tsx
className="bg-white dark:bg-[#1F4D47] rounded-[16px] p-6 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105"
```

**Section Card**
```tsx
className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-[16px] p-6 shadow-md"
```

### Input Styles

**Text Input**
```tsx
className="w-full px-4 py-3 bg-white dark:bg-[#112F2B] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E7A6E] dark:focus:ring-[#4FD1C5] text-[#111827] dark:text-[#E5E7EB]"
```

---

## Icons

### Library
**Lucide React** - Consistent, customizable icons

### Common Sizes
- Small: size={16}
- Medium: size={20}
- Large: size={24}
- XL: size={32}

### Icon Colors
```tsx
className="text-[#1E7A6E] dark:text-[#4FD1C5]"
```

---

## Layout Patterns

### Two-Column Layout
```tsx
<div className="grid md:grid-cols-2 gap-10 items-center">
  <div>Content Left</div>
  <div>Content Right</div>
</div>
```

### Alternating Layout (Programs)
```tsx
const isEven = index % 2 === 0;

<div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
  Image
</div>
<div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
  Content
</div>
```

### Center Layout
```tsx
<div className="max-w-[900px] mx-auto px-6">
  Content
</div>
```

---

## Responsive Breakpoints

```css
/* Mobile First */
Default: < 640px

/* Tablet */
sm: @media (min-width: 640px)

/* Desktop */
md: @media (min-width: 768px)
lg: @media (min-width: 1024px)
xl: @media (min-width: 1280px)
```

---

## Accessibility

### Focus States
```css
focus:outline-none
focus:ring-2
focus:ring-[#1E7A6E]
focus:ring-offset-2
```

### ARIA Labels
```tsx
aria-label="Descriptive label"
title="Tooltip text"
```

### Semantic HTML
- Use `<header>`, `<main>`, `<section>`, `<footer>`
- Use `<nav>` for navigation
- Use `<button>` for actions
- Use `<a>` for links

---

## Animation Principles

### NGO-Appropriate Animations
✅ Simple fade-ins (200-300ms)
✅ Gentle scale on hover (105%)
✅ Smooth color transitions
❌ No parallax scrolling
❌ No auto-playing carousels
❌ No excessive motion

### Intersection Observer Pattern
```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    { threshold: 0.1 }
  );

  const section = document.getElementById('section-id');
  if (section) observer.observe(section);

  return () => {
    if (section) observer.unobserve(section);
  };
}, []);
```

---

## Image Guidelines

### Unsplash Search Patterns
```tsx
// Good searches
"community work village india"
"children computer learning india"
"volunteers working together"

// Avoid generic searches
"office" ❌
"people" ❌
```

### Image Sizing
```css
/* Hero images */
h-[320px] md:h-[380px]

/* Card images */
h-[280px] md:h-[320px]

/* Avatars */
w-20 h-20 rounded-full
```

---

## Z-Index Scale

```css
z-[100]  /* Header (sticky) */
z-50     /* ChatBot, modals */
z-40     /* Back to top */
z-10     /* Dropdowns */
z-0      /* Base layer */
```

---

## Best Practices

### DO ✅
- Use consistent spacing (multiples of 4)
- Maintain color contrast (7:1 minimum)
- Keep animations subtle
- Test in both themes
- Test all screen sizes
- Use semantic HTML
- Add ARIA labels
- Optimize images

### DON'T ❌
- Mix different animation styles
- Use hard-coded colors
- Ignore dark mode
- Create inner scrollbars
- Use auto-playing content
- Forget mobile users
- Skip accessibility

---

**Design System Version**: 1.0.0
**Last Updated**: 2026-01-30
**Maintained by**: Sambhav NGO Development Team
