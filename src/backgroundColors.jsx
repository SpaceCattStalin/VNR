/**
 * Solid background colors for the scene.
 * Use .value (hex number) in <color attach="background" args={[color.value]} />
 */
export const BACKGROUND_COLORS = [

  // Neutrals
  { id: 'near-black', name: 'Near Black', value: 0x0a0a0a },
  { id: 'charcoal', name: 'Charcoal', value: 0x1a1a1a },
  { id: 'dark-gray', name: 'Dark Gray', value: 0x2d2d2d },
  { id: 'warm-gray', name: 'Warm Gray', value: 0x3d3835 },
  { id: 'cool-gray', name: 'Cool Gray', value: 0x2a2d33 },
  // Warm
  { id: 'warm-dark', name: 'Warm Dark', value: 0x2c2419 },
  { id: 'muted-brown', name: 'Muted Brown', value: 0x3e3229 },
  { id: 'soft-beige', name: 'Soft Beige', value: 0x4a4238 },
  { id: 'terracotta', name: 'Terracotta', value: 0x3d2c2a },
  // Cool
  { id: 'deep-blue', name: 'Deep Blue', value: 0x1a1f2e },
  { id: 'slate', name: 'Slate', value: 0x252a35 },
  { id: 'navy', name: 'Navy', value: 0x1e2433 },
  { id: 'dusty-blue', name: 'Dusty Blue', value: 0x2d3544 },
  // Soft / light
  { id: 'off-white', name: 'Off White', value: 0xf5f3ef },
  { id: 'warm-white', name: 'Warm White', value: 0xebe6df },
  { id: 'light-gray', name: 'Light Gray', value: 0xe8e6e3 },
  // Accent
  { id: 'deep-green', name: 'Deep Green', value: 0x1a2520 },
  { id: 'muted-olive', name: 'Muted Olive', value: 0x2d3026 },
  { id: 'soft-burgundy', name: 'Soft Burgundy', value: 0x2d2224 },
];

/** Best 4 backgrounds for the cup viewer: all dark, no white. Ready for 4 cup material sets per background later. */
export const BACKGROUND_COLORS_PRESET = [
  { id: 'charcoal', name: 'Charcoal', value: 0x1a1a1a },
  { id: 'warm-dark', name: 'Warm Dark', value: 0x2c2419 },
  { id: 'deep-blue', name: 'Deep Blue', value: 0x1a1f2e },
  { id: 'slate', name: 'Slate', value: 0x252a35 },
];
