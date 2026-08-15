# Vedant Kayandekar — Portfolio

React + Vite + Tailwind CSS v4 + React Three Fiber + Framer Motion.

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Outputs to `dist/`.

## Deploy (easiest: Vercel)
1. Push this folder to a GitHub repo.
2. Go to vercel.com -> New Project -> import the repo.
3. Framework preset: Vite. Leave build command/output as default (`npm run build`, `dist`).
4. Deploy — you'll get a live URL in about a minute.

Netlify works the same way (build command `npm run build`, publish directory `dist`).

## Where to personalize
- `src/components/Hero.jsx` — swap the abstract 3D shape for your own photo or
  a 3D avatar (drop a `.glb` file into `src/assets` and load it with `useGLTF`
  from `@react-three/drei`), and tweak the three floating "identity bubbles"
  (Software Engineer / Content Creator / Martial Arts & Yoga Coach).
- `src/components/Testimonials.jsx` — replace the placeholder quotes with real
  ones before publishing.
- `src/components/Projects.jsx` — add more project cards or link out to case
  study pages as you build them.
- `src/index.css` — all section color tokens live at the top (`:root`), so you
  can retune any section's palette in one place.

## Design language per section
- **Hero** — dark, 3D (React Three Fiber), ambient particle field, thesis statement.
- **Experience** — Asymmetric Layout style: bold color blocks laid out as a
  climbing "ladder" from internship → ventures → hackathons → "hire me".
- **Projects** — Brutalism: raw borders, mono/impact type, high contrast.
- **Testimonials** — Minimal Vintage: cream background, serif type, soft nostalgic feel.
- **Contact** — Glass Morphism: frosted panels over a purple/blue gradient.
