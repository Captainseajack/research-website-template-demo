# Start here — your research website, without programming

This folder is a complete GitHub Pages website template. You do **not** have to install a coding program, Ruby, or Jekyll just to publish it. GitHub runs the website builder for you.

## The quickest route to a live website

**1. Unzip the download.** On Windows, right-click the ZIP file and choose **Extract All**. Open the extracted folder.

**2. Make a GitHub repository.** Sign in to [github.com](https://github.com/) → click **New repository** → give it a name such as `my-first-research-site` → choose **Public** → click **Create repository**.

**3. Upload the website.** In the repository, click **Add file → Upload files**. From the extracted folder, drag **all of the files AND folders inside it** onto the GitHub upload page. Do **not** upload the ZIP file itself. Click **Commit changes** to finish the upload.

**4. Tell GitHub to publish it.** Open your repository's **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, choose branch **main**, choose folder **/(root)**, then click **Save**. GitHub will build the site. If GitHub says Actions are disabled, enable them under **Settings → Actions**; the Jekyll Pages builder needs them.

**5. Set your website's address.** Your temporary address is generally `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`. In the GitHub editor, open `_config.yml` and set these two lines to match (without placeholders):

```yaml
url: "https://YOUR-USERNAME.github.io"
baseurl: "/YOUR-REPOSITORY"
```

Click **Commit changes**. These two values make the navigation and CSS work when your free website is hosted at a repository URL.

**6. Make it yours.** Edit `_config.yml`: title, short_title, tagline, topic, author, and description. Replace the sample text in `conclusions.md`. Edit `methodology.md` and `revisions.md` to reflect your actual project. Remove or replace sample entries in `_posts/` and `_sources/`.

**7. Turn off the preview label.** In `_config.yml`, change `demo: true` to `demo: false` **after** you have removed the sample material.

> You can first publish to the free address. You do not need to purchase a domain to try the template.

## When you buy a custom domain

Use **Settings → Pages → Custom domain** to enter the domain. GitHub will create a `CNAME` file for branch publishing. Set your DNS records with your domain registrar as instructed in [GitHub's current custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Verify the domain in GitHub where offered; enable **Enforce HTTPS** once it becomes available.

For a custom domain such as `research-example.org`, edit `_config.yml` again:

```yaml
url: "https://research-example.org"
baseurl: ""
```

A custom domain **does not** need the GitHub repository name in the website URL.

## How to publish new research without changing website code

### Add a 2-minute research note

1. In GitHub, open the folder `templates` and then `NEW-JOURNAL-POST.md`. Click **Raw** or copy its text.
2. At the repository root, choose **Add file → Create new file**. In the name box, enter something like `_posts/2026-11-04-an-important-discovery.md` (change the date and title to yours).
3. Paste the template text. Edit `title`, `date`, `summary`, and the notes beneath the second `---`. Keep the triple-dash lines in place.
4. Click **Commit changes**. The journal listing and homepage automatically display the new article.

**Why the strange filename?** Jekyll recognizes journal posts by a filename beginning `YYYY-MM-DD-`. The date in the filename should match the `date` field in the post.

### Embed a post from X

Within that new journal post, set the `x_post` line to the **real public post URL**:

```yaml
x_post: "https://x.com/real-account/status/1234567890123456789"
```

Use a real post ID, not the sample shown above. GitHub publishes an embedded post **at the bottom of that entry**. The original link is shown as a fallback if the embed doesn't render. You don't have to paste any JavaScript or HTML.

If you want **multiple** embeds inserted at specific locations, add this on its own line in the post's body (replace the URL with a real one):

```liquid
{% include x-post.html url="https://x.com/real-account/status/1234567890123456789" %}
```

**Research practice:** Note the author, timestamp, substance, and original URL in ordinary text too. The post can later become private or be deleted. Embeds load a third-party script and can collect visitor information.

### Add a source to the library

1. Open `templates/NEW-SOURCE-RECORD.md` and copy it.
2. Choose **Add file → Create new file** and name it `_sources/transcript-november-2026.md` or another unique `.md` name.
3. Paste the example and change the metadata. In particular, use the original URL for `source_url`.
4. Set `type` to **one of**: `primary`, `reporting`, `analysis`, or `other` (in lowercase). The website uses this field to power its filter buttons. `kind` is the human-readable category label.
5. Write your notes under the headings, and click **Commit changes**.

The new source becomes searchable on the site, and it gets its own page you can link to from the journal or conclusions.

### Edit the main summary or log a correction

Open `conclusions.md` or `revisions.md`, click the pencil icon, make your changes using Markdown (simple text with `##` headings and `[text](url)` links), then **Commit changes**. You do not need to edit HTML or CSS.

## Make more websites from the same template

For each new political issue, make **another repository** and upload the same template files. Each repository can have its own title, conclusions, source list, journal, and custom domain. Only one copy of this template is needed on your computer; you can re-use it.

## What is safe to change?

| File or folder | What you use it for |
| --- | --- |
| `_config.yml` | Website name, description, topic, URL settings, preview banner |
| `conclusions.md` | Main argument and relatively stable findings |
| `_posts/` | New research journal entries (with dates) |
| `_sources/` | Cataloged sources and notes |
| `revisions.md` | Substantive corrections and changes |
| `methodology.md` | How you do your research |
| `assets/css/style.css` | Colors and layout, only if you want to customize design |
| `_layouts/` and `_includes/` | Website machinery — leave alone until you want custom features |

## Troubleshooting

- **I see text but the site has no styling:** Check `_config.yml`'s `baseurl`. For a free repository site it must be `/repository-name`; for a custom domain it should be `""`.
- **The page says 404:** Wait for GitHub's build to complete, then check **Settings → Pages** and the **Actions** tab for errors. The repository must have the site's `index.html` at the root, not inside an extra folder.
- **A post isn't appearing:** Make sure its filename is `_posts/YYYY-MM-DD-something.md` and the YAML date is not in the future.
- **An X post isn't appearing:** Confirm the post is public, the URL is a real `x.com/.../status/...` address, and the visitor's browser isn't blocking social embeds. The plain link remains available.
- **Some library records aren't showing up after filtering:** Use lowercase `type: primary`, `type: reporting`, `type: analysis`, or `type: other`.
- **The template preview banner won't disappear:** Change `demo: true` to `demo: false` in `_config.yml` and commit.

## Notes about costs and limitations

- GitHub Pages publishing from a public repository is free on GitHub Free. Your GitHub project files are public.
- A custom domain is optional and usually purchased separately.
- The site is static: no account logins, server-side databases, or built-in comment system.
- The search box filters the cataloged content already on the page. It does not search the full text of all research notes.
- No third-party trackers are included by default. The optional X embed calls X/Twitter when displayed.

Official documentation: [GitHub Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) · [Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [X embeds](https://help.x.com/en/using-x/how-to-embed-a-post)
