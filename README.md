# Data Analytics Portfolio

A responsive portfolio site for work in healthcare, people/workforce, and behavioral analytics, with an emphasis on communication, research interests, and a growing analytics skill set.

**Website:** https://art4124.github.io/data-analytics-portfolio/

> **Project status:** The analytics case studies listed on the website are **planned/in progress**, not completed analyses. Preview charts and figures are design illustrations, not validated study findings. This repository primarily demonstrates portfolio-site design and development today.

## What's included

- Responsive multi-page site, with healthcare, workforce, and behavioral categories.
- Project-planning pages outlining potential questions, datasets, and intended deliverables.
- About, experience, and contact pages.
- English, Spanish, and Korean interface translations.
- HTML/CSS/JavaScript styling and interactions, published through GitHub Pages.

## Planned case-study areas

| Case study | Current status |
| --- | --- |
| Patient access and appointment no-shows | Planned |
| Employee attrition and workforce analytics | Planned |
| Behavioral and mental well-being analysis | Planned |
| Google Data Analytics certificate case study | Planned / not published as complete |
| Student engagement and academic outcomes | Planned |

See [the Projects page](https://art4124.github.io/data-analytics-portfolio/projects.html) for each project's intended approach. The repository should not be interpreted as evidence that all analyses, dashboards, or certifications have already been completed.

## Repository guide

| Files | Purpose |
| --- | --- |
| `index.html`, `projects.html` | Main landing and project overview |
| `healthcare.html`, `workforce.html`, `behavioral.html` | Analytics category pages |
| `about.html`, `contact.html` | Background and contact |
| `styles.css`, `nav.css`, `footer.css` | Shared styling |
| `about.css`, `contact.css`, `category.css`, `hero-fix.css` | Page-specific styling |
| `language.js` and other `*-language.js` scripts | Localized UI text |
| `experience-carousel.js`, `about-title-fix.js` | About-page interactions and refinements |
| `hero.png`, `hero.svg`, `icon.WEBP`, `me.JPEG` | Site assets |

Files are kept at their current paths to preserve existing relative imports and deployed pages.

## Run locally

This is a static site with no package installation or build step.

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000/ in a browser. You can also inspect the individual HTML pages directly.

## My contribution and tools

I directed the project scope, organization, content priorities, responsive design decisions, multilingual presentation, testing, and iterative revisions, using AI as a coding and debugging collaborator. Technologies represented in the site include HTML, CSS, JavaScript, and GitHub Pages. These website-development activities are distinct from professional data-analysis experience.

## Next steps

- Publish a completed, reproducible case study with source dataset, cleaning approach, analysis, visualization, and a short interpretation.
- Replace preview figures with verified results when a case study is complete.
- Add repeatable checks for navigation, translations, and mobile usability.

**Data and privacy:** Future case studies should use appropriately licensed public, synthetic, or de-identified data—not private patient or employee records. Public source visibility does not imply an open-source reuse license.
