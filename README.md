# World Action Agent

Project website for **World Action Agent: Harnessing VLMs for Robot Manipulation via World Action Rehearsal**.

- Paper: https://arxiv.org/abs/2609.29964
- Website (after GitHub Pages is enabled): https://zyh-lightyear.github.io/world-action-agent/
- Repository: https://github.com/ZYH-Lightyear/world-action-agent

The research code is **coming soon**. We are actively organizing and documenting the code for release as soon as possible.

## Files

```text
index.html                 Page content, authors, results, and metadata
.nojekyll                  Serve the static files without Jekyll
static/css/index.css       Responsive page styles
static/js/index.js         Copy BibTeX interaction
static/images/             Original paper figures and website favicon
```

No package installation or build is required. All assets use relative paths compatible with GitHub project Pages.

## Publish

This local checkout is already connected to the GitHub repository. Push the prepared main branch:

```bash
cd /Knowin/agent_team/mnt/data/zyh/BCap-X/vaw/world-action-agent
git push -u origin main
```

On GitHub, open **Settings → Pages** and configure:

- **Source:** Deploy from a branch
- **Branch:** main
- **Folder:** / (root)

Click **Save**. After the Pages deployment completes, the website will be available at https://zyh-lightyear.github.io/world-action-agent/.

For later updates, edit the files, then run:

```bash
git add index.html static README.md .nojekyll .gitignore
git commit -m "Update project page"
git push
```

## Preview locally

From this repository directory:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080 on the same computer, or forward port 8080 when working on a remote server.

## Content and attribution

The 16 authors, affiliations, contribution marks, figures, and LIBERO-Pro main results table follow the paper. In the original workspace, the manuscript is at `../../arxiv_waa/`. Only the main experimental table is displayed; the code section intentionally remains Coming soon.

The website is adapted from the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which builds on [Nerfies](https://nerfies.github.io/). The template is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). This attribution concerns the website template; it does not assign a new license to the paper or research assets.
