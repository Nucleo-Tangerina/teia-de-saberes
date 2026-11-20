---
name: Teia de Saberes
description: Education as a woven network. Light fields, deep navy bands, orange actions, threads with colored nodes.
colors:
  navy: "#153A62"
  navy-deep: "#0F2B4A"
  blue: "#2679AD"
  orange: "#ED8C32"
  orange-hover: "#F29D4D"
  orange-ink: "#A3550F"
  soft: "#F4F7FA"
  white: "#FFFFFF"
  body: "#4A5B6E"
  muted: "#6B7B8C"
  line: "#E3E9EF"
  on-navy: "#D6E2EE"
  tint-blue: "#E4EFF7"
  tint-orange: "#FDF1E4"
  thread-magenta: "#F02A89"
  thread-lime: "#90D518"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.1vw, 58px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.2vw, 42px)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  icon: "14px"
  card: "20px"
  panel: "24px"
  media: "28px"
  cta: "32px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
  section: "clamp(64px, 9vw, 120px)"
  stack: "24px"
  stack-tight: "16px"
  head-gap: "56px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.navy}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
  button-dark:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
    height: "56px"
  button-dark-hover:
    backgroundColor: "{colors.blue}"
  button-outline:
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
    height: "56px"
  button-outline-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  card-solution:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "24px 24px 26px"
    width: "272px"
  tag:
    backgroundColor: "{colors.tint-blue}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  round-button:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    size: "52px"
---

<!-- Provisional: colors and fonts follow the brief's suggestions and are pending validation with the organization. Photos in public/images are placeholders. -->

# Design System: Teia de Saberes

## Overview

**Creative North Star: "The Woven Network"**

Education is drawn as a network of threads: people, municipalities and steps of the work joined by thin blue lines that end in colored nodes. The world is calm and institutional at rest (light #F4F7FA and white fields, deep navy bands) and comes alive through motion that draws, pops and rises, never through decoration piled on the page.

The brand's saturated geometric pattern strip (`public/pattern-strip.png`, used as-is) is the only loud material. It appears as a small floating tile beside the hero photo, a moving marquee band under the navy section, and the drifting side column of the closing CTA. Everything else stays quiet so the pattern and the orange actions read.

Density is generous: wide section padding, large rounded media, soft navy-tinted shadows, pill buttons. Shapes are friendly and rounded, never sharp.

**Key Characteristics:**
- Light fields alternate with deep navy bands; orange is reserved for actions.
- Thin blue threads with colored nodes are the reusable signature.
- The pattern strip is the brand motif, shown in bands and tiles, never redrawn.
- Generous radii (20-28px) on media and cards, pills on every button and tag.
- Shadows are soft and navy-tinted, used for lift, not outline.

## Colors

A restrained institutional base (navy, blue, soft gray-blue) with one warm action color, plus the pattern's saturated hues kept for threads and markers.

### Primary
- **Institutional Navy** (navy): headings and ink, dark bands, dark buttons, active progress, round controls. Also the text color on orange.
- **Deep Night Navy** (navy-deep): footer ground only.

### Secondary
- **Network Blue** (blue): links, thread strokes, dark-button hover, icon squares, role and category labels, accent-color and caret.

### Tertiary
- **Action Orange** (orange): primary buttons, focus ring, nav underline, text selection. Hover lightens to orange-hover.
- **Orange Ink** (orange-ink): orange in text form on light grounds where #ED8C32 fails contrast (icon dots, the mobile active nav item).
- **Pattern hues** (thread-magenta, thread-lime, plus orange and blue): only on thread nodes, the methodology gradient, step rings and solution-card marker bars. Solution markers also draw other pattern hues (#4A2582, #01A6F8, #8F2DE2, #FFB000) per item.

### Neutral
- **Soft Field** (soft): hero ground, soft bands, ticker, menu toggle, hover fill.
- **White** (white): page ground, cards, navy-band text.
- **Body Slate** (body): paragraph text. **Muted Slate** (muted): meta, captions, hints.
- **Hairline** (line): dividers, card borders, header rule.
- **On-Navy Mist** (on-navy): body text on navy bands.
- **Tints** (tint-blue, tint-orange): icon-square and icon-dot grounds, main tag.

### Named Rules
**The Orange Acts Rule.** Orange fills mean "do something": buttons, focus, the current nav item. It is not a background or a decorative fill. Orange text on light grounds uses orange-ink.

**The Pattern Hues Stay On Threads Rule.** Magenta, lime and the other pattern hues appear only as nodes, rings, marker bars and the thread gradient, never as surfaces, buttons or text.

## Typography

**Display Font:** Manrope (with system-ui, sans-serif), weights 500-800
**Body Font:** Inter (with system-ui, sans-serif), weights 400-600

**Character:** A geometric, slightly warm grotesk at 800 for headings, tightly tracked, over a neutral, very legible Inter body. Institutional without being cold.

### Hierarchy
- **Display** (800, clamp(34px, 4.1vw, 58px), 1.08, -0.025em): hero headline only.
- **Headline** (800, clamp(28px, 3.2vw, 42px), 1.15, -0.02em): section h2. The CTA uses clamp(25px, 2.9vw, 40px).
- **Subhead** (700, clamp(20px, 2vw, 26px), 1.3): secondary statements inside sections.
- **Title** (700, 17-20px, 1.28-1.35): card, step, team and article h3.
- **Body** (400, 17px, 1.7; 16px under 720px): paragraphs, max 62ch. **Lead** is 19px/1.65, max 540px.
- **Label** (Manrope 700, 12-13px, 0.08-0.14em, uppercase source text): card categories, project field names, footer column heads, solution indices. Inter 600 11px labels for tags and UF codes.

### Named Rules
**The Manrope Speaks, Inter Explains Rule.** Headings, buttons, nav and labels are Manrope; anything read as a paragraph is Inter. Headlines use `text-wrap: balance`, paragraphs `pretty`.

## Layout

Content container is 1160px plus gutters (gutter clamp(20px, 4vw, 64px)); the header inner runs to 1440px. Sections pad clamp(64px, 9vw, 120px) vertically. Two-column splits use equal or near-equal fractions with clamp(40px, 6vw, 88px) gaps; card grids use 24px gaps; section heads sit 56px above content (32px on mobile).

Bands alternate white, soft and navy. Overlap is used once, deliberately: the differentials card rises -88px into the hero.

Breakpoints: 1180px (nav collapses to a dropdown, header CTA moves into the menu), 960px (splits stack, team becomes 2-up, articles become compact rows), 720px (single column, full-width buttons, horizontal snap rails for team, vertical methodology thread, hero threads hidden). Horizontal rails (solutions, team on mobile) bleed to the viewport edge with gutter scroll-padding and snap.

## Elevation & Depth

Hybrid: mostly tonal (white on soft, borders in hairline) with soft, navy-tinted, two-layer shadows for things that float or respond. No hard or offset shadows.

### Shadow Vocabulary
- **Card** (`0 2px 6px rgba(21,58,98,.05), 0 12px 32px rgba(21,58,98,.07)`): resting solution and article cards.
- **Lift** (`0 4px 10px rgba(21,58,98,.06), 0 24px 48px rgba(21,58,98,.14)`): card hover, paired with translateY(-4 to -6px).
- **Float** (`0 2px 6px rgba(21,58,98,.05), 0 24px 56px rgba(21,58,98,.12)`): the differentials panel that overlaps the hero.
- **Header scrolled** (`0 8px 24px rgba(21,58,98,.08)`): sticky header once the page scrolls.

### Named Rules
**The Navy Shadow Rule.** Every shadow is tinted with navy rgb(21,58,98), never black, and stays diffuse.

## Shapes

Rounded and friendly. Media frames 28px, panels and the ticker 24px, cards 20px, icon squares 14px, CTA 32px; all shrink one step on mobile (16-24px). Buttons, tags, badges, skip link and nav underline ends are pills. Step markers, icon dots and carousel controls are circles. Hairline borders (1px line) separate cells inside grouped panels instead of gaps.

## Components

### Buttons
Confident, round, tactile.
- **Shape:** full pill (999px), 56px tall (48px small variant), 2px border slot.
- **Primary:** orange fill, navy Manrope 700 16px text, 15px 28px padding.
- **Dark:** navy fill, white text; hover to blue. **Outline:** 2px navy border; hover fills navy with white text.
- **Hover / Active:** color shifts over 150ms; press scales to 0.97. Full width under 720px.
- **Arrow link:** blue Manrope 700 15px with an arrow that slides 4px on hover.

### Tags
- Inter 600 11px pill, slate on #EDF1F5; the main tag is #1F5F8A on tint-blue.

### Cards / Containers
- **Solution card:** 272px white card, 20px radius, card shadow, 190px media, colored 28x4px marker bar beside the index; lifts on hover.
- **Article card:** same shadow logic; title turns blue on hover. Compact horizontal row with a 96px thumb under 960px.
- **Project / audience panels:** bordered (1px line) instead of shadowed; audience cells fill soft on hover and their icon square turns blue.

### Navigation
- Sticky white header, 88px (76px at 1180px, 68px at 960px), hairline bottom rule, shadow on scroll.
- Links Manrope 600 15px in body slate, navy on hover/current with a 2px orange underline that scales in from the left.
- Under 1180px: 44px soft menu toggle opens a dropdown panel; current item turns orange-ink.

### Threads and Nodes (signature)
- **Hero threads:** thin blue paths (1.5px, 22% opacity) that draw across the hero background, ending in 6px colored nodes with a white ring that pop in and pulse outward. Hidden under 720px.
- **Methodology thread:** a 2px dashed line through the step markers whose fill (orange to blue to magenta to lime gradient) scales with scroll progress. Each step is a 64px white circle ringed in its pattern hue; when the fill reaches it, the step is lit and tints to 22% of its hue. Horizontal on desktop, vertical on mobile.
- **Four-threads stitch (home):** as the "Os quatro fios" cards enter, a 2px gradient thread (same four hues, 55% opacity) draws left to right through the card dots (1.6s, ease-out-expo), and each dot, ringed in white, pops as the thread reaches it. Desktop only; under 960px the dots pop without the line.
- **Ponte line:** every "Ponte com o Novo Contrato Social" block draws a thin orange-ink line across its top that lands on an 8px node.
- **Checklist checks:** each check circle pops just after its line rises.

### Pattern Strip
- Floating 150px tile (20px radius) beside the hero photo, gently bobbing; a 40px marquee band moving under the navy section; a drifting 220px column on the CTA (a 56px band on mobile).

### Section Labels (user-mandated)
- Uppercase Manrope 700 13px (12px mobile) label in orange-ink, tracked 0.14em, above section headings. Part of the client's approved reference and must stay: the client asked that nothing from the reference be removed. The hero label is the brief's "Etiqueta"; on mobile it breaks before "TRANSFORMAÇÃO EDUCACIONAL" with its bullet hidden.

### Municipal Crest Ticker
- Crests scroll in a continuous strip on a soft 24px panel, edges faded by a mask, pausing on hover or focus (70s loop). Each crest sits in a 176px cell (128px mobile) divided by hairlines. Without motion the strip stands still and scrolls by hand.
- Under client approval (issue #30): a static grid where each crest appears once. The losing option is deleted once approved.
- `/projetos` keeps the static grid.

### Home Opening
- Default: soft-field hero with the opening copy and one framed photo beside the floating pattern tile.
- Under client approval (issue #30): a light-theme carousel of the solutions (soft field, navy type, white controls). The losing option is deleted once approved.

## Do's and Don'ts

### Do:
- **Do** keep orange for actions and focus; use orange-ink for orange text on light grounds.
- **Do** connect things with thin blue threads and colored nodes when a surface shows relationships or sequence.
- **Do** use the pattern strip image as-is for bands, tiles and columns.
- **Do** tint every shadow navy and keep it soft and layered.
- **Do** animate with draw, pop, rise-in (24-28px, 0.8-0.9s, ease-out-quart) and slow marquees; stagger by about 90ms.
- **Do** honor reduced motion: marquees and pulses stop, reveals and draws resolve instantly.

### Don't:
- **Don't** redraw or recolor the logo or the pattern strip.
- **Don't** use pattern hues (magenta, lime, purple, cyan, amber) as surfaces, buttons or text.
- **Don't** use black, hard or offset shadows.
- **Don't** use square corners on buttons, cards or media.
