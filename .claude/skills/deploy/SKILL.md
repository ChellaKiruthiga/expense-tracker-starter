Deploy the app to staging by running lint, building the production bundle, and pushing to the staging branch.

Follow these steps in order. Stop immediately and report the failure if any step fails — do not proceed to the next step.

## Step 1 — Lint

Run `npm run lint`. Fix any reported errors before continuing. If errors cannot be auto-fixed, report them to the user and stop.

## Step 2 — Production build

Run `npm run build`. Confirm the build completes without errors.

## Step 3 — Push to staging branch

Run the following git commands in sequence:

1. `git add -A` — stage all changes
2. `git commit -m "chore: deploy to staging"` — commit (skip if nothing to commit)
3. `git push origin HEAD:staging` — push current branch to the remote `staging` branch

After all steps complete successfully, report a brief summary: what was linted, that the build succeeded, and confirm the push to `origin/staging`.
