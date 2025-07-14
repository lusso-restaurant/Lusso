# Lusso Static Website - Product Requirements Document (PRD)

## 1. Project Overview

### Project Vision
Transform Lusso luxury restaurant website from a dynamic Three.js-powered application to a static Next.js website optimized for mobile-first experiences and cost-effective deployment.

### Objectives
- **Cost Reduction**: Enable deployment on static hosting services (Vercel, Netlify, Hostinger)
- **Mobile Focus**: Prioritize mobile user experience and touch interactions
- **Performance**: Maintain fast loading times with static generation
- **Maintenance**: Simplify architecture while preserving visual fidelity

### Success Metrics
- Sub-2 second initial load on mobile 3G
- 100% mobile-responsive design
- Zero server infrastructure costs
- Maintains existing visual design language

## 2. Technical Stack

### Core Technologies
- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript for type safety
- **Deployment**: Static export (`output: 'export'`)
- **Development**: Turbopack for fast dev builds

### Key Dependencies
```json
{
  "next": "^15.3.5",
  "react": "^18.3.1",
  "tailwindcss": "^3.4.0",
  "typescript": "^5.0.0",
  "@types/react": "^18.3.0"
}
```

## 3. Architecture & Component System

### 3.1 Page Structure
```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with global styles
│   │   ├── page.tsx            # Main landing page
│   │   ├── globals.css         # Global CSS with Tailwind imports
│   │   └── components/
│   │       ├── Hero/           # Hero section with scroll triggers
│   │       ├── Story/          # Restaurant story section
│   │       ├── Menu/           # Menu display and modals
│   │       ├── Contact/        # Contact and reservation forms
│   │       ├── Layout/         # Header, navigation, footer
│   │       └── UI/             # Reusable UI components
│   ├── styles/
│   │   └── components.css      # Component-specific styles
│   └── types/
│       └── index.ts           # TypeScript definitions
```

### 3.2 Component Architecture

#### Core Layout Components
1. **ScrollNavigation**: Virtual scroll container with section-based navigation
2. **StickyHeader**: Sticky navigation that appears on scroll
3. **ModalManager**: Handles reservation and menu modals
4. **MobileNavigation**: Touch-optimized mobile navigation

#### Content Components
1. **HeroSection**: Main landing with call-to-action buttons
2. **StorySection**: Restaurant narrative and imagery
3. **MenuSection**: Menu categories and item displays
4. **ContactSection**: Reservation form and contact information

#### UI Components
1. **Button**: Consistent button styling with variants
2. **Modal**: Reusable modal with backdrop blur
3. **FormField**: Standardized form inputs
4. **TabSystem**: Menu category navigation
5. **Card**: Content display cards

### 3.3 State Management Strategy
- **React State**: Local component state for UI interactions
- **URL State**: Next.js routing for section navigation
- **Form State**: Controlled components for form handling
- **Modal State**: Context API for modal management

## 4. Design System Implementation

### 4.1 Color Palette (Tailwind Custom Colors)
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'matte-white': '#f4f4f4',
        'glossy-gold': '#D4AF37',
        'matte-gold': '#b2935b',
        'dark-blue': '#0A2342',
        'text-primary': '#2c3e50',
      }
    }
  }
}
```

### 4.2 Typography System
- **Primary**: Playfair Display (serif) for headings
- **Secondary**: Lato (sans-serif) for body text
- **Scale**: Responsive typography using Tailwind's responsive classes

### 4.3 Responsive Breakpoints
```javascript
// Mobile-first approach
screens: {
  'sm': '640px',   // Small devices
  'md': '768px',   // Medium devices  
  'lg': '1024px',  // Large devices
  'xl': '1280px',  // Extra large
  '2xl': '1536px'  // 2X large
}
```

## 5. Feature Requirements

### 5.1 Navigation System

#### Desktop Navigation (lg+)
- Fixed header that appears on scroll (300px threshold)
- Smooth scroll-to-section functionality
- Visual indicator of current section

#### Mobile Navigation (sm-md)
- Hamburger menu with slide-out navigation
- Touch-optimized 44px+ touch targets
- Swipe gestures for section navigation

### 5.2 Modal System

#### Reservation Modal
- **Trigger**: CTA buttons throughout the site
- **Content**: Contact form with validation
- **Behavior**: Backdrop blur, click-outside-to-close
- **Mobile**: Full-screen on mobile devices

#### Menu Modal
- **Trigger**: Menu buttons and navigation
- **Content**: Tabbed menu categories with items
- **Tabs**: Horizontal scroll on mobile, vertical on desktop
- **Behavior**: Lazy-loaded content, smooth animations

### 5.3 Content Sections

#### Hero Section
- **Background**: Static images (no 3D rendering)
- **Content**: Restaurant name, tagline, primary CTAs
- **Animation**: Parallax effects using CSS transforms
- **Mobile**: Optimized image sizing and touch targets

#### Story Section
- **Content**: Restaurant narrative, chef information
- **Images**: Optimized gallery with lazy loading
- **Layout**: Text/image alternating layout

#### Menu Section
- **Content**: Static menu data (embedded in build)
- **Display**: Category tabs with item grids
- **Search**: Client-side filtering and search
- **Mobile**: Horizontal scrolling tabs

#### Contact Section
- **Form**: Contact form with validation
- **Map**: Static map image or embedded map
- **Information**: Hours, location, contact details

### 5.4 Form Handling

#### Contact/Reservation Form
- **Fields**: Name, email, phone, date, time, party size, special requests
- **Validation**: Client-side validation with error messages
- **Submission**: Static form submission (Netlify Forms, Formspree, etc.)
- **Feedback**: Success/error states with animations

## 6. Performance Requirements

### 6.1 Loading Performance
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Bundle Size**: < 300KB initial JavaScript
- **Images**: WebP format with fallbacks, responsive sizing

### 6.2 Mobile Optimization
- **Touch Targets**: Minimum 44px for all interactive elements
- **Viewport**: Proper viewport meta tag and responsive scaling
- **Font Loading**: Font-display: swap for web fonts
- **Input Zoom**: 16px font-size on inputs to prevent iOS zoom

### 6.3 SEO & Accessibility
- **Static Generation**: Pre-rendered HTML for all pages
- **Meta Tags**: Complete OpenGraph and Twitter Card metadata
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive alt text for all images
- **Focus Management**: Keyboard navigation and focus indicators

## 7. Data Strategy

### 7.1 Menu Content
```typescript
// types/menu.ts
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  dietary?: ('vegetarian' | 'vegan' | 'gluten-free')[];
}

interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  order: number;
}
```

### 7.2 Static Data Sources
- **Menu Data**: JSON files in `/src/data/` directory
- **Content**: Markdown files for rich text content
- **Images**: Optimized static assets in `/public/` directory
- **Configuration**: Environment-based configuration files

## 8. Development Workflow

### 8.1 Development Setup
```bash
# Development server
npm run dev

# Static build for production
npm run build

# Local preview of static build
npm run start
```

### 8.2 Deployment Strategy
- **Static Export**: `next.config.js` with `output: 'export'`
- **Asset Optimization**: Automatic image optimization during build
- **CDN Distribution**: Static files served via CDN
- **Cache Headers**: Long-term caching for static assets

### 8.3 Content Management
- **Updates**: Direct code updates for menu/content changes
- **Images**: Upload to `/public/` directory with optimization
- **Versioning**: Git-based content versioning
- **Staging**: Preview deployments for content review

## 9. Mobile-First Implementation Plan

### 9.1 Touch Interactions
- **Tap Feedback**: Visual feedback on all touch interactions
- **Swipe Gestures**: Horizontal swipe for menu tabs
- **Pull-to-Refresh**: Native browser behavior maintenance
- **Touch Scrolling**: Smooth momentum scrolling

### 9.2 Mobile Layout Patterns
- **Stacked Navigation**: Vertical stacking on small screens
- **Thumb-Friendly**: Important actions within thumb reach
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Offline Resilience**: Static content loads without network

### 9.3 Performance on Mobile
- **Image Lazy Loading**: Intersection Observer for image loading
- **Code Splitting**: Route-based code splitting
- **Preloading**: Critical resource preloading
- **Service Worker**: Optional offline functionality

## 10. Migration Checklist

### Phase 1: Core Infrastructure
- [ ] Next.js project setup with TypeScript and Tailwind
- [ ] Design system implementation (colors, typography, spacing)
- [ ] Basic routing and layout structure
- [ ] Static export configuration

### Phase 2: Component Development  
- [ ] Hero section with responsive design
- [ ] Navigation system (desktop and mobile)
- [ ] Modal system implementation
- [ ] Form components with validation

### Phase 3: Content Integration
- [ ] Menu data structure and display
- [ ] Image optimization and responsive handling
- [ ] Content sections (story, contact)
- [ ] SEO and meta tag implementation

### Phase 4: Mobile Optimization
- [ ] Touch interaction optimization
- [ ] Mobile navigation refinement
- [ ] Performance testing and optimization
- [ ] Cross-device testing

### Phase 5: Deployment
- [ ] Static build optimization
- [ ] Hosting platform configuration
- [ ] Domain and SSL setup
- [ ] Analytics and monitoring

## 11. Success Criteria

### Technical Requirements
- ✅ Static site generation working correctly
- ✅ Mobile-responsive design across all devices
- ✅ Performance benchmarks met (Lighthouse > 90)
- ✅ Accessibility compliance (WCAG 2.1 AA)

### Business Requirements
- ✅ Visual design maintains luxury brand identity
- ✅ User journey preserved from original site
- ✅ Contact forms functional and reliable
- ✅ Hosting costs reduced by >80%

### User Experience
- ✅ Intuitive navigation on all devices
- ✅ Fast loading times on mobile networks
- ✅ Seamless form submission experience
- ✅ Professional visual presentation

---

**Document Version**: 1.0  
**Last Updated**: July 11, 2025  
**Next Review**: After Phase 1 completion