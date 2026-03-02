# 🚀 Quick Deploy to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages in under 5 minutes!

## Step 1: Configure Astro (2 minutes)

Edit `astro.config.mjs` and update these values:

```javascript
export default defineConfig({
    // Replace <your-username> with your GitHub username
    // Replace 'portfolio' with your repository name
    site: 'https://<your-username>.github.io/portfolio',
    
    // Keep this line if repo name is NOT your username.github.io
    base: '/portfolio',
    
    integrations: [tailwind()],
});
```

**Two deployment options:**

### Option A: User Pages (username.github.io)
- Repository: `username.github.io`
- Set `site`: `https://username.github.io`
- Remove `base` line
- URL: `https://username.github.io`

### Option B: Project Pages (username.github.io/portfolio)
- Repository: Any name (e.g., `portfolio`)
- Set `site`: `https://username.github.io/portfolio`
- Keep `base: '/portfolio'`
- URL: `https://username.github.io/portfolio`

## Step 2: Create GitHub Repository (1 minute)

```bash
# Go to github.com → New Repository
# Name: portfolio (or any name you want)
# Public: ✓ Yes
# Click: Create repository
```

## Step 3: Push to GitHub (2 minutes)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio with Aceternity UI"

# Set main branch
git branch -M main

# Add remote (replace <username> and <repo-name>)
git remote add origin https://github.com/<username>/<repo-name>.git

# Push to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages (30 seconds)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** (left sidebar)
4. Under **Build and deployment**, click **Configure**
5. Set **Source** to **GitHub Actions**
6. Click **Save**

## Step 5: Wait for Deploy! (2-3 minutes)

1. Click **Actions** tab
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait for green ✓ checkmark
4. Click on workflow run → find deployment URL

**Your site is live! 🎉**

---

## 📋 Before You Deploy Checklist

- [ ] Updated `astro.config.mjs` with correct `site` and `base`
- [ ] Repository is created on GitHub
- [ ] Repository is **Public**
- [ ] All changes are committed and pushed
- [ ] GitHub Pages is enabled in settings

## 🔗 Common GitHub Pages URLs

| Repository Name | astro.config.mjs site | astro.config.mjs base | Final URL |
|----------------|----------------------|----------------------|-----------|
| `username.github.io` | `https://username.github.io` | (none) | `https://username.github.io` |
| `portfolio` | `https://username.github.io/portfolio` | `/portfolio` | `https://username.github.io/portfolio` |
| `my-site` | `https://username.github.io/my-site` | `/my-site` | `https://username.github.io/my-site` |

## 🔄 Future Updates

Just push to main branch!

```bash
git add .
git commit -m "Update content"
git push origin main
```

Automatic deployment will happen! ✨

## ❓ Troubleshooting

### Workflow didn't trigger?
- Make sure you pushed to `main` branch
- Check that `.github/workflows/deploy.yml` exists

### Site not loading?
- Wait 2-5 minutes for GitHub Pages to deploy
- Check Actions tab for build errors
- Clear browser cache

### 404 error?
- Verify `base` in `astro.config.mjs` matches your repo name
- Make sure repository is public

---

**Need more details?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete guide.

**Happy deploying! 🚀**