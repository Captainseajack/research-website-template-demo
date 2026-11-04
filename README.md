# Issue-focused research article template

A reusable Jekyll/GitHub Pages template for publishing one topic in four direct layers:

1. **Topic brief** — a concise, news-style explanation on the homepage.
2. **Full research** — the complete long-form argument and evidence.
3. **Sources** — one list of all documents and materials.
4. **Updates** — sources added after the original publication.

The normal workflow is intentionally small. Edit `index.html` for the brief, edit `research.md` for the complete article, or add a Markdown file to `_sources/`.

## Important files

- `_config.yml` — title, topic, headline, author, publication dates, and site URL.
- `index.html` — short topic brief.
- `research.md` — full research article.
- `_sources/*.md` — the source record.
- `sources.html` — automatically generated complete source list.
- `updates.html` — automatically generated post-publication list.
- `templates/NEW-SOURCE.md` — copy this when adding a source.
- `methodology.md` — explanation of the site’s research practices.

`topics_index_url` in `_config.yml` controls the **All topics** link. Point every copied topic site to the same directory, normally `https://USERNAME.github.io/`.

## Adding a source

Copy `templates/NEW-SOURCE.md` into `_sources/`, give it a unique filename, and change the metadata.

Set:

```yaml
post_publication: true
```

when the source was discovered after the original article was published. The entry then appears automatically on both **Sources** and **Updates**.

Commentary is optional:

```yaml
commentary: ""
```

If the field is empty or omitted, the site renders no commentary heading or blank space. If text is added, it appears in a clearly labeled commentary box.

## Publishing

This repository is compatible with GitHub Pages branch publishing from `main` and `/(root)`. Configure `url` and `baseurl` in `_config.yml` before publishing. See [START-HERE.md](START-HERE.md) for the complete beginner workflow.

## License

Template code and design are MIT licensed. Research content and third-party source material retain their respective ownership.
