import strikeCover from "../assets/projects/dev/Strike1_lich.png";
import strikeGallery from "../assets/projects/dev/Strike2_ast.png";
import blueprintCover from "../assets/projects/dev/BPP_cover.png";
import blueprintImage1 from "../assets/projects/dev/BPP_img1.png";
import blueprintImage2 from "../assets/projects/dev/BPP_img2.png";
import blueprintImage3 from "../assets/projects/dev/BPP_img3.png";
import blueprintImage4 from "../assets/projects/dev/BPP_img4.png";
import blueprintImage5 from "../assets/projects/dev/BPP_img5.png";
import nimbusScreen1 from "../assets/projects/dev/Nimbus_img1.png";
import nimbusScreen2 from "../assets/projects/dev/Nimbus_img2.png";
import nimbusScreen3 from "../assets/projects/dev/Nimbus_img3.png";
import collectWorkflow from "../assets/projects/automation/SNPH1_data-collection.png";
import scoreWorkflow from "../assets/projects/automation/SNPH2_analysis.png";
import decideWorkflow from "../assets/projects/automation/SNPH3_topic.png";
import generateWorkflow from "../assets/projects/automation/SNPH4_generation.png";

const optionalProjectCovers = import.meta.glob(
  "../assets/projects/{blueprintpro,nimbus}/*.{avif,gif,jpeg,jpg,png,webp}",
  { eager: true, import: "default" },
);

const optionalProjectCover = (project) =>
  Object.entries(optionalProjectCovers).find(([path]) => path.includes(`/projects/${project}/`))?.[1] ?? null;

export const projects = [
  {
    number: "01",
    slug: "blueprintpro",
    title: "BlueprintPro",
    description:
      "AI-powered architect-client matching platform. Cross-platform web and Android app connecting clients with architects through natural-language portfolio search using OpenAI semantic matching, with Stripe payments.",
    tags: ["ASP.NET Core MVC", "OpenAI API", "Stripe API", "Kotlin", "PostgreSQL", "Railway"],
    cover: blueprintCover,
    gallery: [
      { image: blueprintImage1, alt: "BlueprintPro screenshot 1 of 5" },
      { image: blueprintImage2, alt: "BlueprintPro screenshot 2 of 5" },
      { image: blueprintImage3, alt: "BlueprintPro screenshot 3 of 5" },
      { image: blueprintImage4, alt: "BlueprintPro screenshot 4 of 5" },
      { image: blueprintImage5, alt: "BlueprintPro screenshot 5 of 5" },
    ],
  },
  {
    number: "02",
    slug: "nimbus",
    title: "Nimbus",
    description:
      "Smart IoT clothes protection and rainwater harvesting. Arduino (C++) handles sensor logic and actuators, while a Kotlin Android app sends real-time push notifications and shows system status.",
    tags: ["Arduino C++", "Kotlin", "Android SDK", "IoT"],
    cover: optionalProjectCover("nimbus"),
    gallery: [
      { image: nimbusScreen1, alt: "Nimbus Android app, screen 1 of 3" },
      { image: nimbusScreen2, alt: "screen 2 of 3" },
      { image: nimbusScreen3, alt: "screen 3 of 3" },
    ],
  },
  {
    number: "03",
    slug: "client-site-migration",
    title: "Client site migration (Strike Marketing)",
    description:
      "WordPress to static HTML/CSS. Rebuilt two client sites by hand as lightweight static pages, migrated domains to Namecheap (DNS and registrar transfer), test-deployed on Render and Netlify, then deployed to DigitalOcean.",
    tags: ["HTML", "CSS", "Namecheap", "DigitalOcean", "Netlify", "Render"],
    cover: strikeCover,
    gallery: [
      { image: strikeCover, alt: "Love Is Clean House website, rebuilt as static HTML/CSS" },
      { image: strikeGallery, alt: "AST Contracting website, rebuilt as static HTML/CSS" },
    ],
    links: [
      { label: "loveiscleanhouse.com", href: "https://loveiscleanhouse.com" },
      { label: "astcontracting.com", href: "https://astcontracting.com" },
    ],
  },
];

export const automationMetrics = [
  { value: "10", label: "news sources, checked every 10 min" },
  { value: "0-100", label: "AI relevance score, 80+ to qualify" },
  { value: "3", label: "drafts a day while in use" },
  { value: "1,200-1,500", label: "words per draft" },
];

export const automation = [
  {
    slug: "collect",
    title: "Collect",
    description:
      "Polled 10 RSS sources every 10 minutes, skipped duplicates by checking Notion, and used Azure OpenAI to classify each article by region, category, and relevance and write a short summary. Stored every article, including rejected ones, so the team could audit the AI's decisions.",
    tags: ["n8n", "RSS", "Azure OpenAI", "Notion API"],
    image: collectWorkflow,
    imageAlt: "n8n workflow canvas for Collect step",
  },
  {
    slug: "score",
    title: "Score",
    description:
      "Scored each relevant article 0-100 across four criteria (ecosystem relevance, accuracy, news value, educational value), returned structured JSON, and wrote the score and reasoning back to Notion.",
    tags: ["Azure OpenAI", "Structured output", "Notion API"],
    image: scoreWorkflow,
    imageAlt: "n8n workflow canvas for Score step",
  },
  {
    slug: "decide",
    title: "Decide",
    description:
      "Ran three times a day, kept only unused articles scoring 80+, picked the top one, marked it as used, and triggered generation.",
    tags: ["Schedule trigger", "Notion API"],
    image: decideWorkflow,
    imageAlt: "n8n workflow canvas for Decide step",
  },
  {
    slug: "generate",
    title: "Generate",
    description:
      "Planned a research brief, ran live web research, wrote a 1,200-1,500 word draft, then edited it for SEO and a natural tone. Created a cover image, hosted it, saved the draft in Notion, and notified the team on Slack for review.",
    tags: ["Azure OpenAI", "Perplexity", "OpenAI Images", "Cloudinary", "Notion API", "Slack API"],
    image: generateWorkflow,
    imageAlt: "n8n workflow canvas for Generate step",
  },
];

export const automationDecisions = [
  "I separated scoring and decision-making into distinct workflows, making each easier to debug and change.",
  "I removed the per-article trend check from the decision step because it was too costly, and moved research to the generation step instead.",
  "I kept a human in the loop: drafts were saved as Draft and reviewed on Slack before publication.",
];

export const experience = [
  {
    dates: "2026",
    role: "IT Intern",
    company: "StellarPH (StartupNews.ph)",
    description:
      "Built automated workflows using n8n and designed and published web pages in Framer.",
  },
  {
    dates: "2026 · 2-week program",
    role: "Web Development Trainee",
    company: "Strike Marketing",
    description:
      "Rebuilt two client websites from WordPress as lightweight static HTML/CSS pages and handled domain migration and deployment.",
  },
];

export const skills = [
  { category: "AI & Automation", items: ["n8n", "Azure OpenAI", "OpenAI API", "Perplexity AI", "Prompt engineering"] },
  { category: "Web & Mobile", items: ["ASP.NET Core MVC", "Bootstrap", "HTML/CSS", "Kotlin", "Android SDK", "PHP"] },
  { category: "APIs", items: ["REST", "Stripe", "Notion", "Slack", "Cloudinary", "Webhooks"] },
  { category: "Cloud & Deploy", items: ["Azure", "Railway", "Render", "Netlify", "DigitalOcean", "GitHub Actions"] },
  { category: "Languages", items: ["Python", "Java", "C", "C++", "C#", "Kotlin", "SQL"] },
  { category: "Databases", items: ["SQL Server", "PostgreSQL", "MongoDB", "MS Access"] },
  { category: "Design", items: ["Figma", "Framer"] },
];

export const education = [
  {
    level: "College",
    qualification: "Bachelor of Science in Information Technology",
    institution: "University of Cebu Banilad",
    dates: "2022–2026",
  },
  {
    level: "Senior High School",
    qualification: "TVL Programming",
    institution: "University of Cebu Banilad",
    dates: "2020–2022",
  },
];