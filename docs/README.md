# Lusso Restaurant - Documentation

Welcome to the Lusso restaurant website documentation. This directory contains comprehensive guides for development, design system usage, and refactoring session records.

## 📖 Documentation Index

### Development Guides
- **[COMPONENT-GUIDE.md](./COMPONENT-GUIDE.md)** - Ultra-modular component architecture and development patterns
- **[DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)** - Complete design system documentation with theme switching

### Refactoring Sessions
- **[Theme Constants Cleanup (Jan 27, 2025)](./refactoring-sessions/2025-01-27-theme-constants-cleanup.md)** - Centralized theme constants, eliminated duplicates

### Archive
- **[Project Archive](../archive/)** - Historical development documents and research
- **[Theme Refactoring Plan (Completed)](../archive/2025-01-theme-refactoring-plan.md)** - Complete historical refactoring plan with final results
- **[Component Research](../archive/COMPONENT-RESEARCH.md)** - Third-party library research and component analysis

## 🎯 Quick Start

1. **Building Components?** → Read [COMPONENT-GUIDE.md](./COMPONENT-GUIDE.md)
2. **Styling & Theming?** → Read [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)  
3. **Understanding Recent Changes?** → Check [refactoring-sessions/](./refactoring-sessions/)

## 🏗️ Project Architecture

```
LussoV3/
├── README.md               # Project overview
├── PRD.md                  # Product requirements
├── docs/                   # 📖 All documentation
│   ├── README.md           # This file
│   ├── COMPONENT-GUIDE.md  # Component development guide
│   ├── DESIGN-SYSTEM.md    # Design system & theming
│   └── refactoring-sessions/ # Session-by-session changes
├── archive/                # 📁 Historical documents
│   ├── COMPONENT-RESEARCH.md
│   ├── 2025-01-theme-refactoring-plan.md
│   └── (other historical docs)
└── lusso-static/           # 💻 Application
    ├── src/                # Source code
    ├── tests/              # Test suites
    └── package.json        # Dependencies
```

## 🎨 Key Features

- **Ultra-Modular Components** - Single import source from `@/components`
- **Theme Switching** - Light/dark themes with automatic persistence
- **Type-Safe Design System** - Full TypeScript coverage for design tokens
- **Mobile-First** - Touch-optimized for restaurant use cases
- **Static Export Ready** - Works with GitHub Pages hosting

## 🔄 Recent Changes

### Latest: Theme Constants Cleanup (Jan 27, 2025)
- ✅ Eliminated all duplicate theme arrays (4 → 0)
- ✅ Centralized theme constants in single source of truth
- ✅ Improved maintainability with zero functional changes
- ✅ All tests passing (32/32)
- ✅ Complete refactoring plan archived with final results

---