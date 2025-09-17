# D1 Skincare Landing Page  

A responsive landing page built with **HTML, SCSS, and vanilla JS**.  
The project follows a modular SCSS structure with utilities, variables, and reusable mixins.  

---

## 🚀 Features  

- **Responsive layout** with grid/flex utilities  
- **SCSS architecture** (`variables`, `utilities`, `components`, `sections`)  
- **Reusable mixins** (typography, CTA hover animation, spacing)  
- **Asset pipeline** (images, SVGs copied into `dist/assets/`)  
- **BrowserSync dev server** with live reload  
- **Auto build & watch** via npm scripts  

---

## 📂 Project Structure  

```
src/
 ├── assets/             # source images, icons, svgs
 │    ├── element/
 │    ├── ingredients/
 │    ├── product/
 │    └── avatar-profile.png
 ├── scss/                  # SCSS partials
 │    ├── app.scss          # main entry
 │    ├── variables/        # colors, fonts, spacing
 │    ├── utilities/        # mixins & helpers
 │    ├── sections/         # section styles
 │    └── components/       # buttons, cards, etc.
 |── js/
 |    |── feature-slider.js # sliders
 └── index.html             # entry HTML
dist/
 ├── css/app.css            # compiled CSS
 └── assets/                # copied build assets
 ├── js/feature-slider.js   # compiled JS
 └── assets/                # copied build assets
```

---

## ⚙️ Scripts  

Defined in `package.json`:  

```json
"scripts": {
    "build": "npm-run-all build:css build:assets build:vendor build:vendor:jquery build:vendor:whatinput build:vendor:foundation build:js copy:html",
    "build:css": "sass --load-path=node_modules/foundation-sites/scss src/scss/app.scss dist/css/app.css --style=expanded",
    "build:assets": "cpx \"src/assets/**/*\" dist/assets",
    "build:vendor": "cpx \"node_modules/flickity/dist/*\" dist/vendor/flickity",
    "build:js": "cpx \"src/js/**/*\" dist/js",
    "copy:html": "cpx \"index.html\" dist",

    "watch:sass": "sass --watch --load-path=node_modules/foundation-sites/scss src/scss/app.scss:dist/css/app.css --style=expanded",
    "watch:assets": "cpx \"src/assets/**/*\" dist/assets -w",
    "watch:vendor": "cpx \"node_modules/flickity/dist/*\" dist/vendor/flickity -w",
    "watch:js": "cpx \"src/js/**/*\" dist/js -w",
    "watch:html": "cpx \"index.html\" dist -w",

    "build:vendor:jquery": "cpx \"node_modules/jquery/dist/*\" dist/vendor/jquery",
    "build:vendor:whatinput": "cpx \"node_modules/what-input/dist/*\" dist/vendor/what-input",
    "build:vendor:foundation": "cpx \"node_modules/foundation-sites/dist/js/*\" dist/vendor/foundation",

    "watch:vendor:jquery": "cpx \"node_modules/jquery/dist/*\" dist/vendor/jquery -w",
    "watch:vendor:whatinput": "cpx \"node_modules/what-input/dist/*\" dist/vendor/what-input -w",
    "watch:vendor:foundation": "cpx \"node_modules/foundation-sites/dist/js/*\" dist/vendor/foundation -w",

    "serve": "browser-sync start --server dist --files 'dist/css/**/*.css, dist/js/**/*.js, dist/assets/**/*, dist/vendor/**/*, dist/**/*.html'",
    "dev": "npm-run-all --parallel watch:sass watch:assets watch:vendor watch:vendor:jquery watch:vendor:whatinput watch:vendor:foundation watch:js watch:html serve"
}
```

---

## 🛠️ Development  

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Start dev server with watch**  
   ```bash
   npm run dev
   ```

   This will:  
   - Compile SCSS → `dist/css/app.css`  
   - Compile JS   → `dist/js/feature-slider.js`  
   - Copy assets  → `dist/assets/` 
   - Copy JS      → `dist/js/feature-slider.js` 
   - Copy index   → `dist/index.html` `  
   - Serve `dist/` with BrowserSync  

3. **Build for production**  
   ```bash
   npm run build
   ```

---

## 🎨 Sections Implemented  

- Hero Section  
- About Section  
- How It Works  
- Results  
- Benefits  
- Set (Get the Set CTA)  
- Ingredients  
- Formulas & Testimonials  
- Fans (video/product section)  
- Footer  

---

## 📦 Assets  

- Images & SVGs live in `src/assets/`  
- On build, copied into `dist/assets/`  
- Reference them in HTML as:  
  ```html
  <img src="assets/dark-d1.svg" alt="D1 Logo">
  ```
- In SCSS, use relative alias after build:  
  ```scss
  background: url('../assets/avatar-profile.png') no-repeat center/cover;
  ```

---

## ✨ Utilities & Mixins  

- `@include h1, h2, subtext` → typography presets  
- `@include cta-hover` → reusable CTA hover/animation  
- Grid utilities for responsive containers  
