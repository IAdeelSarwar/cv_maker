# CV Builder — Simple CV Builder

A simple browser-based CV/resume maker built with **HTML, CSS, JavaScript, and jQuery**.

It lets users create a professional CV, edit sections in real time, switch between multiple resume templates, customize accent colors, save data locally in the browser, and export a selectable-text PDF using the browser print system.

This project is intentionally simple and does **not** use complex frameworks such as React, Next.js, Vue, Angular, or backend services.

---

## Features

- Real-time CV/resume preview
- Multiple resume templates/layouts
- Editable personal information
- Editable professional summary
- Work experience section
- Education section
- Skills section
- Languages section
- Projects section
- Certifications section
- Interests section
- Template design selector
- Accent color selector
- Sample CV data included by default
- Local browser autosave using `localStorage`
- Reset option for sample or empty data
- Export to PDF using browser print
- Selectable and searchable PDF text
- A4 print layout support
- Multi-page PDF support when content exceeds one A4 page

---

## Tech Stack

- HTML5
- CSS3
- JavaScript
- jQuery
- Font Awesome icons
- Google Fonts

Optional/previously used:

- `html2pdf.js`

However, the recommended export method is now **native browser print**, because it creates selectable and searchable PDF text.

---

## Project Structure

```text
cv-maker/
├── index.html
├── builder.html
├── templates.html
├── css/
│   ├── style.css
│   └── builder.css
├── js/
│   ├── main.js
│   └── builder.js
└── assets/
    └── README.md placeholder / images if needed
