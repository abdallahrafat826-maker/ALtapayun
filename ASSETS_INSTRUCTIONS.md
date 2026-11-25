# AL TABAYUN Assets Directory

## 1. Company Logo (Action Required)
No original logo file was attached when generating this package. 
To display your official AL TABAYUN | التباين logo without altering its original design or proportions:

1. Place your original high-resolution logo file (e.g., `logo.png` or `logo.svg` with transparent background) inside this `assets/` folder.
2. Open `index.html` and replace the two occurrences of `assets/logo-placeholder.svg` (in the `<header>` and `<footer>`) with `assets/logo.png` (or your exact filename).
3. If you also have a square icon mark for the browser tab favicon, save it as `assets/favicon.png` and uncomment the `<link rel="icon">` tag in `index.html`.

## 2. Project & Hero Photography (`assets/images/`)
Currently, `index.html` uses verified high-resolution engineering and construction photography URLs from Unsplash (`images.unsplash.com`) with `loading="lazy"` and descriptive `alt` attributes.
To host all images locally for offline or air-gapped deployment:
1. Download or place your local images in `assets/images/`:
   - `hero-engineering.jpg`
   - `about-site.jpg`
   - `project-01-firefighting.jpg`
   - `project-02-hvac-fire.jpg`
   - `project-03-infrastructure.jpg`
2. Update the corresponding `src="..."` attributes in `index.html`.
