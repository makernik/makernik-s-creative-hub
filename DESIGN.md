---
name: makernik
description: A cream paper map drawn in charcoal, with copper as the only spot color.
colors:
  copper: "hsl(18 70% 36%)"
  copper-hover: "hsl(18 70% 30%)"
  copper-focus: "hsl(18 70% 28%)"
  cream: "hsl(40 30% 96%)"
  field-cream: "hsl(40 32% 94%)"
  stone: "hsl(35 15% 90%)"
  charcoal: "hsl(30 10% 12%)"
  graphite: "hsl(30 10% 32%)"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.11
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "normal"
  action:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.56
    letterSpacing: "normal"
rounded:
  none: "0"
spacing:
  stack: "1rem"
  inset: "1.25rem"
  inset-lg: "2rem"
  row: "1.5rem"
  section: "5rem"
  section-lg: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.cream}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.copper-hover}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
  button-primary-compact:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "2.75rem"
  button-secondary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "2.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.copper}"
    rounded: "{rounded.none}"
  header:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    padding: "0 2rem"
    height: "5rem"
  title-plate:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.charcoal}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "1.25rem"
    width: "24rem"
  legend-band:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    padding: "1rem 2rem"
  bin-label:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.5rem"
  build-log:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    padding: "1.5rem 0"
  photo-mount:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
  email-link:
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    height: "3rem"
  maze-field:
    backgroundColor: "{colors.field-cream}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
---

# Design System: makernik

## Overview

**Creative North Star: "The Paper Map"**

makernik is one cream sheet drawn in charcoal, with copper as the only spot of color. The homepage is a paper map whose terrain is a maze. Graph paper sits only on the maze field, a square title plate of the same cream rests on that field, and a dense legend runs along its bottom edge. Below the fold the same sheet continues as ruled rows, a bin label, and empty photo mounts.

The sheet stays quiet. Titles are large, semibold, and tightly tracked. Reading text is Inter and holds to 65 characters. Regions meet at a hairline, and nothing lifts off the page. The maze is drawn in canvas once, then it rests. A missing photograph stays an empty mount labeled Photo needed.

**Key Characteristics:**

- Cream sheet, charcoal ink, and copper as the only chromatic color
- Square corners and hairline rules on a flat sheet
- Graph paper only on the maze field
- Space Grotesk for titles and Inter for text, both self-hosted
- Empty photographs stay dashed mounts

## Colors

A warm sheet, a charcoal drawing, and one copper spot. The stylesheet stores the sheet colors as HSL components. Spot Copper is `--accent`, Sheet Cream is `--background`, Charcoal Ink is `--foreground`, Legend Stone is `--secondary`, and Graphite is `--muted-foreground`. Pressed Copper and Focus Copper are written as literals on the controls. Text on a copper fill is Sheet Cream (`--accent-foreground`).

### Primary

- **Spot Copper** (`hsl(18 70% 36%)`): the filled action, the "nik" in the wordmark, the maze start disc and exit square, link hover, and the selection wash. As text or as a button fill on Sheet Cream it clears 4.5:1. Selected text uses this copper at 22% opacity, with Charcoal Ink as the text color.
- **Pressed Copper** (`hsl(18 70% 30%)`): the hover fill of a copper button.
- **Focus Copper** (`hsl(18 70% 28%)`): the 2px focus outline of a copper button.

### Neutral

- **Sheet Cream** (`hsl(40 30% 96%)`): the page, the title plate, the stroked button, and the empty mounts. The scrollbar track is a close step, `hsl(40 30% 94%)`, and the thumb is Graphite.
- **Field Cream** (`hsl(40 32% 94%)`): the maze field only, a slightly deeper cream than the sheet.
- **Legend Stone** (`hsl(35 15% 90%)`): the band under the maze.
- **Charcoal Ink** (`hsl(30 10% 12%)`): text, rules, and the family of the maze walls. Hairlines use this ink at 10%, 15%, 20%, 25%, and 30% opacity. The section rule is 15%.
- **Graphite** (`hsl(30 10% 32%)`): supporting copy, captions, and the footer line. It stays dark enough for body text on Sheet Cream.

### Named Rules

**The One Spot Rule.** Copper is the only chromatic color. It fills the primary action, colors the second half of the wordmark, marks the maze start and exit, and appears on link hover and text selection. Cream, stone, and charcoal do the rest of the drawing.

**The Graticule Rule.** The 22px graph paper, a 1px charcoal line at 11% opacity on Field Cream, is painted only on the maze field.

## Typography

**Display Font:** Space Grotesk (with sans-serif)
**Body Font:** Inter (with sans-serif)

**Character:** Space Grotesk letters the sheet the way a title is lettered on a map. Inter reads the facts. The app loads self-hosted Latin files from @fontsource: Space Grotesk at 400, 500, 600, and 700, and Inter at 400, 500, and 600. Titles on the sheet use 600.

### Hierarchy

- **Display** (600, `clamp(2.75rem, 5vw, 4.5rem)`, line-height 0.92, tracking -0.025em): the title on the maze plate.
- **Headline** (600, 2.25rem, line-height 1.11, tracking -0.025em): section titles. From 768px they step to 3rem. The contact headline steps to 3.75rem.
- **Title** (600, 1.5rem, line-height 1.33, tracking -0.025em): a name in a ruled row. From 768px it steps to 1.875rem. The email uses the same sizes without the tight tracking.
- **Body** (400, 1.125rem, line-height 1.625): section ledes and the maker story, held to 65ch. Facts, captions, and navigation use 0.875rem Inter.
- **Label** (600, 0.75rem, line-height 1.33): legend keys, in the case the words are written. A bin label is the same size at weight 500.
- **Action** (600, 1.125rem, line-height 1.56): the hero copper button, sentence case. The header action and the stroked button are 0.875rem at the same weight.

### Named Rules

**The Two Faces Rule.** Space Grotesk carries titles, the wordmark, the email, and the mount label. Inter carries reading text, navigation, buttons, legend facts, and bin labels. Both are self-hosted Latin cuts from @fontsource.

**The Semibold Title Rule.** Titles are weight 600 with -0.025em tracking and are not set in uppercase.

## Layout

The page is one cream sheet. The column stops at 72rem. Inset is 1.25rem, and 2rem from 768px. A sticky header, 4rem tall below 768px and 5rem from 768px, carries the wordmark, the section index, and the copper action. Anchored sections keep a 6rem scroll margin so they clear that bar.

The first view fills the rest of the viewport. The maze field is at least 24rem tall, with a 1px rule on its top and bottom edges. The title plate sits on the field: in normal flow below 768px, at most 28rem wide with 1rem of margin, and from 768px absolutely placed 2rem from the top and left at a max width of 24rem. From 768px the maze occupies the field to the right of 24rem. The legend closes the field. From 768px it is one row; below that, each fact stacks under a 20% top rule.

Later sections share the column and stack with 5rem of vertical padding, 7rem from 768px. Other apps are ruled rows. Physical builds run in one column, two from 640px, and three from 1024px, with 2rem between mounts. The maker story is one column until 1024px, then a 65ch column beside a 16rem to 22rem list, with 5rem between them. The contact headline is held to 14ch.

**The Sheet Rule.** Content sits in one column no wider than 72rem, inset 1.25rem and 2rem from 768px. Sections stack on the same cream, separated by a 15% charcoal hairline, with 5rem of vertical padding and 7rem from 768px.

**The Measure Rule.** Reading text stops at 65ch.

## Elevation & Depth

The sheet is flat. Field Cream and Legend Stone are the only tonal steps, and charcoal hairlines do the separating. The header's bottom edge is charcoal at 10% opacity. Section breaks, the title plate, and row rules are 15%. Legend dividers on small screens are 20%. Bin labels, the stroked button, and some underlines are 25%. The empty mount's dashed edge is 30%. This sheet does not use the shadow variables declared beside the color tokens.

**The Flat Sheet Rule.** Depth is a hairline or one tonal step, Field Cream or Legend Stone. Surfaces do not cast shadows.

## Shapes

Corners on the sheet are square. A radius variable of 0.375rem is declared for the unused component kit; plates, buttons, bins, mounts, and the header do not use it. Strokes are 1px and solid, except the empty photo mount, which is dashed. The maze field's graticule is a 22px cell. The maze start mark is a copper disc, and the exit is a copper square.

**The Square Rule.** Plates, buttons, bin labels, mounts, and the header have square corners. The dashed stroke is reserved for an empty photo mount. The maze start mark stays a copper disc.

## Components

### Buttons

Square, sentence case, and filled only for the one copper action.

- **Shape:** square (0).
- **Primary:** Spot Copper fill, Sheet Cream text, 3.5rem tall, 1.5rem of horizontal padding, Action type. The header action uses the same inks at 2.75rem tall, 1rem of horizontal padding, and 0.875rem semibold. The missing-page action uses the same inks at 3rem tall and 1.25rem of horizontal padding.
- **Hover / Focus:** hover fill is Pressed Copper, over 150ms. Focus is a 2px Focus Copper outline, offset 3px.
- **Secondary:** Sheet Cream fill, Charcoal Ink text, a 1px border at 25% charcoal, 2.75rem tall, 1rem of horizontal padding, 0.875rem semibold. Hover turns the border and the text Spot Copper. Focus is a 2px Spot Copper outline, offset 3px.

### Chips

The bin label is the only chip. It is square, Sheet Cream, with a 1px border at 25% charcoal, padding 0.25rem 0.5rem, and Inter at 0.75rem weight 500. Legend keys are not chips: they are Label type, with no border, sitting above a 0.875rem fact.

### Cards

The title plate is the card. It is square, Sheet Cream, with a 1px border at 15% charcoal and 1.25rem of padding. Max width is 28rem in flow and 24rem when it sits on the field. It does not cast a shadow. Inside it: the Display title, a 1.125rem lede in Charcoal Ink, and the primary button.

### Navigation

The header is sticky Sheet Cream with a 10% bottom hairline and a z-index of 40. The recorded bar is the desktop index: 5rem tall, 2rem inset. Below 768px it is 4rem tall with 1.25rem inset, and the section links move into a panel.

The wordmark is Space Grotesk at 1.25rem semibold: "maker" in Charcoal Ink, "nik" in Spot Copper. Section links are Inter at 0.875rem weight 500, charcoal at 80% opacity, full charcoal on hover, with a Spot Copper outline offset 4px on focus. From 768px they sit in a row with 2rem between them. In the small-screen panel they are 1.125rem with 0.75rem of vertical padding, and the compact copper action follows. The menu control is a 2.75rem square target. Escape closes the panel and returns focus to that control.

The skip link sits off screen until focused, then pins 1rem from the top and left at z-index 80: Charcoal Ink fill, Sheet Cream text, Space Grotesk semibold, padding 0.75rem 1rem.

Footer links are 2.75rem squares with a 15% charcoal hairline. Hover turns the border and the text Spot Copper. Focus is a 2px Spot Copper outline, offset 3px.

**The Focus Rule.** Keyboard focus is a 2px outline, offset 3px on controls and 4px on text links. Filled copper buttons use Focus Copper. Every other control and link uses Spot Copper.

### Maze field

Field Cream, with the graticule from the Graticule Rule, and a 15% charcoal rule on the top and bottom edges. The maze itself is canvas over that field, not a raster. A ghost lattice in charcoal at 16% opacity marks the cells. Walls are charcoal at 14% lightness, square caps and miter joins, about 12% of a cell wide. The start is a Spot Copper disc. The exit is a Spot Copper square. The walls draw once from the entrance over 1700ms, with progress `1 - (1 - t) ** 3`, and then rest. Reduced motion paints the finished maze on the first frame.

### Build-log row

A top hairline at 15% charcoal and 1.5rem of vertical padding. Three columns: bin label, name, status. The description sits under the name in Graphite at 1rem, line-height 1.625, held to 65ch. The name is a Title, underlined in charcoal at 25% opacity, offset 0.18em. Hover turns the words and the underline Spot Copper. Focus is a 2px Spot Copper outline, offset 4px. Status is 0.875rem Inter at weight 500.

### Empty photo mount

A missing photograph stays a mount. The frame is Sheet Cream with a 1px dashed border at 30% charcoal, centered label "Photo needed" in Space Grotesk at 0.875rem semibold. Aspects are 3/4, 1/1, and 5/4. The caption sits 0.75rem below, in Graphite, 0.875rem, line-height 1.625. No shipping raster stands in for a photograph.

### Email link

Space Grotesk semibold, 1.5rem and 1.875rem from 768px, Charcoal Ink, with a 2px Spot Copper underline offset 0.5rem. Minimum height 3rem. Hover turns the words Spot Copper. Focus is a 2px Spot Copper outline, offset 4px.

## Do's and Don'ts

### Do:

- **Do** keep Spot Copper at hsl(18 70% 36%) or darker when it is text or a filled button on Sheet Cream.
- **Do** draw the maze in canvas, and keep a missing photograph as a dashed mount labeled "Photo needed".
- **Do** load Space Grotesk and Inter from the self-hosted @fontsource files.
- **Do** keep plates, buttons, bins, mounts, and the header square, and separate regions with a 1px charcoal rule.

### Don't:

- **Don't** introduce a second chromatic color.
- **Don't** paint the graph-paper graticule outside the maze field.
- **Don't** round plates, buttons, bins, or mounts.
- **Don't** lift a surface with a drop shadow.
- **Don't** set an action in uppercase tracked micro-type.
- **Don't** fill an empty mount with a generated, stock, or sample image.
