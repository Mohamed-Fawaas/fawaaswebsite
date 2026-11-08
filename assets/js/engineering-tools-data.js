/* Engineering Tools & Ecosystem — centralised data.
   Edit this file to add / remove / update tools. No rendering code needs to change.
   status: 'applied' (used in my projects) | 'familiar' | 'learning' | omit (listed, but NOT claimed as mastered)
   projects: slugs from /projects/<slug>.html     icon: path to SVG or null (monogram fallback)
   cats: first entry is the primary category, extra entries make the tool appear in more categories. */
window.ET_DATA={
 "statuses": {
  "applied": "Applied in Projects",
  "familiar": "Familiar With",
  "learning": "Currently Learning"
 },
 "categories": [
  {
   "id": "ide",
   "label": "IDEs & Editors",
   "use": "Writing, running and debugging code with language-aware tooling.",
   "icon": "<path fill=\"currentColor\" d=\"M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H3v2h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2v-2H8v-5a2 2 0 0 0-2-2a2 2 0 0 0 2-2V5h2V3m6 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2a2 2 0 0 1-2-2V5h-2V3z\"/>"
  },
  {
   "id": "vcs",
   "label": "Version Control",
   "use": "Tracking changes, branching, reviewing code and collaborating on repositories.",
   "icon": "<path fill=\"currentColor\" d=\"M13 14c-3.36 0-4.46 1.35-4.82 2.24C9.25 16.7 10 17.76 10 19a3 3 0 0 1-3 3a3 3 0 0 1-3-3c0-1.31.83-2.42 2-2.83V7.83A2.99 2.99 0 0 1 4 5a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 1.31-.83 2.42-2 2.83v5.29c.88-.65 2.16-1.12 4-1.12c2.67 0 3.56-1.34 3.85-2.23A3.01 3.01 0 0 1 14 7a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 1.34-.88 2.5-2.09 2.86C17.65 11.29 16.68 14 13 14m-6 4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M7 4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m10 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1\"/>"
  },
  {
   "id": "api",
   "label": "API Development",
   "use": "Designing, documenting, calling and testing REST and GraphQL APIs.",
   "icon": "<path fill=\"currentColor\" d=\"M7 7H5a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2m0 4H5V9h2m7-2h-4v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m0 4h-2V9h2m6 0v6h1v2h-4v-2h1V9h-1V7h4v2Z\"/>"
  },
  {
   "id": "db",
   "label": "Databases",
   "use": "Designing schemas, running queries and administering relational and NoSQL databases.",
   "icon": "<path fill=\"currentColor\" d=\"M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4\"/>"
  },
  {
   "id": "design",
   "label": "UI/UX Design",
   "use": "Wireframing, prototyping and handing off interface designs.",
   "icon": "<path fill=\"currentColor\" d=\"M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8\"/>"
  },
  {
   "id": "arch",
   "label": "System Design",
   "use": "Modelling architecture, UML diagrams and data flows before and during development.",
   "icon": "<path fill=\"currentColor\" d=\"M9 2v6h2v3H5c-1.11 0-2 .89-2 2v3H1v6h6v-6H5v-3h6v3H9v6h6v-6h-2v-3h6v3h-2v6h6v-6h-2v-3c0-1.11-.89-2-2-2h-6V8h2V2z\"/>"
  },
  {
   "id": "os",
   "label": "OS & Terminal",
   "use": "Working efficiently in command-line environments and across operating systems.",
   "icon": "<path fill=\"currentColor\" d=\"M20 19V7H4v12zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-7 14v-2h5v2zm-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59z\"/>"
  },
  {
   "id": "build",
   "label": "Build & Packages",
   "use": "Installing dependencies, bundling code and automating builds.",
   "icon": "<path fill=\"currentColor\" d=\"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15l-1.89 1.07L16 8.61l1.96-1.11zM6.04 7.5L12 10.85l1.96-1.1l-5.88-3.4zM5 15.91l6 3.38v-6.71L5 9.21zm14 0v-6.7l-6 3.37v6.71z\"/>"
  },
  {
   "id": "test",
   "label": "Testing & Automation",
   "use": "Verifying behaviour with unit, end-to-end and load tests.",
   "icon": "<path fill=\"currentColor\" d=\"M7 2v2h1v14a4 4 0 0 0 4 4a4 4 0 0 0 4-4V4h1V2zm4 14c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m2-4c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m1-5h-4V4h4z\"/>"
  },
  {
   "id": "quality",
   "label": "Code Quality",
   "use": "Enforcing style, catching bugs early and keeping codebases maintainable.",
   "icon": "<path fill=\"currentColor\" d=\"m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68zm-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z\"/>"
  },
  {
   "id": "container",
   "label": "Containers",
   "use": "Packaging and running applications consistently across environments.",
   "icon": "<path fill=\"currentColor\" d=\"M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16\"/>"
  },
  {
   "id": "cicd",
   "label": "CI/CD",
   "use": "Automating builds, tests and deployments on every change.",
   "icon": "<path fill=\"currentColor\" d=\"M12 18a6 6 0 0 1-6-6c0-1 .25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12a8 8 0 0 0 8 8v3l4-4l-4-4m0-11V1L8 5l4 4V6a6 6 0 0 1 6 6c0 1-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12a8 8 0 0 0-8-8\"/>"
  },
  {
   "id": "cloud",
   "label": "Cloud & Deployment",
   "use": "Hosting applications, managing infrastructure and delivering them globally.",
   "icon": "<path fill=\"currentColor\" d=\"M6.5 20q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20m-12-2h12q1.05 0 1.77-.73q.73-.72.73-1.77t-.73-1.77Q19.55 13 18.5 13H17v-2q0-2.07-1.46-3.54Q14.08 6 12 6Q9.93 6 8.46 7.46Q7 8.93 7 11h-.5q-1.45 0-2.47 1.03Q3 13.05 3 14.5T4.03 17q1.02 1 2.47 1m5.5-6\"/>"
  },
  {
   "id": "observe",
   "label": "Observability",
   "use": "Monitoring health, collecting logs and tracing requests in running systems.",
   "icon": "<path fill=\"currentColor\" d=\"m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z\"/>"
  },
  {
   "id": "sec",
   "label": "Security",
   "use": "Finding vulnerabilities, scanning dependencies and protecting secrets.",
   "icon": "<path fill=\"currentColor\" d=\"M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m2.8-10V9.5C14.8 8.1 13.4 7 12 7S9.2 8.1 9.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z\"/>"
  },
  {
   "id": "docs",
   "label": "Documentation",
   "use": "Writing and publishing technical documentation and shared knowledge.",
   "icon": "<path fill=\"currentColor\" d=\"m19 1l-5 5v11l5-4.5zm2 4v13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5c.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1M10 18.41C8.75 18.09 7.5 18 6.5 18c-1.06 0-2.32.19-3.5.5V7.13c.91-.4 2.14-.63 3.5-.63s2.59.23 3.5.63z\"/>"
  },
  {
   "id": "agile",
   "label": "Agile & Collaboration",
   "use": "Planning sprints, tracking work and communicating with teams.",
   "icon": "<path fill=\"currentColor\" d=\"M4 5v13h17V5zm10 2v9h-3V7zM6 7h3v9H6zm13 9h-3V7h3z\"/>"
  },
  {
   "id": "perf",
   "label": "Performance & Debugging",
   "use": "Profiling pages, debugging in the browser and auditing accessibility.",
   "icon": "<path fill=\"currentColor\" d=\"M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41s-1.03.39-1.42.01A9.97 9.97 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13\"/>"
  },
  {
   "id": "ai",
   "label": "AI-Assisted Engineering",
   "use": "Using AI assistants to explore, draft, review and explain code under human review.",
   "icon": "<path fill=\"currentColor\" d=\"M17.5 15.5c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m-9-2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2M23 15v3c0 .55-.45 1-1 1h-1v1c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-3.87 3.13-7 7-7h1V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1m-2 1h-2v-2c0-2.76-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v2H3v1h2v3h14v-3h2z\"/>"
  },
  {
   "id": "bi",
   "label": "Business Intelligence",
   "use": "Modelling data, building dashboards and turning raw data into decisions.",
   "icon": "<path fill=\"currentColor\" d=\"M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2zm2 2H5V5h14v14.1M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2\"/>"
  },
  {
   "id": "gis",
   "label": "GIS & Geospatial",
   "use": "Visualising, analysing and serving spatial data and maps.",
   "icon": "<path fill=\"currentColor\" d=\"M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2\"/>"
  },
  {
   "id": "ds",
   "label": "Data Science & ML",
   "use": "Exploring data, training models and tracking experiments.",
   "icon": "<path fill=\"currentColor\" d=\"M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45c-.19.47-.58.84-1.06 1l-.79.25a1.69 1.69 0 0 1-1.86-.55L14.44 18c-.89-.15-1.73-.53-2.44-1.1c-.5.15-1 .23-1.5.23c-.88 0-1.76-.27-2.5-.79c-.53.16-1.07.23-1.62.22c-.79.01-1.57-.15-2.3-.45a4.1 4.1 0 0 1-2.43-3.61c-.08-.72.04-1.45.35-2.11c-.29-.75-.32-1.57-.07-2.33C2.3 7.11 3 6.32 3.87 5.82c.58-1.69 2.21-2.82 4-2.7c1.6-1.5 4.05-1.66 5.83-.37c.42-.11.86-.17 1.3-.17c1.36-.03 2.65.57 3.5 1.64c2.04.53 3.5 2.35 3.58 4.47c.05 1.11-.25 2.2-.86 3.13c.07.36.11.72.11 1.09m-5-1.41c.57.07 1.02.5 1.02 1.07a1 1 0 0 1-1 1h-.63c-.32.9-.88 1.69-1.62 2.29c.25.09.51.14.77.21c5.13-.07 4.53-3.2 4.53-3.25a2.59 2.59 0 0 0-2.69-2.49a1 1 0 0 1-1-1a1 1 0 0 1 1-1c1.23.03 2.41.49 3.33 1.3c.05-.29.08-.59.08-.89c-.06-1.24-.62-2.32-2.87-2.53c-1.25-2.96-4.4-1.32-4.4-.4c-.03.23.21.72.25.75a1 1 0 0 1 1 1c0 .55-.45 1-1 1c-.53-.02-1.03-.22-1.43-.56c-.48.31-1.03.5-1.6.56c-.57.05-1.04-.35-1.07-.9a.97.97 0 0 1 .88-1.1c.16-.02.94-.14.94-.77c0-.66.25-1.29.68-1.79c-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2C4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25c.5.19.78.75.59 1.29c-.19.52-.77.78-1.29.59c-.73-.32-1.55-.34-2.3-.06c-.32.27-.32.83-.32 1.27c0 .74.37 1.43 1 1.83c.53.27 1.12.41 1.71.4q-.225-.39-.39-.81a1.038 1.038 0 0 1 1.96-.68c.4 1.14 1.42 1.92 2.62 2.05c1.37-.07 2.59-.88 3.19-2.13c.23-1.38 1.34-1.5 2.56-1.5m2 7.47l-.62-1.3l-.71.16l1 1.25zm-4.65-8.61a1 1 0 0 0-.91-1.03c-.71-.04-1.4.2-1.93.67c-.57.58-.87 1.38-.84 2.19a1 1 0 0 0 1 1c.57 0 1-.45 1-1c0-.27.07-.54.23-.76c.12-.1.27-.15.43-.15c.55.03 1.02-.38 1.02-.92\"/>"
  }
 ],
 "projects": {
  "paddy-ai": "Paddy AI",
  "propertymate-ai": "PropertyMate AI",
  "goride-lk": "GoRide LK",
  "facetrack-ai": "FaceTrack AI",
  "gesture-control-ai": "GestureControl AI",
  "aurelia-stays": "Aurelia Stays V2",
  "routeflow": "RouteFlow Logistics V2",
  "savora-restaurant": "Savora Restaurant V2",
  "vitalis-clinic": "Vitalis Clinic V2",
  "waste-food-donation": "Waste Food Donation Website",
  "blog-cms": "Blog CMS",
  "aerix-analytics": "Aerix Analytics",
  "carelink": "CareLink",
  "bean-and-bloom": "Bean & Bloom",
  "sweet-baketique": "Sweet Baketique",
  "luxchrono-clock": "LuxChrono Clock",
  "abc-adventure": "ABC Adventure Kids V2",
  "spoken-english-fluently": "Spoken English Fluently",
  "car-racing-game": "Car Racing Game",
  "luxevista-resort": "LuxeVista Resort App",
  "city-cycle-rentals": "CityCycle Rentals",
  "paws-shop": "The Paws Shop",
  "hr-system": "HR Management System",
  "cosmatic-store": "Cosmetic Store (ConnectMe)"
 },
 "tools": [
  {
   "id": "visual-studio-code",
   "name": "Visual Studio Code",
   "cats": [
    "ide"
   ],
   "desc": "Lightweight, extensible editor for web, Python and general development.",
   "icon": "assets/img/tools/visual-studio-code.svg",
   "url": "https://code.visualstudio.com"
  },
  {
   "id": "visual-studio",
   "name": "Visual Studio",
   "cats": [
    "ide"
   ],
   "desc": "Full IDE for .NET, C# and C++ development on Windows.",
   "icon": "assets/img/tools/visual-studio.svg",
   "url": "https://visualstudio.microsoft.com"
  },
  {
   "id": "intellij-idea",
   "name": "IntelliJ IDEA",
   "cats": [
    "ide"
   ],
   "desc": "JetBrains IDE for Java and Kotlin projects.",
   "icon": "assets/img/tools/intellij-idea.svg",
   "url": "https://www.jetbrains.com/idea/"
  },
  {
   "id": "pycharm",
   "name": "PyCharm",
   "cats": [
    "ide"
   ],
   "desc": "JetBrains IDE for Python, data science and web frameworks.",
   "icon": "assets/img/tools/pycharm.svg",
   "url": "https://www.jetbrains.com/pycharm/"
  },
  {
   "id": "webstorm",
   "name": "WebStorm",
   "cats": [
    "ide"
   ],
   "desc": "JetBrains IDE for JavaScript and TypeScript.",
   "icon": "assets/img/tools/webstorm.svg",
   "url": "https://www.jetbrains.com/webstorm/"
  },
  {
   "id": "eclipse",
   "name": "Eclipse",
   "cats": [
    "ide"
   ],
   "desc": "Open-source Java IDE with a large plugin ecosystem.",
   "icon": "assets/img/tools/eclipse.svg",
   "url": "https://www.eclipse.org"
  },
  {
   "id": "netbeans",
   "name": "NetBeans",
   "cats": [
    "ide"
   ],
   "desc": "Java IDE with a visual Swing GUI builder.",
   "icon": "assets/img/tools/netbeans.svg",
   "url": "https://netbeans.apache.org",
   "use": "Building Java Swing desktop applications with the drag-and-drop form designer.",
   "status": "applied",
   "projects": [
    "paws-shop",
    "hr-system",
    "cosmatic-store",
    "facetrack-ai",
    "gesture-control-ai"
   ]
  },
  {
   "id": "android-studio",
   "name": "Android Studio",
   "cats": [
    "ide"
   ],
   "desc": "Official IDE for native Android apps.",
   "icon": "assets/img/tools/android-studio.svg",
   "url": "https://developer.android.com/studio",
   "use": "Developing, running and debugging native Android apps on emulators and devices.",
   "status": "applied",
   "projects": [
    "goride-lk",
    "luxevista-resort",
    "city-cycle-rentals"
   ]
  },
  {
   "id": "jupyterlab",
   "name": "JupyterLab",
   "cats": [
    "ide",
    "ds"
   ],
   "desc": "Browser-based environment for notebooks, code and data.",
   "icon": "assets/img/tools/jupyterlab.svg",
   "url": "https://jupyter.org"
  },
  {
   "id": "google-colab",
   "name": "Google Colab",
   "cats": [
    "ide",
    "ds"
   ],
   "desc": "Hosted notebooks for experiments and quick ML prototypes.",
   "icon": "assets/img/tools/google-colab.svg",
   "url": "https://colab.research.google.com"
  },
  {
   "id": "cursor",
   "name": "Cursor",
   "cats": [
    "ide",
    "ai"
   ],
   "desc": "AI-first code editor built on the VS Code foundation.",
   "icon": "assets/img/tools/cursor.svg",
   "url": "https://cursor.com"
  },
  {
   "id": "git",
   "name": "Git",
   "cats": [
    "vcs"
   ],
   "desc": "Distributed version control system.",
   "icon": "assets/img/tools/git.svg",
   "url": "https://git-scm.com",
   "status": "familiar"
  },
  {
   "id": "github",
   "name": "GitHub",
   "cats": [
    "vcs"
   ],
   "desc": "Hosting, pull requests and collaboration for Git repositories.",
   "icon": "assets/img/tools/github.svg",
   "url": "https://github.com",
   "status": "familiar"
  },
  {
   "id": "gitlab",
   "name": "GitLab",
   "cats": [
    "vcs"
   ],
   "desc": "Git hosting with built-in CI/CD and DevOps features.",
   "icon": "assets/img/tools/gitlab.svg",
   "url": "https://about.gitlab.com"
  },
  {
   "id": "bitbucket",
   "name": "Bitbucket",
   "cats": [
    "vcs"
   ],
   "desc": "Git hosting integrated with Jira and Pipelines.",
   "icon": "assets/img/tools/bitbucket.svg",
   "url": "https://bitbucket.org"
  },
  {
   "id": "github-desktop",
   "name": "GitHub Desktop",
   "cats": [
    "vcs"
   ],
   "desc": "Graphical client for everyday Git workflows.",
   "icon": null,
   "url": "https://desktop.github.com"
  },
  {
   "id": "gitkraken",
   "name": "GitKraken",
   "cats": [
    "vcs"
   ],
   "desc": "Visual Git client with commit graph.",
   "icon": "assets/img/tools/gitkraken.svg",
   "url": "https://www.gitkraken.com"
  },
  {
   "id": "sourcetree",
   "name": "SourceTree",
   "cats": [
    "vcs"
   ],
   "desc": "Free visual Git client from Atlassian.",
   "icon": "assets/img/tools/sourcetree.svg",
   "url": "https://www.sourcetreeapp.com"
  },
  {
   "id": "git-lfs",
   "name": "Git LFS",
   "cats": [
    "vcs"
   ],
   "desc": "Stores large binary files outside the main Git history.",
   "icon": "assets/img/tools/git-lfs.svg",
   "url": "https://git-lfs.com"
  },
  {
   "id": "postman",
   "name": "Postman",
   "cats": [
    "api"
   ],
   "desc": "API client for building and testing requests and collections.",
   "icon": "assets/img/tools/postman.svg",
   "url": "https://www.postman.com"
  },
  {
   "id": "swagger",
   "name": "Swagger",
   "cats": [
    "api"
   ],
   "desc": "Tooling for designing and documenting REST APIs.",
   "icon": "assets/img/tools/swagger.svg",
   "url": "https://swagger.io"
  },
  {
   "id": "openapi",
   "name": "OpenAPI",
   "cats": [
    "api"
   ],
   "desc": "Standard specification format for describing HTTP APIs.",
   "icon": "assets/img/tools/openapi.svg",
   "url": "https://www.openapis.org"
  },
  {
   "id": "insomnia",
   "name": "Insomnia",
   "cats": [
    "api"
   ],
   "desc": "API client for REST, GraphQL and gRPC.",
   "icon": "assets/img/tools/insomnia.svg",
   "url": "https://insomnia.rest"
  },
  {
   "id": "bruno",
   "name": "Bruno",
   "cats": [
    "api"
   ],
   "desc": "Open-source, Git-friendly API client.",
   "icon": "assets/img/tools/bruno.svg",
   "url": "https://www.usebruno.com"
  },
  {
   "id": "hoppscotch",
   "name": "Hoppscotch",
   "cats": [
    "api"
   ],
   "desc": "Lightweight open-source API request builder.",
   "icon": "assets/img/tools/hoppscotch.svg",
   "url": "https://hoppscotch.io"
  },
  {
   "id": "curl",
   "name": "cURL",
   "cats": [
    "api"
   ],
   "desc": "Command-line tool for transferring data with URLs.",
   "icon": "assets/img/tools/curl.svg",
   "url": "https://curl.se"
  },
  {
   "id": "httpie",
   "name": "HTTPie",
   "cats": [
    "api"
   ],
   "desc": "Human-friendly command-line HTTP client.",
   "icon": "assets/img/tools/httpie.svg",
   "url": "https://httpie.io"
  },
  {
   "id": "apollo-studio",
   "name": "Apollo Studio",
   "cats": [
    "api"
   ],
   "desc": "Schema management and monitoring for GraphQL.",
   "icon": "assets/img/tools/apollo-studio.svg",
   "url": "https://www.apollographql.com"
  },
  {
   "id": "newman",
   "name": "Newman",
   "cats": [
    "api"
   ],
   "desc": "Command-line runner for Postman collections.",
   "icon": null,
   "url": "https://github.com/postmanlabs/newman"
  },
  {
   "id": "mysql-workbench",
   "name": "MySQL Workbench",
   "cats": [
    "db"
   ],
   "desc": "Visual design and administration tool for MySQL.",
   "icon": "assets/img/tools/mysql-workbench.svg",
   "url": "https://www.mysql.com/products/workbench/"
  },
  {
   "id": "pgadmin",
   "name": "pgAdmin",
   "cats": [
    "db"
   ],
   "desc": "Administration and query tool for PostgreSQL.",
   "icon": null,
   "url": "https://www.pgadmin.org"
  },
  {
   "id": "dbeaver",
   "name": "DBeaver",
   "cats": [
    "db"
   ],
   "desc": "Universal database client for many SQL engines.",
   "icon": "assets/img/tools/dbeaver.svg",
   "url": "https://dbeaver.io"
  },
  {
   "id": "mongodb-compass",
   "name": "MongoDB Compass",
   "cats": [
    "db"
   ],
   "desc": "GUI for exploring and querying MongoDB data.",
   "icon": "assets/img/tools/mongodb-compass.svg",
   "url": "https://www.mongodb.com/products/tools/compass"
  },
  {
   "id": "mongodb-atlas",
   "name": "MongoDB Atlas",
   "cats": [
    "db"
   ],
   "desc": "Managed cloud MongoDB service.",
   "icon": "assets/img/tools/mongodb-atlas.svg",
   "url": "https://www.mongodb.com/atlas"
  },
  {
   "id": "redisinsight",
   "name": "RedisInsight",
   "cats": [
    "db"
   ],
   "desc": "Visual tool for browsing and debugging Redis.",
   "icon": "assets/img/tools/redisinsight.svg",
   "url": "https://redis.io/insight/"
  },
  {
   "id": "sqlite-browser",
   "name": "SQLite Browser",
   "cats": [
    "db"
   ],
   "desc": "Visual tool for creating and editing SQLite databases.",
   "icon": "assets/img/tools/sqlite-browser.svg",
   "url": "https://sqlitebrowser.org"
  },
  {
   "id": "sql-server-management-studio",
   "name": "SQL Server Management Studio",
   "cats": [
    "db"
   ],
   "desc": "Management tool for Microsoft SQL Server.",
   "icon": "assets/img/tools/sql-server-management-studio.svg",
   "url": "https://learn.microsoft.com/sql/ssms/"
  },
  {
   "id": "prisma-studio",
   "name": "Prisma Studio",
   "cats": [
    "db"
   ],
   "desc": "Visual editor for data managed through Prisma ORM.",
   "icon": "assets/img/tools/prisma-studio.svg",
   "url": "https://www.prisma.io/studio"
  },
  {
   "id": "firebase-console",
   "name": "Firebase Console",
   "cats": [
    "db"
   ],
   "desc": "Manage Firebase databases, auth and hosting.",
   "icon": "assets/img/tools/firebase-console.svg",
   "url": "https://firebase.google.com"
  },
  {
   "id": "figma",
   "name": "Figma",
   "cats": [
    "design"
   ],
   "desc": "Collaborative interface design and prototyping.",
   "icon": "assets/img/tools/figma.svg",
   "url": "https://www.figma.com"
  },
  {
   "id": "figjam",
   "name": "FigJam",
   "cats": [
    "design"
   ],
   "desc": "Online whiteboard for flows and brainstorming.",
   "icon": "assets/img/tools/figjam.svg",
   "url": "https://www.figma.com/figjam/"
  },
  {
   "id": "framer",
   "name": "Framer",
   "cats": [
    "design"
   ],
   "desc": "Design and publish interactive websites.",
   "icon": "assets/img/tools/framer.svg",
   "url": "https://www.framer.com"
  },
  {
   "id": "adobe-photoshop",
   "name": "Adobe Photoshop",
   "cats": [
    "design"
   ],
   "desc": "Raster image editing and compositing.",
   "icon": "assets/img/tools/adobe-photoshop.svg",
   "url": "https://www.adobe.com/products/photoshop.html"
  },
  {
   "id": "adobe-illustrator",
   "name": "Adobe Illustrator",
   "cats": [
    "design"
   ],
   "desc": "Vector graphics and iconography.",
   "icon": "assets/img/tools/adobe-illustrator.svg",
   "url": "https://www.adobe.com/products/illustrator.html"
  },
  {
   "id": "penpot",
   "name": "Penpot",
   "cats": [
    "design"
   ],
   "desc": "Open-source design and prototyping platform.",
   "icon": "assets/img/tools/penpot.svg",
   "url": "https://penpot.app"
  },
  {
   "id": "balsamiq",
   "name": "Balsamiq",
   "cats": [
    "design"
   ],
   "desc": "Low-fidelity wireframing tool.",
   "icon": null,
   "url": "https://balsamiq.com"
  },
  {
   "id": "miro",
   "name": "Miro",
   "cats": [
    "design",
    "agile"
   ],
   "desc": "Infinite whiteboard for workshops and planning.",
   "icon": "assets/img/tools/miro.svg",
   "url": "https://miro.com"
  },
  {
   "id": "draw-io",
   "name": "draw.io",
   "cats": [
    "arch"
   ],
   "desc": "Free diagramming tool (diagrams.net).",
   "icon": "assets/img/tools/draw-io.svg",
   "url": "https://www.drawio.com"
  },
  {
   "id": "lucidchart",
   "name": "Lucidchart",
   "cats": [
    "arch"
   ],
   "desc": "Web-based diagramming and flowcharts.",
   "icon": "assets/img/tools/lucidchart.svg",
   "url": "https://www.lucidchart.com"
  },
  {
   "id": "microsoft-visio",
   "name": "Microsoft Visio",
   "cats": [
    "arch"
   ],
   "desc": "Professional diagramming for UML and process maps.",
   "icon": null,
   "url": "https://www.microsoft.com/microsoft-365/visio/flowchart-software"
  },
  {
   "id": "excalidraw",
   "name": "Excalidraw",
   "cats": [
    "arch"
   ],
   "desc": "Hand-drawn style virtual whiteboard.",
   "icon": "assets/img/tools/excalidraw.svg",
   "url": "https://excalidraw.com"
  },
  {
   "id": "mermaid",
   "name": "Mermaid",
   "cats": [
    "arch"
   ],
   "desc": "Text-based diagrams rendered in Markdown.",
   "icon": "assets/img/tools/mermaid.svg",
   "url": "https://mermaid.js.org"
  },
  {
   "id": "plantuml",
   "name": "PlantUML",
   "cats": [
    "arch"
   ],
   "desc": "UML diagrams generated from plain text.",
   "icon": "assets/img/tools/plantuml.svg",
   "url": "https://plantuml.com"
  },
  {
   "id": "structurizr",
   "name": "Structurizr",
   "cats": [
    "arch"
   ],
   "desc": "Architecture diagrams using the C4 model.",
   "icon": null,
   "url": "https://structurizr.com"
  },
  {
   "id": "visual-paradigm",
   "name": "Visual Paradigm",
   "cats": [
    "arch"
   ],
   "desc": "UML and architecture modelling suite.",
   "icon": null,
   "url": "https://www.visual-paradigm.com"
  },
  {
   "id": "staruml",
   "name": "StarUML",
   "cats": [
    "arch"
   ],
   "desc": "UML modelling tool.",
   "icon": null,
   "url": "https://staruml.io"
  },
  {
   "id": "enterprise-architect",
   "name": "Enterprise Architect",
   "cats": [
    "arch"
   ],
   "desc": "Enterprise-scale modelling platform (Sparx Systems).",
   "icon": null,
   "url": "https://sparxsystems.com"
  },
  {
   "id": "linux",
   "name": "Linux",
   "cats": [
    "os"
   ],
   "desc": "Open-source kernel behind most servers and containers.",
   "icon": "assets/img/tools/linux.svg",
   "url": "https://www.kernel.org"
  },
  {
   "id": "ubuntu",
   "name": "Ubuntu",
   "cats": [
    "os"
   ],
   "desc": "Popular Linux distribution for desktops and servers.",
   "icon": "assets/img/tools/ubuntu.svg",
   "url": "https://ubuntu.com"
  },
  {
   "id": "windows",
   "name": "Windows",
   "cats": [
    "os"
   ],
   "desc": "Microsoft desktop operating system.",
   "icon": "assets/img/tools/windows.svg",
   "url": "https://www.microsoft.com/windows"
  },
  {
   "id": "wsl",
   "name": "WSL",
   "cats": [
    "os"
   ],
   "desc": "Run a Linux environment directly on Windows.",
   "icon": null,
   "url": "https://learn.microsoft.com/windows/wsl/"
  },
  {
   "id": "bash",
   "name": "Bash",
   "cats": [
    "os"
   ],
   "desc": "Standard Unix shell and scripting language.",
   "icon": "assets/img/tools/bash.svg",
   "url": "https://www.gnu.org/software/bash/"
  },
  {
   "id": "powershell",
   "name": "PowerShell",
   "cats": [
    "os"
   ],
   "desc": "Task automation shell and scripting language.",
   "icon": "assets/img/tools/powershell.svg",
   "url": "https://learn.microsoft.com/powershell/"
  },
  {
   "id": "windows-terminal",
   "name": "Windows Terminal",
   "cats": [
    "os"
   ],
   "desc": "Modern tabbed terminal for Windows.",
   "icon": null,
   "url": "https://learn.microsoft.com/windows/terminal/"
  },
  {
   "id": "ssh",
   "name": "SSH",
   "cats": [
    "os"
   ],
   "desc": "Secure remote access to servers.",
   "icon": null,
   "url": "https://www.openssh.com"
  },
  {
   "id": "vim",
   "name": "Vim",
   "cats": [
    "os"
   ],
   "desc": "Keyboard-driven modal text editor.",
   "icon": "assets/img/tools/vim.svg",
   "url": "https://www.vim.org"
  },
  {
   "id": "nano",
   "name": "Nano",
   "cats": [
    "os"
   ],
   "desc": "Simple terminal text editor.",
   "icon": null,
   "url": "https://www.nano-editor.org"
  },
  {
   "id": "tmux",
   "name": "tmux",
   "cats": [
    "os"
   ],
   "desc": "Terminal multiplexer for persistent sessions.",
   "icon": "assets/img/tools/tmux.svg",
   "url": "https://github.com/tmux/tmux"
  },
  {
   "id": "zsh",
   "name": "Zsh",
   "cats": [
    "os"
   ],
   "desc": "Feature-rich interactive shell.",
   "icon": "assets/img/tools/zsh.svg",
   "url": "https://www.zsh.org"
  },
  {
   "id": "npm",
   "name": "npm",
   "cats": [
    "build"
   ],
   "desc": "Default package manager for Node.js.",
   "icon": "assets/img/tools/npm.svg",
   "url": "https://www.npmjs.com",
   "status": "applied",
   "projects": [
    "aurelia-stays",
    "routeflow",
    "savora-restaurant",
    "vitalis-clinic",
    "aerix-analytics",
    "paddy-ai"
   ]
  },
  {
   "id": "pnpm",
   "name": "pnpm",
   "cats": [
    "build"
   ],
   "desc": "Fast, disk-efficient package manager.",
   "icon": "assets/img/tools/pnpm.svg",
   "url": "https://pnpm.io"
  },
  {
   "id": "yarn",
   "name": "Yarn",
   "cats": [
    "build"
   ],
   "desc": "JavaScript package manager.",
   "icon": "assets/img/tools/yarn.svg",
   "url": "https://yarnpkg.com"
  },
  {
   "id": "pip",
   "name": "pip",
   "cats": [
    "build"
   ],
   "desc": "Python package installer.",
   "icon": "assets/img/tools/pip.svg",
   "url": "https://pip.pypa.io",
   "status": "applied",
   "projects": [
    "paddy-ai",
    "propertymate-ai",
    "car-racing-game"
   ]
  },
  {
   "id": "uv",
   "name": "uv",
   "cats": [
    "build"
   ],
   "desc": "Very fast Python package and project manager.",
   "icon": "assets/img/tools/uv.svg",
   "url": "https://docs.astral.sh/uv/"
  },
  {
   "id": "poetry",
   "name": "Poetry",
   "cats": [
    "build"
   ],
   "desc": "Python dependency management and packaging.",
   "icon": "assets/img/tools/poetry.svg",
   "url": "https://python-poetry.org"
  },
  {
   "id": "maven",
   "name": "Maven",
   "cats": [
    "build"
   ],
   "desc": "Java build and dependency management.",
   "icon": "assets/img/tools/maven.svg",
   "url": "https://maven.apache.org",
   "status": "applied",
   "projects": [
    "facetrack-ai",
    "gesture-control-ai"
   ]
  },
  {
   "id": "gradle",
   "name": "Gradle",
   "cats": [
    "build"
   ],
   "desc": "Build automation for JVM and Android.",
   "icon": "assets/img/tools/gradle.svg",
   "url": "https://gradle.org",
   "status": "applied",
   "projects": [
    "luxevista-resort",
    "city-cycle-rentals",
    "goride-lk"
   ]
  },
  {
   "id": "vite",
   "name": "Vite",
   "cats": [
    "build"
   ],
   "desc": "Fast dev server and bundler for modern web apps.",
   "icon": "assets/img/tools/vite.svg",
   "url": "https://vite.dev",
   "status": "applied",
   "projects": [
    "paddy-ai",
    "aerix-analytics"
   ]
  },
  {
   "id": "webpack",
   "name": "webpack",
   "cats": [
    "build"
   ],
   "desc": "Module bundler for JavaScript applications.",
   "icon": "assets/img/tools/webpack.svg",
   "url": "https://webpack.js.org"
  },
  {
   "id": "babel",
   "name": "Babel",
   "cats": [
    "build"
   ],
   "desc": "JavaScript compiler for modern syntax.",
   "icon": "assets/img/tools/babel.svg",
   "url": "https://babeljs.io"
  },
  {
   "id": "nvm",
   "name": "nvm",
   "cats": [
    "build"
   ],
   "desc": "Switch between Node.js versions.",
   "icon": null,
   "url": "https://github.com/nvm-sh/nvm"
  },
  {
   "id": "nuget",
   "name": "NuGet",
   "cats": [
    "build"
   ],
   "desc": "Package manager for .NET.",
   "icon": "assets/img/tools/nuget.svg",
   "url": "https://www.nuget.org"
  },
  {
   "id": "jest",
   "name": "Jest",
   "cats": [
    "test"
   ],
   "desc": "JavaScript unit testing framework.",
   "icon": "assets/img/tools/jest.svg",
   "url": "https://jestjs.io"
  },
  {
   "id": "vitest",
   "name": "Vitest",
   "cats": [
    "test"
   ],
   "desc": "Vite-native unit test runner.",
   "icon": "assets/img/tools/vitest.svg",
   "url": "https://vitest.dev"
  },
  {
   "id": "playwright",
   "name": "Playwright",
   "cats": [
    "test"
   ],
   "desc": "Cross-browser end-to-end testing.",
   "icon": "assets/img/tools/playwright.svg",
   "url": "https://playwright.dev"
  },
  {
   "id": "cypress",
   "name": "Cypress",
   "cats": [
    "test"
   ],
   "desc": "Browser testing for web applications.",
   "icon": "assets/img/tools/cypress.svg",
   "url": "https://www.cypress.io"
  },
  {
   "id": "selenium",
   "name": "Selenium",
   "cats": [
    "test"
   ],
   "desc": "Browser automation framework.",
   "icon": "assets/img/tools/selenium.svg",
   "url": "https://www.selenium.dev"
  },
  {
   "id": "junit",
   "name": "JUnit",
   "cats": [
    "test"
   ],
   "desc": "Unit testing framework for Java.",
   "icon": "assets/img/tools/junit.svg",
   "url": "https://junit.org"
  },
  {
   "id": "testng",
   "name": "TestNG",
   "cats": [
    "test"
   ],
   "desc": "Testing framework for Java inspired by JUnit.",
   "icon": null,
   "url": "https://testng.org"
  },
  {
   "id": "pytest",
   "name": "pytest",
   "cats": [
    "test"
   ],
   "desc": "Python testing framework.",
   "icon": "assets/img/tools/pytest.svg",
   "url": "https://pytest.org"
  },
  {
   "id": "nunit",
   "name": "NUnit",
   "cats": [
    "test"
   ],
   "desc": "Unit testing framework for .NET.",
   "icon": null,
   "url": "https://nunit.org"
  },
  {
   "id": "apache-jmeter",
   "name": "Apache JMeter",
   "cats": [
    "test"
   ],
   "desc": "Load and performance testing.",
   "icon": "assets/img/tools/apache-jmeter.svg",
   "url": "https://jmeter.apache.org"
  },
  {
   "id": "k6",
   "name": "k6",
   "cats": [
    "test"
   ],
   "desc": "Developer-centric load testing.",
   "icon": "assets/img/tools/k6.svg",
   "url": "https://k6.io"
  },
  {
   "id": "sonarqube",
   "name": "SonarQube",
   "cats": [
    "quality"
   ],
   "desc": "Static analysis and code quality gates.",
   "icon": "assets/img/tools/sonarqube.svg",
   "url": "https://www.sonarsource.com/products/sonarqube/"
  },
  {
   "id": "sonarcloud",
   "name": "SonarCloud",
   "cats": [
    "quality"
   ],
   "desc": "Cloud code-quality analysis for CI.",
   "icon": "assets/img/tools/sonarcloud.svg",
   "url": "https://www.sonarsource.com/products/sonarcloud/"
  },
  {
   "id": "eslint",
   "name": "ESLint",
   "cats": [
    "quality"
   ],
   "desc": "Pluggable JavaScript/TypeScript linter.",
   "icon": "assets/img/tools/eslint.svg",
   "url": "https://eslint.org"
  },
  {
   "id": "prettier",
   "name": "Prettier",
   "cats": [
    "quality"
   ],
   "desc": "Opinionated code formatter.",
   "icon": "assets/img/tools/prettier.svg",
   "url": "https://prettier.io"
  },
  {
   "id": "husky",
   "name": "Husky",
   "cats": [
    "quality"
   ],
   "desc": "Git hooks to run checks before commits.",
   "icon": "assets/img/tools/husky.svg",
   "url": "https://typicode.github.io/husky/"
  },
  {
   "id": "lint-staged",
   "name": "lint-staged",
   "cats": [
    "quality"
   ],
   "desc": "Run linters only on staged files.",
   "icon": null,
   "url": "https://github.com/lint-staged/lint-staged"
  },
  {
   "id": "checkstyle",
   "name": "Checkstyle",
   "cats": [
    "quality"
   ],
   "desc": "Java coding-standard checker.",
   "icon": null,
   "url": "https://checkstyle.org"
  },
  {
   "id": "pmd",
   "name": "PMD",
   "cats": [
    "quality"
   ],
   "desc": "Static analyser for common programming flaws.",
   "icon": null,
   "url": "https://pmd.github.io"
  },
  {
   "id": "ruff",
   "name": "Ruff",
   "cats": [
    "quality"
   ],
   "desc": "Extremely fast Python linter and formatter.",
   "icon": "assets/img/tools/ruff.svg",
   "url": "https://docs.astral.sh/ruff/"
  },
  {
   "id": "black",
   "name": "Black",
   "cats": [
    "quality"
   ],
   "desc": "Uncompromising Python code formatter.",
   "icon": "assets/img/tools/black.svg",
   "url": "https://black.readthedocs.io"
  },
  {
   "id": "codeql",
   "name": "CodeQL",
   "cats": [
    "quality",
    "sec"
   ],
   "desc": "Semantic code analysis from GitHub.",
   "icon": "assets/img/tools/codeql.svg",
   "url": "https://codeql.github.com"
  },
  {
   "id": "docker",
   "name": "Docker",
   "cats": [
    "container"
   ],
   "desc": "Containerise applications and dependencies.",
   "icon": "assets/img/tools/docker.svg",
   "url": "https://www.docker.com",
   "use": "Running the web, API and SQL Server services together with Docker Compose.",
   "status": "applied",
   "projects": [
    "propertymate-ai"
   ]
  },
  {
   "id": "docker-desktop",
   "name": "Docker Desktop",
   "cats": [
    "container"
   ],
   "desc": "Local Docker engine with a GUI.",
   "icon": "assets/img/tools/docker-desktop.svg",
   "url": "https://www.docker.com/products/docker-desktop/"
  },
  {
   "id": "docker-compose",
   "name": "Docker Compose",
   "cats": [
    "container"
   ],
   "desc": "Define and run multi-container apps.",
   "icon": "assets/img/tools/docker-compose.svg",
   "url": "https://docs.docker.com/compose/",
   "status": "applied",
   "projects": [
    "propertymate-ai"
   ]
  },
  {
   "id": "docker-hub",
   "name": "Docker Hub",
   "cats": [
    "container"
   ],
   "desc": "Public registry for container images.",
   "icon": "assets/img/tools/docker-hub.svg",
   "url": "https://hub.docker.com"
  },
  {
   "id": "podman",
   "name": "Podman",
   "cats": [
    "container"
   ],
   "desc": "Daemonless, rootless container engine.",
   "icon": "assets/img/tools/podman.svg",
   "url": "https://podman.io"
  },
  {
   "id": "kubernetes",
   "name": "Kubernetes",
   "cats": [
    "container"
   ],
   "desc": "Orchestrate containers at scale.",
   "icon": "assets/img/tools/kubernetes.svg",
   "url": "https://kubernetes.io"
  },
  {
   "id": "minikube",
   "name": "Minikube",
   "cats": [
    "container"
   ],
   "desc": "Run a local Kubernetes cluster.",
   "icon": null,
   "url": "https://minikube.sigs.k8s.io"
  },
  {
   "id": "kind",
   "name": "kind",
   "cats": [
    "container"
   ],
   "desc": "Kubernetes clusters in Docker containers.",
   "icon": "assets/img/tools/kind.svg",
   "url": "https://kind.sigs.k8s.io"
  },
  {
   "id": "helm",
   "name": "Helm",
   "cats": [
    "container"
   ],
   "desc": "Package manager for Kubernetes.",
   "icon": "assets/img/tools/helm.svg",
   "url": "https://helm.sh"
  },
  {
   "id": "kubectl",
   "name": "kubectl",
   "cats": [
    "container"
   ],
   "desc": "Command-line client for Kubernetes.",
   "icon": "assets/img/tools/kubectl.svg",
   "url": "https://kubernetes.io/docs/reference/kubectl/"
  },
  {
   "id": "github-actions",
   "name": "GitHub Actions",
   "cats": [
    "cicd"
   ],
   "desc": "Workflow automation inside GitHub.",
   "icon": "assets/img/tools/github-actions.svg",
   "url": "https://github.com/features/actions"
  },
  {
   "id": "gitlab-ci-cd",
   "name": "GitLab CI/CD",
   "cats": [
    "cicd"
   ],
   "desc": "Pipelines built into GitLab.",
   "icon": "assets/img/tools/gitlab-ci-cd.svg",
   "url": "https://docs.gitlab.com/ci/"
  },
  {
   "id": "jenkins",
   "name": "Jenkins",
   "cats": [
    "cicd"
   ],
   "desc": "Self-hosted automation server.",
   "icon": "assets/img/tools/jenkins.svg",
   "url": "https://www.jenkins.io"
  },
  {
   "id": "circleci",
   "name": "CircleCI",
   "cats": [
    "cicd"
   ],
   "desc": "Hosted CI/CD platform.",
   "icon": "assets/img/tools/circleci.svg",
   "url": "https://circleci.com"
  },
  {
   "id": "azure-devops",
   "name": "Azure DevOps",
   "cats": [
    "cicd"
   ],
   "desc": "Boards, repos and pipelines from Microsoft.",
   "icon": "assets/img/tools/azure-devops.svg",
   "url": "https://azure.microsoft.com/products/devops"
  },
  {
   "id": "bitbucket-pipelines",
   "name": "Bitbucket Pipelines",
   "cats": [
    "cicd"
   ],
   "desc": "CI/CD built into Bitbucket.",
   "icon": "assets/img/tools/bitbucket-pipelines.svg",
   "url": "https://bitbucket.org/product/features/pipelines"
  },
  {
   "id": "argo-cd",
   "name": "Argo CD",
   "cats": [
    "cicd"
   ],
   "desc": "GitOps continuous delivery for Kubernetes.",
   "icon": "assets/img/tools/argo-cd.svg",
   "url": "https://argo-cd.readthedocs.io"
  },
  {
   "id": "renovate",
   "name": "Renovate",
   "cats": [
    "cicd"
   ],
   "desc": "Automated dependency update pull requests.",
   "icon": "assets/img/tools/renovate.svg",
   "url": "https://docs.renovatebot.com"
  },
  {
   "id": "dependabot",
   "name": "Dependabot",
   "cats": [
    "cicd"
   ],
   "desc": "GitHub dependency update automation.",
   "icon": "assets/img/tools/dependabot.svg",
   "url": "https://docs.github.com/code-security/dependabot"
  },
  {
   "id": "amazon-web-services-aws",
   "name": "Amazon Web Services (AWS)",
   "cats": [
    "cloud"
   ],
   "desc": "Broad cloud platform for compute, storage and more.",
   "icon": "assets/img/tools/amazon-web-services-aws.svg",
   "url": "https://aws.amazon.com"
  },
  {
   "id": "microsoft-azure",
   "name": "Microsoft Azure",
   "cats": [
    "cloud"
   ],
   "desc": "Microsoft cloud platform.",
   "icon": "assets/img/tools/microsoft-azure.svg",
   "url": "https://azure.microsoft.com"
  },
  {
   "id": "google-cloud",
   "name": "Google Cloud",
   "cats": [
    "cloud"
   ],
   "desc": "Google cloud platform.",
   "icon": "assets/img/tools/google-cloud.svg",
   "url": "https://cloud.google.com"
  },
  {
   "id": "firebase",
   "name": "Firebase",
   "cats": [
    "cloud"
   ],
   "desc": "Backend services and hosting from Google.",
   "icon": "assets/img/tools/firebase.svg",
   "url": "https://firebase.google.com"
  },
  {
   "id": "vercel",
   "name": "Vercel",
   "cats": [
    "cloud"
   ],
   "desc": "Frontend hosting with edge network.",
   "icon": "assets/img/tools/vercel.svg",
   "url": "https://vercel.com"
  },
  {
   "id": "netlify",
   "name": "Netlify",
   "cats": [
    "cloud"
   ],
   "desc": "Static site and serverless hosting.",
   "icon": "assets/img/tools/netlify.svg",
   "url": "https://www.netlify.com"
  },
  {
   "id": "render",
   "name": "Render",
   "cats": [
    "cloud"
   ],
   "desc": "Managed hosting for web services and databases.",
   "icon": "assets/img/tools/render.svg",
   "url": "https://render.com"
  },
  {
   "id": "railway",
   "name": "Railway",
   "cats": [
    "cloud"
   ],
   "desc": "App deployment platform.",
   "icon": "assets/img/tools/railway.svg",
   "url": "https://railway.com"
  },
  {
   "id": "digitalocean",
   "name": "DigitalOcean",
   "cats": [
    "cloud"
   ],
   "desc": "Developer-friendly cloud servers.",
   "icon": "assets/img/tools/digitalocean.svg",
   "url": "https://www.digitalocean.com"
  },
  {
   "id": "cloudflare",
   "name": "Cloudflare",
   "cats": [
    "cloud"
   ],
   "desc": "CDN, DNS and edge security.",
   "icon": "assets/img/tools/cloudflare.svg",
   "url": "https://www.cloudflare.com"
  },
  {
   "id": "terraform",
   "name": "Terraform",
   "cats": [
    "cloud"
   ],
   "desc": "Infrastructure as code.",
   "icon": "assets/img/tools/terraform.svg",
   "url": "https://www.terraform.io"
  },
  {
   "id": "pulumi",
   "name": "Pulumi",
   "cats": [
    "cloud"
   ],
   "desc": "Infrastructure as code using real languages.",
   "icon": "assets/img/tools/pulumi.svg",
   "url": "https://www.pulumi.com"
  },
  {
   "id": "grafana",
   "name": "Grafana",
   "cats": [
    "observe"
   ],
   "desc": "Dashboards for metrics and logs.",
   "icon": "assets/img/tools/grafana.svg",
   "url": "https://grafana.com"
  },
  {
   "id": "prometheus",
   "name": "Prometheus",
   "cats": [
    "observe"
   ],
   "desc": "Metrics collection and alerting.",
   "icon": "assets/img/tools/prometheus.svg",
   "url": "https://prometheus.io"
  },
  {
   "id": "opentelemetry",
   "name": "OpenTelemetry",
   "cats": [
    "observe"
   ],
   "desc": "Vendor-neutral telemetry standard.",
   "icon": "assets/img/tools/opentelemetry.svg",
   "url": "https://opentelemetry.io"
  },
  {
   "id": "sentry",
   "name": "Sentry",
   "cats": [
    "observe"
   ],
   "desc": "Error tracking and performance monitoring.",
   "icon": "assets/img/tools/sentry.svg",
   "url": "https://sentry.io"
  },
  {
   "id": "elasticsearch",
   "name": "Elasticsearch",
   "cats": [
    "observe"
   ],
   "desc": "Search and analytics engine.",
   "icon": "assets/img/tools/elasticsearch.svg",
   "url": "https://www.elastic.co/elasticsearch"
  },
  {
   "id": "kibana",
   "name": "Kibana",
   "cats": [
    "observe"
   ],
   "desc": "Visualisation for Elasticsearch data.",
   "icon": "assets/img/tools/kibana.svg",
   "url": "https://www.elastic.co/kibana"
  },
  {
   "id": "logstash",
   "name": "Logstash",
   "cats": [
    "observe"
   ],
   "desc": "Log ingestion and processing pipeline.",
   "icon": "assets/img/tools/logstash.svg",
   "url": "https://www.elastic.co/logstash"
  },
  {
   "id": "loki",
   "name": "Loki",
   "cats": [
    "observe"
   ],
   "desc": "Log aggregation from Grafana Labs.",
   "icon": "assets/img/tools/loki.svg",
   "url": "https://grafana.com/oss/loki/"
  },
  {
   "id": "jaeger",
   "name": "Jaeger",
   "cats": [
    "observe"
   ],
   "desc": "Distributed tracing.",
   "icon": "assets/img/tools/jaeger.svg",
   "url": "https://www.jaegertracing.io"
  },
  {
   "id": "datadog",
   "name": "Datadog",
   "cats": [
    "observe"
   ],
   "desc": "Cloud monitoring and security platform.",
   "icon": "assets/img/tools/datadog.svg",
   "url": "https://www.datadoghq.com"
  },
  {
   "id": "aws-cloudwatch",
   "name": "AWS CloudWatch",
   "cats": [
    "observe"
   ],
   "desc": "Monitoring for AWS resources and apps.",
   "icon": "assets/img/tools/aws-cloudwatch.svg",
   "url": "https://aws.amazon.com/cloudwatch/"
  },
  {
   "id": "owasp-zap",
   "name": "OWASP ZAP",
   "cats": [
    "sec"
   ],
   "desc": "Open-source web application security scanner.",
   "icon": "assets/img/tools/owasp-zap.svg",
   "url": "https://www.zaproxy.org"
  },
  {
   "id": "burp-suite",
   "name": "Burp Suite",
   "cats": [
    "sec"
   ],
   "desc": "Web security testing toolkit.",
   "icon": "assets/img/tools/burp-suite.svg",
   "url": "https://portswigger.net/burp"
  },
  {
   "id": "snyk",
   "name": "Snyk",
   "cats": [
    "sec"
   ],
   "desc": "Dependency and container vulnerability scanning.",
   "icon": "assets/img/tools/snyk.svg",
   "url": "https://snyk.io"
  },
  {
   "id": "trivy",
   "name": "Trivy",
   "cats": [
    "sec"
   ],
   "desc": "Scanner for containers and IaC.",
   "icon": "assets/img/tools/trivy.svg",
   "url": "https://trivy.dev"
  },
  {
   "id": "gitleaks",
   "name": "Gitleaks",
   "cats": [
    "sec"
   ],
   "desc": "Detects secrets in Git repositories.",
   "icon": null,
   "url": "https://gitleaks.io"
  },
  {
   "id": "github-codeql",
   "name": "GitHub CodeQL",
   "cats": [
    "sec"
   ],
   "desc": "Code scanning for security issues.",
   "icon": "assets/img/tools/github-codeql.svg",
   "url": "https://codeql.github.com"
  },
  {
   "id": "hashicorp-vault",
   "name": "HashiCorp Vault",
   "cats": [
    "sec"
   ],
   "desc": "Secrets management.",
   "icon": "assets/img/tools/hashicorp-vault.svg",
   "url": "https://www.vaultproject.io"
  },
  {
   "id": "wireshark",
   "name": "Wireshark",
   "cats": [
    "sec"
   ],
   "desc": "Network protocol analyser.",
   "icon": "assets/img/tools/wireshark.svg",
   "url": "https://www.wireshark.org"
  },
  {
   "id": "nmap",
   "name": "Nmap",
   "cats": [
    "sec"
   ],
   "desc": "Network discovery and security auditing.",
   "icon": null,
   "url": "https://nmap.org"
  },
  {
   "id": "notion",
   "name": "Notion",
   "cats": [
    "docs"
   ],
   "desc": "All-in-one workspace for notes and docs.",
   "icon": "assets/img/tools/notion.svg",
   "url": "https://www.notion.com"
  },
  {
   "id": "confluence",
   "name": "Confluence",
   "cats": [
    "docs"
   ],
   "desc": "Team wiki from Atlassian.",
   "icon": "assets/img/tools/confluence.svg",
   "url": "https://www.atlassian.com/software/confluence"
  },
  {
   "id": "docusaurus",
   "name": "Docusaurus",
   "cats": [
    "docs"
   ],
   "desc": "Documentation websites from Markdown.",
   "icon": "assets/img/tools/docusaurus.svg",
   "url": "https://docusaurus.io"
  },
  {
   "id": "mkdocs",
   "name": "MkDocs",
   "cats": [
    "docs"
   ],
   "desc": "Static documentation sites from Markdown.",
   "icon": "assets/img/tools/mkdocs.svg",
   "url": "https://www.mkdocs.org"
  },
  {
   "id": "storybook",
   "name": "Storybook",
   "cats": [
    "docs"
   ],
   "desc": "Develop and document UI components.",
   "icon": "assets/img/tools/storybook.svg",
   "url": "https://storybook.js.org"
  },
  {
   "id": "swagger-ui",
   "name": "Swagger UI",
   "cats": [
    "docs"
   ],
   "desc": "Interactive API documentation.",
   "icon": "assets/img/tools/swagger-ui.svg",
   "url": "https://swagger.io/tools/swagger-ui/"
  },
  {
   "id": "markdown",
   "name": "Markdown",
   "cats": [
    "docs"
   ],
   "desc": "Lightweight plain-text formatting.",
   "icon": "assets/img/tools/markdown.svg",
   "url": "https://daringfireball.net/projects/markdown/"
  },
  {
   "id": "github-wiki",
   "name": "GitHub Wiki",
   "cats": [
    "docs"
   ],
   "desc": "Wikis attached to GitHub repositories.",
   "icon": "assets/img/tools/github-wiki.svg",
   "url": "https://docs.github.com/communities/documenting-your-project-with-wikis"
  },
  {
   "id": "read-the-docs",
   "name": "Read the Docs",
   "cats": [
    "docs"
   ],
   "desc": "Hosted documentation builds.",
   "icon": "assets/img/tools/read-the-docs.svg",
   "url": "https://about.readthedocs.com"
  },
  {
   "id": "jira",
   "name": "Jira",
   "cats": [
    "agile"
   ],
   "desc": "Issue and sprint tracking.",
   "icon": "assets/img/tools/jira.svg",
   "url": "https://www.atlassian.com/software/jira"
  },
  {
   "id": "trello",
   "name": "Trello",
   "cats": [
    "agile"
   ],
   "desc": "Kanban boards.",
   "icon": "assets/img/tools/trello.svg",
   "url": "https://trello.com"
  },
  {
   "id": "linear",
   "name": "Linear",
   "cats": [
    "agile"
   ],
   "desc": "Streamlined issue tracking.",
   "icon": "assets/img/tools/linear.svg",
   "url": "https://linear.app"
  },
  {
   "id": "clickup",
   "name": "ClickUp",
   "cats": [
    "agile"
   ],
   "desc": "All-in-one work management.",
   "icon": "assets/img/tools/clickup.svg",
   "url": "https://clickup.com"
  },
  {
   "id": "asana",
   "name": "Asana",
   "cats": [
    "agile"
   ],
   "desc": "Work and project management.",
   "icon": "assets/img/tools/asana.svg",
   "url": "https://asana.com"
  },
  {
   "id": "github-projects",
   "name": "GitHub Projects",
   "cats": [
    "agile"
   ],
   "desc": "Planning boards connected to issues and PRs.",
   "icon": "assets/img/tools/github-projects.svg",
   "url": "https://docs.github.com/issues/planning-and-tracking-with-projects"
  },
  {
   "id": "azure-boards",
   "name": "Azure Boards",
   "cats": [
    "agile"
   ],
   "desc": "Agile planning in Azure DevOps.",
   "icon": "assets/img/tools/azure-boards.svg",
   "url": "https://azure.microsoft.com/products/devops/boards"
  },
  {
   "id": "slack",
   "name": "Slack",
   "cats": [
    "agile"
   ],
   "desc": "Team messaging.",
   "icon": "assets/img/tools/slack.svg",
   "url": "https://slack.com"
  },
  {
   "id": "microsoft-teams",
   "name": "Microsoft Teams",
   "cats": [
    "agile"
   ],
   "desc": "Chat, calls and meetings.",
   "icon": "assets/img/tools/microsoft-teams.svg",
   "url": "https://www.microsoft.com/microsoft-teams"
  },
  {
   "id": "chrome-devtools",
   "name": "Chrome DevTools",
   "cats": [
    "perf"
   ],
   "desc": "Inspect, debug and profile in Chrome.",
   "icon": "assets/img/tools/chrome-devtools.svg",
   "url": "https://developer.chrome.com/docs/devtools"
  },
  {
   "id": "firefox-developer-tools",
   "name": "Firefox Developer Tools",
   "cats": [
    "perf"
   ],
   "desc": "Debugging tools built into Firefox.",
   "icon": "assets/img/tools/firefox-developer-tools.svg",
   "url": "https://firefox-source-docs.mozilla.org/devtools-user/"
  },
  {
   "id": "lighthouse",
   "name": "Lighthouse",
   "cats": [
    "perf"
   ],
   "desc": "Audits for performance, SEO and accessibility.",
   "icon": "assets/img/tools/lighthouse.svg",
   "url": "https://developer.chrome.com/docs/lighthouse"
  },
  {
   "id": "pagespeed-insights",
   "name": "PageSpeed Insights",
   "cats": [
    "perf"
   ],
   "desc": "Google page performance reports.",
   "icon": "assets/img/tools/pagespeed-insights.svg",
   "url": "https://pagespeed.web.dev"
  },
  {
   "id": "webpagetest",
   "name": "WebPageTest",
   "cats": [
    "perf"
   ],
   "desc": "Detailed web performance testing.",
   "icon": null,
   "url": "https://www.webpagetest.org"
  },
  {
   "id": "axe-devtools",
   "name": "axe DevTools",
   "cats": [
    "perf"
   ],
   "desc": "Automated accessibility testing.",
   "icon": null,
   "url": "https://www.deque.com/axe/devtools/"
  },
  {
   "id": "wave",
   "name": "WAVE",
   "cats": [
    "perf"
   ],
   "desc": "Web accessibility evaluation tool.",
   "icon": null,
   "url": "https://wave.webaim.org"
  },
  {
   "id": "react-developer-tools",
   "name": "React Developer Tools",
   "cats": [
    "perf"
   ],
   "desc": "Inspect React component trees.",
   "icon": "assets/img/tools/react-developer-tools.svg",
   "url": "https://react.dev/learn/react-developer-tools"
  },
  {
   "id": "redux-devtools",
   "name": "Redux DevTools",
   "cats": [
    "perf"
   ],
   "desc": "Inspect and replay Redux state.",
   "icon": "assets/img/tools/redux-devtools.svg",
   "url": "https://github.com/reduxjs/redux-devtools"
  },
  {
   "id": "github-copilot",
   "name": "GitHub Copilot",
   "cats": [
    "ai"
   ],
   "desc": "AI pair programmer in the editor.",
   "icon": "assets/img/tools/github-copilot.svg",
   "url": "https://github.com/features/copilot"
  },
  {
   "id": "chatgpt",
   "name": "ChatGPT",
   "cats": [
    "ai"
   ],
   "desc": "Conversational AI assistant from OpenAI.",
   "icon": "assets/img/tools/chatgpt.svg",
   "url": "https://chatgpt.com"
  },
  {
   "id": "claude-code",
   "name": "Claude Code",
   "cats": [
    "ai"
   ],
   "desc": "Agentic coding tool from Anthropic.",
   "icon": "assets/img/tools/claude-code.svg",
   "url": "https://www.anthropic.com/claude-code"
  },
  {
   "id": "jetbrains-ai-assistant",
   "name": "JetBrains AI Assistant",
   "cats": [
    "ai"
   ],
   "desc": "AI features inside JetBrains IDEs.",
   "icon": "assets/img/tools/jetbrains-ai-assistant.svg",
   "url": "https://www.jetbrains.com/ai/"
  },
  {
   "id": "gemini-code-assist",
   "name": "Gemini Code Assist",
   "cats": [
    "ai"
   ],
   "desc": "Google AI coding assistance.",
   "icon": "assets/img/tools/gemini-code-assist.svg",
   "url": "https://cloud.google.com/products/gemini/code-assist"
  },
  {
   "id": "microsoft-power-bi",
   "name": "Microsoft Power BI",
   "cats": [
    "bi"
   ],
   "desc": "Interactive dashboards and business reports.",
   "icon": "assets/img/tools/microsoft-power-bi.svg",
   "url": "https://powerbi.microsoft.com",
   "feature": true
  },
  {
   "id": "power-bi-desktop",
   "name": "Power BI Desktop",
   "cats": [
    "bi"
   ],
   "desc": "Authoring tool for Power BI reports.",
   "icon": "assets/img/tools/power-bi-desktop.svg",
   "url": "https://powerbi.microsoft.com/desktop/"
  },
  {
   "id": "power-query",
   "name": "Power Query",
   "cats": [
    "bi"
   ],
   "desc": "Data connection and transformation engine.",
   "icon": null,
   "url": "https://learn.microsoft.com/power-query/"
  },
  {
   "id": "dax-studio",
   "name": "DAX Studio",
   "cats": [
    "bi"
   ],
   "desc": "Query and tune DAX for Power BI models.",
   "icon": null,
   "url": "https://daxstudio.org"
  },
  {
   "id": "tableau",
   "name": "Tableau",
   "cats": [
    "bi"
   ],
   "desc": "Visual analytics platform.",
   "icon": "assets/img/tools/tableau.svg",
   "url": "https://www.tableau.com"
  },
  {
   "id": "tableau-public",
   "name": "Tableau Public",
   "cats": [
    "bi"
   ],
   "desc": "Free platform to publish visualisations.",
   "icon": "assets/img/tools/tableau-public.svg",
   "url": "https://public.tableau.com"
  },
  {
   "id": "microsoft-excel",
   "name": "Microsoft Excel",
   "cats": [
    "bi"
   ],
   "desc": "Spreadsheets, formulas and analysis.",
   "icon": "assets/img/tools/microsoft-excel.svg",
   "url": "https://www.microsoft.com/microsoft-365/excel"
  },
  {
   "id": "looker-studio",
   "name": "Looker Studio",
   "cats": [
    "bi"
   ],
   "desc": "Free Google dashboard and reporting tool.",
   "icon": "assets/img/tools/looker-studio.svg",
   "url": "https://lookerstudio.google.com"
  },
  {
   "id": "qlik-sense",
   "name": "Qlik Sense",
   "cats": [
    "bi"
   ],
   "desc": "Associative analytics platform.",
   "icon": "assets/img/tools/qlik-sense.svg",
   "url": "https://www.qlik.com"
  },
  {
   "id": "apache-superset",
   "name": "Apache Superset",
   "cats": [
    "bi"
   ],
   "desc": "Open-source BI and exploration platform.",
   "icon": "assets/img/tools/apache-superset.svg",
   "url": "https://superset.apache.org"
  },
  {
   "id": "knime",
   "name": "KNIME",
   "cats": [
    "bi"
   ],
   "desc": "Visual workflows for data science.",
   "icon": "assets/img/tools/knime.svg",
   "url": "https://www.knime.com"
  },
  {
   "id": "rapidminer",
   "name": "RapidMiner",
   "cats": [
    "bi"
   ],
   "desc": "Data science and machine learning platform.",
   "icon": null,
   "url": "https://rapidminer.com"
  },
  {
   "id": "google-earth-pro",
   "name": "Google Earth Pro",
   "cats": [
    "gis"
   ],
   "desc": "Desktop globe for imagery, measuring and KML.",
   "icon": "assets/img/tools/google-earth-pro.svg",
   "url": "https://www.google.com/earth/about/versions/",
   "feature": true
  },
  {
   "id": "google-earth",
   "name": "Google Earth",
   "cats": [
    "gis"
   ],
   "desc": "Explore satellite imagery and 3D terrain.",
   "icon": "assets/img/tools/google-earth.svg",
   "url": "https://earth.google.com"
  },
  {
   "id": "google-maps-platform",
   "name": "Google Maps Platform",
   "cats": [
    "gis"
   ],
   "desc": "Maps, routes and places APIs.",
   "icon": "assets/img/tools/google-maps-platform.svg",
   "url": "https://mapsplatform.google.com"
  },
  {
   "id": "qgis",
   "name": "QGIS",
   "cats": [
    "gis"
   ],
   "desc": "Open-source desktop GIS.",
   "icon": "assets/img/tools/qgis.svg",
   "url": "https://qgis.org"
  },
  {
   "id": "arcgis-pro",
   "name": "ArcGIS Pro",
   "cats": [
    "gis"
   ],
   "desc": "Professional desktop GIS from Esri.",
   "icon": "assets/img/tools/arcgis-pro.svg",
   "url": "https://www.esri.com/arcgis/products/arcgis-pro/overview"
  },
  {
   "id": "arcgis-online",
   "name": "ArcGIS Online",
   "cats": [
    "gis"
   ],
   "desc": "Cloud mapping and spatial analysis.",
   "icon": "assets/img/tools/arcgis-online.svg",
   "url": "https://www.arcgis.com"
  },
  {
   "id": "google-earth-engine",
   "name": "Google Earth Engine",
   "cats": [
    "gis"
   ],
   "desc": "Planetary-scale geospatial analysis.",
   "icon": "assets/img/tools/google-earth-engine.svg",
   "url": "https://earthengine.google.com"
  },
  {
   "id": "mapbox",
   "name": "Mapbox",
   "cats": [
    "gis"
   ],
   "desc": "Custom maps and location SDKs.",
   "icon": "assets/img/tools/mapbox.svg",
   "url": "https://www.mapbox.com"
  },
  {
   "id": "leaflet",
   "name": "Leaflet",
   "cats": [
    "gis"
   ],
   "desc": "Lightweight interactive web maps.",
   "icon": "assets/img/tools/leaflet.svg",
   "url": "https://leafletjs.com"
  },
  {
   "id": "openstreetmap",
   "name": "OpenStreetMap",
   "cats": [
    "gis"
   ],
   "desc": "Community-built open map data.",
   "icon": "assets/img/tools/openstreetmap.svg",
   "url": "https://www.openstreetmap.org"
  },
  {
   "id": "cesiumjs",
   "name": "CesiumJS",
   "cats": [
    "gis"
   ],
   "desc": "3D globes and maps in the browser.",
   "icon": "assets/img/tools/cesiumjs.svg",
   "url": "https://cesium.com/platform/cesiumjs/"
  },
  {
   "id": "geoserver",
   "name": "GeoServer",
   "cats": [
    "gis"
   ],
   "desc": "Server for sharing geospatial data.",
   "icon": null,
   "url": "https://geoserver.org"
  },
  {
   "id": "postgis",
   "name": "PostGIS",
   "cats": [
    "gis"
   ],
   "desc": "Spatial extension for PostgreSQL.",
   "icon": "assets/img/tools/postgis.svg",
   "url": "https://postgis.net"
  },
  {
   "id": "jupyter-notebook",
   "name": "Jupyter Notebook",
   "cats": [
    "ds"
   ],
   "desc": "Interactive notebooks for code and results.",
   "icon": "assets/img/tools/jupyter-notebook.svg",
   "url": "https://jupyter.org"
  },
  {
   "id": "kaggle",
   "name": "Kaggle",
   "cats": [
    "ds"
   ],
   "desc": "Datasets, notebooks and competitions.",
   "icon": "assets/img/tools/kaggle.svg",
   "url": "https://www.kaggle.com"
  },
  {
   "id": "mlflow",
   "name": "MLflow",
   "cats": [
    "ds"
   ],
   "desc": "Experiment tracking and model lifecycle.",
   "icon": "assets/img/tools/mlflow.svg",
   "url": "https://mlflow.org"
  },
  {
   "id": "weights-and-biases",
   "name": "Weights & Biases",
   "cats": [
    "ds"
   ],
   "desc": "Experiment tracking for ML.",
   "icon": "assets/img/tools/weights-and-biases.svg",
   "url": "https://wandb.ai"
  },
  {
   "id": "tensorboard",
   "name": "TensorBoard",
   "cats": [
    "ds"
   ],
   "desc": "Visualise training metrics.",
   "icon": "assets/img/tools/tensorboard.svg",
   "url": "https://www.tensorflow.org/tensorboard"
  },
  {
   "id": "anaconda",
   "name": "Anaconda",
   "cats": [
    "ds"
   ],
   "desc": "Python distribution and environment manager.",
   "icon": "assets/img/tools/anaconda.svg",
   "url": "https://www.anaconda.com"
  },
  {
   "id": "orange-data-mining",
   "name": "Orange Data Mining",
   "cats": [
    "ds"
   ],
   "desc": "Visual data mining and ML toolkit.",
   "icon": null,
   "url": "https://orangedatamining.com"
  }
 ]
};
