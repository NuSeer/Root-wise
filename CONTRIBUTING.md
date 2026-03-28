# Contributing to Rootwise 🌿

Thank you for considering contributing to Rootwise! We welcome contributions from herbalists, developers, designers, and anyone passionate about natural healing.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Submitting Changes](#submitting-changes)

---

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of experience level, background, or identity.

### Expected Behavior

- Be respectful and constructive in all interactions
- Focus on what is best for the community and the project
- Show empathy towards other community members
- Accept constructive criticism gracefully

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Trolling, insulting, or derogatory language
- Publishing others' private information
- Any conduct that would be inappropriate in a professional setting

---

## 🤝 How Can I Contribute?

### 1. Reporting Bugs 🐛

Found a bug? Please open an issue with:

- **Clear title** - Describe the issue in one line
- **Steps to reproduce** - How can we recreate the bug?
- **Expected behavior** - What should happen?
- **Actual behavior** - What actually happens?
- **Screenshots** - If applicable
- **Browser/Device** - What you're using

### 2. Suggesting Features 💡

Have an idea? Open an issue with:

- **Feature description** - What do you want to add?
- **Use case** - Why is this needed?
- **Proposed solution** - How might it work?
- **Alternatives** - Any other approaches considered?

### 3. Adding Herbs 🌿

**Most Needed Contribution!**

We need help expanding the herb database with:

- Accurate preparation methods
- Dosage information (with sources)
- Evidence levels (scientific studies)
- Contraindications and safety warnings
- Seasonal availability
- Traditional uses

**Format:**
```javascript
{
  "name": "Herb Name",
  "uses": "Primary health benefits",
  "preparation": "How to prepare (tea, tincture, etc.)",
  "category": "One of 9 existing categories",
  "source": {
    "name": "Source name",
    "visible": false
  },
  "evidenceLevel": "well-studied" | "moderate" | "traditional",
  "dosageRange": "Standard dosing info",
  "seasonalInfo": "When to harvest/availability",
  "contraindications": ["pregnancy", "condition", "medication"]
}
```

### 4. Improving Documentation 📚

Help make Rootwise easier to use:

- Fix typos or unclear instructions
- Add examples or screenshots
- Translate to other languages
- Write tutorials or guides

### 5. Code Contributions 💻

Areas we need help:

- **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- **Performance** - Optimize search, lazy loading, caching
- **Mobile** - Improve responsive design, touch interactions
- **Features** - Implement items from the roadmap
- **Testing** - Write tests, fix bugs
- **Refactoring** - Improve code quality

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Text editor (VS Code, Sublime, etc.)
- Basic knowledge of HTML/CSS/JavaScript
- (Optional) Git and GitHub account

### Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/rootwise.git
   cd rootwise
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Edit `rootwise-enhanced.html`
   - Test thoroughly
   - Document your changes

5. **Test locally**
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

---

## 🔧 Development Workflow

### File Structure

```
rootwise/
├── rootwise-enhanced.html      # Main file - edit this
├── README.md
├── LICENSE
├── CHANGELOG.md
└── docs/
    ├── ENHANCED-FEATURES-GUIDE.md
    ├── MOBILE-APP-GUIDE.md
    └── QUICK-START.md
```

### Making Changes

1. **Test before committing**
   - Open in multiple browsers (Chrome, Firefox, Safari)
   - Test on mobile device or emulator
   - Check console for errors
   - Verify LocalStorage persists

2. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new herb - Echinacea"
   ```

3. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request**
   - Go to original repo on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out PR template

---

## 🎨 Style Guidelines

### Code Style

**HTML:**
```html
<!-- Use semantic HTML -->
<section class="herb-card">
  <h3 class="herb-name">Chamomile</h3>
  <p class="herb-uses">Calming, sleep aid</p>
</section>

<!-- Indent with 2 or 4 spaces (consistent) -->
<!-- Use double quotes for attributes -->
<!-- Keep lines under 100 characters when possible -->
```

**CSS:**
```css
/* Use CSS custom properties for colors */
:root {
  --forest-dark: #1a3a26;
}

/* Name classes descriptively */
.herb-card {
  background: var(--forest-dark);
}

/* Group related styles */
/* Mobile-first approach */
```

**JavaScript:**
```javascript
// Use clear, descriptive names
function renderHerbsGrid(herbs) {
  // Implementation
}

// Add comments for complex logic
// Use const/let, not var
// Prefer template literals
const html = `<div class="herb">${herb.name}</div>`;
```

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new herb comparison feature
fix: resolve LocalStorage bug in Safari
docs: update README with deployment instructions
style: improve mobile responsiveness
refactor: simplify search function
test: add herb database validation
chore: update dependencies
```

### Documentation Style

- Use clear, simple language
- Include code examples
- Add screenshots when helpful
- Keep formatting consistent
- Use emoji sparingly and consistently

---

## 📤 Submitting Changes

### Pull Request Checklist

Before submitting, ensure:

- [ ] Code works in Chrome, Firefox, Safari
- [ ] Tested on mobile device
- [ ] No console errors
- [ ] LocalStorage persists correctly
- [ ] Documentation updated (if needed)
- [ ] CHANGELOG.md updated
- [ ] Follows code style guidelines
- [ ] Commit messages are clear
- [ ] Branch is up to date with main

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update
- [ ] Herb data addition

## How Has This Been Tested?
Describe your testing process

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
- [ ] Tested on mobile
```

---

## 🌿 Adding Herb Data

### Research Guidelines

When adding herbs, please:

1. **Verify Information**
   - Use reputable sources
   - Cross-reference multiple sources
   - Cite scientific studies when available

2. **Include Safety Information**
   - All known contraindications
   - Drug interactions
   - Pregnancy/nursing warnings
   - Dosage limits

3. **Be Conservative**
   - When in doubt, mark as "traditional" evidence
   - Include warnings rather than omit
   - Link to authoritative sources

### Recommended Sources

- PubMed / medical journals
- American Botanical Council
- WHO monographs
- Traditional herbal texts
- University herbarium databases

---

## ❓ Questions?

- Open an issue for questions
- Email: j.l.foreman14@gmail.com
- Check existing issues and PRs first

---

## 🙏 Recognition

All contributors will be:
- Listed in CHANGELOG.md
- Credited in README.md
- Thanked in release notes

Significant contributors may receive:
- Co-maintainer status
- Premium app access
- Special recognition

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping make ancestral herbal wisdom accessible to all!** 🌿✨
