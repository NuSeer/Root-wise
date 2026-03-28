# 📦 GITHUB UPLOAD INSTRUCTIONS

Complete guide to uploading Rootwise to GitHub and going live.

---

## 🎯 What You'll Get

- ✅ Version-controlled code
- ✅ Free hosting on GitHub Pages
- ✅ Collaboration tools
- ✅ Issue tracking
- ✅ Professional portfolio piece

---

## 🚀 STEP-BY-STEP GUIDE

### Step 1: Install Git (If Needed)

**Mac:**
```bash
# Check if installed
git --version

# If not installed, download from:
# https://git-scm.com/download/mac
```

**Windows:**
```bash
# Download from:
# https://git-scm.com/download/win
```

**Linux:**
```bash
sudo apt-get install git
```

---

### Step 2: Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

### Step 3: Create GitHub Repository

1. Go to https://github.com
2. Click "+" → "New repository"
3. Fill in details:
   - **Name:** `rootwise`
   - **Description:** "Ancestral herbal wisdom platform - 150 medicinal herbs"
   - **Public** (recommended) or Private
   - **✅ Add README** - Uncheck (we have our own)
   - **License:** MIT License

4. Click "Create repository"

---

### Step 4: Organize Your Files

Create this folder structure:

```
rootwise/
├── README.md                    ← Main documentation
├── LICENSE                      ← MIT License
├── CHANGELOG.md                 ← Version history
├── CONTRIBUTING.md              ← Contribution guide
├── QUICK-START.md               ← Quick setup
├── .gitignore                   ← Git ignore rules
├── rootwise-enhanced.html       ← Main app file
├── rootwise-interactive.html    ← Simplified version
└── docs/
    ├── ENHANCED-FEATURES-GUIDE.md
    ├── MOBILE-APP-GUIDE.md
    └── ROOTWISE-DOCUMENTATION.md
```

---

### Step 5: Initialize Git Locally

```bash
# Navigate to your project folder
cd /path/to/rootwise

# Initialize git
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Rootwise v1.0.0 with 150 herbs"
```

---

### Step 6: Connect to GitHub

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/rootwise.git

# Verify
git remote -v
```

---

### Step 7: Push to GitHub

```bash
# Push your code
git push -u origin main

# Or if you're on 'master' branch:
git branch -M main
git push -u origin main
```

---

### Step 8: Enable GitHub Pages

1. Go to your repo: `https://github.com/YOUR_USERNAME/rootwise`
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

**Your app will be live at:**
```
https://YOUR_USERNAME.github.io/rootwise/rootwise-enhanced.html
```

---

## 🎨 OPTIONAL: Custom Domain

### Using Your Own Domain

1. **Buy a domain** (Namecheap, Google Domains, etc.)
   - Example: `rootwise.app`

2. **Add DNS records** at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

3. **In GitHub Settings → Pages:**
   - Enter your custom domain
   - ✅ Enforce HTTPS
   - Wait 24-48 hours for DNS propagation

**Result:** Your app at `https://rootwise.app` 🎉

---

## 📂 RECOMMENDED REPOSITORY STRUCTURE

```
rootwise/
│
├── 📄 README.md              ← Repository overview (what you just created)
├── 📄 LICENSE                ← MIT License
├── 📄 CHANGELOG.md           ← Version history
├── 📄 CONTRIBUTING.md        ← How to contribute
├── 📄 QUICK-START.md         ← 5-minute setup guide
├── 📄 .gitignore             ← Files to ignore
│
├── 🌐 rootwise-enhanced.html     ← MAIN APP (150 herbs, all features)
├── 🌐 rootwise-interactive.html  ← Simplified version
│
├── 📁 docs/                  ← Documentation folder
│   ├── ENHANCED-FEATURES-GUIDE.md
│   ├── MOBILE-APP-GUIDE.md
│   └── ROOTWISE-DOCUMENTATION.md
│
├── 📁 assets/                ← Images, icons (if you add them)
│   ├── icon.png
│   └── screenshots/
│
└── 📁 mobile/                ← React Native app (future)
    └── (mobile app files)
```

---

## 🔄 DAILY WORKFLOW

### Making Changes

```bash
# 1. Check status
git status

# 2. Add changes
git add .

# 3. Commit with message
git commit -m "feat: add 10 new herbs to database"

# 4. Push to GitHub
git push

# Changes go live automatically via GitHub Pages!
```

### Best Practices

- **Commit often** - Small, focused commits
- **Clear messages** - Describe what changed
- **Test first** - Make sure it works before pushing
- **Update CHANGELOG** - Document new features

---

## 🏷️ CREATING RELEASES

### Tag a Version

```bash
# Create and push a tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### Create GitHub Release

1. Go to **Releases** on GitHub
2. Click **Draft a new release**
3. Tag: `v1.0.0`
4. Title: `Rootwise v1.0.0 - Initial Release`
5. Description: Copy from CHANGELOG.md
6. Attach files (optional): ZIP of source code
7. Click **Publish release**

---

## 📊 REPOSITORY SETTINGS

### Recommended Settings

**General:**
- ✅ Issues
- ✅ Discussions (optional - for community)
- ✅ Projects (optional - for roadmap)
- ❌ Wiki (use docs/ folder instead)

**Branches:**
- Protected branch: `main`
- Require pull request reviews
- Require status checks

**GitHub Actions:**
- Optional: Auto-deploy on push
- Optional: Run tests
- Optional: Generate documentation

---

## 🎯 MAKING YOUR REPO DISCOVERABLE

### Add Topics

In repo settings, add topics:
- `herbal-medicine`
- `natural-remedies`
- `medicinal-herbs`
- `herbalism`
- `healthcare`
- `wellness`
- `plant-medicine`
- `html`
- `javascript`
- `css`

### Add Description

Short description under repo name:
```
🌿 Rootwise - Explore 150+ medicinal herbs with ancestral wisdom. 
Includes dosage calculator, safety checker, and herb comparison tools.
```

### Add Website URL

Link to your GitHub Pages:
```
https://YOUR_USERNAME.github.io/rootwise/rootwise-enhanced.html
```

---

## 🌟 PROMOTING YOUR PROJECT

### README Badges

Add to top of README.md:
```markdown
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/rootwise)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/rootwise)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/rootwise)
![License](https://img.shields.io/github/license/YOUR_USERNAME/rootwise)
```

### Share On

- Twitter/X
- Reddit (r/herbalism, r/webdev)
- Product Hunt
- Hacker News
- LinkedIn
- Instagram
- TikTok

### Ask for Stars

Add to README:
```markdown
⭐ If you find Rootwise helpful, please star this repository!
```

---

## 🐛 ISSUE TEMPLATES

Create `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Report a bug
---

**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Browser/Device**
- Browser: [e.g. Chrome, Safari]
- Device: [e.g. iPhone 12, Desktop]
```

---

## 📈 ANALYTICS (Optional)

### Add Google Analytics

In `rootwise-enhanced.html`, before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Track Events

```javascript
// Track herb searches
gtag('event', 'herb_search', {
  'search_term': searchQuery
});

// Track favorites
gtag('event', 'add_favorite', {
  'herb_name': herbName
});
```

---

## ✅ POST-UPLOAD CHECKLIST

- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] README looks good on GitHub
- [ ] LICENSE file present
- [ ] Live URL works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Links in README work
- [ ] Topics added
- [ ] Description added
- [ ] Repository public (if desired)

---

## 🎉 YOU'RE LIVE!

Your Rootwise platform is now:
- ✅ Hosted on GitHub
- ✅ Live on the internet
- ✅ Version controlled
- ✅ Ready for contributors
- ✅ Shareable with portfolio link

**Share your link:**
```
https://YOUR_USERNAME.github.io/rootwise/rootwise-enhanced.html
```

---

## 📞 SUPPORT

**Issues with Git/GitHub?**
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [GitHub Community](https://github.community)

**Issues with Rootwise?**
- Open an issue on your repo
- Email: j.l.foreman14@gmail.com

---

**Congratulations! Rootwise is now on GitHub!** 🌿🎉
