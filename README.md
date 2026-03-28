# 🌿 Rootwise - Ancestral Herbal Wisdom Platform

> *Healing carried in the roots. Wisdom passed through the blood.*

A comprehensive web and mobile platform for exploring 150+ medicinal herbs from ancestral wisdom traditions. Built with modern web technologies and designed with spiritual reverence for natural healing.

![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-web%20%7C%20mobile-orange)

---

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

Rootwise is a full-featured herbal medicine knowledge platform that provides:

- **150 Medicinal Herbs Database** - Complete with preparation methods, uses, contraindications, dosage ranges, and seasonal availability
- **Faith-Neutral Educational Content** - Practical information grounded in ancestral wisdom
- **Safety-First Design** - Herb-medication interaction checker and contraindication warnings
- **Offline-Capable** - LocalStorage-based with optional mobile app deployment
- **Beautiful UI** - Clean, modern design with spiritual elements

---

## ✨ Features

### Core Features
- 📚 **Herbal Library** - Browse, search, and filter 150+ herbs
- 🔍 **Browse by Health Condition** - Find herbs for specific ailments (11 common conditions)
- ⚖️ **Herb Comparison Tool** - Compare up to 3 herbs side-by-side
- 💊 **My Medicine Cabinet** - Track herbs you own with "What Can I Treat?" analyzer
- 📏 **Dosage Calculator** - Personalized recommendations based on weight, age, severity
- ⚠️ **Interactions Checker** - Check herb-medication conflicts (7 medication categories)
- 🖨️ **Print-Friendly Cards** - Professional herb reference cards
- ✨ **AI Healing Protocol Generator** - Get personalized herbal protocols
- 👤 **User Profile** - Track favorites, cabinet, and healing journal

### Enhanced Data Fields
- 🔬 **Evidence Ratings** - Well-studied, moderate, or traditional use
- 💊 **Dosage Ranges** - Standard dosing information
- 📅 **Seasonal Availability** - Harvest timing and availability
- ⚠️ **Contraindications** - Safety warnings per herb

---

## 🛠️ Tech Stack

### Web Version
- **Frontend:** Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Custom CSS with CSS Grid and Flexbox
- **Fonts:** Google Fonts (Crimson Pro, DM Sans)
- **Storage:** LocalStorage API
- **Icons:** Unicode Emoji

### Mobile Version (Optional)
- **Framework:** React Native + Expo
- **Navigation:** React Navigation
- **Database:** SQLite
- **Storage:** AsyncStorage

---

## 🚀 Quick Start

### Web Version

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/rootwise.git
cd rootwise
```

2. **Open in browser:**
```bash
# Simply open the HTML file
open rootwise-enhanced.html
# Or serve with a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

3. **No build process needed!** 
   - Pure HTML/CSS/JS
   - Works offline
   - No dependencies

### Mobile App Version

See [MOBILE-APP-GUIDE.md](./docs/MOBILE-APP-GUIDE.md) for complete setup instructions.

---

## 📁 Project Structure

```
rootwise/
├── README.md                           # This file
├── LICENSE
├── web/
│   ├── rootwise-enhanced.html          # Main web app (150 herbs, all features)
│   ├── rootwise-interactive.html       # Simplified version (original)
│   └── assets/
│       └── (images, if any)
├── docs/
│   ├── ENHANCED-FEATURES-GUIDE.md      # Documentation for all 10 features
│   ├── MOBILE-APP-GUIDE.md             # Mobile deployment guide
│   └── QUICK-START.md                  # Getting started guide
├── mobile/
│   └── (React Native app - optional)
└── deployment/
    └── deploy-rootwise.sh              # VPS deployment script
```

---

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

```bash
# 1. Enable GitHub Pages in repo settings
# 2. Select 'main' branch
# 3. Your app will be live at:
https://yourusername.github.io/rootwise/web/rootwise-enhanced.html
```

### Option 2: VPS Deployment

```bash
# Use the included deployment script
./deployment/deploy-rootwise.sh

# Or manual deployment to Nginx:
sudo cp web/rootwise-enhanced.html /var/www/rootwise/
sudo systemctl restart nginx
```

### Option 3: Netlify / Vercel (One-Click)

1. Fork this repo
2. Connect to Netlify/Vercel
3. Deploy with default settings
4. Done! ✅

---

## 📊 Database Schema

### Herb Object Structure
```javascript
{
  "name": "Guinea Hen Weed",
  "uses": "Immune support, cancer-fighting properties",
  "preparation": "Boil leaves and roots for tea",
  "category": "Immune Health",
  "source": {
    "name": "African-notes – American Slave Medicine",
    "visible": false
  },
  "evidenceLevel": "traditional",           // well-studied | moderate | traditional
  "dosageRange": "1-2 cups tea daily",
  "seasonalInfo": "Year-round availability",
  "contraindications": [                     // Array of strings
    "pregnancy",
    "blood thinners"
  ]
}
```

### Categories (9 Total)
- Digestive Aid (43 herbs)
- Pain Relief (23 herbs)
- Respiratory Health (17 herbs)
- Immune Health (14 herbs)
- Reproductive Health (13 herbs)
- Fever Management (11 herbs)
- Hormonal Balance (11 herbs)
- Detoxification (9 herbs)
- Circulatory Health (9 herbs)

---

## 🎨 Design System

### Color Palette
```css
--forest-dark: #1a3a26      /* Primary text, headers */
--forest-medium: #2d5a3d    /* Buttons, accents */
--sage-green: #6b9478       /* Secondary elements */
--mint-light: #a8d5ba       /* Borders, highlights */
--cream: #faf7f2            /* Background */
--earth-brown: #8b6f47      /* Taglines, quotes */
--gold-accent: #d4a574      /* Special accents */
```

### Typography
- **Display:** Crimson Pro (serif) - Headers, titles, quotes
- **Body:** DM Sans (sans-serif) - UI, body text

---

## 🔒 Privacy & Safety

### Data Handling
- **100% Local Storage** - No data sent to external servers
- **No Tracking** - No analytics, cookies, or tracking scripts
- **HIPAA-Friendly** - All data stays on user's device
- **Offline Capable** - Full functionality without internet

### Medical Disclaimer
This platform is for educational purposes only. Always consult a qualified healthcare provider before using herbs, especially if you are pregnant, nursing, taking medications, or have medical conditions.

---

## 📖 Documentation

- [Enhanced Features Guide](./docs/ENHANCED-FEATURES-GUIDE.md) - Detailed feature documentation
- [Mobile App Guide](./docs/MOBILE-APP-GUIDE.md) - Mobile deployment guide
- [Quick Start Guide](./docs/QUICK-START.md) - Getting started

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Areas for Contribution
- [ ] Add more herbs to the database
- [ ] Enhance herb data with scientific studies
- [ ] Add more medication categories to interactions checker
- [ ] Translate to other languages
- [ ] Add more health conditions
- [ ] Improve mobile responsiveness
- [ ] Add accessibility features

---

## 🗺️ Roadmap

### Version 1.1 (Q2 2026)
- [ ] Add 50 more herbs (total 200)
- [ ] Expand interactions checker to 20+ medication types
- [ ] Add herb-herb interactions
- [ ] Implement advanced search filters
- [ ] Add herbal formulas/combinations

### Version 2.0 (Q3 2026)
- [ ] React Native mobile app
- [ ] User accounts (optional cloud sync)
- [ ] Community features (reviews, tips)
- [ ] Professional practitioner mode
- [ ] API for third-party integrations

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Herb Data Sources:**
  - African-notes – American Slave Medicine
  - A Healing Grove
  - Traditional wisdom keepers
  
- **Inspiration:**
  - Ancestral healing traditions
  - Community herbalists
  - Natural medicine practitioners

---

## 📞 Contact

- **Project Maintainer:** Joy Foreman
- **Email:** j.l.foreman14@gmail.com
- **Website:** [rootwise.app](#) (coming soon)
- **Issues:** [GitHub Issues](https://github.com/yourusername/rootwise/issues)

---

## ⭐ Support This Project

If you find Rootwise helpful, please:
- ⭐ Star this repository
- 🐛 Report bugs
- 💡 Suggest features
- 📢 Share with others
- 🤝 Contribute code or herb data

---

**Built with 🌿 and ancestral wisdom**

*"He causeth the grass to grow for the cattle, and herb for the service of man: that he may bring forth food out of the earth" - Psalm 104:14*
