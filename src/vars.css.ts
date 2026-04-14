import { globalStyle } from "@vanilla-extract/css";
// Utility to convert kebab-case or snake_case to camelCase
function toCamelCase(str: string) {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
}
const oneRem = "1rem";
const threeQuarter = "0.75rem";
const halfRem = "0.5rem";
const quarterRem = "0.25rem";
const oneHalfRem = "1.5rem";
const doubleRem = "2rem";

const sizes = [
  { name: "", prefix: "", value: oneRem },
  { name: "075", prefix: "-", value: threeQuarter },
  { name: "050", prefix: "-", value: halfRem },
  { name: "025", prefix: "-", value: quarterRem },
  { name: "150", prefix: "-", value: oneHalfRem },
  { name: "200", prefix: "-", value: doubleRem },
];

const paddings: Record<string, string> = {};
const margins: Record<string, string> = {};
const borderVars: Record<string, string> = {
  "--outline-border-width": "1px",
  "--outline-border-style": "solid",
  "--outline-border-color": "#dee2e6",
  "--outline-border-color-translucent": "rgba(0, 0, 0, 0.175)",
  "--outline-border-radius-pill": "50rem",
};

const cssVarNames: Record<string, string> = {};

Object.entries(borderVars).forEach(([key, value]) => {
  const cssVarName = toCamelCase(key.replace("--outline-", ""));
  cssVarNames[cssVarName] = key;
});

sizes.forEach(({ name, prefix, value }) => {
  paddings[`--outline-padding${prefix}${name}`] = value;
  margins[`--outline-margin${prefix}${name}`] = value;
  borderVars[`--outline-border-radius${prefix}${name}`] = value;

  // Store CSS variable names for potential future use
  cssVarNames[`padding${name}`] = `--outline-padding${prefix}${name}`;
  cssVarNames[`margin${name}`] = `--outline-margin${prefix}${name}`;
  cssVarNames[`bordeRadius${name}`] = `--outline-border-radius${prefix}${name}`;
});



const bodyVars: Record<string, string> = {
  "--outline-body-font-size": oneRem,
  "--outline-body-line-height": oneHalfRem,
  "--outline-body-font-family":
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  "--outline-body-font-weight": "400",
  "--outline-body-color": "#212529",
  "--outline-body-color-rgb": "33, 37, 41",
  "--outline-body-background-color": "#fff",
  '--outline-body-background-color-rgb': "255, 255, 255",
  };

Object.entries(bodyVars).forEach(([key, value]) => {
  const cssVarName = toCamelCase(key.replace("--outline-", ""));
  cssVarNames[cssVarName] = key;
});

const buttonVars: Record<string, string> = {
  "--outline-button-padding":
    "var(--outline-padding-050) var(--outline-padding)",
};

Object.entries(buttonVars).forEach(([key, value]) => {
  const cssVarName = toCamelCase(key.replace("--outline-", ""));

  cssVarNames[cssVarName] = key;
});

globalStyle(":root", {
  ...paddings,
  ...margins,
  ...borderVars,
  ...bodyVars,
  ...buttonVars,
});

export const cssVars = Object.fromEntries(
  Object.entries(cssVarNames).map(([key, value]) => [key, `var(${value})`])
);
export const sizeVars = {
  oneRem,
  threeQuarter,
  halfRem,
  quarterRem,
  oneHalfRem,
  doubleRem,
};
