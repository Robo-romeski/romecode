# iPad Layout Fixes - Task List

## Priority 1 - Critical Layout Issues

### Task 1: Fix Our Expertise Section Desktop/Mobile Overlap
**Problem:** Both desktop and mobile carousels are visible simultaneously on tablet viewports (showing 12 cards instead of 6)
**Solution:**
- [ ] Update desktop version classes from `hidden lg:block` to remain as is
- [ ] Update mobile version to use `lg:hidden` properly
- [ ] Add tablet-specific carousel with `hidden md:block lg:hidden` showing 2-3 cards
- [ ] Test at 768px, 820px, and 1024px breakpoints

### Task 2: Fix Hero Section Background Image
**Problem:** Mobile background image is used on iPad but layout is too spacious
**Solution:**
- [ ] Change mobile background div from `md:hidden` to `sm:hidden`  
- [ ] Change desktop background div from `hidden md:block` to `hidden sm:block`
- [ ] Consider adding tablet-specific background image if needed
- [ ] Adjust text container spacing for tablet viewport

## Priority 2 - Layout Balance Issues

### Task 3: Optimize Why Choose Us Grid
**Problem:** 2x2 grid is too cramped on iPad portrait mode
**Solution:**
- [ ] Keep single column for < 768px
- [ ] Add tablet layout: `grid-cols-1 md:grid-cols-2 lg:grid-cols-2`
- [ ] Adjust card padding: `p-3 md:p-4 lg:p-3`
- [ ] Test card readability at 768px and 820px

### Task 4: Fix Cloud Technology Section Balance
**Problem:** Image takes too much space relative to content cards on tablet
**Solution:**
- [ ] Stack vertically on tablets: add `flex-col md:flex-col lg:flex-row`
- [ ] Adjust image sizing for tablet: `max-w-[300px] md:max-w-[350px] lg:max-w-none`
- [ ] Center align content for tablet view
- [ ] Test visual balance at tablet breakpoints

### Task 5: Fix Navigation Arrows Positioning
**Problem:** Carousel arrows with negative margins may go off-screen
**Solution:**
- [ ] Update Our Expertise arrows: `left-2 right-2 md:left-4 md:right-4 lg:left-[-60px] lg:right-[-60px]`
- [ ] Apply same fix to Track Record section if present
- [ ] Ensure arrows are always visible and tappable on touch devices
- [ ] Add hover states for better UX

## Priority 3 - Spacing and General Improvements

### Task 6: Optimize Footer for Tablets
**Problem:** 4-column layout is too cramped on iPad portrait
**Solution:**
- [ ] Update grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- [ ] Adjust spacing between sections
- [ ] Center align content on smaller viewports
- [ ] Test footer links accessibility on touch devices

### Task 7: Add Tablet-Specific Spacing
**Problem:** Same padding/margins used across all screen sizes
**Solution:**
- [ ] Update section padding: `px-4 md:px-6 lg:px-0`
- [ ] Update section margins: `mt-10 md:mt-14 lg:mt-28`
- [ ] Review all sections for consistent tablet spacing
- [ ] Create spacing variables for consistency

### Task 8: Implement Comprehensive Tablet Breakpoint
**Problem:** No specific tablet optimization between mobile and desktop
**Solution:**
- [ ] Audit all components for tablet-specific needs
- [ ] Add `md:` prefixed classes throughout (768px-1023px)
- [ ] Create tablet-specific layouts where beneficial
- [ ] Document breakpoint strategy for future development

## Testing Checklist

After implementing each task, test at these specific viewports:
- [ ] 768x1024 (iPad Portrait)
- [ ] 1024x768 (iPad Landscape)
- [ ] 820x1180 (iPad Air Portrait)
- [ ] 1180x820 (iPad Air Landscape)
- [ ] 834x1194 (iPad Pro 11" Portrait)
- [ ] 1024x1366 (iPad Pro 12.9" Portrait)

## Implementation Order

1. Start with Task 1 (Our Expertise) - Most visible issue
2. Then Task 2 (Hero Section) - First thing users see
3. Follow priority order for remaining tasks
4. Run full testing checklist after all fixes

## Success Criteria

- No overlapping sections on any iPad viewport
- Consistent spacing and alignment across all tablet sizes
- All interactive elements easily tappable
- No horizontal scroll on any viewport
- Visual hierarchy maintained across all breakpoints 