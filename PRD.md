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

## 2. Technical Stack

The definitive technology stack is maintained in the project [README.md](../README.md).

## 3. Architecture & Component System

### 3.1 Page Structure ✅ **UPDATED**
```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with global styles
│   │   ├── page.tsx            # Main landing page
│   │   ├── globals.css         # Global CSS with Tailwind imports
│   │   └── components/
│   │       ├── layout/
│   │       │   ├── dynamic-header.tsx    # Smart header with menu integration
│   │       │   └── header.tsx            # Enhanced header with mouse tracking
│   │       ├── navigation/
│   │       │   ├── main-navigation.tsx   # Desktop navigation
│   │       │   ├── mobile-navigation.tsx # Mobile Shadcn Sheet menu
│   │       │   └── menu-navigation.tsx   # Menu category navigation
│   │       ├── sections/         # Page sections (Hero, Story, etc.)
│   │       ├── restaurant/       # Restaurant-specific components
│   │       ├── data-display/     # Data presentation components
│   │       ├── forms/           # Form components
│   │       └── ui/              # Reusable UI components (Shadcn)
│   ├── types/
│   │   └── index.ts           # TypeScript definitions with navigation interfaces
│   └── lib/
│       └── utils.ts           # Utility functions
```


### 3.3 State Management Strategy
- **React State**: Local component state for UI interactions
- **URL State**: Next.js routing for section navigation
- **Theme State**: CSS custom properties for theme switching
- **Modal State**: Simple state for menu modals

## 4. Design System Implementation

All design system specifications, including colors, typography, and spacing, are maintained in [DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md).

## 5. Feature Requirements

### 5.1 Navigation System ✅ **IMPLEMENTED**

#### Dynamic Header Architecture
- **DynamicHeader Component**: Smart header that conditionally renders menu categories when on menu page
- **Header Component**: Enhanced with mouse tracking effects, grid layout, and menu category integration
- **Sticky Behavior**: Menu navigation with configurable sticky positioning

#### Desktop Navigation (lg+)
- **MainNavigation**: Desktop navigation with dynamic styling based on active route
- **MenuNavigation**: Category navigation with smooth scrolling and active state management
- **Header Integration**: Menu categories seamlessly integrated into header layout
- **Accessibility**: High contrast support and reduced motion preferences

#### Mobile Navigation (sm-md) ✅ **COMPLETE**
- **MobileNavigation Component**: Shadcn Sheet-based mobile menu with proper TypeScript interfaces
- **Responsive Control**: Automatic show/hide based on screen size breakpoints
- **Touch Optimization**: 44px+ touch targets with proper spacing
- **Theme Integration**: Seamless theme switching within mobile menu
- **State Management**: Proper open/close state with accessibility support

### 5.2 Modal System

#### Contact Information Modal
- **Trigger**: CTA buttons throughout the site
- **Content**: Phone number, address, and hours for reservations
- **Behavior**: Backdrop blur, click-outside-to-close
- **Mobile**: Full-screen on mobile devices with call links

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
- **Information**: Phone number prominently displayed
- **Language**: Romanian content ("Curand! Inca lucram la website")
- **Details**: Essential business information only

### 5.4 Communication Strategy

#### Phone-Based Contact
- **Primary**: Phone calls for in-location communication
- **Secondary**: WhatsApp messages on same number
- **Implementation**: Phone icon/SVG redirects to phone app with number
- **No Forms**: Static website with no form handling required

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

### 8.4 GitHub Pages Deployment ✅ **COMPLETED**
- **Branch**: `feature/complete-landing-page` triggers automatic deployment
- **Workflow**: GitHub Actions CI/CD with optimized build process
- **Caching**: Next.js build cache and npm dependencies caching
- **Performance**: Static export with image optimization
- **Domain**: Custom domain ready via GitHub Pages
- **CDN**: Global CDN distribution via GitHub Pages
- **SSL**: Automatic HTTPS with GitHub Pages SSL certificates

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
**Last Updated**: July 23, 2025  
**Next Review**: After Phase 1 completion