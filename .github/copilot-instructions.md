# Paccy AI Coding Instructions

## Project Overview
Paccy is a React-based machinery/service website. Currently early-stage with a Header component serving as the foundation. The project uses Tailwind CSS for styling and is building toward a full marketing/service site.

## Architecture & Patterns

### Component Structure
- **Location**: Components at root level (e.g., `Header.jsx`)
- **Pattern**: Functional React components with default exports
- **Styling**: Tailwind CSS utility classes (e.g., `bg-sky-800`, `text-white`, `py-4`)
- **Example**: `Header.jsx` - Sticky navigation header with responsive design (hidden on mobile, flex on md+)

### Key Design Choices
- **Responsiveness**: Mobile-first approach using Tailwind breakpoints (`hidden md:flex`)
- **Component Composition**: `Header` imports `Button` component (referenced but not yet visible)
- **Color Scheme**: Sky blue (`bg-sky-800`) with gray/yellow hover states
- **Layout**: Sticky header with `z-50` for proper stacking context

## Development Patterns

### Component Guidelines
1. Use functional components with arrow or standard function syntax
2. Export components as default exports: `export default ComponentName`
3. Apply Tailwind CSS directly in JSX className attributes
4. Use component composition (e.g., Button component in Header)
5. Maintain semantic HTML structure for accessibility

### Styling Conventions
- Tailwind utility classes only (no custom CSS files yet)
- Use responsive prefixes for mobile-first design (`md:` for medium and up)
- Consistent padding/spacing: `px-6 py-4` pattern for sections
- Use container class for max-width layout constraints

## Critical Next Steps (Not Yet Implemented)
- Create `Button.jsx` component (imported in Header but missing)
- Set up project build/dev environment (package.json, build tooling)
- Establish folder structure (components/, pages/, styles/, etc.)
- Create remaining page sections (About, Services, Contact pages)
- Add routing if this becomes a multi-page app

## External Dependencies & Setup
- **Framework**: React (imported in Header.jsx)
- **Styling**: Tailwind CSS (utility classes used throughout)
- **Build Tool**: Not yet configured (add vite, webpack, or create-react-app)
- **Node**: Assumed modern LTS version

## Commands (To Be Established)
Documentation pending project setup. Common React commands will include:
- `npm install` / `yarn install` - Install dependencies
- `npm run dev` / `yarn dev` - Development server
- `npm run build` - Production build
- `npm run lint` - Code linting (not yet configured)

## Files Reference
- `Header.jsx` - Main header/navigation component
- `README.md` - Generic project description (needs updates)
- `.github/copilot-instructions.md` - This file
