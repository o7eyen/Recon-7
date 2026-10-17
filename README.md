# Recon 7 GitHub Pages website

Complete static website with Recon 7 v1.4.2 Windows setup and standalone EXE.
No build tools, API keys, database or paid services are needed. The source
repository contains website assets and the two browser binaries; it does not
contain the complete native browser source project or private profile data.

## Publish through GitHub

1. Create a repository in your own GitHub account, for example `recon7`.
   A public repository supports GitHub Pages on GitHub Free. Choose the
   repository's visibility knowing that a public repo exposes these site files.
2. Put this folder's contents at the repository root, including
   `.github/workflows/pages.yml` and `site/`. Keep the `main` branch name.
3. In the repository, open **Settings → Pages → Build and deployment** and
   choose **GitHub Actions** as the source.
4. Open **Actions → Publish Recon 7 website → Run workflow**. Future pushes to
   `main` publish automatically. The workflow checks both binary hashes first.
5. After the workflow succeeds, GitHub shows the exact Pages URL, normally
   `https://YOUR-USERNAME.github.io/recon7/` for that repository name.

GitHub documentation:
https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

No live repository, account or Pages URL was created by preparing this package.
GitHub account authorization is required to publish it on your behalf.

## Updating downloads

Replace `site/downloads/Recon7-Setup.exe` and `site/downloads/Recon.exe` with a
matching, validated release. Recalculate `site/downloads/SHA256SUMS.txt`, then
update `release.json`, visible version/file sizes in `site/index.html` and the
release notes. Re-run the workflow. Do not edit a binary after signing it.

The current release is unsigned. The site clearly labels it as a preview, and
does not claim that hosting on GitHub removes Windows SmartScreen warnings.
The PayPal support destination is the owner's provided address; live receiving
eligibility has not been independently verified.

## Verification

Installer/portable hashes match the delivered 1.4.2 release. All local HTML
links/assets exist, relative paths support repository-based Pages URLs, JSON
parses, and JavaScript syntax checks pass. There is no server-side functionality.
Browser visual QA was unavailable in this website-building environment.
The GitHub workflow and public deployment require a connected GitHub account.
