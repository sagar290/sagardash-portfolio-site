# Aceternity UI Integration for Portfolio

## Overview
This portfolio has been successfully integrated with Aceternity UI components to enhance the visual design with modern, animated effects.

## What Was Installed

### Dependencies
- **Tailwind CSS v3.4.0** - Utility-first CSS framework
- **@astrojs/tailwind** - Astro integration for Tailwind CSS
- **PostCSS & Autoprefixer** - CSS processing
- **framer-motion** - Animation library
- **clsx & tailwind-merge** - Utility for conditional class names

## Components Created

### 1. `Sparkles.astro`
A particle effect component that adds animated sparkles to any container.

**Usage:**
```astro
<Sparkles 
  particleColor="var(--brand-color)" 
  size={8} 
  particleDensity={100}
/>
```

**Props:**
- `size` (default: 10) - Size of sparkle particles
- `minDelay` (default: 0.4) - Minimum animation delay
- `maxDelay` (default: 1.2) - Maximum animation delay
- `minDuration` (default: 2) - Minimum animation duration
- `maxDuration` (default: 3) - Maximum animation duration
- `particleColor` (default: "#ffffff") - Color of particles
- `particleDensity` (default: 100) - Density of particles

### 2. `MovingBorder.astro`
Creates a card with an animated moving border gradient effect.

**Usage:**
```astro
<MovingBorder className="p-4">
  <div>Your content here</div>
</MovingBorder>
```

### 3. `HeroHighlight.astro`
A hero section wrapper with animated gradient blobs in the background.

**Usage:**
```astro
<HeroHighlight class="section hero">
  <div>Your hero content</div>
</HeroHighlight>
```

### 4. `MagicButton.astro`
A stunning button with a spinning gradient border effect.

**Usage (as button):**
```astro
<MagicButton>Click Me</MagicButton>
```

**Usage (as link):**
```astro
<MagicButton href="/path" target="_blank">Link Button</MagicButton>
```

**Props:**
- `href` - Makes it a link if provided
- `target` - Target attribute for links
- `rel` - Rel attribute for links
- `icon` - Icon to display
- `position` - Icon position: "left" or "right" (default: "right")
- `className` - Additional CSS classes

## Usage in the Portfolio

### Hero Section
- Wrapped with `HeroHighlight` for animated gradient background
- Buttons use `MagicButton` component
- Avatar has `Sparkles` effect overlay

### Contact Section
- Submit button uses `MagicButton` component

## Configuration Files

### `tailwind.config.mjs`
Configured with:
- Content paths for scanning
- Dark mode support via class
- Custom colors mapped to CSS variables
- Custom animations (accordion, shimmer)

### `astro.config.mjs`
- Added `@astrojs/tailwind` integration

### `src/styles/global.css`
- Added Tailwind directives at the top
- Preserves existing CSS variables for theming

## Utility Function

### `src/lib/utils.ts`
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

This utility helps merge Tailwind classes intelligently.

## Theme Integration

The Aceternity UI components work seamlessly with the existing dark mode system using CSS variables:
- `--bg-color` - Background color
- `--text-color` - Text color
- `--brand-color` - Primary accent color
- `--card-bg` - Card background
- `--border-color` - Border color

## Future Enhancements

Potential additional components to add:
- `BentoGrid` - Grid layout component
- `TextGenerateEffect` - Text animation effect
- `InfiniteMovingCards` - Infinite scroll cards
- `BackgroundBeams` - Animated background beams
- `LampEffect` - Lamp/glow effect
- `Card3D` - 3D card hover effect

## Development

Run the development server:
```bash
npm run dev
```

The site is available at `http://localhost:4321/`