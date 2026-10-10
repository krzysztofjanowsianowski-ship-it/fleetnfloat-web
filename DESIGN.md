---
name: FLEET&FLOAT
description: Usługi dla Twojego biznesu. One company, four departments, drawn as one route chart printed in two inks.
colors:
  navy: "#203a5f"
  navy-ink: "#1a3050"
  navy-soft: "#3a5274"
  navy-muted: "#3d5373"
  navy-quiet: "#4a5f7d"
  gold: "#b8925a"
  gold-on-navy: "#d2b07a"
  land: "#ebddc2"
  shoal: "#d6e0ea"
  deep: "#f7f9fb"
  sheet-white: "#ffffff"
  rule: "rgba(32, 58, 95, 0.28)"
  rule-soft: "rgba(32, 58, 95, 0.14)"
  signal-rust: "#9a3b1f"
typography:
  display:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.012em"
  headline-water:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline-land:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "clamp(1.75rem, 3.4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0.09em"
  title:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "1.3125rem"
    fontWeight: 500
    lineHeight: 1.22
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"lnum\" 1"
  label:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
  annotation:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.04em"
    fontFeature: "\"tnum\" 1"
  note:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "0.02em"
  action:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
  button:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  stop: "50%"
spacing:
  frame: "clamp(8px, 1.4vw, 18px)"
  rail: "clamp(44px, 6vw, 84px)"
  gutter: "clamp(20px, 3vw, 40px)"
  step: "clamp(72px, 9vw, 128px)"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.sheet-white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.sheet-white}"
  action-link:
    textColor: "{colors.navy}"
    typography: "{typography.action}"
    padding: "0 0 4px"
  nav-cta:
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "13px 18px"
  nav-cta-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.sheet-white}"
  legend:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
  legend-row:
    padding: "10px 18px"
    height: "76px"
  legend-row-active:
    backgroundColor: "rgba(32, 58, 95, 0.05)"
  form-cell:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.navy-ink}"
    padding: "12px 16px"
  form-cell-focus:
    backgroundColor: "{colors.deep}"
  footer-plate:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.sheet-white}"
---

# Design System: FLEET&FLOAT

## Overview

**Creative North Star: "Locja szlaku" (the route chart)**

The site is one sheet of a pilot chart printed in two inks. A single gold route ties four department stops into one journey, and every surface is a part of that chart: a framed sheet with an alternating scale border, grounds tinted as land, shoal and deep water, a kilometre rail down the left margin, a legend that doubles as navigation, and a title-block form at the end of the route. Solidity is shown through drafting discipline: hairline navy rules, exact annotations, tabular figures, nothing soft or decorative that a chart would not carry.

Density is that of a working document: generous section steps, but tight, ruled internal structure (tables, checklists, legend rows, form cells). Line drawings stand in for photography and are labelled as illustrative. Motion has one meaning: the route being drawn. The chart draws its gold segments on load, hovering or focusing a department draws the route to its stop and moves the seal there, and scrolling fills the margin rail in gold through the four legs to the contact stop.

Inactive things stay visible as quiet signs (dashed ghost routes, hollow stops, 45% opacity labels); nothing is hidden to signal state.

**Key Characteristics:**
- Two inks on chart paper: navy for everything drawn or written, gold only for the route.
- Hydrographic lettering: water names in Bodoni Moda italic, land names in spaced Bodoni capitals, annotations in Barlow Semi Condensed, running text in Barlow.
- The kilometre rail is the page's axis; every section head hangs its km mark and stop on it.
- The seal (double ring with the logo ampersand) is the only state emblem.
- Flat, ruled, square-cornered; circles belong only to stops and the seal.

## Colors

A two-ink print on tinted chart paper: one deep navy does all the drawing and writing, one muted brass gold marks the route, and three pale grounds map land, shoal and deep water.

### Primary
- **Chart Navy** (navy): every line, letter, link, border, focus ring, stop and state on the page; also the button fill and the footer plate. Taken from the logo.
- **Ink Navy** (navy-ink): running body text and the button hover fill; a hair darker than Chart Navy so long text reads as ink rather than line.

### Secondary
- **Route Gold** (gold): only the route. The chart's route segments, the margin rail fill, and the seal's thin inner ring. Never type, links, buttons, borders or backgrounds.
- **Gold on Navy** (gold-on-navy): brand colour of the logo variants on navy; present in the logo files, not used as a drawn colour in code.

### Neutral
- **Deep Water** (deep): the default ground of the sheet and of open-water sections; also the road fill on the chart and the knockout ring around stops.
- **Land Tint** (land): ground for land legs (always with the contour drawing `/chart/warstwice.svg` at 20% navy) and for the chart's land mass.
- **Shoal** (shoal): ground of the water leg, closed above and below by 1.2px navy shorelines.
- **Sheet White** (sheet-white): cut-out paper for objects laid on the chart: the legend, the form, the inset figure, the seal's centre; also type on the navy plate.
- **Muted Navy** (navy-muted) and **Quiet Navy** (navy-quiet): secondary annotation text (table column heads, fine print, captions, legend sub-lines, optional-field hints).
- **Soft Navy** (navy-soft): scrollbar thumb only.
- **Rule** (rule) and **Soft Rule** (rule-soft): hairline dividers between rows, cells and sections; soft rule for list items inside a block.

### Functional
- **Signal Rust** (signal-rust): form error messages and invalid field text only. It is the single functional exception to the two-ink print.

### Named Rules
**The Two Inks Rule.** Navy draws and writes; gold is the route. If an element is not part of the route (chart segments, rail fill, seal inner ring), it is not gold. Error rust is the only other ink, and only for validation.

**The Ground Is Geography Rule.** A section's background says where the route is: shoal for water, land tint with contours for land, deep for open water and the contact stop. Grounds are never chosen for variety.

## Typography

**Display Font:** Bodoni Moda (with Bodoni 72, Didot, serif)
**Body Font:** Barlow (with system-ui, sans-serif)
**Label/Mono Font:** Barlow Semi Condensed (with Barlow, system-ui, sans-serif)

**Character:** Hydrographic lettering. A high-contrast Didone names places the way a chart does, with italics for water and spaced capitals for land; a condensed grotesque carries the surveyor's annotations, and an open grotesque carries the plain, businesslike prose. Lining figures in body, tabular figures in every km mark and data column.

### Hierarchy
- **Display** (Bodoni Moda 600, clamp(2.5rem, 4vw, 3.5rem), 1.05): the single sheet title; an `em` inside switches to italic 500 for the water phrase.
- **Headline, water** (Bodoni Moda italic 500, clamp(2.25rem, 4.4vw, 3.75rem), 1.05): heading of a leg that is on water (houseboats). 2.125rem on mobile.
- **Headline, land** (Bodoni Moda 500, clamp(1.75rem, 3.4vw, 3rem), 1.1, 0.09em, uppercase): heading of a land leg and of Kontakt. 1.6rem and 0.02em on mobile.
- **Title** (Bodoni Moda 500, 1.3125rem, 1.22): department names in the legend (italic when water), the form's department select (1.25rem), case titles (italic 1.5rem), model names in tables (italic 1.125rem).
- **Lead** (Barlow 400, clamp(1.1875rem, 1.6vw, 1.375rem), 1.5, max 36em): the opening paragraph of a leg.
- **Body** (Barlow 400, 1.125rem, 1.55, lining figures): running text; lists at 1.0625rem; measure capped at 34 to 40em.
- **Label** (Barlow Semi Condensed 600, 0.75 to 0.875rem, 0.14em, uppercase): form field labels, table captions and column heads, definition terms, block subheads, the legend's title strip, the inset's title bar.
- **Annotation** (Barlow Semi Condensed 500, 0.8125rem, 0.04em, tabular): km marks on the rail and chart notes.
- **Note** (Barlow Semi Condensed 500, 0.875rem, 1.45): fine print and captions in muted navy.

### Named Rules
**The Hydrographic Convention Rule.** Water names are Bodoni italic; land names are Bodoni capitals with open tracking. A department's name keeps its convention everywhere it appears: chart label, legend, leg heading.

**The Annotation Voice Rule.** Barlow Semi Condensed is the chart's annotation hand: km marks, labels, actions, buttons, nav, notes. Bodoni never annotates and Barlow never names places.

## Layout

The page is one framed sheet: an outer frame margin (frame), a 1.5px navy border, and inside it at 5px a 1px navy neatline carrying an alternating 48px scale border on all four sides. Masthead, route and footer plate sit 12px inside the frame (8px on mobile).

The kilometre rail is the axis. It sits at a fixed left offset (rail) inside the route; every block's left padding is rail + gutter, and every section head hangs its km mark (right-aligned, tabular, with a 10px tick) and its stop dot on the rail line. The rail is a dashed navy ghost (1.2px, 3/10 dash, 45% opacity) with a 5px gold fill growing over it on scroll, studded with white dots every 22px.

Hero: two columns, copy at rail + 2 gutters + 34rem, chart filling the rest behind a 1px rule; min-height clamp(620px, 100svh - 120px, 860px). Legs: vertical padding of one step; two-column grids at 1.05fr/1fr, 1.25fr/0.75fr or 0.9fr/1.1fr with clamp(32px, 5vw, 88px) gaps; a figure may stick at 32px from the top. Inner content caps at 1440px.

Breakpoints: at 1100px every leg and the contact grid collapse to one column (figures cap at 44rem); at 760px the hero stacks, the chart moves below the legend on a land ground, nav keeps only Kontakt, km units drop the word "km", the legend action moves under the name, and tables reflow to stacked rows.

## Elevation & Depth

Flat. Depth is conveyed by ground tint and by laying white paper objects on the chart with a 1.5px navy border, never by lifting. The single exception is the inset figure (a screenshot pasted on the chart), which carries one soft drop beneath it. Ring effects on stops, buttons and focused form cells are drawn with inset or spread box-shadows as lines, not as elevation.

### Shadow Vocabulary
- **Pasted inset** (`box-shadow: 0 18px 40px -24px rgba(26, 48, 80, 0.45)`): only under an inset figure that holds a raster.

### Named Rules
**The Paper On Paper Rule.** Objects on the chart are cut paper: white, square, framed with a 1.5px navy line. They do not float.

## Shapes

Square corners everywhere (0px) on sheet, legend, form, buttons, inset and plate. Circles are reserved for the route's vocabulary: the stop (14px navy dot with a 4px deep knockout and a 1px navy ring; hollow when ahead), the seal, and the legend symbol (7px dot inside an 11px ring, in a 30px box). The only other curve is the 3px end on the rail fill.

Line weights form a ladder: 1px for rules and rings, 1.2px for shorelines and ghost routes, 1.5px for frames, object borders and drawing outlines, 5px for the gold route. Icons are drawn arrows on a 20px grid at 1.6px stroke with round caps.

## Components

### Buttons
Plaque-like and confident: a navy tablet with a fine white inner keyline, like a chart's title plate.
- **Shape:** square corners (0px), min-height 52px, 22px side padding.
- **Primary:** navy fill, white uppercase Barlow Semi Condensed 600 at 0.08em, drawn arrow after the text; keyline as `inset 0 0 0 4px navy, inset 0 0 0 5px rgba(255,255,255,0.7)`.
- **Hover / Focus:** fill deepens to navy-ink and the keyline goes fully white (0.2s); focus is the global 2px navy outline at 3px offset.
- **Action link (secondary):** navy text with a 1.5px navy underline border 4px below; hover thickens it to 3px and nudges the arrow 3px right on an expo-out curve. Used for each department's action in the legend and for external links.

### Navigation
- **Masthead:** full logo left (40 to 58px tall), uppercase Barlow Semi Condensed 600 links at 0.1em right; plain links underline at 50% navy on hover; Kontakt is an outlined 1.5px navy box that fills navy on hover.
- **Legend (signature):** the map legend is the department navigation. A white framed panel with a 40px uppercase title strip, then one 76px row per department: symbol, Bodoni name with a muted annotation line, and the department's action. The row's km mark sits outside the panel on the rail. Hover or focus tints the row 5% navy and swaps the symbol for the seal.
- **Footer plate:** navy plate with the on-navy logo, uppercase white department links, and a title-block line (copyright, tagline, "Arkusz 1") at 78% white above a 30% white rule.

### Inputs / Fields
- **Style:** a drafting title block. The form is a white 1.5px-framed grid of cells divided by hairline rules; each cell has an uppercase label in its corner and a borderless, transparent field below (Barlow 1.125rem; the department select is Bodoni 1.25rem).
- **Focus:** the whole cell takes the deep ground and an inset 1.5px navy frame.
- **Error:** message in signal rust Barlow Semi Condensed 500 below the field; invalid field text also turns rust.

### Draft field
Unknown company data is shown, never invented: bracketed text in Barlow Semi Condensed 500 with a 1px dashed navy underline.

### Seal (signature)
The logo ampersand inside a heavy navy ring and a thin gold inner ring on white. It marks the one current thing: the active chart stop, the leg the rail has reached, the hovered legend row, the contact stop on arrival. It replaces the stop with a 0.35s crossfade.

### Route chart (signature)
Line-drawn map on land tint: navy shores, contours at 28%, italic soundings and water name, a lock, a cased road, hatched blocks, north arrow and scale bar. Each segment is a dashed navy ghost under a 5px gold stroke with white dots; segments draw in sequence on load (0.7s each, 0.42s stagger) and redraw to the chosen stop on hover or focus (0.55s, cubic-bezier(0.16, 1, 0.3, 1)). Stops past the selection go hollow and their labels drop to 45%. Reduced motion removes the drawing transitions.

## Do's and Don'ts

### Do:
- **Do** draw every line, letter, link and state in navy (#203a5f), and keep gold (#b8925a) on the route, the rail fill and the seal's inner ring only.
- **Do** hang every new section's km mark and stop on the rail, with content starting at rail + gutter.
- **Do** name water places in Bodoni Moda italic and land places in spaced Bodoni capitals, and keep each department's convention wherever it appears.
- **Do** set ground by geography: shoal for water, land tint with contours for land, deep for open water.
- **Do** keep inactive departments, segments and stops visible as quiet signs (dashed ghost, hollow stop, 45% label).
- **Do** show missing company data as a dashed draft field, and label line drawings as illustrative.
- **Do** lay new objects on the chart as white, square, 1.5px navy-framed paper.

### Don't:
- **Don't** use gold outside the route: no gold text, links, buttons, borders, backgrounds or hover states (the logo files keep their own gold).
- **Don't** introduce a second state emblem, badge or highlight colour; the seal is the only one.
- **Don't** round rectangles; circles belong to stops, the seal and the legend symbol.
- **Don't** add drop shadows to cards, panels or buttons; the pasted-inset shadow is only for an inset holding a raster.
- **Don't** hide inactive departments or collapse them out of view to show state.
- **Don't** set place names in Barlow or annotations in Bodoni.
