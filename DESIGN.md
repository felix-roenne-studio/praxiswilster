---
name: Frauenarztpraxis Dr. Wendrich-Rönne
description: Gynecology practice information site for Wilster. Clinical clarity, no frills.
colors:
  praxis-blau: "#0891B2"
  praxis-blau-deep: "#0E7490"
  kieferngruen: "#134E4A"
  gruen-mid: "#1F5F5B"
  gruen-light: "#4A8C87"
  teal-hell: "#F0FDFA"
  teal-section: "#E6F7F5"
  grenzlinie: "#B2DDD9"
  weiss: "#ffffff"
  gruener-akzent: "#16A34A"
typography:
  display:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "clamp(28px, 4vw, 48px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "clamp(24px, 3.5vw, 40px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Noto Sans, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "10px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.praxis-blau}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.md}"
    padding: "13px 28px"
  button-primary-hover:
    backgroundColor: "{colors.praxis-blau-deep}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.md}"
    padding: "13px 28px"
  button-white:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.praxis-blau-deep}"
    rounded: "{rounded.md}"
    padding: "13px 28px"
  nav-cta:
    backgroundColor: "{colors.praxis-blau}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.md}"
    padding: "10px 22px"
---

# Design System: Frauenarztpraxis Dr. Wendrich-Rönne

## 1. Overview

**Creative North Star: "Gute Medizin, kein Brimborium"**

The system is built around one principle: information is the product. Patients arrive at this site to find a phone number, confirm opening hours, or verify that the practice covers a specific service. They find it without friction. Every design decision is measured against that standard — if an element does not help a visitor reach their goal faster, it is removed.

The palette is medical teal in a restrained strategy: Praxis-Blau for actions and affordances, Kieferngrün for structural dark surfaces, near-white teal backgrounds for reading. Color is functional, not atmospheric. There are no gradients, no translucent layers, no blurred hero backgrounds. Warmth in the brand comes from directness of copy and precision of information, not from visual softness.

The system explicitly rejects the wellness-aesthetic: soft gradients, emotive taglines ("your journey to wellbeing"), spa-retreat palettes, and blurred overlapping shapes. It equally rejects the generic practice template: DocCheck-blue, stock-photo doctor grids, icon rows with placeholder medical symbols that could describe any practice in the country. What makes it distinctive is what it does not do.

**Key Characteristics:**
- Near-flat surfaces — depth comes from background color contrast, not shadows
- Type-driven hierarchy: Figtree at high weight contrast, Noto Sans for readable body
- Phone number is always the loudest element on any viewport
- 8pt spacing grid, consistent throughout
- Structural dark sections (hero, footer, bar) use Kieferngrün, not black
- WCAG AA contrast as a floor throughout

## 2. Colors: The Praxis Palette

A restrained two-role palette: one action color, one structural dark, teal-tinted neutrals throughout. No decorative color.

### Primary
- **Praxis-Blau** (`#0891B2`): All primary actions — buttons, links, focus rings, icon accents. The blue on a hospital sign or a referral letter header. Institutional, calm, reliable. Used at ≤20% of any given surface; its restraint is the point.
- **Praxis-Blau Deep** (`#0E7490`): Hover and active state for all primary actions. Never used as a background fill in the default state.

### Secondary
- **Gruener Akzent** (`#16A34A`): Confirmation and badge states only. Appears on the "Kassenzulassung" badge in the profile card. Not a recurring visual element.

### Neutral
- **Kieferngrün** (`#134E4A`): The structural dark. Hero section, footer, announcement bar, dark info panels. Not pure black — the teal undertone keeps it from reading as a generic dark mode surface.
- **Grün-Mittel** (`#1F5F5B`): Secondary body text, nav link default state. Dark enough for WCAG AA on teal-hell backgrounds.
- **Grün-Hell** (`#4A8C87`): Muted labels, placeholder text, section eyebrows, subdued metadata. Verify contrast before use as body copy — restricted to 18px+ or bold 14px+ contexts.
- **Teal-Hell** (`#F0FDFA`): Default page background. Near-white, tinted toward the brand hue. Not cream, not warm.
- **Teal-Sektion** (`#E6F7F5`): Alternate section background for rhythm. Used on `.section--alt` sections.
- **Grenzlinie** (`#B2DDD9`): All borders and dividers. Table borders, card outlines, hr elements, contact item separators.
- **Weiss** (`#ffffff`): Navigation background, card surfaces, table cells, white button variant.

### Named Rules
**The Brimborium Rule.** No color for decoration. If removing a color does not reduce legibility or remove an affordance, remove the color. Justified use: marking a tappable element, separating a surface, signalling a state. Unjustified use: making a section feel "warm," adding visual interest to a plain div.

**The Telefonnummer Rule.** The phone number (`04823-9070`) is always the largest or most visually prominent number on any viewport. No heading, no metric, no decorative number may outrank it in size or weight.

## 3. Typography

**Heading Font:** Figtree (with system-ui, sans-serif fallback)
**Body Font:** Noto Sans (with system-ui, sans-serif fallback)

**Character:** Figtree is a geometric sans with humanist warmth in its curves — confident at large sizes without feeling aggressive. Noto Sans brings global readability and neutral professionalism in body copy. Together they read as contemporary clinical: current without being fashionable, legible without being anonymous.

### Hierarchy

- **Display** (700, `clamp(28px, 4vw, 48px)`, lh 1.15, ls −0.02em): Hero heading only. One per page. Never used inside content sections.
- **Headline** (700, `clamp(24px, 3.5vw, 40px)`, lh 1.15, ls −0.02em): Section `<h2>` elements. Title for each major page section.
- **Title** (700, 22px, lh 1.2): Card titles, aside block headings, info panel titles. Figtree at 700 weight.
- **Body** (400, 16px, lh 1.6): All prose copy. Noto Sans. Max line length 65–75ch on desktop.
- **Label** (600, 11px, lh 1.4, ls 0.08em, uppercase): Short section identifiers — "Leistungsspektrum," "Öffnungszeiten." Maximum 4 words. Never body copy.
- **Small body** (400, 13–14px, lh 1.65): Table cells, helper text, card descriptions, footer links.

### Named Rules
**The Italic-Free Rule.** No italic type in the UI. Italic signals emotive emphasis; this system signals competence through structure, not inflection.

**The Weight Ceiling Rule.** Figtree 700 is the maximum weight used. No 800 or 900 weights — they tip from "confident" to "alarmed."

## 4. Elevation

Near-flat by default. Depth is expressed through background color contrast (Kieferngrün vs. Teal-Hell vs. Weiss) and border (Grenzlinie), not through shadows.

One structural shadow exists: the sticky navigation bar carries `box-shadow: 0 2px 8px rgba(8, 145, 178, 0.08)` — a diffuse Praxis-Blau tint shadow that lifts the nav from the content surface during scroll. It is functional (communicates stickiness), not decorative.

No card shadows. No hover-lift effects on service items. Tonal layering replaces shadow stacking throughout.

### Shadow Vocabulary
- **Nav ambient** (`0 2px 8px rgba(8, 145, 178, 0.08)`): Sticky navigation only. Communicates that the nav is above the scroll layer.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The nav shadow is the only persistent shadow in the system. If a new component needs "elevation," the answer is a background color change, not `box-shadow: 0 4px 16px rgba(0,0,0,0.12)`. Decorative shadows read as unmedical.

## 5. Components

### Buttons

Low-key and clear. Not demanding attention, but unambiguous in affordance.

- **Shape:** Gently rounded (6px radius). Neither pill nor square.
- **Primary** (`button-primary`): Praxis-Blau fill, white text, 13px 28px padding, Noto Sans 600 15px. Minimum height 48px for touch compliance.
- **Hover / Focus:** Background deepens to Praxis-Blau Deep (`#0E7490`). 200ms transition. Focus: 3px Praxis-Blau ring, 3px offset.
- **White variant** (`button-white`): White fill, Praxis-Blau-Deep text. Used on Praxis-Blau background sections (contact CTA). Never used on white or teal-hell backgrounds.
- **Outline light** (`button-outline-light`): Semi-transparent white border (35% opacity), white text at 85% opacity. For hero section only, on Kieferngrün background.
- **Labels:** Always verb + object. "Termin vereinbaren", "Route berechnen", "E-Mail schreiben". Never "OK", "Weiter", "Hier klicken".

### Navigation

- **Sticky bar:** White background, 2px Praxis-Blau bottom border, ambient nav shadow. Height 72px.
- **Logo:** Figtree 700 18px "Dr. Wendrich-Rönne" + Noto Sans 11px uppercase subtitle below.
- **Nav links:** Noto Sans 500 14px, Grün-Mittel default. Hover: Teal-Hell background, Praxis-Blau-Deep text. Rounded 4px hover state.
- **Nav CTA:** Praxis-Blau fill button, inline with the logo row. Contains the phone number as the label. Always visible desktop; collapsed to drawer on mobile.
- **Drawer:** Full-width mobile sheet, white bg, Grenzlinie row borders. Teal bottom-border on bar opens/closes drawer.

### Info Panels / Cards

Information containers that replace image-based cards. Used in About/Praxis section, Hours aside, and Hero right column.

- **Shape:** 8px radius (`rounded.lg`), 1px Grenzlinie border.
- **Background:** Teal-Hell (`#F0FDFA`) for inline info blocks. Dark variant (Kieferngrün, low-opacity white borders) for the hero section card.
- **Internal Padding:** 24px (`spacing.md`).
- **No shadows.** The border + background-color tint is sufficient elevation.
- **Icon markers:** 32×32px icon slot with Teal-Hell bg and 6px radius, inline with label/value pairs.

### Tables (Sprechzeiten)

The hours table is a primary content component, not a utility.

- **Structure:** `<table>` with `<thead>` (Kieferngrün bg, white text) and `<tbody>` with Grenzlinie row borders.
- **Zebra striping:** Even rows get Teal-Hell background for readability in dense tables.
- **Padding:** 13px 24px per cell.
- **Wrapped in:** 8px-radius border-box with Grenzlinie outline.

### Service Grid (Leistungen)

A 3-column borderline grid, not a card grid. Items are separated by 2px Grenzlinie gaps; no individual card shadows or borders.

- **Item bg:** White. The gap between items IS the visual border.
- **Icon slot:** 40×40px, Teal-Hell background, 8px radius, Praxis-Blau icon stroke.
- **Title:** Figtree 600 15px.
- **Body:** Noto Sans 400 13px, Grün-Hell text.
- **No hover shadows.** Background color shift to Teal-Hell on hover is acceptable if needed; shadow is not.

### Announcement Bar

- Kieferngrün background, 13px Noto Sans, rgba(255,255,255,.85) text.
- Phone number link in `#6EE7E7` (light teal on dark), underlined.
- Not dismissible; structural content.

## 6. Do's and Don'ts

### Do:
- **Do** use Praxis-Blau (`#0891B2`) for every interactive affordance — links, buttons, focus rings, icon fill. One action color, no alternatives.
- **Do** verify WCAG AA (4.5:1) for every body text color before shipping. Use Grün-Mittel (`#1F5F5B`) for secondary copy on Teal-Hell backgrounds; Grün-Hell (`#4A8C87`) only at 18px+ or bold 14px+.
- **Do** make the phone number (`04823-9070`) the dominant numeric element on any viewport. Increase its size relative to any nearby heading if they compete.
- **Do** use the 8px spacing grid (`spacing.xs` through `spacing.3xl`) without exception. Arbitrary pixel values for margins/padding are forbidden.
- **Do** keep tables for tabular data. Opening hours are tabular: `<table>` with `<thead>`, `scope`, and semantic markup.
- **Do** write button labels as verb + object: "Termin vereinbaren", "Route berechnen". The label predicts the outcome.
- **Do** use `text-wrap: balance` on h1–h2 to prevent single-word orphan lines on narrow viewports.
- **Do** respect `prefers-reduced-motion`: the scroll-reveal transitions (`opacity + translateY`) must fall back to instant visibility.

### Don't:
- **Don't** use the wellness-aesthetic: soft gradients on backgrounds, blurred overlay shapes, pastel color washes, or emotive taglines ("Ihre Reise zur Gesundheit"). This is the explicit anti-reference from PRODUCT.md.
- **Don't** use the generic-practice template: DocCheck-style blue-and-white, stock-photo doctor rows, icon grids where every icon is a generic medical symbol (stethoscope, heartbeat, pill) that could describe any practice.
- **Don't** add shadows to cards or service items. The Flat-By-Default Rule is not negotiable. If a surface needs elevation, use a background color change.
- **Don't** use italic type anywhere in the UI. Italic signals emotion; this system signals structure.
- **Don't** use Grün-Hell (`#4A8C87`) for body-size text (below 18px, non-bold). It fails 4.5:1 contrast against Teal-Hell backgrounds at 14px regular weight.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on any element. Rewrite with a background tint, full border, or a leading icon instead.
- **Don't** add section eyebrows (small uppercase tracked labels above every heading). The current system uses them sparingly and deliberately; proliferating them is AI grammar.
- **Don't** place the phone number below the fold on any viewport. It is the primary conversion element.
- **Don't** add imagery as decoration. If a real photo of the practice, the doctor, or the location is available, use it. If not, no image is better than a stock-photo placeholder or a CSS gradient rectangle.
