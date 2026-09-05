# bharathpillai.dev

Personal portfolio. React 19 + Vite + framer-motion, styled after a video-game main menu.

```
npm i
npm run dev      # local
npm run build    # dist/
```

Phones and tablets get a plain scrolling portfolio (`src/MobileHome.jsx`); laptops get the game-style menu (`src/P3Menu.jsx`). The switch is `src/hooks/useIsMobile.js`.

## Layout

- `src/P3Menu.jsx` – the animated main menu (keyboard + touch)
- `src/components/Shell.jsx` – frame shared by every content page (header, desktop nav, mobile tab bar)
- `src/components/SlashButton.jsx` – the cut-corner button with the sweep animation
- `src/components/Decor.jsx` – halftone/slash backdrop, chips, monogram, icons
- `src/data/content.js` – all copy in one place; edit this to update the site
- `src/index.css` – design tokens and shared styles
