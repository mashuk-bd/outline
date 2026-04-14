import { globalStyle } from "@vanilla-extract/css";
import { cssVars } from "./vars.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle(":root", {
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      scrollBehavior: "smooth",
    },
  },
});

globalStyle("body", {
  margin: 0,
  fontFamily: cssVars.bodyFontFamily,
  fontSize: cssVars.bodyFontSize,
  lineHeight: cssVars.bodyLineHeight,
  fontWeight: cssVars.bodyFontWeight,
  backgroundColor: cssVars.bodyBackgroundColor,
  color: cssVars.bodyColor,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTextSizeAdjust: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
});

globalStyle("hr", {
  margin: "1rem 0",
  color: "inherit",
  border: 0,
  borderTop: `${cssVars.borderWidth} solid`,
  opacity: 0.25,
});

globalStyle("h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6", {
  margin: "0 0 0.5rem 0",
  fontWeight: "500",
  lineHeight: "1.2",
});

globalStyle("h1, .h1", {
  fontSize: "calc(1.375rem + 1.5vw)",
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "2.5rem",
    },
  },
});
globalStyle("h2, .h2", {
  fontSize: "calc(1.325rem + 0.9vw)",
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "2rem",
    },
  },
});
globalStyle("h3, .h3", {
  fontSize: "calc(1.3rem + 0.6vw)",
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "1.75rem",
    },
  },
});
globalStyle("h4, .h4", {
  fontSize: "calc(1.275rem + 0.3vw)",
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "1.5rem",
    },
  },
});
globalStyle("h5, .h5", {
  fontSize: "1.25rem",
});
globalStyle("h6, .h6", {
  fontSize: "1rem",
});
globalStyle("p", {
  margin: "0 0 1rem 0",
});

globalStyle("abbr[title]", {
  textDecoration: "underline dotted",
  cursor: "help",
  WebkitTextDecorationLine: "underline dotted",
  textDecorationLine: "underline dotted",
  WebkitTextDecorationSkip: "none",
  textDecorationSkipInk: "none",
});

globalStyle("ol, ul", {
  margin: "0 0 1rem 0",
  paddingLeft: "2rem",
});
globalStyle("ol ol, ul ul, ol ul, ul ol", {
  marginBottom: 0,
});
globalStyle("dl", {
  marginTop: 0,
  marginBottom: "1rem",
});
globalStyle("dt", {
  fontWeight: "700",
});
globalStyle("dd", {
  marginBottom: "0.5rem",
  marginLeft: "0",
});

globalStyle("blockquote", {
  margin: "0 0 1rem",
});
globalStyle("blockquote p:last-child", {
  marginBottom: 0,
});

globalStyle("b, strong", {
  fontWeight: "bolder",
});

globalStyle("small .small", {
  fontSize: "0.875em",
});
globalStyle("mark .mark", {
  padding: "0.1875em",
  color: cssVars.markColor,
  backgroundColor: cssVars.markBackgroundColor,
});

globalStyle("sub, sup", {
  fontSize: "0.75em",
  lineHeight: 0,
  position: "relative",
  verticalAlign: "baseline",
});
globalStyle("sub", {
  bottom: "-0.25em",
});
globalStyle("sup", {
  top: "-0.5em",
});

globalStyle("a", {
  color: cssVars.linkColor,
  textDecoration: "underline",
  backgroundColor: "transparent",
  WebkitTextDecorationSkip: "objects",
  textDecorationSkip: "objects",
});
globalStyle("a:hover", {
  color: cssVars.linkHoverColor,
});
globalStyle("a:not([href]):not([class]), a:not([href]):not([class]):hover", {
  color: "inherit",
  textDecoration: "none",
});
globalStyle("pre, code, kbd, samp", {
  fontFamily: cssVars.monospaceFontFamily,
  fontSize: "1em",
});
globalStyle("pre", {
  display: "block",
  overflow: "auto",
  marginTop: "0",
  marginBottom: "1rem",
  fontSize: "0.875em",
});

globalStyle("pre code", {
  fontSize: "inherit",
  color: "inherit",
  wordBreak: "normal",
});
globalStyle("code", {
  fontSize: "0.875em",
  color: cssVars.codeColor,
  wordBreak: "break-word",
});
globalStyle("a > code", {
  color: "inherit",
});
globalStyle("kbd", {
  padding: "0.1875rem 0.375rem",
  fontSize: "0.875em",
  color: cssVars.kbdColor,
  backgroundColor: cssVars.kbdBackgroundColor,
});
globalStyle("kbd kbd", {
  padding: "0",
  fontSize: "1em",
});
globalStyle("figure", {
  margin: "0 0 1rem 0",
});
globalStyle("img, svg", {
  verticalAlign: "middle",
});
globalStyle("table", {
  borderCollapse: "collapse",
});
globalStyle("caption", {
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  color: cssVars.captionColor,
  textAlign: "left",
});
globalStyle("th", {
  textAlign: "inherit",
});
globalStyle("th", {
  textAlign: "-webkit-match-parent",
});
globalStyle("thead, tbody, tfoot, tr, th, td", {
  borderColor: "inherit",
  borderStyle: "solid",
  borderWidth: "0",
});
globalStyle("label", {
  display: "inline-block",
});

globalStyle("button", {
  borderRadius: cssVars.borderRadius,
});

globalStyle("button:focus:not(:focus-visible)", {
  outline: "0",
});
globalStyle("input, button, select, optgroup, textarea", {
  margin: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
});
globalStyle("button, select", {
  textTransform: "none",
});
globalStyle("[role=button]", {
  WebkitAppearance: "button",
  cursor: "pointer",
});
globalStyle("select", {
  wordWrap: "normal",
});
globalStyle("select:disabled", {
  opacity: "1",
});
globalStyle(
  "[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator",
  {
    display: "none !important",
  }
);

globalStyle("button, [type=button], [type=reset], [type=submit]", {
  WebkitAppearance: "button",
});
globalStyle(
  "button:not(:disabled), [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled)",
  {
    cursor: "pointer",
  }
);
globalStyle("::-moz-focus-inner", {
  padding: "0",
  borderStyle: "none",
});
globalStyle("textarea", {
  resize: "vertical",
});
globalStyle("fieldset", {
  minWidth: "0",
  padding: "0",
  margin: "0",
  border: "0",
});
globalStyle("legend", {
  float: "left",
  width: "100%",
  maxWidth: "100%",
  padding: "0",
  marginBottom: "0.5rem",
  fontSize: "calc(1.275rem + 0.3vw)",
  lineHeight: "inherit",
  color: "inherit",
  whiteSpace: "normal",
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "1.5rem",
    },
  },
});
globalStyle("legend + *", {
  clear: "left",
});
globalStyle(
  "::-webkit-datetime-edit-fields-wrapper, ::-webkit-datetime-edit-text, ::-webkit-datetime-edit-minute, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-year-field, ::-webkit-color-swatch-wrapper",
  {
    padding: "0",
  }
);
globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  height: "auto",
});
globalStyle("[type=search]", {
  WebkitAppearance: "textfield",
  outlineOffset: "-2px",
});
globalStyle("[type=search]::-webkit-search-decoration", {
  cursor: "pointer",
  filter: "grayscale(1)",
});
globalStyle("::-webkit-search-decoration", {
  WebkitAppearance: "none",
});
globalStyle("::-webkit-file-upload-button, ::file-selector-button", {
  font: "inherit",
  WebkitAppearance: "button",
});
globalStyle("output", {
  display: "inline-block",
});
globalStyle("iframe", {
  border: "0",
});
globalStyle("summary", {
  display: "list-item",
  cursor: "pointer",
});
globalStyle("progress", {
  verticalAlign: "baseline",
});
globalStyle("[hidden]", {
  display: "none !important",
});
globalStyle(".list-unstyled", {
  listStyle: "none",
  paddingLeft: "0",
});
globalStyle(".list-inline", {
  listStyle: "none",
  paddingLeft: "0",
});
