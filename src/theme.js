// Shared design tokens for the portfolio.
// Plain JS constants — no CSS file, just import what you need.

export const colors = {
  cream: "#F7F0E4",       // page background — warm kraft-paper beige
  oat: "#EBDFC6",         // panel / card background
  oatDeep: "#DDCBA4",     // borders, dividers
  espresso: "#3A2415",    // primary text / headings
  coffee: "#6B4226",      // primary accent — buttons, icons
  coffeeDark: "#4E2F19",  // hover states
  caramel: "#A9713C",     // secondary accent — links, outlines
  gold: "#C9A063",        // highlight accent — underline, badge
};

// Dark companion palette — same brand family (espresso/coffee/gold),
// just inverted for a dark background. Same key names as `colors`
// so any component can swap `colors` for `darkColors` without
// rewriting which token it reads.
export const darkColors = {
  cream: "#1F1610",       // page background — dark roasted espresso
  oat: "#2B1F17",         // panel / card background
  oatDeep: "#3D2C1F",     // borders, dividers
  espresso: "#F3E9DC",    // primary text / headings — warm cream
  coffee: "#E8A33D",      // primary accent — buttons, icons (bright amber-gold)
  coffeeDark: "#C4842B",  // hover states
  caramel: "#D9A868",     // secondary accent — links, outlines
  gold: "#F0C989",        // highlight accent — underline, badge
};

export const fonts = {
  display: `'Fraunces', 'Georgia', serif`,
  body: `'Inter', 'Segoe UI', sans-serif`,
  mono: `'JetBrains Mono', 'Courier New', monospace`,
};

// Convenience: pick a palette by mode ("light" | "dark").
export const getTheme = (mode) => (mode === "dark" ? darkColors : colors);