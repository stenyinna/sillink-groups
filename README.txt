SILLINK GROUPD WEBSITE

FILES
- index.html: main website
- styles.css: responsive design/theme
- app.js: content rendering and contact form
- content.json: EDITABLE site text, sectors and colors
- admin.html: browser editor; save locally or download updated content.json
- assets/logo.svg and favicon.svg
- api/contact.php: Vercel PHP email endpoint
- vercel.json: Vercel routing/PHP runtime

VERCEL DEPLOYMENT
1. Upload the ZIP to Vercel Drop or import the folder/project.
2. In Vercel Project Settings > Environment Variables add:
   RESEND_API_KEY = your Resend API key
   CONTACT_TO_EMAIL = inspireiqglobal@gmail.com
   CONTACT_FROM_EMAIL = Website <your-verified-domain@example.com>
3. Redeploy.

EMAIL
The contact form sends to inspireiqglobal@gmail.com through Resend. You must verify the sender domain in Resend and set CONTACT_FROM_EMAIL accordingly. The package intentionally does not contain an API key.

EDITING
Open /admin.html. Edit text/colors, save locally for your browser, or download content.json and replace the site's content.json, then redeploy. For a true multi-user live CMS, connect a database such as Supabase; Vercel serverless functions do not provide a persistent writable local filesystem.

NOTE
The design/content is a clean recreation based on the public reference site, not a copy of proprietary source code. Replace any company-specific legal/contact details as needed.
