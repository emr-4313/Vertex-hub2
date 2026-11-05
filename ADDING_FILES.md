# Adding files to Vertex Hub

The website lists supported Roblox files directly from the public/files folder. You do not need to edit the file catalog by hand.

## Upload through GitHub

1. Open the Vertex-hub2 repository and go to public/files.
2. Choose Add file, then Upload files.
3. Select files ending in .rbxl or .rbxm. Use a clear filename; underscores and hyphens are shown as spaces on the site.
4. Commit the upload to a branch and open a pull request for review.
5. After the change is merged and the website deployment finishes, the new file appears in the download list automatically.

Only upload files you own or have permission to share. Everything in public/files is publicly downloadable. Keep files within GitHub's upload and repository limits; if GitHub rejects a large file, use a storage method supported by the deployment rather than committing an unsupported file.

## Local development

The dev and build commands regenerate the catalog automatically. To refresh it manually, run npm run generate:catalog. The generated file is src/data/generated-places.ts; do not edit it directly.
