# 🎯 How to Share Your Wordle Clone

## 🌐 Online Hosting (Recommended)

### GitHub Pages (Free & Popular)
1. **Create GitHub account** at github.com
2. **Create new repository** named "wordle-clone"
3. **Upload files**: `index.html`, `style.css`, `script.js`, `README.md`
4. **Enable Pages**: Go to Settings → Pages → Deploy from main branch
5. **Share URL**: `https://yourusername.github.io/wordle-clone`

### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. **Drag & drop** your WORDLE folder
3. **Get instant URL** to share
4. Optional: Customize domain name

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. **Import project** or upload folder
3. **Deploy instantly**
4. Share the generated URL

## 💻 Local Sharing

### Option 1: Share Files
- **Zip the folder** and send to friends
- They **download and open** `index.html`
- **Works offline** - no internet needed!

### Option 2: Local Server
**For friends on same WiFi network:**

1. **Run the server:**
   ```bash
   python3 serve.py
   ```

2. **Share the Network URL** with friends
   - Example: `http://192.168.1.100:8000`

3. **Friends can play** from their devices on same WiFi

## 📱 Mobile Sharing

### QR Code Generator
1. Get your game URL (from any hosting option above)
2. Generate QR code at [qr-code-generator.com](https://qr-code-generator.com)
3. Friends scan QR code to play instantly!

## 🎮 Social Media Sharing

**Caption ideas:**
- "Just built a Wordle clone with word meanings! 🎯 Try it: [your-url]"
- "Challenge: Can you beat my Wordle clone? It shows word definitions too! 📖"

## 🔧 Customization for Sharing

**Before sharing, you might want to:**
- Remove console.log statements (for production)
- Add your name/credits
- Customize the title
- Add more words to the word list

**Quick production cleanup:**
