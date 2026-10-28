# Hostinger PHP/HTML hosting

This is a static React/Vite frontend. It runs in the visitor's browser. PHP and Node.js are not required on the hosting server. Use a **PHP/HTML website**, not a Web App. You still need an active web/cloud hosting plan and an available ordinary website slot; purchasing a domain alone is not hosting.

## Connect GitHub

1. In hPanel open Websites → Add/Create website → PHP/HTML website. Select your web hosting plan and assign the domain you purchased.
2. Open that website's Dashboard → Advanced → Git.
3. Choose Connect with GitHub and authorize access to PrajaktaAdlytica/MerchantReturns. Limit access to this repository where possible.
4. Select repository `PrajaktaAdlytica/MerchantReturns`.
5. Select branch **hostinger**, not main.
6. Use deploy/root directory **public_html**. This is the server destination, not dist/client.
7. Deploy. Use a new/empty destination; back up any existing site before replacement. Legacy Git UI may require leaving the directory field empty to mean public_html.
8. Confirm index.html, .htaccess, assets/, images/ and brand/ exist directly inside public_html.
9. If hPanel reports that the domain is not connected, follow its domain connection prompt and use the exact DNS/nameserver values supplied for this hosting account. Preserve email MX/TXT records. No IP address is assumed by this repository.
10. Enable/check SSL and HTTPS for the domain. Test the homepage and direct refreshes of /products/returns-signal, /pilot and /demo.

Hostinger's PHP/HTML Git integration does **not** run npm builds. `main` contains source and originals; `hostinger` contains ready-to-serve files. The included GitHub Actions workflow builds changes pushed to main, runs tests, and updates hostinger. Hostinger then auto-deploys changes to its connected branch. Check GitHub Actions and hPanel deployment logs if updates do not appear. If organization policy disables Actions/write permissions, enable the permitted workflow or build and upload manually.

## Manual upload fallback

Run `npm ci` and `npm run build`. Upload the **contents** of dist/client into public_html, including hidden .htaccess. Do not upload the parent dist directory, source, node_modules or the Sites worker. An upload ZIP is also supplied with the initial handoff. Extract it directly into public_html. Preserve or remove existing starter index files only after backing up any existing website.

## Current product boundaries

This remains an explicitly labeled concept preview. Forms validate locally but do not send emails or save leads; sign-in is a preview; returns are synthetic and browser-local. Search indexing remains disabled by noindex. Hosting the files does not add backend services. Review these deliberately before a commercial launch.

## Official references (checked 28 October 2026)

- https://docs.hostinger.com/getting-started/creating-your-first-website
- https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/
- https://docs.hostinger.com/websites/git
