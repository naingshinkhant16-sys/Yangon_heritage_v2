# Yangon Heritage StoryMap - Project TODO

## Phase 1: Source Migration
- [x] Copy heritage data files (heritageData.ts, heritageDataset.ts)
- [x] Copy Map component (Map.tsx)
- [x] Copy About page (AboutUs.tsx)
- [x] Copy hooks and utilities (useMobile.tsx, useComposition.ts, usePersistFn.ts)
- [x] Update index.css with deep gold and dark teal color palette

## Phase 2: Responsive Layout Implementation
- [x] Mobile bottom sheet for heritage sites list (under 768px)
- [x] Desktop side-by-side dashboard: 65% map, 35% sidebar (768px and above)
- [x] Implement responsive breakpoint detection
- [x] Ensure smooth transitions between mobile and desktop layouts

## Phase 3: Responsive Header
- [x] Mobile hamburger menu with StoryMap and About links
- [x] Desktop top-right navigation bar with StoryMap and About links
- [x] Ensure header is sticky and always accessible

## Phase 4: Typography & Bilingual Support
- [x] Fix overlapping Burmese and English text in cards
- [x] Adjust line-heights for bilingual readability
- [x] Apply proper vertical padding to card content
- [x] Test on both mobile and desktop viewports

## Phase 5: Search Bar & Map Controls
- [x] Implement full-width search bar in sidebar/bottom sheet
- [x] Ensure map controls float dynamically without overlapping text
- [x] Position info popups to never obscure text panels
- [x] Test floating element positioning on all viewport sizes

## Phase 6: Color Palette Implementation
- [x] Apply deep gold (#D4AF37 or similar) to headers and accents
- [x] Apply dark teal (#1B4D5C or similar) to secondary elements
- [x] Update button styles with new color scheme
- [x] Update card backgrounds and borders
- [x] Ensure consistent color application across all interactive elements

## Phase 7: Google Maps Integration
- [x] Verify Map.tsx component works with new scaffold
- [x] Add heritage site markers to map
- [x] Implement marker click handlers
- [x] Display info popups with site details
- [x] Ensure markers are visible and interactive

## Phase 8: Heritage Sites List
- [x] Display filtered heritage sites in sidebar/bottom sheet
- [x] Implement search functionality
- [x] Connect list items to map markers
- [x] Highlight selected site in both list and map

## Phase 9: Testing & Verification
- [x] Test responsive layout on mobile (< 768px) - via browser preview
- [x] Test responsive layout on desktop (>= 768px) - via browser preview
- [x] Verify bilingual text rendering - confirmed in sidebar
- [x] Check map controls positioning - default Google Maps controls
- [x] Verify search functionality - implemented and working
- [x] Test navigation links (StoryMap, About) - both links functional

## Phase 10: Deployment
- [x] Build and verify no errors
- [x] Create checkpoint
- [x] Deploy and provide live preview link
