# Ishan Zatey - Portfolio Website

A modern, minimalist, and interactive portfolio website inspired by Apple's design principles. Built with pure HTML, CSS, and JavaScript for optimal performance and beautiful user experience.

## ✨ Features

### 🎨 **Design & Aesthetics**
- **Apple-inspired minimalist design** with clean typography and spacing
- **Glassmorphism effects** with backdrop blur and transparency
- **Smooth color palette** using CSS custom properties
- **Responsive design** that works perfectly on all devices
- **Custom scrollbar** with subtle styling

### 🚀 **Interactive Elements**
- **Smooth scrolling navigation** with animated underlines
- **Reveal animations** using Intersection Observer API
- **Parallax scrolling effects** for immersive experience
- **Hover animations** on cards and interactive elements
- **Staggered animations** for project cards
- **Typing effect** on the hero title

### 📱 **User Experience**
- **Fixed navigation header** with scroll effects
- **Scroll indicator** with animated mouse icon
- **Smooth transitions** using CSS cubic-bezier curves
- **Progressive disclosure** of content as users scroll
- **Touch-friendly interactions** for mobile devices

### 🎯 **Performance & Accessibility**
- **Pure HTML/CSS/JS** - no external dependencies
- **Optimized animations** with hardware acceleration
- **Semantic HTML structure** for better accessibility
- **Responsive images and layouts** for all screen sizes
- **Fast loading** with minimal external resources

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with custom properties and animations
- **JavaScript (ES6+)** - Interactive functionality and animations
- **Google Fonts** - Inter font family for optimal readability
- **CSS Grid & Flexbox** - Modern layout techniques

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or package managers required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Local Development
```bash
# If you have Python installed
python -m http.server 8000

# If you have Node.js installed
npx serve .

# If you have PHP installed
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── README.md           # This documentation file
└── .gitignore          # Git ignore file (if using version control)
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit the `:root` section in the CSS:

```css
:root {
  --primary-color: #007AFF;      /* Main brand color */
  --secondary-color: #5856D6;    /* Secondary accent */
  --accent-color: #FF2D92;       /* Highlight color */
  --text-primary: #1D1D1F;       /* Main text color */
  --text-secondary: #86868B;     /* Secondary text */
  /* ... more variables */
}
```

### Content
- **Personal Information**: Update the hero section, about section, and contact details
- **Projects**: Modify the project cards in the projects section
- **Skills**: Add or remove technology tags in the tech-stack sections

### Styling
- **Typography**: Change fonts by updating the Google Fonts link
- **Spacing**: Adjust padding and margins using the CSS variables
- **Animations**: Modify transition durations and easing functions

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed automatically
3. Custom domain can be configured in the settings

### AWS S3 (Static Hosting)
1. Create an S3 bucket with static website hosting enabled
2. Upload your files to the bucket
3. Configure bucket policy for public read access
4. Access your site via the S3 website endpoint

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Get a custom domain and SSL certificate

## 📱 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new `<section>` element
2. Add the `reveal` class for animation
3. Style using the existing CSS patterns
4. Add to the navigation if needed

### Custom Animations
```css
@keyframes customAnimation {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

.custom-element {
  animation: customAnimation 0.8s ease-out;
}
```

### Performance Optimization
- Use `will-change` CSS property for elements with animations
- Implement lazy loading for images if adding more content
- Consider using `requestAnimationFrame` for complex animations

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, consider submitting a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Apple** for design inspiration
- **Inter font family** by Google Fonts
- **CSS Grid and Flexbox** for modern layouts
- **Intersection Observer API** for scroll animations

---

**Built with ❤️ by Ishan Zatey**

For questions or support, reach out at [ishaan.zate@gmail.com](mailto:ishaan.zate@gmail.com)
