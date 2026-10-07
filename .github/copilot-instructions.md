# Portfolio (Astro static site, GitHub Pages)
Stack: Astro, plain CSS variables, vanilla JS only when needed. No Tailwind/React/DB/backend/analytics/extra libraries.
Routing: src/pages/index.astro, projects.astro. Directory output, trailingSlash 'always', no .html in URLs. Internal links use import.meta.env.BASE_URL.
Home order: nav, hero, projects, automation, experience, skills, education, contact, footer.
Content: src/data (md/json). Use placeholder content until real content is given.
Theme: CSS vars, light/dark, toggle in nav, saved in localStorage, default to system.
Light: bg #F7F7F5, text #1F2328, accent #3E6E8E, accent2 #4F73A0
Dark: bg #14171A, text #E6E8EA, accent #7FA8C4, accent2 #9DB4D6
Fonts: Inter (self-hosted); JetBrains Mono for tech tags only.
Style: calm, muted, clear hierarchy, 1280px max width, side padding clamp(1rem, 4vw, 3rem), generous whitespace.
Motion: subtle scroll fade-in, accent lines that fill on scroll, hover states; none under prefers-reduced-motion.
A11y: semantic HTML, one h1, AA contrast, keyboard nav, modal closes on Esc with focus trap, alt text.
Perf: lazy-load images, mobile-first, hamburger nav on mobile.
Output: only changed files, complete code, no explanations unless asked.
Word-pop text animation (PopText component) only on hero heading and section titles.