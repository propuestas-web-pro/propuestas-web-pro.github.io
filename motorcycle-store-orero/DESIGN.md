# DESIGN.md — Motorcycle Store Orero Visual Design System
> Reference Brand: Ducati & Apple Special Edition · Dark Motorsport & High-Readability Luxury

## 1. Color Palette (Tokens)
- `--bg-dark`: `#080b11` (Deep Asphalt Canvas)
- `--bg-card`: `#131722` (Graphite Surface)
- `--bg-surface-elevated`: `#1a2030` (Interactive Hover / Modals)
- `--bg-input`: `#0a0d14` (Deep Charcoal Input Fields)
- `--accent-red`: `#ef233c` (Motorsport Racing Red)
- `--accent-red-hover`: `#d90429` (Intense Crimson)
- `--accent-red-glow`: `rgba(239, 35, 60, 0.45)`
- `--green-stock`: `#10b981` (Emerald Verified / Stock / Call CTA)
- `--green-glow`: `rgba(16, 185, 129, 0.35)`
- `--amber-warning`: `#f59e0b` (Reservada / Cita Pendiente)
- `--text-primary`: `#ffffff` (Ultra-Crisp White, 100% Opacity)
- `--text-secondary`: `#cbd5e1` (Light Slate, 85% Opacity)
- `--text-muted`: `#94a3b8` (Muted Steel, 65% Opacity)
- `--border-subtle`: `rgba(255, 255, 255, 0.09)`
- `--border-focus`: `rgba(239, 35, 60, 0.6)`

## 2. Typography
- **Headings**: `'Outfit', sans-serif` (Weights: 700, 800, 900) — Bold, athletic, high-impact numbers and vehicle titles.
- **Body & Data**: `'Plus Jakarta Sans', sans-serif` (Weights: 400, 500, 600, 700) — Modern, ultra-legible on all mobile screens.
- **Minimum font sizes**: 14px for micro-badges, 16px for input text, 20px+ for prices, 24px+ for titles.

## 3. Component Specs
- **Navigation Tabs**: Pill-shaped segmented controls (`border-radius: 9999px`), active state illuminated in gradient red with soft glow.
- **Vehicle Cards**: Aspect ratio 16:10 for media, status ribbons on top-left, dual action buttons (`Marcar como Vendida`, `Cambiar Precio`).
- **File Upload Area**: Drag-and-drop dotted boundary with high-contrast icon, button to open native file browser, multi-image thumbnail previews with deletion badges.
- **CRM Leads**: Client cards with direct telephone click-to-call (`tel:`) and green WhatsApp launch buttons (`wa.me/`).
- **Boutique**: Full CRUD cards with price editing, stock status toggles, and photo upload.
