# Repeatable Test Plan

This document outlines a comprehensive test plan that can be executed after any refactoring or changes to verify the website functionality.

## Prerequisites

1. Node.js and npm installed
2. Dependencies installed: `npm install`
3. Development server can start: `npm run dev`
4. Build succeeds: `npm run build`

## Test Execution Order

### Phase 1: Build & Lint Tests

#### Test 1.1: Linter Check
```bash
npm run lint
```
**Expected**: No linter errors
**Failure Criteria**: Any ESLint errors or warnings

#### Test 1.2: TypeScript Compilation
```bash
npx tsc --noEmit
```
**Expected**: No TypeScript errors
**Failure Criteria**: Any type errors

#### Test 1.3: Production Build
```bash
npm run build
```
**Expected**: Build completes successfully, `dist/` directory created
**Failure Criteria**: Build errors or warnings

### Phase 2: Component Structure Tests

#### Test 2.1: Component Imports
**Action**: Check that all component imports resolve correctly
**Files to verify**:
- `src/pages/Index.tsx` imports from `@/components/layout/` and `@/components/sections/`
- `src/components/sections/ProjectsSection.tsx` imports from `@/components/features/`
- All imports use `@/` path alias

**Expected**: No import errors in IDE/linter
**Failure Criteria**: Unresolved imports or path errors

#### Test 2.2: Directory Structure
**Action**: Verify directory structure exists
**Expected directories**:
```
src/
├── components/
│   ├── layout/        (Header.tsx, Footer.tsx)
│   ├── sections/      (HeroSection, ProjectsSection, AboutSection, ContactSection)
│   ├── features/      (ProjectCard.tsx, ProjectFilter.tsx)
│   └── ui/            (shadcn/ui components)
├── data/              (projects.ts, skills.ts, socialLinks.ts, navLinks.ts, index.ts)
├── types/             (project.ts, skill.ts, social.ts, navigation.ts, index.ts)
└── pages/             (Index.tsx, ProjectDetail.tsx, NotFound.tsx)
```

**Failure Criteria**: Missing directories or files

### Phase 3: Data & Types Tests

#### Test 3.1: Data Exports
**Action**: Verify all data exports work
**Check**:
- `import { projects } from "@/data"` works
- `import { skills } from "@/data"` works
- `import { socialLinks } from "@/data"` works
- `import { navLinks } from "@/data"` works

**Expected**: All imports resolve without errors
**Failure Criteria**: Import errors

#### Test 3.2: Type Exports
**Action**: Verify all type exports work
**Check**:
- `import { Project } from "@/types"` works
- `import { Skill } from "@/types"` works
- `import { SocialLink } from "@/types"` works
- `import { NavLink } from "@/types"` works

**Expected**: All type imports resolve
**Failure Criteria**: Type import errors

#### Test 3.3: Type Safety
**Action**: Verify components use correct types
**Check**:
- `ProjectCard` accepts `Project` type
- Data arrays match their type definitions
- No `any` types used (unless necessary)

**Expected**: Full type safety maintained
**Failure Criteria**: Type mismatches or `any` usage

### Phase 4: Routing Tests

#### Test 4.1: Route Configuration
**Action**: Verify routes are configured
**Check** `src/App.tsx`:
- Route `/` exists and renders `Index`
- Route `/projects/:slug` exists and renders `ProjectDetail`
- Route `*` exists and renders `NotFound`

**Expected**: All routes configured
**Failure Criteria**: Missing routes

#### Test 4.2: 404.html for GitHub Pages
**Action**: Verify SPA routing support
**Check**: `public/404.html` exists
**Expected**: File exists with redirect script
**Failure Criteria**: File missing

#### Test 4.3: Navigation Links
**Action**: Test navigation functionality
**Manual test**:
1. Start dev server: `npm run dev`
2. Click "Projects" in header → should scroll to projects section
3. Click project card → should navigate to `/projects/[slug]`
4. Click "Back to Projects" → should return to home with hash

**Expected**: All navigation works
**Failure Criteria**: Broken links or navigation errors

### Phase 5: Feature Tests

#### Test 5.1: Project Filtering
**Action**: Test filter functionality
**Manual test**:
1. Navigate to projects section
2. Search for "React" → should filter projects
3. Select "digital" category → should show only digital projects
4. Select a tag → should filter by tag
5. Click "Clear all filters" → should reset

**Expected**: All filtering works correctly
**Failure Criteria**: Filters don't work or cause errors

#### Test 5.2: Project Detail Page
**Action**: Test project detail view
**Manual test**:
1. Click on any project card
2. Verify project detail page loads
3. Check that project data displays correctly
4. Test "Back to Projects" button
5. Test external links (if configured)

**Expected**: Detail page works correctly
**Failure Criteria**: Page doesn't load or shows errors

#### Test 5.3: Responsive Design
**Action**: Test mobile/tablet/desktop views
**Manual test**:
1. Open dev tools, test different viewport sizes
2. Check mobile menu works
3. Verify grid layouts adapt
4. Check text readability

**Expected**: Responsive design works
**Failure Criteria**: Layout breaks on mobile/tablet

### Phase 6: Asset Tests

#### Test 6.1: Image Paths
**Action**: Verify image references
**Check**: All project images use `/images/projects/` paths
**Expected**: Paths point to local assets
**Failure Criteria**: External URLs still used (except temporarily)

#### Test 6.2: Asset Organization
**Action**: Verify asset directories exist
**Check**:
- `public/images/projects/` exists
- `public/images/about/` exists
- `public/images/og/` exists
- `public/images/icons/` exists

**Expected**: All directories exist
**Failure Criteria**: Missing directories

### Phase 7: Integration Tests

#### Test 7.1: Full Page Load
**Action**: Test complete page functionality
**Manual test**:
1. Start dev server
2. Navigate to `/`
3. Scroll through all sections
4. Test all interactive elements
5. Check console for errors

**Expected**: No console errors, all features work
**Failure Criteria**: Errors in console or broken features

#### Test 7.2: Build & Preview
**Action**: Test production build
**Steps**:
1. Run `npm run build`
2. Run `npm run preview`
3. Test all functionality in preview
4. Check for build-time errors

**Expected**: Production build works
**Failure Criteria**: Build errors or preview issues

## Automated Test Script

Create a test script that can be run:

```bash
# test.sh or test.ps1
#!/bin/bash

echo "Running Test Plan..."

echo "1. Linter Check..."
npm run lint || exit 1

echo "2. TypeScript Check..."
npx tsc --noEmit || exit 1

echo "3. Build Test..."
npm run build || exit 1

echo "All automated tests passed!"
```

## Manual Test Checklist

- [ ] Home page loads without errors
- [ ] Header navigation works (Projects, About, Contact)
- [ ] Mobile menu opens and closes
- [ ] Hero section displays correctly
- [ ] Projects section shows all projects
- [ ] Project filtering works (search, category, tags)
- [ ] Project cards are clickable
- [ ] Project detail pages load correctly
- [ ] Back navigation works
- [ ] About section displays skills
- [ ] Contact section shows email and social links
- [ ] Footer displays correctly
- [ ] 404 page works for invalid routes
- [ ] Responsive design works on mobile/tablet
- [ ] No console errors
- [ ] Images load (or show placeholders gracefully)

## Performance Tests

#### Test P.1: Build Size
**Action**: Check build output size
```bash
npm run build
du -sh dist/
```
**Expected**: Reasonable size (< 5MB for initial load)
**Failure Criteria**: Excessive bundle size

#### Test P.2: Load Time
**Action**: Test initial page load
**Tool**: Chrome DevTools Lighthouse
**Expected**: Good performance score (> 80)
**Failure Criteria**: Poor performance

## Regression Tests

After any changes, verify:
1. All previous tests still pass
2. No new console errors
3. No broken imports
4. Type safety maintained
5. Build still succeeds

## Known Issues / Blockers

### Current Blockers:
1. **Images not downloaded**: Project images need to be manually added to `public/images/projects/`
   - **Workaround**: Site will show broken images until files are added
   - **Solution**: Download images from Unsplash URLs documented in `IMAGE_SETUP.md`

### Future Enhancements:
1. Add unit tests for filter logic
2. Add E2E tests with Playwright/Cypress
3. Add visual regression tests
4. Add performance benchmarks

## Test Execution Log

When running tests, document results:

```
Date: [DATE]
Tester: [NAME]
Results:
- Phase 1: ✅/❌
- Phase 2: ✅/❌
- Phase 3: ✅/❌
- Phase 4: ✅/❌
- Phase 5: ✅/❌
- Phase 6: ✅/❌
- Phase 7: ✅/❌

Issues Found:
- [List any issues]

Blockers:
- [List any blockers]
```
