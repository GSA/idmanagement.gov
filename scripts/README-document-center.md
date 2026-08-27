# Document Center inventory

The Document Center is a static-site feature. Its searchable inventory is stored in `assets/data/document-center.json` and is generated from supported files under `docs/`. The deployed site reads this JSON file in the browser; it does not scan the document folders at runtime.

## Automatic inventory updates

The repository includes `.github/workflows/update-document-center.yml`, named **Update Document Center index** in GitHub Actions. It automates inventory updates after document changes are pushed.

The workflow runs when a push adds, replaces, moves, renames, or removes a file anywhere under `docs/**`. This pattern includes the top-level folder and every nested folder, including:

- `docs/` and ordinary subfolders, classified as active documents
- `docs/archived/`, classified as archived documents
- `docs/expdocs/`, classified as experimental documents
- Any future subfolders created beneath `docs/`

The generator currently indexes PDF, Word (`.docx`), Excel (`.xlsx`), and PowerPoint (`.pptx`) files. Other file types do not appear in the inventory.

For each qualifying push, the workflow:

1. Checks out the branch and its complete Git history.
2. Installs Poppler and `unzip` for document metadata inspection.
3. Runs `ruby scripts/generate-document-center.rb`.
4. Parses the generated JSON to confirm that it is valid and runs `git diff --check`.
5. Commits `assets/data/document-center.json` back to the same branch as `github-actions[bot]` when the inventory changed.
6. Pushes that generated commit, allowing the site to rebuild with the updated documents and inventory.

The workflow also supports a manual run from the GitHub Actions interface through `workflow_dispatch`. GitHub normally displays manually dispatchable workflows from the default branch, so this option may not appear in the Actions interface until the workflow has reached that branch. Afterward, an authorized maintainer can select another branch containing the workflow when starting the manual run.

## Branch behavior

A GitHub Actions workflow belongs to the branch containing its workflow file. It is not active repository-wide merely because it exists in another branch.

At the time this feature was developed, `.github/workflows/update-document-center.yml` existed only as a change on the `0803-idm-document-center-project` feature branch. The behavior is therefore:

- Before the workflow is committed and pushed, it runs nowhere.
- After it is committed and pushed to `0803-idm-document-center-project`, document changes pushed to that branch can trigger it.
- When the feature branch is merged into `staging`, the workflow file becomes part of `staging` and document changes pushed to `staging` can trigger it.
- When `staging` is merged into the production branch, the workflow becomes available on the production branch as well.
- Any other branch containing the workflow file can run it because the workflow does not restrict `push` events to named branches.
- A branch that does not contain the workflow file cannot run this automation.

The workflow always commits its generated index back to the branch that triggered it. A document update on a feature branch does not directly change `staging` or production. The document files, generated inventory, and workflow move to downstream branches through the normal pull-request and merge process.

## Repository permissions and branch protection

The workflow requests `contents: write`, but the repository or organization must also permit GitHub Actions to write. In GitHub, review **Settings → Actions → General → Workflow permissions** and enable **Read and write permissions** if organizational policy permits it.

Branch-protection or ruleset settings must also allow `github-actions[bot]` to push the generated commit. If a protected branch requires every change to arrive through a pull request or blocks the bot, the final push step will fail even though generation and validation succeeded.

If direct bot commits are not permitted by policy, use one of these alternatives:

- Generate and commit the index locally in the same pull request as the documents.
- Modify the automation to create a pull request containing the generated index instead of pushing directly to the protected branch.

Repository and organization settings are external to this source tree. Adding the workflow file does not change those settings.

## Expected publishing sequence

When automatic pushes are permitted, a typical update produces two commits and may initiate two site builds:

1. An editor pushes the document change.
2. GitHub Actions generates and pushes the updated JSON inventory.
3. The site rebuild associated with the generated commit contains both the documents and the matching inventory.

If a deployment begins from the first commit before the workflow finishes, it can briefly contain the new document without the refreshed inventory. The generated follow-up commit causes the site to rebuild into the complete state.

Archived documents are present in the generated inventory but are excluded from the Document Center's initial results by default. A visitor can display them by selecting the **Archived** filter or otherwise including archived results in the interface.

## Local generation and fallback

Run the generator locally when testing document changes, when automation is unavailable, or when branch protection prevents the bot from pushing:

```sh
npm run generate:documents
```

The generator writes `assets/data/document-center.json`. Commit that file together with the added, replaced, moved, renamed, or removed documents:

```sh
git add -- docs/path/to/document.pdf assets/data/document-center.json
git commit -m "Add document and update Document Center index"
```

Use explicit document paths when staging. If a document was removed, stage its deletion and the generated JSON.

Required local commands are:

- `git`, for created and modified date fallbacks
- `pdfinfo` and `pdfsig` from Poppler, for PDF metadata and signature inspection
- `unzip`, for Office Open XML metadata

After generation, validate the Document Center with the local site running at `http://127.0.0.1:4000`:

```sh
npm run test:document-center
```

## Metadata behavior

Embedded created and modified dates take precedence over Git history. Embedded Office versions take precedence over versions inferred from filenames. Values that cannot be established are left unavailable rather than guessed.

PDF signature results describe the inspection performed on the machine that generated the index. They do not establish organizational approval. Certificate trust and revocation results can vary with the machine trust store and available validation data.

## Troubleshooting

If a document does not appear after deployment, check the following:

1. Confirm that the file uses a supported extension and is located beneath `docs/`.
2. Confirm that the branch receiving the document change also contains `.github/workflows/update-document-center.yml`.
3. Open the repository's **Actions** tab and inspect the **Update Document Center index** run for the document commit.
4. Confirm that `assets/data/document-center.json` contains the document path on the deployed branch.
5. If the workflow failed at `git push`, review Actions write permissions and branch-protection rules.
6. Confirm that the generated bot commit was included in the site deployment.
7. For archived documents, enable the Archived filter in the Document Center.

The automatic workflow does not eliminate the generated JSON file or make runtime metadata tools necessary. It automates the same generation step maintainers can perform locally and preserves the static deployment model.
