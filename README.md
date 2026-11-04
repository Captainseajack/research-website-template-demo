# The Research Ledger — issue-focused research website template

A reusable, responsive GitHub Pages website for independent public-interest and political-issue research.

It includes a stable **conclusions page**, a searchable **source library**, a chronological **research journal** (including optional X embeds), and a **revision history**. Content is Markdown; styling and page structure are shared across projects.

**New to GitHub? Start with [START-HERE.md](START-HERE.md).** It explains how to upload, publish, edit, use a custom domain, and make additional sites. No local software is required.

## Core content files

- `conclusions.md` — principal thesis and supporting material.
- `_sources/*.md` — individual research sources; each gets its own URL and library card.
- `_posts/YYYY-MM-DD-*.md` — journal entries, displayed newest-first.
- `revisions.md` — substantive corrections and changes to findings.
- `methodology.md` — transparent research process.
- `_config.yml` — site name, topics, URL, and preview setting.

## Features

- Responsive editorial layout, with no CSS/JS frameworks, external font downloads, or build tooling to install on your computer.
- Jekyll collections for independent source records, sortable by `added` date.
- JavaScript-powered source-type filters and title/summary/tag search.
- Minimal journal template allowing **one X embed just by setting `x_post`** in the header.
- Reusable theme across many sites: copy the files into a new public repository and change the content.
- Accessible headings, labeled inputs, keyboard focus styles, responsive layout, and reduced-motion support.

## Local Jekyll preview (optional; not required)

If you already have Ruby, Bundler, and Jekyll configured, you can run Jekyll locally. This project intentionally has **no Gemfile dependency requirement** for publishing from a GitHub Pages branch, because GitHub builds the website automatically.

## License

The template code and design are MIT licensed; see `LICENSE`. Research text and third-party embedded content have their own ownership and usage considerations.
