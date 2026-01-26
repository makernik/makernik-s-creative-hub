# Domain migration plan (GitHub Pages)

This site is a personal creative portfolio and landing page. To reduce
the GitHub Pages custom-domain takeover risk, host it on a subdomain and
keep the apex domain under direct control (redirect only).

## Recommended subdomain
- **hello.makernik.com** (friendly, landing-page vibe)

### Alternatives
- **www.makernik.com** (classic default)
- **portfolio.makernik.com** (descriptive and clear)
- **studio.makernik.com** (creative brand feel)

## Migration checklist
1. Pick the subdomain (default: **hello.makernik.com**).
2. Create DNS record:
   - **CNAME** `hello` -> `makernik.github.io`
3. Keep apex domain managed outside GitHub Pages:
   - Redirect `makernik.com` -> `https://hello.makernik.com`
4. Update **public/CNAME** to the chosen subdomain.
5. In GitHub Pages settings:
   - Source: **GitHub Actions**
   - Custom domain: the chosen subdomain
6. Wait for HTTPS certificate to issue (often 15-60 minutes).
