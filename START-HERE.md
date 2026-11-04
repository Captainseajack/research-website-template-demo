# Start here

This template publishes one research topic as a direct article rather than a multi-section research portal.

## What visitors see

- `/` — the concise topic brief.
- `/research/` — the complete long-form research.
- `/sources/` — every source and material entry.
- `/updates/` — sources added after publication.

## Make the site yours

### 1. Edit the central settings

Open `_config.yml` and replace:

- `title` and `short_title`
- `topic`
- `headline`
- `dek`
- `author`
- `description`
- `published_date`
- `last_updated`
- `url` and `baseurl`

Keep `demo: true` while example content remains. Change it to `false` when the real article and sources are ready.

### 2. Write the short article

Edit `index.html`. Replace the three example paragraphs inside `brief-copy` with the plain-language topic summary. Keep it direct: explain the issue, give the main answer early, summarize the strongest evidence, and acknowledge the most important uncertainty.

### 3. Write the full research

Edit `research.md` using ordinary Markdown. This page is for the complete argument, supporting evidence, history, counterarguments, limitations, and conclusion.

### 4. Add sources

Copy `templates/NEW-SOURCE.md`, rename the copy, and move it into `_sources/`.

Use `post_publication: false` for sources included when the article was originally published. Use `post_publication: true` for a source found later. A later source automatically appears on the Updates page as well as the complete Sources page.

The shortest useful source entry is:

```yaml
---
title: "Document title"
kind: "Government report"
added: 2026-11-04
source_url: "https://example.org/document"
post_publication: true
---
```

Optional fields include creator, original publication date, summary, archived URL, and commentary.

### 5. Optional commentary

Leave this empty when no note is needed:

```yaml
commentary: ""
```

The page will show nothing—no label and no empty gap. Add text only when you want to explain why a source matters or record a limitation.

## GitHub Pages settings

For a project repository at `https://USERNAME.github.io/REPOSITORY/`:

```yaml
url: "https://USERNAME.github.io"
baseurl: "/REPOSITORY"
```

For a user site repository named exactly `USERNAME.github.io`, or for a custom domain:

```yaml
baseurl: ""
```

In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, then select **main** and **/(root)**.

## Updating a published article

Adding a post-publication source does not require rewriting the topic brief or full article. Add the source file and set `post_publication: true`.

When new evidence changes the article itself, update `index.html` and/or `research.md`, then change `last_updated` in `_config.yml`.
