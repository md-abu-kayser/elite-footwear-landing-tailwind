<div align="center">

# Elite Footwear

### A polished, responsive storefront concept for premium footwear

Explore a complete retail landing page with curated product collections, a promotional carousel, theme switching, price filters, and a responsive shopping experience built with lightweight front-end technologies.

<p>
	<a href="https://elite-footwear-md-abu-kayser.surge.sh/">Live Demo</a>
</p>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)
![License](https://img.shields.io/badge/License-MIT-111111?style=for-the-badge)

</div>

## Overview

Elite Footwear is a front-end e-commerce landing page designed to make a footwear catalogue feel premium, easy to scan, and ready for a real storefront backend. The interface combines DaisyUI components with Tailwind utility classes, while a small vanilla JavaScript layer adds theme persistence and product filtering without a build step.

The visual direction is inspired by modern athletic retail: strong product imagery, high-contrast calls to action, spacious product grids, and a flexible theme system that lets visitors personalize the page.

## Live Preview

**[Open the live storefront](https://elite-footwear-md-abu-kayser.surge.sh/)**

The project is deployed as a static site on Surge. Because Tailwind CSS, DaisyUI, Font Awesome, and several catalogue images are loaded from external URLs, an internet connection is required for the full experience.

## Highlights

- Responsive navigation with desktop mega-menu and mobile dropdown menu
- Promotional three-slide hero carousel for campaigns and new arrivals
- Casual and formal footwear catalogues with responsive product grids
- Price filtering for each product collection
- Theme switcher with Light, Dark, Cupcake, Bumblebee, and Emerald themes
- Theme preference persistence through `localStorage`
- Product cards with pricing, imagery, category metadata, and clear purchase CTAs
- Benefits, about, and contact sections for a complete storefront flow
- Lightweight static architecture with no package installation or build pipeline
- Reusable local image assets alongside externally sourced catalogue imagery

## Technology

| Layer       | Tools                                 |
| ----------- | ------------------------------------- |
| Markup      | Semantic HTML5                        |
| Styling     | Tailwind CSS CDN, DaisyUI, custom CSS |
| Interaction | Vanilla JavaScript                    |
| Icons       | Font Awesome Kit                      |
| Deployment  | Surge Static Hosting                  |

## Project Structure

```text
elite-footwear-landing-tailwind/
├── css/
│   └── style.css       # Custom transitions, colors, and animations
├── icons/
│   └── Logo.png        # Store brand mark
├── images/             # Local footwear and banner assets
├── js/
│   └── script.js       # Theme persistence and collection filters
├── CNAME               # Custom static-host configuration
├── index.html          # Storefront layout and product catalogue
├── LICENSE             # MIT license
└── README.md
```

## Run Locally

No Node.js installation is required. The page is a static HTML experience.

### Option 1: Open directly

Open `index.html` in a modern browser. This is enough for a quick visual preview.

### Option 2: Serve locally

A local server gives the closest experience to a deployed site and avoids browser restrictions around local files.

```bash
# Python 3
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

You can also use the VS Code **Live Server** extension or any static file server.

## How It Works

### Theme switching

The selected DaisyUI theme is applied to the document through the `data-theme` attribute and saved in browser storage. Returning visitors see their previously selected theme automatically.

### Product filtering

Collection cards expose price metadata through `data-price` attributes. The shared `filterProducts()` function reads the selected price range and toggles matching cards in the relevant collection.

### Styling and motion

Tailwind utilities handle layout, spacing, responsive breakpoints, and component composition. `css/style.css` adds the small set of custom transitions, text treatment, color helpers, and keyframe animation used by the page.

## Customization

1. Update the product cards in `index.html` to change names, prices, descriptions, images, and `data-color` values.
2. Add local assets to `images/` and replace remote image URLs when you need more predictable performance and licensing control.
3. Add or remove DaisyUI themes in the `#theme-switcher` select and keep the values aligned with DaisyUI theme names.
4. Adjust animation definitions in the inline Tailwind configuration or custom effects in `css/style.css`.
5. Replace the placeholder contact details and catalogue copy with production content before launch.

## Roadmap

The current project is a polished storefront UI foundation. Natural next steps for turning it into a production shop include:

- Connect product data to a JSON API or headless CMS
- Add working search, color filtering, and category navigation
- Implement a persistent cart and product detail views
- Add checkout and payment-provider integration
- Move third-party images and scripts to controlled, optimized assets
- Add automated accessibility, responsive visual, and link checks

## Deployment

The included `CNAME` file contains the current Surge deployment hostname. For another static host, upload the repository contents and configure the host's domain settings as required. GitHub Pages, Netlify, Cloudflare Pages, and Surge can all serve this project without a build command.

## Credits and Usage

This is an independent front-end learning and portfolio project. Product and promotional imagery may come from third-party sources referenced in `index.html`; verify usage rights and replace those assets with licensed or owned media before commercial deployment.

### License

- This project is licensed under the terms of the **[MIT License](./LICENSE)**.
- You may replace or update the license as needed for client or proprietary projects.

---

### Contact and Maintainer

- **Name:** Md Abu Kayser
- **Project:** _elite-footwear-landing-tailwind_
- **Maintainer:** [md-abu-kayser](https://github.com/md-abu-kayser)
- **Email:** [abu.kayser.official@gmail.com](mailto:abu.kayser.official@gmail.com)
- **GitHub:** [github.com/abu.kayser-official](https://github.com/md-abu-kayser)

If you’d like this README tailored for a specific purpose - such as **hiring managers**, **open-source contributors**, or **client deliverables** - feel free to request a custom tone or format.

---

<div align="center">

Built with HTML, Tailwind CSS, DaisyUI, and vanilla JavaScript.

</div>
