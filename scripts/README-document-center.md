# Document Center inventory

Run `npm run generate:documents` after adding, replacing, moving, or removing files in `docs/`.

The generator writes `assets/data/document-center.json`. Commit the generated JSON with the document changes so the deployed static site does not need Ruby or metadata tools at runtime.

Required local commands:

- `git`, for created and modified date fallbacks
- `pdfinfo` and `pdfsig` from Poppler, for PDF metadata and signature inspection
- `unzip`, for Office Open XML metadata

Embedded created and modified dates take precedence over Git history. Embedded Office versions take precedence over versions inferred from filenames. Values that cannot be established are left unavailable rather than guessed.

PDF signature results describe the local inspection performed when the index was generated. They do not establish organizational approval. Certificate trust and revocation results can vary with the machine trust store and available validation data.
