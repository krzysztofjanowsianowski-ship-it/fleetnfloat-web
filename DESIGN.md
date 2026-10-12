---
name: F&F GROUP
description: The FLEET&FLOAT group's corporate site, a white, ruled group portal in navy and gold, with division names set in the logo's own notation.
colors:
  navy: "#203a5f"
  navy-ink: "#1a3050"
  navy-soft: "#3a5274"
  navy-text: "#2b4466"
  navy-muted: "#3d5373"
  navy-quiet: "#4a5f7d"
  slate-statement: "#5b6b80"
  gold: "#b8925a"
  gold-on-navy: "#d2b07a"
  gold-deep-text: "#735828"
  gold-tagline: "#8a6a36"
  deep: "#ffffff"
  paper: "#ffffff"
  beige: "#f2f3f5"
  rule: "rgba(32, 58, 95, 0.2)"
  rule-soft: "rgba(32, 58, 95, 0.12)"
  signal-rust: "#9a3b1f"
typography:
  display:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "0.14em"
  headline:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "0.08em"
  headline-page:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 2.4vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.2
  mark-small:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.12em"
  statement:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.4vw, 1.1875rem)"
    fontWeight: 600
    lineHeight: 1.55
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  nav:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.3vw, 1.1875rem)"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"lnum\" 1"
  caption:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
  label-field:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
  button:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  action:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(72px, 9vw, 128px)"
  container: "1240px"
  sidebar: "240px"
  tile-gap: "28px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.navy-ink}"
  nav-link:
    textColor: "{colors.navy}"
    typography: "{typography.nav}"
    padding: "6px 0"
  nav-link-current:
    textColor: "{colors.gold-deep-text}"
  sidebar-link:
    textColor: "{colors.navy}"
    padding: "9px 12px"
  sidebar-link-hover:
    backgroundColor: "{colors.beige}"
  area-tile-image:
    backgroundColor: "{colors.beige}"
    rounded: "{rounded.none}"
  area-tile-bar:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 14px 12px 18px"
  area-tile-bar-hover:
    backgroundColor: "{colors.navy-ink}"
  form-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
---

# Design System: F&F GROUP

## Overview

**Creative North Star: "The Group Portal in Brand Ink"**

The site works like a capital group's corporate portal: a white page with a two-row header, breadcrumbs, a section sidebar, and content laid out in plain ruled blocks. What makes it FLEET&FLOAT is the ink. Navy and gold come straight from the logo files, and every division name in a brand position is set the way the logo sets it, in Bodoni Moda capitals spaced wide with an italic gold ampersand. Explanatory text is plain Barlow.

Density is orderly and informational rather than theatrical. Grounds are white, light grey bands (#f2f3f5) hold the contact section, the other-divisions strip, the footer's legal row and the tile image fields, and hairline navy-tinted rules separate everything else. The signature object is the group diagram on the home page: four quarter-circle segments in navy and gold tones around the light-ground sygnet, with text set around the ring. Depth is almost absent. Corners are square, surfaces stay flat, and interaction shows as a change of tone, position or scale rather than as lift.

The brand assets are binding: the logo files and the sygnet are used as supplied, in the colours of their ground.

**Key Characteristics:**
- Corporate portal frame: utility links row, logo plus main menu row, breadcrumbs, a 240px section sidebar on group pages.
- White ground, light grey (#f2f3f5) bands, navy-tinted hairline rules; square corners everywhere.
- Division marks in logo notation: spaced Bodoni capitals with the italic gold ampersand.
- Group diagram: four quarters around the sygnet that slide outward and brighten on hover.
- Area tiles: a grey drawing field over a navy name bar; on hover the drawing zooms in, the bar darkens and the chevron slides.

## Colors

Two inks from the logo sheet, navy and gold, on white and pale grey, with navy tints doing all secondary text work.

### Primary
- **Sheet Navy** (navy): the brand navy. Fills the primary button and the area tile bar. Sets marks, links, menu items, the 1.5px emphasis lines, the focus ring and line drawings. It is also the page's `accent-color`, `caret-color` and selection fill.
- **Ink Navy** (navy-ink): body text, page headings, and the hover tone of the primary button and tile bar.

### Secondary
- **Logo Gold** (gold): the ampersand in marks on light grounds, the current menu item's underline, the other-divisions strip's top rule, checklist dashes, the sygnet's inner ring on light grounds, and the outer diagram ring.
- **Gold on Navy** (gold-on-navy): the logo's gold on navy. Used for the ampersand and chevron in tile bars, the ampersand on the navy diagram quarters, and the on-navy sygnet.
- **Deep Gold Text** (gold-deep-text): gold that has to be read as text on a light ground (the current menu item, the active sidebar link). It passes 4.5:1 on white.
- **Tagline Gold** (gold-tagline): the logo's tagline gold. It also fills the HOMES quarter of the group diagram.

### Neutral
- **White** (deep, paper): both tokens resolve to white. `deep` is the page ground and the fill inside line drawings. `paper` is the sheet fill for the form, the screenshot frame and the hover of other-division cells.
- **Band Grey** (beige, #f2f3f5): contact section, other-divisions strip, footer legal row, the "Marki grupy" label, tile image fields and sidebar link hover. The token keeps its old name.
- **Prose Navy** (navy-text): prose paragraphs, leads, contact intro and the home mission paragraph.
- **Muted Navy** (navy-muted): table heads, fine print, the footer legal row, the tile hint.
- **Quiet Navy** (navy-quiet): captions, the "Rysunki są poglądowe" note and optional-field hints.
- **Statement Slate** (slate-statement): the bold centred statement under "W skrócie" only.
- **Scrollbar Navy** (navy-soft): scrollbar thumb only.
- **Rule** and **Soft Rule** (rule, rule-soft): navy-tinted hairlines. Rule draws the header bottom, crumbs, sidebar rows, table and checklist rows, form cells and tile-section dividers. Soft Rule draws band tops (contact, other divisions) and the screenshot caption divider.

### Signal
- **Signal Rust** (signal-rust): form error messages and invalid field text only.

**The Two Inks Rule.** Navy and gold are the only chromatic families. Gold marks, underlines and rings. Navy carries what you read. The diagram's extra tones (a lighter navy and two dark golds) belong to those families and are confined to the diagram.

**The Ground-Matched Gold Rule.** Use gold on white and grey, gold-on-navy on navy fills, and gold-deep-text whenever gold has to be read as text on a light ground. Don't swap them.

## Typography

**Display Font:** Bodoni Moda 500 / 500 italic / 600 (fallback Bodoni 72, Didot, serif)
**Body Font:** Barlow 400 / 500 / 600 (fallback system-ui, sans-serif)
**Label Font:** Barlow Semi Condensed 500 / 600 (buttons, action links, form labels, errors, status text, drawing notes)

**Character:** The Didone appears only where the brand speaks: marks and a few uppercase headlines. Everything that explains, navigates or labels is a sturdy grotesque with lining numerals, as you would expect on a corporate portal.

### Hierarchy
- **Display** (Bodoni 500, clamp(2.25rem, 5vw, 4rem), 1.04, 0.14em, uppercase): the division mark heading on each division page.
- **Headline** (Bodoni 500, clamp(1.75rem, 3vw, 2.5rem), 1.15, 0.08em, uppercase): the contact section heading.
- **Headline Page** (Barlow 500, clamp(1.625rem, 2.4vw, 2rem), 1.2): portal section headings on the home page ("W skrócie", "Obszary działalności").
- **Mark Small** (Bodoni 500, 1.125rem, 0.12em): division marks in the footer brand row and the other-divisions strip. Tile bars use 1.0625rem, and diagram quarters use 21px in SVG.
- **Statement** (Barlow 600, clamp(1.0625rem, 1.4vw, 1.1875rem), 1.55): the centred summary under "W skrócie", max 44em. It is left-aligned below 600px.
- **Lead** (Barlow 400, clamp(1.0625rem, 1.4vw, 1.25rem), 1.6): the division intro paragraph, max 40em, opening with the division name in 600.
- **Nav** (Barlow 500, clamp(1rem, 1.3vw, 1.1875rem), 1.2): main menu items. They drop to 0.9375rem below 900px.
- **Body** (Barlow 400, 1.125rem, 1.55, lining numerals): running text, prose max 38em. Tables run at 0.9375rem with tabular numerals. Sidebar links run at 0.9375rem.
- **Caption** (Barlow 400, 0.875rem): crumbs, utility links, figure captions, fine print.
- **Label** (Barlow 600, 0.8125rem, 0.16em, uppercase): in-page section heads in division prose and the other-divisions heading. Table heads use 0.75rem at 0.1em, and firm-detail terms use 0.75rem at 0.14em.
- **Label Field** (Barlow Semi Condensed 600, 0.75rem, 0.14em, uppercase): form field labels at the top of each cell.
- **Button** (Barlow Semi Condensed 600, 1.0625rem, 0.08em, uppercase): the primary button.
- **Action** (Barlow Semi Condensed 600, 1rem, 0.05em, mixed case): underlined text actions.

**The Logo Notation Rule.** A division or group mark (page heading, tile bar, diagram quarter, footer brand row, other-divisions strip, form division select) is set in Bodoni capitals at 0.12–0.14em spacing, with an italic ampersand in the ground-matched gold. Never set a mark's ampersand roman.

**The Serif Speaks for the Brand Rule.** Bodoni is reserved for marks, the uppercase contact headline, table row heads and the form's division select. Page headings, navigation, explanation, labels and controls are Barlow.

## Layout

There is one centred container (1240px max) with a fluid gutter (clamp(20px, 4vw, 48px)). Bands run full-bleed: a white header, white content, a grey contact band, then the footer (a white brand row over a grey legal row). Major bands are spaced by one fluid step (clamp(72px, 9vw, 128px)).

- **Header:** two rows. A right-aligned utility row (caption size) sits above the logo (clamp(44px, 4.4vw, 58px) high) and the main menu, closed by a rule. Below 900px the logo and menu stack and the utility row aligns left.
- **Crumbs:** a caption-size row with "»" separators between rules, directly under the header.
- **Group page:** a 240px sidebar beside the content (gap clamp(32px, 4vw, 56px)). The sidebar hides below 900px.
- **Home content:** headline, centred statement, the group diagram (max 600px, centred), an italic mission paragraph (max 46em), then a rule and the areas grid.
- **Area tiles:** a 2-column grid with a 28px gap that becomes one column below 600px.
- **Division intro:** white, with crumbs, the mark heading, lead and primary button on the left, and the light-ground sygnet (clamp(120px, 13vw, 180px)) on the right. The sygnet hides below 760px.
- **Split:** division content at 1.2fr / 0.8fr with a sticky side figure (top 112px). It becomes one column below 900px with the figure capped at 36rem. The IT page reweights it to 0.9fr / 1.1fr for its screenshot.
- **Other divisions:** a grey band with a three-cell strip under a gold top rule and rule dividers. It stacks below 760px.
- **Contact:** form and firm details at 1.5fr / 0.8fr, stacking below 900px.
- **Footer:** a brand row (grey "Marki grupy" label plus division marks) over a three-part legal row. Both stack below 860px.

**The Portal Frame Rule.** Group-level pages keep the corporate frame: two-row header, breadcrumbs, and the section sidebar on the left.

## Elevation & Depth

The system is flat. Depth comes only from ground changes (white versus grey band, navy fills) and hairline rules. One soft shadow exists, and it frames a raster screenshot so it reads as an object. The button's double ring and the form cell's focus edge are inset strokes drawn with box-shadow. They are not elevation.

### Shadow Vocabulary
- **Proof Frame** (`box-shadow: 0 18px 40px -26px rgba(26, 48, 80, 0.5)`): a framed raster screenshot inside division content.
- **Double Ring** (`box-shadow: inset 0 0 0 4px var(--navy), inset 0 0 0 5px rgba(255, 255, 255, 0.7)`): the primary button's inner keyline, echoing the sygnet's two rings. It turns solid white over ink navy on hover.
- **Cell Focus** (`box-shadow: inset 0 0 0 1.5px var(--navy)`): the focused form cell.

**The Tone, Not Lift Rule.** Hover is shown by darkening (tile bar, button), tinting (sidebar links, other-division cells), moving (diagram quarters by 6px outward, chevrons and arrows by 3–4px) or scaling inside a clipped field (tile drawing to 1.05). Surfaces never rise.

## Shapes

Corners are square (0px) on every interface surface: header, bands, tiles, buttons, form and screenshot frame. Shape comes from line weight: 1px rules for structure, 1.5px navy lines for emphasis (form frame, checklist top, table head, firm-details top, action underline), and a 2px gold underline for the current menu item. Circles belong to the brand: the sygnet's two rings and the group diagram, which is built from four quarter-circle segments separated by 9px gaps inside two concentric rings. Line drawings use one stroke family (1.5px outlines, 1px detail, round joins) on a white fill. The only rounded corners belong to icons and drawings.

**The Square Sheet Rule.** No border-radius on any interface surface. Rounding is allowed only inside the supplied app icon, line drawings and small stroke icons.

## Components

### Buttons
A solid navy badge with an inner keyline, like an embossed seal.
- **Shape:** square, min-height 52px, padding 0 22px, condensed uppercase label with the drawn arrow at 1.1em.
- **Primary:** navy fill, white text, Double Ring. On hover it shifts to ink navy and the keyline turns solid white (0.2s). Used for the division intro CTA and the form submit.
- **Focus:** a 2px navy outline at a 3px offset, site-wide.

### Action Link
- A navy condensed link with a 1.5px underline border. On hover the underline thickens to 3px and the icon slides 3px (0.25s, cubic-bezier(0.16, 1, 0.3, 1)).

### Navigation
- **Utility row:** caption-size navy links, underlined on hover.
- **Main menu:** Barlow 500 navy items with a 2px transparent underline. On hover the underline shows in rule colour. The current item turns gold-deep-text with a gold underline.
- **Sidebar:** rule-separated rows at 0.9375rem (9px 12px padding). Hover fills them with band grey, and the active row is gold-deep-text 600. Division sub-items are indented 28px, in Bodoni at 0.875rem and 0.08em. Below the list sits a ruled contact box with a 32px stroke envelope icon. Its border turns navy on hover.
- **Footer brand row:** division marks in Mark Small, underlined in gold on hover.

### Area Tile (signature)
- **Structure:** a 16:9 band-grey field holding the division's line drawing (notes and leaders hidden), over a navy bar with the mark (white, ampersand in gold-on-navy), the plain name at 0.8125rem in white at 82%, and a gold-on-navy double chevron (26px, stroke 2.4).
- **Hover:** the drawing scales to 1.05 (0.5s, cubic-bezier(0.16, 1, 0.3, 1)), the bar darkens to ink navy (0.25s), and the chevron slides 4px.
- **Shape:** square, no border, no shadow.

### Group Diagram (signature)
- **Structure:** a 640-unit SVG, max 600px wide. Four quarter segments, clockwise from top left: LEASE navy (#203A5F) and IT lighter navy (#35598A), both with gold-on-navy ampersands, then HOMES tagline gold (#8A6A36) and HR dark gold (#6E5427), both with cream ampersands (#F1E2C6). Each segment carries a white Bodoni mark and a short Barlow name. The centre is a white disc with the light-ground sygnet (6px navy ring, 1.4px gold inner ring, navy ampersand). Around it are an inner rule ring and an outer gold ring at 60% opacity, with Barlow 500 uppercase ring text at 6px tracking.
- **Hover / Focus:** a segment translates 6px outward and brightens to 1.12 (0.35s, cubic-bezier(0.16, 1, 0.3, 1)). Focus adds a 3px gold stroke. Below 560px segment names hide and marks enlarge.

### Inputs / Fields
- **Style:** the form is one white sheet in a 1.5px navy frame, split into cells by rule hairlines (two columns, one below 760px). Each cell has a field label at the top and a borderless, transparent input in Barlow 1.125rem. The division select is Bodoni 500 at 1.25rem.
- **Focus:** the cell gets the Cell Focus inset navy edge. The input itself has no outline.
- **Error:** a signal-rust message under the field in condensed 500 at 0.9375rem, and invalid text turns rust. A polite status line sits beside the submit button.

### Checklist
- A list under a 1.5px navy top rule. Each row is closed by a rule hairline and led by a 14px gold dash. Lead-in words are bold navy.

### Specification Table
- Rows separated by rules under a 1.5px navy head line. Heads are uppercase muted, row heads are Bodoni and linked in navy, and numerals are tabular. Below 560px the table collapses to stacked blocks.

### Line Drawing
- Navy outline drawings on white fill, with optional condensed uppercase notes and leader lines, captioned in quiet navy condensed. The houseboat's water uses shoal blue (#d6e0ea). Drawings are always marked as illustrative.

### Draft Marker
- A missing fact is shown as a visible placeholder in condensed navy with a dashed navy underline, never as invented data.

## Do's and Don'ts

### Do:
- **Do** keep the portal frame on group pages: two-row header, breadcrumbs, 240px section sidebar.
- **Do** set every division and group mark in Bodoni capitals at 0.12–0.14em with the italic ampersand in the ground-matched gold.
- **Do** build on white with band grey (#f2f3f5) for secondary bands, and separate content with rule and rule-soft hairlines.
- **Do** use gold-deep-text, not gold, when gold has to be read as text on a light ground.
- **Do** show hover as tone, offset or clipped scale (tile bar to ink navy, diagram quarter 6px outward, drawing to 1.05), never as lift.
- **Do** mark illustrative drawings as such and show missing facts with the draft marker.

### Don't:
- **Don't** redraw or recolour the logo files. Use the variant that matches the ground.
- **Don't** round corners on any interface surface.
- **Don't** set running text in gold or add a chromatic family beyond navy and gold. Rust is for errors only.
- **Don't** put shadows on surfaces, except the Proof Frame around a raster screenshot.
- **Don't** set a mark's ampersand roman or in the wrong gold for its ground.
