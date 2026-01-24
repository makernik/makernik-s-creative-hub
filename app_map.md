# Makernik Creative Hub - Application Map

## Overview
A personal creative portfolio website showcasing digital and physical maker projects. Built with React, TypeScript, and modern web technologies, hosted on GitHub Pages at makernik.com.

## Architecture

### Tech Stack
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Routing**: React Router DOM 6.30.1
- **Styling**: Tailwind CSS 3.4.17 with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: TanStack React Query 5.83.0
- **Icons**: Lucide React 0.462.0
- **Form Handling**: React Hook Form 7.61.1 with Zod validation
- **Development**: Lovable tagger for component tracking

### Project Structure
```
makernik-s-creative-hub/
├── public/              # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui component library (50+ components)
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Main landing page
│   │   └── NotFound.tsx
│   ├── hooks/          # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/            # Utility functions
│   │   └── utils.ts
│   ├── App.tsx         # Root component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and design system
├── index.html            # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── CNAME              # GitHub Pages custom domain
```

## Routing Structure

### Routes
- `/` - Main landing page (Index component)
- `*` - 404 Not Found page (catch-all route)

### Navigation
- **Anchor-based navigation** (hash links): #projects, #about, #contact
- **Single Page Application** (SPA) with smooth scrolling
- **Fixed header** with scroll-based styling changes

## Component Architecture

### Page Components

#### Index.tsx
- **Purpose**: Main landing page container
- **Structure**: Orchestrates all major sections
- **Layout**: Header → Main (Hero, Projects, About, Contact) → Footer

#### NotFound.tsx
- **Purpose**: 404 error page
- **Features**: Logs 404 attempts, provides navigation back to home

### Section Components

#### Header.tsx
- **Purpose**: Site navigation and branding
- **Features**:
  - Fixed positioning with scroll-based background blur
  - Responsive mobile menu (hamburger)
  - Logo with brand colors (maker + nik)
  - Navigation links: Projects, About, Contact
  - Smooth transitions and backdrop blur on scroll

#### HeroSection.tsx
- **Purpose**: Hero/landing section with main value proposition
- **Features**:
  - Full-screen height with centered content
  - Animated fade-up effects with staggered delays
  - Gradient background with grid pattern overlay
  - Two CTA buttons (View Projects, About Me)
  - Scroll indicator with animated arrow
  - Responsive typography scaling

#### ProjectsSection.tsx
- **Purpose**: Showcase portfolio projects
- **Features**:
  - Grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
  - 6 sample projects (mix of digital and physical)
  - Staggered fade-up animations
  - Section header with description
  - Project cards with images, categories, tags, and links

#### ProjectCard.tsx
- **Purpose**: Individual project display card
- **Props**:
  - title, description, image, category, tags, link, github
- **Features**:
  - Category badges (digital/physical)
  - Hover effects (scale image, border color change)
  - External link and GitHub link support
  - Tag display
  - Responsive image aspect ratio

#### AboutSection.tsx
- **Purpose**: Personal introduction and skills
- **Features**:
  - Two-column layout (text + skill cards)
  - Three skill cards with icons:
    - Digital Craft
    - Physical Making
    - Creative Problem Solving
  - Hover effects on skill cards
  - Personal narrative text

#### ContactSection.tsx
- **Purpose**: Contact information and social links
- **Features**:
  - Email link (makernik27@gmail.com)
  - Social media icons (GitHub, Twitter, LinkedIn)
  - Centered layout
  - Hover animations on links

#### Footer.tsx
- **Purpose**: Site footer with copyright and navigation
- **Features**:
  - Dynamic year display
  - Footer navigation links
  - Responsive layout (stacked on mobile)

## Design System

### Color Palette
- **Background**: Warm cream (HSL: 40 30% 96%)
- **Foreground**: Charcoal (HSL: 30 10% 12%)
- **Accent**: Copper/Terracotta (HSL: 18 75% 55%)
- **Secondary**: Warm stone (HSL: 35 15% 90%)
- **Theme**: "Warm workshop aesthetic with industrial accents"
- **Dark Mode**: Supported with alternative color scheme

### Typography
- **Display Font**: Space Grotesk (headings)
- **Body Font**: Inter (body text)
- **Font Loading**: Google Fonts CDN

### Animations
- **fade-up**: Opacity + translateY animation
- **fade-in**: Opacity-only animation
- **Staggered delays**: 100ms, 200ms, 300ms, 400ms
- **Smooth scrolling**: Enabled globally

### UI Components Library
- **50+ shadcn/ui components** available but not all used
- **Custom button variants**: hero, heroOutline
- **Radix UI primitives**: Accessible, unstyled components

## Capabilities & Features

### Current Features
1. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: sm, md, lg, 2xl
   - Mobile hamburger menu
   - Responsive typography scaling

2. **Performance**
   - Vite build tool (fast HMR)
   - Code splitting ready
   - Optimized asset loading

3. **Accessibility**
   - Semantic HTML
   - ARIA labels on interactive elements
   - Keyboard navigation support (via Radix UI)
   - Focus management

4. **SEO**
   - Meta tags in index.html
   - Open Graph tags
   - Twitter Card support
   - robots.txt configured
   - Custom domain (makernik.com)

5. **Developer Experience**
   - TypeScript for type safety
   - ESLint configuration
   - Vitest for testing (configured)
   - Path aliases (@/ for src/)
   - Lovable tagger for component tracking

6. **State Management**
   - React Query configured (ready for API calls)
   - Local component state (useState)
   - No global state management library

### Data Structure

#### Projects Data (Hardcoded)
```typescript
{
  title: string;
  description: string;
  image: string; // Unsplash URLs
  category: "digital" | "physical";
  tags: string[];
  link?: string;
  github?: string;
}
```

#### Skills Data (Hardcoded)
```typescript
{
  icon: LucideIcon;
  title: string;
  description: string;
}
```

## Deployment

### GitHub Pages
- **Custom Domain**: makernik.com (via CNAME file)
- **Build Output**: `dist/` directory (Vite default)
- **Deployment**: Manual or CI/CD (not configured in repo)
- **Base Path**: Root domain (no subdirectory)

### Build Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Development Server**: Port 8080
- **HMR**: Enabled with overlay disabled

## Dependencies Analysis

### Core Dependencies
- **React ecosystem**: React, React DOM, React Router
- **UI primitives**: 20+ Radix UI packages
- **Styling utilities**: Tailwind, class-variance-authority, clsx, tailwind-merge
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod, @hookform/resolvers
- **Data fetching**: TanStack React Query (configured but not used)

### Unused/Underutilized Dependencies
- **React Query**: Configured but no API calls implemented
- **Many shadcn/ui components**: Available but not used (accordion, alert-dialog, calendar, chart, etc.)
- **Form libraries**: Installed but no forms implemented
- **Date libraries**: date-fns, react-day-picker (not used)
- **Carousel**: embla-carousel-react (not used)
- **Charts**: recharts (not used)

## Current Limitations

1. **Static Content**: All project data is hardcoded
2. **No Backend**: No API integration or CMS
3. **No Forms**: Contact section has email link but no contact form
4. **No Blog/Content**: No content management system
5. **No Analytics**: No tracking or analytics implemented
6. **No Dark Mode Toggle**: Dark mode CSS exists but no toggle UI
7. **Placeholder Links**: Social links and project links point to "#"
8. **No Image Optimization**: Using external Unsplash URLs, no local assets
9. **No Search**: No search functionality for projects
10. **No Filtering**: Projects can't be filtered by category or tags

## File Count Summary
- **Components**: 7 main components + 50+ UI components
- **Pages**: 2 (Index, NotFound)
- **Hooks**: 2 custom hooks
- **Configuration Files**: 8 (vite, tailwind, tsconfig, etc.)
