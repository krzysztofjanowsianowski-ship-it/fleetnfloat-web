---
name: F&F GROUP
description: The FLEET&FLOAT group's calling card, set in the brand's own notation of wide-spaced serif capitals, a gold italic ampersand, and navy and gold taken from the logo sheet.
colors:
  navy: "#203a5f"
  navy-ink: "#1a3050"
  navy-soft: "#3a5274"
  navy-text: "#2b4466"
  navy-muted: "#3d5373"
  navy-quiet: "#4a5f7d"
  gold: "#b8925a"
  gold-on-navy: "#d2b07a"
  deep: "#f4eee4"
  beige: "#ece2d1"
  paper: "#fffdf9"
  sheet-white: "#ffffff"
  rule: "rgba(84, 66, 40, 0.24)"
  rule-soft: "rgba(84, 66, 40, 0.14)"
  signal-rust: "#9a3b1f"
typography:
  display:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "clamp(2.25rem, 6.6vw, 5.75rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.14em"
  headline-division:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "clamp(2.25rem, 5.4vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "0.14em"
  headline:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "0.08em"
  title-mark:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.125rem)"
    fontWeight: 500
    letterSpacing: "0.14em"
  nav-mark:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.12em"
  title:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.6
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
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(72px, 9vw, 128px)"
  tile-gap: "clamp(16px, 2vw, 28px)"
  tile-pad: "clamp(24px, 3vw, 36px)"
  container: "1240px"
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
  button-light:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.navy}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-light-hover:
    backgroundColor: "{colors.deep}"
  header-cta:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
  header-cta-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.sheet-white}"
  division-tile:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "{spacing.tile-pad}"
  form-cell:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  form-cell-focus:
    backgroundColor: "{colors.deep}"
---

# Design System: F&F GROUP

## Overview

**Creative North Star: "The Brand-Sheet Calling Card"**

The site is a printed calling card for a group of four divisions, composed entirely from the FLEET&FLOAT identity sheet. Every name is set the way the logo sets it: Bodoni Moda capitals spaced wide, with an italic gold ampersand between the two Fs. Navy and gold come straight from the logo files. A navy band opens every page with the white mark and the sygnet (white ring, gold inner ring, gold ampersand). Below it the ground turns warm beige, taken from the gold of the logo, and content sits on warm-white paper sheets edged with a thin warm rule.

Density is calm and orderly, like good stationery. Sections are separated by a generous fluid step and by hairline rules, not by colour blocks. Each division is a white tile carrying its own mark, a one-line description and a navy line drawing of what it offers (vehicles, a screen, a houseboat, an office). Depth stays quiet: corners are square, surfaces sit flat at rest, and lift appears only when a tile is approached or a raster screenshot needs to read as an object.

The brand assets are binding: the logo and sygnet are used as supplied and never redrawn or recoloured. The rejected variant of the division tile is the generic one: an icon, a heading and text in a rounded card with a drop shadow.

**Key Characteristics:**
- Names always appear in logo notation: F&F + division in spaced serif capitals with a gold italic ampersand.
- A navy hero band with the white mark and the sygnet opens the home page and every division page; a navy footer closes them.
- Warm beige ground (deep), deeper beige bands (beige) for contact and "Pozostałe działy", warm-white paper sheets, thin warm rules; square corners everywhere.
- Navy line drawings in one stroke family illustrate each division and are labelled as illustrative.
- One signature motion: the tile's gold top line draws in from the left while its arrow slides forward.

## Colors

Two inks from the logo sheet, navy and gold, on a pale cool paper, with navy tints doing all secondary text work.

### Primary
- **Sheet Navy** (navy): the brand navy. Fills the hero, intro and footer bands and the primary button. Sets every mark, heading, link, rule accent, focus ring and line drawing on light grounds. Also the page's `accent-color`, `caret-color` and selection fill.
- **Ink Navy** (navy-ink): body text colour on light grounds and the pressed tone of the primary button on hover.

### Secondary
- **Logo Gold** (gold): the ampersand in marks on light grounds, the section-head underline, the top border of the "other divisions" strip, the nav hover/current underline, checklist dashes, and the tile's drawn top line.
- **Gold on Navy** (gold-on-navy): the logo's gold for dark grounds. Used for the ampersand in hero marks, the sygnet's inner ring and ampersand, footer column headings and footer link underlines.

### Neutral
- **Beige** (deep, #f4eee4): the page ground. **Deep Beige** (beige, #ece2d1): the contact section and the other-divisions strip. **Paper** (paper, #fffdf9): header, tiles, form, screenshot frame and light buttons. The beige ground also carries the hover fill of light buttons and division links, the focus fill of form cells, and the paper fill inside line drawings.
- **Sheet White** (sheet-white): the header bar, tiles, form, screenshot frame, and all text and marks on navy (lead copy at 88% opacity, secondary footer copy at 70–78%).
- **Prose Navy** (navy-text): running text in prose blocks, leads and tile descriptions on white and pale grounds.
- **Muted Navy** (navy-muted): table column heads and fine print.
- **Quiet Navy** (navy-quiet): captions, the "Rysunki są poglądowe" note, optional-field hints.
- **Scrollbar Navy** (navy-soft): scrollbar thumb only.
- **Rule** (rule) and **Soft Rule** (rule-soft): hairlines. Rule borders tiles, table rows, checklist rows and form cells; Soft Rule separates bands (header bottom, contact top, tile footer).

### Signal
- **Signal Rust** (signal-rust): form error messages and invalid field text only.

**The Two Inks Rule.** Navy and gold are the only chromatic colours. Gold marks and underlines; navy carries everything you read. Gold never sets running text on a light ground.

**The Ground-Matched Gold Rule.** Use gold on pale and white grounds and gold-on-navy on navy bands, exactly as the logo files do. Don't swap them.

## Typography

**Display Font:** Bodoni Moda 500 / 500 italic / 600 (fallback Bodoni 72, Didot, serif)
**Body Font:** Barlow 400 / 500 / 600 (fallback system-ui, sans-serif)
**Label Font:** Barlow Semi Condensed 500 / 600 (for buttons, action links, form labels, drawing notes and status text)

**Character:** A high-contrast Didone, always in spaced capitals, carries the brand voice. A plain, sturdy grotesque with lining numerals does the explaining. The condensed cut of the same family gives controls a tighter, more instrumental voice.

### Hierarchy
- **Display** (500, clamp(2.25rem, 6.6vw, 5.75rem), line-height 1, 0.14em, uppercase): the "F&F GROUP" mark in the home hero.
- **Headline Division** (500, clamp(2.25rem, 5.4vw, 4.5rem), 1.04, 0.14em, uppercase): the division mark on division pages.
- **Headline** (500, clamp(1.75rem, 3vw, 2.5rem), 1.15, 0.08em, uppercase): section headings ("W skład grupy należą", "Kontakt").
- **Title Mark** (500, clamp(1.5rem, 2.4vw, 2.125rem), 0.14em): the division mark inside a tile. Smaller marks follow the same notation (1.125rem in the other-divisions strip, 1rem in the footer, 0.9375rem in the nav).
- **Title** (Barlow 600, 1.125rem, 1.3): the division's plain name under its mark.
- **Lead** (Barlow 400, clamp(1.125rem, 1.6vw, 1.375rem), 1.6): hero and intro paragraphs, max 36–38em.
- **Body** (Barlow 400, 1.125rem, 1.55, lining numerals): running text, prose max 38em. Tables run at 0.9375rem with tabular numerals.
- **Caption** (Barlow 400, 0.875rem): figure captions, fine print, crumbs.
- **Label** (Barlow 600, 0.8125rem, 0.16em, uppercase): in-page section heads and the "other divisions" heading. Footer column heads use 0.75rem; table heads 0.75rem at 0.1em.
- **Label Field** (Barlow Semi Condensed 600, 0.75rem, 0.14em, uppercase): form field labels sitting at the top of each cell.
- **Button** (Barlow Semi Condensed 600, 1.0625rem, 0.08em, uppercase): primary and light buttons. Action links use the same face at 1rem, 0.05em, mixed case.

**The Logo Notation Rule.** The group and division names are always set with the mark component: Bodoni capitals at 0.12–0.14em spacing, with the ampersand in italic gold at 0.02em. Never write "F&F" in the sans, and never set the ampersand roman or in navy.

**The Serif Speaks for the Brand Rule.** Bodoni is reserved for marks, section headlines, nav items, table row heads and the form's division select. Explanation, labels and controls are Barlow.

## Layout

A single centred container (1240px max) with a fluid gutter (clamp(20px, 4vw, 48px)). Pages stack full-bleed bands: white sticky header, navy hero or intro band, pale content sections, pale contact section, navy footer. Sections are spaced by one fluid step (clamp(72px, 9vw, 128px)) and separated by soft-rule hairlines.

- **Hero:** two columns (1.35fr / 0.65fr) with the mark, lead and actions on the left and the sygnet (max 360px) on the right. Below 900px it becomes one column and the sygnet shrinks to an 88px badge above the mark.
- **Division intro:** text with crumbs, mark, lead and light button, plus a sygnet at clamp(140px, 16vw, 220px) on the right, which is hidden below 760px.
- **Section head:** the headline and a one-line aside on a shared baseline, closed by a 1px gold underline.
- **Tiles:** a 2×2 grid (gap clamp(16px, 2vw, 28px)) that becomes one column below 900px. Inside each tile is a two-column grid with mark, name and text on the left and the drawing on the right; the drawing drops below the text at 560px.
- **Split:** division content in a 1.2fr / 0.8fr grid with a sticky side figure (top 112px). It becomes one column below 900px with the figure capped at 36rem. The IT page reverses the weight (0.9fr / 1.1fr) for its screenshot.
- **Other divisions:** a three-cell strip under a gold top rule with hairline dividers. It stacks below 760px.
- **Contact:** form and firm details at 1.5fr / 0.8fr, stacking below 900px.
- **Header:** logo, division nav and contact CTA on one row. Below 980px the nav wraps to a second, horizontally scrollable row; below 560px the header stops being sticky.

## Elevation & Depth

Flat by default. Depth comes from ground changes (navy band, pale ground, white sheet) and hairline rules. Shadows appear in two places only, and both are soft and navy-tinted: the lift of a division tile under the pointer, and the frame of a raster screenshot so it reads as a printed proof. The buttons' double ring and the form cell's focus edge are inset strokes drawn with box-shadow, not elevation.

### Shadow Vocabulary
- **Tile Lift** (`box-shadow: 0 18px 36px -24px rgba(26, 48, 80, 0.45)`, with translateY(-2px)): division tile on hover only.
- **Proof Frame** (`box-shadow: 0 18px 40px -26px rgba(26, 48, 80, 0.5)`): a framed raster screenshot inside division content.
- **Double Ring** (`box-shadow: inset 0 0 0 4px <fill>, inset 0 0 0 5px <ring>`): the buttons' inner keyline, echoing the sygnet's two rings.
- **Cell Focus** (`box-shadow: inset 0 0 0 1.5px var(--navy)`): the focused form cell.

**The Lift on Approach Rule.** Tiles rest flat with a thin rule border. Only hover or focus brings the navy border, the lift, and the gold top line.

## Shapes

Square corners throughout (0px): bands, tiles, buttons, form, screenshot frame. Shape comes from line weight: 1px rules for structure, 1.5px navy lines for emphasis (form frame, checklist top, table head, firm-details top, action underline), and 3px for the drawn gold line on an active tile. Line drawings use one stroke family (1.5px outlines, 1px detail, round joins) with pale fill. The arrow icon is drawn at a 1.6 stroke with round caps. The sygnet's two concentric rings are the only circular form outside the drawings.

**The Square Sheet Rule.** No border-radius on any interface surface. The only rounded shapes are inside the supplied app-icon asset and the drawings themselves.

## Components

### Buttons
Badge-like and confident: a solid block with an inner keyline, like an embossed seal.
- **Shape:** square (0px), min-height 52px, 0 22px padding, condensed uppercase label with a drawn arrow.
- **Primary:** navy fill, white text, with a 4px navy inset and then a 1px white keyline at 70%. On hover it shifts to ink navy and the keyline turns solid white. Used on light grounds (form submit).
- **Light:** white fill, navy text and navy keyline. On hover the fill shifts to pale deep. Used on navy bands (hero, division intro). Below 560px it tightens to 0.9375rem and 0 18px.
- **Header CTA:** an outlined "Kontakt" (1.5px navy border, Barlow 600 0.875rem uppercase at 0.1em) that fills navy with white text on hover.
- **Focus:** a 2px navy outline offset 3px site-wide, switched to white on navy bands.

### Action Link
- A navy link in condensed 600 at 0.05em with a 1.5px underline border. On hover the underline thickens to 3px and the icon slides 3px. The hero's secondary "Kontakt" link is its white-on-navy sibling in uppercase Barlow with a 60% white underline.

### Division Tile (signature)
- **Corner Style:** square.
- **Background:** white with a 1px rule border, text in navy.
- **Content:** division mark (title mark), plain name (title), one-line description (prose navy), a line drawing with its notes and leaders hidden, and a footer "Przejdź do działu" with an arrow above a soft rule.
- **Hover / Focus:** the border turns navy, Tile Lift applies, a 3px gold top line scales in from the left (0.35s, cubic-bezier(0.16, 1, 0.3, 1)), and the arrow moves 4px.
- **Internal Padding:** tile-pad.

### Inputs / Fields
- **Style:** the form is one white sheet in a 1.5px navy frame, split into cells by rule hairlines (two columns, one below 760px). Each cell has a field label at the top and a borderless, transparent input. The division select is set in Bodoni 500 at 1.25rem.
- **Focus:** the whole cell fills pale deep with a 1.5px inset navy edge; the input itself has no outline.
- **Error:** a signal-rust message under the field in condensed 500, and invalid text in rust. A polite status line sits beside the submit button.

### Navigation
- **Header:** white sticky bar with the supplied logo (40–52px high). Division names are set in Bodoni 500 capitals at 0.12em, with a gold 1.5px underline for hover and the current page.
- **Crumbs:** caption-size white text at 75% on the navy intro.
- **Other divisions strip:** three cells with a mark, name and "Przejdź", hovering to pale deep.
- **Footer:** navy with the on-navy logo, gold-on-navy uppercase column heads, white serif division links underlined in gold-on-navy on hover.

### Checklist
- A list under a 1.5px navy top rule. Each row is closed by a hairline and led by a 14px gold dash. Lead-in words are bold navy.

### Specification Table
- Rows separated by rules under a 1.5px navy head line. Uppercase muted heads, Bodoni row heads linked in navy, tabular numerals. Below 560px it collapses to stacked blocks.

### Line Drawing
- Navy outline drawings on a pale fill with optional condensed uppercase notes and leader lines, captioned in quiet navy. They are always marked as illustrative.

### Draft Marker
- Missing facts are shown as a visible placeholder in condensed navy with a dashed navy underline (a white, dashed variant on navy), never as invented data.

## Do's and Don'ts

### Do:
- **Do** set every group and division name with the mark: Bodoni capitals at 0.14em with the italic gold ampersand (gold on light, gold-on-navy on navy).
- **Do** open each page with the navy band carrying the white mark and the sygnet, and close it with the navy footer.
- **Do** separate content with hairlines (rule, rule-soft) and the fluid section step, not with colour blocks or cards.
- **Do** use the double-ring button: navy on light grounds, light on navy bands, 52px high, condensed uppercase with the drawn arrow.
- **Do** reserve lift for approach: tiles flat at rest, Tile Lift and the drawn gold top line on hover or focus.
- **Do** mark illustrative drawings as such and show missing facts with the draft marker.

### Don't:
- **Don't** redraw, recolour or re-typeset the logo or the sygnet; use the supplied files and the sygnet component as they are.
- **Don't** round corners on any interface surface.
- **Don't** build division tiles as an icon, heading and text in a rounded card with a drop shadow.
- **Don't** set running text in gold or introduce a third chromatic colour; rust is for errors only.
- **Don't** write "F&F" in the sans or set the ampersand roman.
- **Don't** put shadows on surfaces at rest, except the Proof Frame around a raster screenshot.
