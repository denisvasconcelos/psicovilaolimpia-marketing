# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

All commands are run from the project root using npm or yarn:

### Core Development
- `npm run dev` / `yarn dev` - Start local dev server at localhost:4321
- `npm run build` / `yarn build` - Build production site to ./dist/
- `npm run preview` / `yarn preview` - Preview build locally before deploying

### Code Quality
- `npm run check` / `yarn check` - Run all checks (Astro, ESLint, Prettier)
- `npm run type-check` / `yarn type-check` - Run TypeScript/Astro type checking
- `npm run fix` / `yarn fix` - Auto-fix ESLint and Prettier issues
- `npm run check:eslint` / `yarn check:eslint` - Run ESLint only
- `npm run check:prettier` / `yarn check:prettier` - Check Prettier formatting

## Project Architecture

This is a psychology clinic website built with **Astro 5.0** and **Tailwind CSS**, based on the AstroWind template but customized for Psico Vila Olimpia.

### Key Technologies
- **Astro 5.0** - Static site generator with component islands
- **TypeScript** - Full TypeScript support with strict null checks
- **Tailwind CSS** - Utility-first CSS framework with custom color scheme
- **MDX** - Markdown with JSX components for blog content
- **Astro Icon** - Icon system using Tabler and Flat Color Icons

### Site Configuration

The main configuration is in `src/config.yaml` and includes:
- Site metadata and SEO settings (Portuguese language)
- Company contact information and business hours
- Specialty definitions with structured data
- Custom color scheme (primary: #046a80, secondary: #73CEE1)
- WhatsApp integration for appointments

### Content Architecture

#### Specialties System
Specialties are defined in `src/config.yaml` with structured data:
- Each specialty has: slug, title, description, icon
- Specialty pages use `SpecialtyLayout.astro` for consistent structure
- Navigation automatically reflects specialty structure

#### Page Structure
- **Homepage** (`src/pages/index.astro`) - Main landing page
- **Specialty Pages** - Individual pages for each therapy type
- **About/Contact** - Company and contact information
- **Blog** - Located in `src/content/post/` with MDX support

### Component Organization

#### Custom Components (`src/components/custom/`)
- `SpecialtyCard.astro` - Reusable cards for specialty listings
- `WhatsAppFloat.astro` - Floating WhatsApp button

#### Layout System
- `PageLayout.astro` - Standard page layout
- `SpecialtyLayout.astro` - Specialized layout for therapy pages with structured sections

#### Widget Components (`src/components/widgets/`)
Standard AstroWind widgets extended for clinic needs:
- Hero, Features, CallToAction - Main page sections
- Contact, Footer, Header - Site structure

### Navigation System

Navigation is centrally managed in `src/navigation.ts`:
- Header links include specialty dropdown menu
- Footer contains contact info, business hours, and social links
- WhatsApp integration throughout with pre-filled messages

### Image Handling

Custom image optimization system in `src/utils/images.ts`:
- Local images from `src/assets/images/`
- Integration with Unpic for CDN images
- OpenGraph image adaptation for social sharing

### Content Management

- Blog posts in `src/content/post/` (MDX format)
- Frontmatter plugin for reading time calculation
- Responsive tables and lazy image loading

### Styling System

Tailwind configuration with custom theme:
- Portuguese color names and psychology-focused design
- Custom CSS in `src/assets/styles/tailwind.css`
- Dark mode support throughout

## Development Notes

### Code Style
- ESLint configuration supports Astro, TypeScript, and JavaScript
- Prettier formatting enforced
- TypeScript strict mode enabled

### WhatsApp Integration
Phone number `5511985946105` is used throughout for consultation bookings. When adding new WhatsApp links, follow the existing pattern with pre-filled contextual messages.

### Content Updates
- Specialty information should be updated in `src/config.yaml`
- Business information (hours, contact) centralized in config
- Blog posts added to `src/content/post/`

### Performance
- Static site generation (output: 'static')
- Image optimization with lazy loading
- Compression enabled for production builds