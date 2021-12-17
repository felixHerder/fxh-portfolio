import { alpha } from "@theme-ui/color";
const colors = {
  darker: "#121217",
  dark: "#17171d",
  darkless: "#252429",
  darkgray: "#3d3c44",
  black: "#1f2d3d",
  steel: "#273444",
  slate: "#3c4858",
  muted: "#8492a6",
  smokedarker: "#beccda",
  smoke: "#e0e6ed",
  snow: "#eef1f6",
  white: "#fcfcfc",

  red: "#ec3750",
  orange: "#ff8c37",
  yellow: "#f1c40f",
  greenLighter: "#90e9ce",
  green: "#33d6a6",
  greenDarker: "#089168",
  greenDarkest: "#056145",
  cyan: "#5bc0de",
  blue: "#338eda",
  purple: "#a633d6",

  twitter: "#1da1f2",
  facebook: "#3b5998",
  instagram: "#e1306c",
};

const theme = {
  breakpoints: [32, 48, 64, 96, 128].map((w) => `${w}em`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [10, 16, 20, 24, 32, 48, 64, 96, 128, 160, 192],
  config: {
    initialColorModeName: "dark",
    useColorSchemeMediaQuery: false,
  },
  colors: {
    ...colors,
    text: colors.white,
    textAlt: colors.smoke,
    textTer: colors.smokedarker,
    primary: colors.green,
    background: colors.dark,
    elevatedMore: colors.darkgray,
    elevated: colors.darkless,
    sheet: colors.darkless,
    sunken: colors.darker,
    border: colors.darkless,
    placeholder: colors.slate,
    secondary: colors.muted,
    muted: colors.muted,
    accent: colors.cyan,
    gx1: colors.darkgray,
    gx2: colors.dark,
    gxt1: alpha(colors.darkless,0),
    gxt2: alpha(colors.darkless,1),
    gxc1: colors.greenLighter,
    gxc2: colors.greenDarker,
    modes: {
      light: {
        text: colors.black,
        textAlt: colors.steel,
        textTer: colors.slate,
        background: colors.smoke,
        elevatedMore: colors.white,
        elevated: colors.snow,
        sheet: colors.snow,
        sunken: colors.smokedarker,
        border: colors.smoke,
        placeholder: colors.muted,
        secondary: colors.slate,
        primary: colors.greenDarkest,
        muted: colors.slate,
        accent: colors.blue,
        gx1: colors.white,
        gx2: colors.smokedarker,
        gxt1: alpha(colors.snow,0),
        gxt2: alpha(colors.snow,1),
        gxc1: colors.green,
        gxc2: colors.greenDarker,
      },
    },
  },
  fonts: {
    heading: '"PT Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '"Overpass", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"SF Mono", "Roboto Mono", Menlo, Consolas, monospace',
  },
  lineHeights: {
    limit: 0.875,
    title: 1,
    heading: 1.325,
    subheading: 1.25,
    caption: 1.375,
    body: 1.5,
  },
  fontWeights: {
    light: 200,
    body: 400,
    bold: 700,
    heading: 700,
  },
  letterSpacings: {
    title: "-0.02em",
    headline: "0.02em",
  },
  sizes: {
    widePlus: 2048,
    wide: 1536,
    layoutPlus: 1200,
    layout: 1024,
    copyUltra: 980,
    copyPlus: 768,
    copy: 680,
    narrowPlus: 600,
    narrow: 512,
  },
  radii: {
    small: 4,
    default: 8,
    extra: 12,
    ultra: 16,
    circle: 99999,
  },
  shadows: {
    text: "0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)",
    small: "0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)",
    card: "0 4px 8px rgba(0, 0, 0, 0.125)",
    elevated: "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
  },
  text: {
    heading: {
      fontFamily: "body",
      color: "primary",
      fontSize: [3, 4, 5],
      fontWeight: "light",
      lineHeight: "heading",
    },
    ultratitle: {
      fontFamily: "heading",
      fontSize: [5, 6, 7],
      lineHeight: "limit",
      fontWeight: "bold",
      letterSpacing: "title",
    },
    title: {
      fontFamily: "heading",
      fontSize: [4, 5, 6],
      fontWeight: "bold",
      letterSpacing: "title",
      lineHeight: "title",
    },
    subtitle: {
      mt: 3,
      fontSize: [2, 3],
      fontWeight: "body",
      letterSpacing: "headline",
      lineHeight: "subheading",
    },
    headline: {
      variant: "text.heading",
      letterSpacing: "headline",
      lineHeight: "heading",
      fontSize: 4,
      mt: 3,
      mb: 3,
    },
    subheadline: {
      variant: "text.heading",
      letterSpacing: "headline",
      fontSize: 2,
      mt: 0,
      mb: 3,
    },
    eyebrow: {
      color: "muted",
      fontSize: [3, 4],
      fontWeight: "heading",
      letterSpacing: "headline",
      lineHeight: "subheading",
      textTransform: "uppercase",
      mt: 0,
      mb: 2,
    },
    lead: {
      fontSize: [2, 3],
      my: [2, 3],
    },
    caption: {
      color: "muted",
      fontWeight: "medium",
      letterSpacing: "headline",
      lineHeight: "caption",
    },
  },
  alerts: {
    primary: {
      borderRadius: "default",
      bg: "orange",
      color: "background",
      fontWeight: "body",
    },
  },
  badges: {
    primary: {
      borderRadius: "circle",
      bg: "secondary",
      color: "background",
      px: 3,
      py: 1,
      fontSize: 1,
    },
    pill: {
      borderRadius: "circle",
      px: 3,
      py: 1,
      fontSize: 1,
    },
    outline: {
      variant: "badges.pill",
      bg: "transparent",
      border: "1px solid",
      borderColor: "currentColor",
      fontWeight: "body",
    },
  },
  buttons: {
    primary: {
      cursor: "pointer",
      fontFamily: "inherit",
      fontWeight: "bold",
      borderRadius: "circle",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "none",
      letterSpacing: "headline",
      WebkitTapHighlightColor: "transparent",
      transition: " box-shadow .2s ease",
      ":focus,:hover": {
        boxShadow: "elevated",
      },
    },
    lg: {
      variant: "buttons.primary",
      fontSize: 3,
      lineHeight: "title",
      px: 4,
      py: 3,
    },
    outline: {
      variant: "buttons.primary",
      boxShadow: "none",
      bg: "transparent",
      color: "secondary",
      border: "2px solid",
      borderColor: "secondary",
      ":focus,:hover": {
        color: "primary",
        borderColor: "primary",
      },
    },
    outlineLg: {
      variant: "buttons.primary",
      bg: "transparent",
      color: "primary",
      border: "2px solid currentColor",
      lineHeight: "title",
      fontSize: 3,
      px: 4,
      py: 3,
    },
    cta: {
      variant: "buttons.primary",
      boxShadow: "none",
      fontSize: 2,
      backgroundImage: (t) => t.util.gx("green", "greenDarker"),
    },
    ctaLg: {
      variant: "buttons.primary",
      lineHeight: "title",
      fontSize: 3,
      px: 4,
      py: 3,
      backgroundImage: (t) => t.util.gx("orange", "red"),
    },
  },
  cards: {
    primary: {
      bg: "elevated",
      color: "text",
      p: [3, 4],
      borderRadius: "small",
      boxShadow: "none",
      overflow: "hidden",
    },
    sunken: {
      variant: "cards.primary",
      bg: "sunken",
    },
    interactive: {
      variant: "cards.primary",
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
      transition: "transform .125s ease-in-out, box-shadow .125s ease-in-out",
      ":hover,:focus": {
        transform: "scale(1.0625)",
        boxShadow: "elevated",
      },
    },
    translucent: null,
    translucentDark: null,
  },
  forms: {
    input: {
      bg: "elevated",
      color: "text",
      fontFamily: "inherit",
      borderRadius: "base",
      border: 0,
      "::-webkit-input-placeholder": { color: "placeholder" },
      "::-moz-placeholder": { color: "placeholder" },
      ":-ms-input-placeholder": { color: "placeholder" },
      '&[type="search"]::-webkit-search-decoration': { display: "none" },
    },
    textarea: { variant: "forms.input" },
    select: { variant: "forms.input" },
    label: {
      color: "text",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      lineHeight: "caption",
      fontSize: 2,
    },
    labelHoriz: {
      color: "text",
      display: "flex",
      alignItems: "center",
      textAlign: "left",
      lineHeight: "caption",
      fontSize: 2,
      svg: { color: "muted" },
    },
    slider: {
      color: "primary",
    },
    hidden: {
      position: "absolute",
      height: "1px",
      width: "1px",
      overflow: "hidden",
      clip: "rect(1px, 1px, 1px, 1px)",
      whiteSpace: "nowrap",
    },
  },
  layout: {
    container: {
      maxWidth: ["layout", null, "layoutPlus"],
      width: "100%",
      mx: "auto",
      px: 3,
    },
    wide: {
      variant: "layout.container",
      maxWidth: ["layout", null, "wide"],
    },
    copy: {
      variant: "layout.container",
      maxWidth: ["copy", null, "copyPlus"],
    },
    narrow: {
      variant: "layout.container",
      maxWidth: ["narrow", null, "narrowPlus"],
    },
  },
  scrollSpy: {
    hidden: {
      color: "muted",
      textDecoration: "none",
      transition: "all .2s ease",
      position: "relative",
      ":hover,:focus": {
        color: "primary",
        cursor: "pointer",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        height: 1,
        bottom: 0,
        left: "10%",
        backgroundColor: "muted",
        width: "0%",
        transition: "all .2s ease",
      },
    },
    active: {
      variant: "scrollSpy.hidden",
      "&::after": {
        content: '""',
        position: "absolute",
        height: 1,
        bottom: 0,
        left: "10%",
        backgroundColor: "muted",
        width: "80%",
        transition: "all .2s ease",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "text",
      margin: 0,
      minHeight: "100vh",
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      scrollBehavior: "smooth",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontWeight: "body",
      lineHeight: "body",
      my: 3,
    },
    img: {
      maxWidth: "100%",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "border",
    },
    a: {
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus": {
        color: "primary",
        cursor: "pointer",
      },
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "sunken",
      overflow: "auto",
      borderRadius: "default",
      code: {
        color: "inherit",
        mx: 0,
        px: 0,
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
      color: "purple",
      bg: "sunken",
      borderRadius: "small",
      mx: 1,
      px: 1,
    },
    "p > code, li > code": {
      color: "purple",
      fontSize: "0.875em",
    },
    "p > a > code, li > a > code": {
      color: "red",
      fontSize: "0.875em",
    },
    li: {
      my: 2,
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "border",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
  },
  util: Object.create(null),
};

theme.util = {
  motion: "@media (prefers-reduced-motion: no-preference)",
  reduceMotion: "@media (prefers-reduced-motion: reduce)",
  reduceTransparency: "@media (prefers-reduced-transparency: reduce)",
  supportsClipText: "@supports (-webkit-background-clip: text)",
  supportsBackdrop: "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)",
  cx: null,
  gx: null,
  gx2: null,
  gxText: null,
};
theme.util.cx = (c) => theme.colors[c] || c;
theme.util.gx = (from, to) => `radial-gradient(
  ellipse farthest-corner at top left,
  ${theme.util.cx(from)},
  ${theme.util.cx(to)}
)`;
theme.util.gx2 = (from, to) => `linear-gradient(
  to bottom,
  ${theme.util.cx(from)},
  ${theme.util.cx(to)} 99%
)`;
theme.util.gxText = (from, to) => ({
  color: theme.util.cx(to),
  [theme.util.supportsClipText]: {
    backgroundImage: theme.util.gx(from, to),
    backgroundRepeat: "no-repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
});

theme.cards.translucent = {
  // variant: 'cards.primary',
  backgroundColor: "rgba(255, 255, 255, 0.98)",
  color: "text",
  boxShadow: "none",
  [theme.util.supportsBackdrop]: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    backdropFilter: "saturate(180%) blur(20px)",
    WebkitBackdropFilter: "saturate(180%) blur(20px)",
  },
  [theme.util.reduceTransparency]: {
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
  },
};
theme.cards.translucentDark = {
  // variant: 'cards.primary',
  backgroundColor: "rgba(0, 0, 0, 0.875)",
  color: "white",
  boxShadow: "none",
  [theme.util.supportsBackdrop]: {
    backgroundColor: "rgba(0, 0, 0, 0.625)",
    backdropFilter: "saturate(180%) blur(16px)",
    WebkitBackdropFilter: "saturate(180%) blur(16px)",
  },
  [theme.util.reduceTransparency]: {
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
  },
};

export default theme;
