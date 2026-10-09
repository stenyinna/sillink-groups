SILLINK GROUPD — STATIC VERCEL WEBSITE

DEPLOY
1. Extract this ZIP.
2. Upload the files inside this folder directly to the ROOT of your GitHub repository. Make sure index.html and vercel.json are at the repository root, not nested in another folder.
3. If you are updating an existing repository, DELETE the old vercel.json and any api/contact.php function files first, then upload these files.
4. In Vercel, import/redeploy the repository. Choose Framework Preset: Other. Leave Build Command empty. Output Directory: leave empty/root.

This is a static single-file HTML website. CSS, JavaScript, content, and favicon are embedded in index.html. vercel.json deliberately contains no functions or PHP runtime declarations, so it will not look for api/contact.php.

CONTACT
The contact form uses a mailto link to inspireiqglobal@gmail.com. It opens the visitor's email app; it does not send silently from the website. For automatic email delivery, connect a form provider or deploy a compatible serverless endpoint separately.

EDITING
Edit the content object inside index.html, commit the change to GitHub, and Vercel will redeploy.
