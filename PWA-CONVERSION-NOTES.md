# Rootwise — Mobile-first PWA conversion (branch `mobile-pwa`)

Follows `ROOTWISE_MOBILE_PWA_REDESIGN.md`. Targeted additions to `rootwise-enhanced.html`; nothing was rebuilt or removed.

## What changed
- **`rootwise-enhanced.html`** — added (all as overrides/additions):
  - PWA `<head>` tags (manifest link, theme colour, Apple touch icon, `viewport-fit=cover`).
  - One `<style id="rw-mobile">` block at the end of `<head>`: Modern Botanical palette (remaps the existing CSS variables), compact mobile header, home spacing, 44px touch targets / 16px inputs, stacked grids, modal fit, reduced-motion support.
  - Bottom navigation (Home · Herbs · Cabinet · Formulas · More), a Herbs sub-bar (Library / By Condition / Compare) and a **More** sheet holding every other section: Dosage, Herb–Medication Interactions, Herb–Herb Interactions, Guided Suggestions, Profile & Journal, Resources, Learn. The old top tab strip is still used on tablet/desktop.
  - A wrapper around the existing `switchTab()` (the original runs first): adds browser Back / direct `#links`, per-tab scroll memory, hides the bottom bar while the keyboard is up, offline notice.
  - Service-worker registration (skipped on `file://`).
  - **One bug fix:** the Herbs "Filter by Category" chips were never drawn on first load (`renderCategories()` was only called after another action). `init()` now calls it.
- **New files:** `manifest.webmanifest`, `sw.js`, `assets/icons/` (192, 512, maskable 512, Apple touch 180).
- Unchanged: scripture and all copy, herb data, dosage / interaction / formulation logic, all storage keys, login behaviour.

## Storage keys (audited, untouched)
`rootwise_favorites`, `rootwise_cabinet`, `rootwise_formulas`, `rootwise_notes`, `rootwise_saved_protocols`, `rootwise_protocols_count`, `rootwise_user`, `rootwise_book_resources`, `rootwise_learning_resources`.
The service worker only manages its own cache (`rootwise-v2`); it never touches localStorage.

## Tested (headless Edge, emulated phones, 320 / 390 / 768 / 1280 px)
- No page-wide horizontal overflow on any of the 13 tabs at any size.
- 0 touch targets under 44px on phone/tablet (was 523 before).
- 25/25 checks: all 13 tabs reachable from the phone UI, More sheet + Escape, Back button, direct links, cabinet/journal/formula data persist across reload, add-to-cabinet, dosage calculator, formulation draft, scripture intact, desktop layout unchanged, manifest + icons load, service worker active, app shell cached, no script errors.
- **Not tested:** installing on a real Android/iPhone, real offline mode on a device, behaviour under GitHub Pages' `/Root-wise/` path (all paths are relative so it should work).

## After merge
Bump `CACHE_VERSION` in `sw.js` whenever the app file changes so installed copies refresh.

## Roll back
Revert the merge commit, or restore `rootwise-enhanced.html` from `main` before this PR (commit `1188588`).

## Known, not changed (outside this brief)
- Sign-in / "Continue with Google/Apple" are not real accounts (saved in the browser only) and the copy says "across devices". Left as-is per the brief; worth a separate decision.
- "Healing / Guided Suggestions" is a local keyword match, not AI.
