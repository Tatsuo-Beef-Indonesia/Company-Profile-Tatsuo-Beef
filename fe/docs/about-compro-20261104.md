# About Us — client company profile

## Editorial layout revision

The user's supplied research guides the new chapters after Cerita Kami:
Foodnia (https://foodnia.co.jp/about/) for clear process storytelling and
Akaneya (https://akaneyajapan.com/en/) for photographic pacing.
This is an original implementation using existing Tatsuo assets and GSAP.

- Kaizen opens with a wide craft image, restrained parallax, Japanese typography,
  and four concise mindset steps. The founder philosophy remains a separate block.
- Visi Kami and Misi Kami are separate sections with explicit headings.
  Mission copy condenses the company's stated commitment to quality, PRIMA and fair business.
- PRIMA is a maroon chapter with a sticky, keyboard-accessible letter index on desktop.
  Reading position updates its active letter and progress; mobile uses a vertical layout.
- People development pairs editorial imagery with three concise points.
  The image is labeled as an illustration, not presented as an actual employee portrait.
- The halal preview uses the full source certificate, with the ID and source link retained.
- Images and values use scroll-linked movement. Labels and copy reveal progressively.
  Reduced-motion preferences leave content readable and omit the movement.
- Dev server, browser preview and build were not run, following the user's instruction.

Source: `public/drive mbak aira/Company Profile Tatsuo Beef B2B 2026.pdf`, page 2,
and the three company-values, people-development and founder-philosophy images
supplied in the conversation.

The About Us story follows the PDF: operations since 2020, incorporated in 2025.
PRIMA: Peduli, Respek, Integritas, Mutu Terjamin, Aman Bertransaksi.
The founder philosophy and people-development copy are condensed for the website.
The user's additional founder notes inform the Kaizen story: learning from customers
and suppliers, evaluation and small continuous improvements for customer satisfaction,
people development and the future business. Contributing internationally is presented
as a long-term aspiration, not an existing operational claim.
Halal certificate ID `ID33210029677961025` was visually checked against page 6.
It appears in the company profile and halal section from centralized company data.
`public/images/tatsuo-halal-certificate-full.webp` is a direct render of page 6,
without AI changes to the certificate, and is linked from the halal section.
The updated Solo representative address from the user is retained over the older PDF address.

## Assets

- `public/images/prima-values-hd.webp`: transparent 2048 × 768 restoration via built-in imagegen, based on a crop of page 2. AI restoration is not a pixel-identical original.
- `public/images/partners/aerofood-acs.webp`: official logo from https://aerowisatafood.com/wp-content/uploads/layerslider/Menu-History-Banner/Aerofood-Logo-500.png
- `public/images/partners/waroeng-steak.webp`: official logo from https://waroengsteakandshake.com/assets/v2/img/logo.png

Only two requested partners were added to the existing curated selection.
The Waroeng Steak card uses a dark background to preserve legibility of its white lettering.
No dev server or build was run, as requested by the user.

## PRIMA imagegen prompt

Restore and clean up the supplied original Prima company-values logo for a high-resolution website asset. Preserve exactly the handwritten word Prima (capital P lowercase rima) and original playful smiling face at its right, including one upright eye, one angled wink, and the broad upward smile. Preserve proportions, stroke widths, spacing and brick-red color approximately #a52c26. Remove raster blur and jagged edges; use smooth crisp flat contours. Isolated logo only, landscape composition around 8:3 with a small transparent margin. Actual transparent background. Do not redesign typography or symbol; no new symbols, extra text, shadows, mockup or decoration.
