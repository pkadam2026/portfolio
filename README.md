# Prashant Kadam - Professional Portfolio

A modern, responsive portfolio website inspired by ruv.io's design. Built with HTML, CSS, and JavaScript.

## Features

✨ **Modern Design**
- Dark theme with blue accent colors
- Inspired by ruv.io professional aesthetic
- Smooth animations and transitions
- Fully responsive for all devices

📱 **Responsive Layout**
- Mobile-first design
- Adapts to all screen sizes
- Touch-friendly navigation

🎨 **Interactive Elements**
- Smooth scrolling navigation
- Hover effects and animations
- Terminal effect in hero section
- Intersection Observer for scroll animations

## Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # Styling and responsive design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## Sections

1. **Navigation Bar** - Sticky header with smooth navigation links
2. **Hero Section** - Eye-catching introduction with call-to-action buttons
3. **About** - Personal introduction and professional background
4. **Featured Projects** - Showcase of key projects with technologies used
5. **Skills** - Technical skills organized by category
6. **Experience** - Timeline of professional experience
7. **Contact** - Links to email, GitHub, LinkedIn, and social profiles
8. **Footer** - Copyright information

## Customization Guide

### 1. Update Personal Information

**In `index.html`:**

#### Hero Section (Line 32-40)
```html
<h1>
    <span class="highlight">Prashant Kadam</span>
</h1>
<p class="role">Full Stack Developer | Software Engineer | Tech Innovator</p>
<p class="description">Building innovative solutions with modern technologies</p>
```
- Replace "Prashant Kadam" with your name
- Update the role and description

#### About Section (Line 57-61)
Replace placeholder text with your actual background and expertise.

### 2. Add Your Projects

**In `index.html`, Projects Section (Line 76-129):**

Replace the three template project cards with your actual projects:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Name</h3>
    </div>
    <p class="project-description">Project description goes here</p>
    <div class="project-tech">
        <span class="tech-tag">Technology1</span>
        <span class="tech-tag">Technology2</span>
        <span class="tech-tag">Technology3</span>
    </div>
    <a href="https://your-project-link.com" class="project-link">View Project →</a>
</div>
```

### 3. Update Skills

**In `index.html`, Skills Section (Line 145-181):**

Update the skill categories and items to match your expertise:

```html
<div class="skill-category">
    <h3>Your Skill Category</h3>
    <div class="skill-list">
        <span class="skill-item">Skill 1</span>
        <span class="skill-item">Skill 2</span>
        <span class="skill-item">Skill 3</span>
    </div>
</div>
```

### 4. Update Experience

**In `index.html`, Experience Section (Line 192-229):**

Replace with your actual work experience:

```html
<div class="experience-item">
    <div class="experience-date">YYYY - YYYY</div>
    <div class="experience-content">
        <h3>Job Title</h3>
        <p class="company">Company Name</p>
        <p>Description of responsibilities and achievements</p>
    </div>
</div>
```

### 5. Update Contact Links

**In `index.html`, Contact Section (Line 244-267):**

Update the contact links with your actual information:

```html
<a href="mailto:your.email@example.com" class="contact-link">
    <span class="link-icon">📧</span>
    <span>Email</span>
</a>
<a href="https://github.com/your-username" target="_blank" class="contact-link">
    <span class="link-icon">💻</span>
    <span>GitHub</span>
</a>
```

### 6. Update Color Scheme (Optional)

**In `styles.css`, CSS Variables (Line 13-21):**

```css
:root {
    --primary-color: #0f172a;
    --secondary-color: #1e293b;
    --accent-color: #3b82f6;
    --accent-light: #60a5fa;
    --text-primary: #e2e8f0;
    --text-secondary: #cbd5e1;
}
```

Change these hex colors to customize the entire color scheme.

## How to Use

### 1. Open in Browser
Simply open `index.html` in your web browser to view the portfolio.

### 2. Live Server (Recommended)
For better development experience, use VS Code's Live Server extension:
- Right-click on `index.html`
- Select "Open with Live Server"

### 3. Deploy

#### GitHub Pages
1. Push to a GitHub repository
2. Go to Settings → Pages
3. Set source to main branch
4. Portfolio will be live at `https://username.github.io/repo-name`

#### Netlify
1. Drag and drop the portfolio folder to Netlify
2. Get an instant live URL

#### Vercel
Similar to Netlify - just upload or connect your GitHub repo

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (Vanilla)** - Interactive features and animations
- **Responsive Design** - Mobile-first approach

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- ✓ Optimized animations with CSS transforms
- ✓ Lazy loading with Intersection Observer
- ✓ Minimal JavaScript for fast load times
- ✓ Mobile-optimized media queries
- ✓ CSS Grid and Flexbox for efficient layouts

## Customization Tips

1. **Add a profile image**: Add an `<img>` tag in the hero section
2. **Add more projects**: Duplicate project card HTML
3. **Change fonts**: Update the `font-family` in CSS
4. **Add dark/light mode toggle**: Use CSS custom properties (already set up)
5. **Add resume download button**: Add a `<a>` link in the hero CTA buttons

## File Sizes

- `index.html` - ~10 KB
- `styles.css` - ~15 KB
- `script.js` - ~4 KB
- **Total** - ~29 KB (extremely lightweight!)

## Future Enhancements

- Blog section for articles
- Testimonials/Reviews section
- Photography/Case studies gallery
- Interactive code projects
- Analytics integration

## License

Feel free to use this portfolio template for your personal or professional use.

## Support

For questions or issues, refer to the code comments in:
- `index.html` for structure
- `styles.css` for styling
- `script.js` for interactions

---

**Last Updated:** February 2026

**Created by:** GitHub Copilot
