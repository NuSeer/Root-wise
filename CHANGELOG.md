# Changelog

All notable changes to the Rootwise project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-03-27

### Added - Initial Release
- 🌿 Complete herbal database with 150 medicinal herbs
- 🏠 Home screen with Psalm 104:14 scripture and main CTA
- 📚 Herbal Library with search and category filtering
- 🔍 Browse by Health Condition (11 common conditions)
- ⚖️ Herb Comparison Tool (compare up to 3 herbs)
- 💊 My Medicine Cabinet (track owned herbs + "What Can I Treat?" analyzer)
- 📏 Dosage Calculator (personalized recommendations)
- ⚠️ Interactions Checker (7 medication categories)
- 🖨️ Print-Friendly Herb Cards
- ✨ AI Healing Protocol Generator
- 👤 User Profile (favorites, cabinet stats, healing journal)

### Enhanced Data Fields
- 🔬 Evidence Levels (well-studied, moderate, traditional)
- 💊 Dosage Ranges (standard dosing information)
- 📅 Seasonal Availability (harvest timing)
- ⚠️ Contraindications (safety warnings per herb)

### Design
- Clean, spiritual aesthetic with natural color palette
- Floating leaf animation on home screen
- Responsive grid layouts
- Mobile-optimized (tested on iPhone/Android)
- Dark forest green theme with cream backgrounds

### Technical
- Pure HTML/CSS/JavaScript (no build process)
- LocalStorage for data persistence
- 100% offline capable
- No external dependencies
- HIPAA-friendly (all data local)

### Documentation
- Complete README with setup instructions
- Enhanced Features Guide (10 features documented)
- Mobile App Deployment Guide
- Quick Start Guide

---

## [Unreleased] - Planned Features

### Version 1.1 (Q2 2026)
- [ ] Add 50 more herbs (total 200)
- [ ] Expand interactions checker to 20+ medication types
- [ ] Add herb-herb interactions
- [ ] Implement advanced search filters (by preparation method, evidence level)
- [ ] Add herbal formulas and combinations section
- [ ] Dark mode toggle
- [ ] Export herb data as CSV
- [ ] Bookmark/share individual herb pages

### Version 2.0 (Q3 2026)
- [ ] React Native mobile app (iOS + Android)
- [ ] Optional user accounts with cloud sync
- [ ] Community features (herb reviews, user tips)
- [ ] Professional practitioner mode
- [ ] Multi-language support (Spanish, French)
- [ ] API for third-party integrations
- [ ] Advanced dosage calculator with more parameters
- [ ] Herb growing guide integration

### Version 2.1 (Q4 2026)
- [ ] Herb identification via camera
- [ ] Integration with health tracking apps
- [ ] Seasonal herb reminders
- [ ] Local herbalist directory
- [ ] Recipe/formula builder
- [ ] Print entire herb reference book

---

## Version History

### [1.0.0] - 2026-03-27
Initial public release

### [0.9.0] - 2026-03-20
Beta testing with 50 users

### [0.5.0] - 2026-03-15
Alpha version with core features

### [0.1.0] - 2026-03-01
Initial prototype with 10 sample herbs

---

## Migration Guide

### Upgrading from 0.x to 1.0

No migration needed! Version 1.0 is backward compatible with all 0.x releases.

Your LocalStorage data will automatically work:
- `rootwise_favorites` - preserved
- `rootwise_cabinet` - preserved
- `rootwise_notes` - preserved
- `rootwise_protocols_count` - preserved

---

## Breaking Changes

None in version 1.0.0

---

## Known Issues

### Version 1.0.0
- [ ] Print function doesn't work in some Firefox versions (use Chrome/Safari)
- [ ] LocalStorage may not persist in private/incognito mode
- [ ] Very long herb names may wrap awkwardly on mobile
- [ ] Search is case-sensitive (will fix in 1.1)

---

## Contributors

- **Joy Foreman** - Project Creator & Lead Developer
- Community contributors welcome!

---

## Links

- [GitHub Repository](https://github.com/yourusername/rootwise)
- [Documentation](./docs/)
- [Issues](https://github.com/yourusername/rootwise/issues)
- [Releases](https://github.com/yourusername/rootwise/releases)
