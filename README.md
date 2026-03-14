# Coffee Smoke (React Three Fiber)

React Three Fiber port of the Coffee Smoke Three.js project.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy assets from the original project into `public/`:
   - `public/table/wood_table_diff_1k.jpg` (floor texture)
   - `public/Cup1.glb` (cup model)
   - `public/perlin.png` (smoke shader texture)

3. Run dev server:
   ```bash
   npm run dev
   ```

## Stack

- React 18
- Vite
- Three.js
- @react-three/fiber
- @react-three/drei
- vite-plugin-glsl (for shaders)
