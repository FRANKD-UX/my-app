# Host Africa Deployment

This project deploys to Host Africa DirectAdmin with the GitHub Actions workflow at `.github/workflows/deploy-hostafrica.yml`.

## Required GitHub Secrets

Create these repository secrets in GitHub before running the deployment:

- `HOSTAFRICA_FTP_SERVER`
- `HOSTAFRICA_FTP_USERNAME`
- `HOSTAFRICA_FTP_PASSWORD`
- `HOSTAFRICA_FTP_PORT`

Do not commit FTP credentials or passwords to the repository. The workflow reads them only from GitHub Secrets.

## Deployment Target

The workflow deploys the Angular production browser build from:

```text
dist/my-app/browser/
```

to this Host Africa DirectAdmin folder:

```text
domains/njcfirecontrol.co.za/public_html/
```

That server path maps to the live website root:

```text
/home/njcfirec/domains/njcfirecontrol.co.za/public_html/
```

The workflow excludes Git files, `node_modules`, and `cgi-bin`.

## Triggering Deployment

Push to the `main` branch to trigger a deployment:

```sh
git push origin main
```

GitHub Actions will install dependencies with `npm ci`, build the production Angular app, and upload only the built browser output via FTPS.

## Local Verification

Run the same production build command used by the workflow:

```sh
npm run build -- --configuration production
```

Confirm the deploy folder contains `index.html`:

```sh
ls -la dist/my-app/browser/index.html
```

## Troubleshooting

- Secret or login failures: confirm all four GitHub Secrets exist and that the FTP username, server, password, and port match the DirectAdmin FTP account.
- Wrong FTP password: reset or re-enter `HOSTAFRICA_FTP_PASSWORD` in GitHub Secrets.
- FTPS connection failures: confirm Host Africa allows FTPS on the configured port and that the server value does not include `ftp://` or `ftps://`.
- Missing files on the website: confirm the build step created `dist/my-app/browser/` and that `local-dir` still matches the Angular output path.
- Wrong remote folder: confirm `server-dir` is exactly `domains/njcfirecontrol.co.za/public_html/`.
- Build failures: run `npm ci` and `npm run build -- --configuration production` locally, then fix any Angular errors before pushing again.
- Branch not deploying: confirm the push is to `main`; pushes to other branches do not trigger this workflow.
- Unexpected server files: do not enable `dangerous-clean-slate`; the workflow intentionally does not use it.
