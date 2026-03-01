// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(59, 130, 246, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and experience items
document.querySelectorAll('.project-card, .experience-item, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add interactive terminal effect to hero section (optional)
const addTerminalEffect = () => {
    const hero = document.querySelector('.hero');
    const terminal = document.createElement('div');
    terminal.className = 'terminal-effect';
    terminal.style.cssText = `
        position: absolute;
        bottom: 20px;
        left: 20px;
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        padding: 1rem;
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
        color: #60a5fa;
        max-width: 300px;
        backdrop-filter: blur(10px);
    `;
    
    const lines = [
        '$ whoami',
        'Prashant Kadam',
        '$ cat skills',
        'Full Stack Developer | AI Enthusiast',
        '$ ./build success ✓'
    ];
    
    let content = '';
    lines.forEach((line, index) => {
        setTimeout(() => {
            content += line + '<br>';
            terminal.innerHTML = content;
        }, index * 300);
    });
    
    // Only add on larger screens
    if (window.innerWidth > 768) {
        hero.appendChild(terminal);
    }
};

// Call terminal effect when page loads
window.addEventListener('load', addTerminalEffect);

// Form interaction (if contact form is added later)
const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add your form submission logic here
};

// Mobile menu toggle (if needed for smaller screens)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const navbar = document.querySelector('.navbar .container');
        const menuBtn = document.createElement('button');
        menuBtn.innerHTML = '☰';
        menuBtn.style.cssText = `
            background: none;
            border: none;
            color: #60a5fa;
            font-size: 1.5rem;
            cursor: pointer;
        `;
        
        menuBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    createMobileMenu();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// Project modal logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalDetails = modal.querySelector('.modal-details');
    const modalTech = modal.querySelector('.modal-tech');
    const modalVisit = modal.querySelector('.modal-visit');

    const openModal = (card, trigger) => {
        const titleEl = card.querySelector('.project-header h3');
        const descEl = card.querySelector('.project-description');
        const techEls = card.querySelectorAll('.tech-tag');

        const datasetTitle = trigger && trigger.dataset && trigger.dataset.modalTitle;
        const datasetDesc = trigger && trigger.dataset && trigger.dataset.modalDescription;
        modalTitle.textContent = datasetTitle || (titleEl ? titleEl.textContent : 'Project');
        modalDescription.textContent = datasetDesc || (descEl ? descEl.textContent : '');
        modalTech.innerHTML = '';
        techEls.forEach(t => {
            const span = document.createElement('span');
            span.className = 'tech-tag';
            span.textContent = t.textContent;
            modalTech.appendChild(span);
        });

        // Populate modal details list (from data attribute or hidden .project-details list)
        if (modalDetails) {
            modalDetails.innerHTML = '';
            const raw = trigger && trigger.dataset && trigger.dataset.modalDetails;
            if (raw) {
                // Support newline or '||' separators
                const items = raw.split(/\n|\|\|/).map(s => s.trim()).filter(Boolean);
                items.forEach(it => {
                    const li = document.createElement('li');
                    li.textContent = it;
                    modalDetails.appendChild(li);
                });
                modalDetails.style.display = items.length ? '' : 'none';
            } else {
                const cardList = card.querySelector('.project-details');
                if (cardList) {
                    // Clone existing list items
                    cardList.querySelectorAll('li').forEach(li => {
                        const copy = document.createElement('li');
                        copy.textContent = li.textContent;
                        modalDetails.appendChild(copy);
                    });
                    modalDetails.style.display = modalDetails.children.length ? '' : 'none';
                } else {
                    modalDetails.style.display = 'none';
                }
            }
        }

        // Optionally set visit link if provided on the card
        const datasetUrl = trigger && trigger.dataset && (trigger.dataset.url || trigger.dataset.modalUrl);
        const visitLink = datasetUrl || (card.querySelector('.project-link[data-url]') || {}).dataset?.url;
        if (visitLink) {
            modalVisit.href = datasetUrl || visitLink;
            modalVisit.style.display = 'inline-block';
        } else {
            modalVisit.href = '#';
            modalVisit.style.display = 'none';
        }

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    // Attach click handlers to project links
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const card = link.closest('.project-card');
            if (!card) return;
            openModal(card, link);
        });
    });

    // Close via overlay or close button
    modal.addEventListener('click', (e) => {
        if (e.target.matches('[data-close]') || e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
});
