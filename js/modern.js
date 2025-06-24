document.addEventListener('DOMContentLoaded', function() {
    // Progress bar
    window.addEventListener('scroll', function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        toggleMobileMenuIcon();
    });

    function toggleMobileMenuIcon() {
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }

    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            toggleMobileMenuIcon();
        });
    });

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skills when scrolled into view
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Intersection Observer for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    skillItems.forEach(item => {
        observer.observe(item);
    });

    // Navbar scroll behavior
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.padding = '1rem 0';
        }
        
        lastScrollTop = scrollTop;
    });

    // Floating arrow for client-section
    const clientSection = document.querySelector('.client-section');
    const clientCards = document.querySelectorAll('.client-card');
    const arrow = document.getElementById('nextClientArrow');

    function isInClientSection() {
        const rect = clientSection.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function getCurrentCardIndex() {
        let index = 0;
        for (let i = 0; i < clientCards.length; i++) {
            const rect = clientCards[i].getBoundingClientRect();
            if (rect.top - 100 > 0) {
                break;
            }
            index = i;
        }
        return index;
    }

    function updateArrowVisibility() {
        if (isInClientSection()) {
            const idx = getCurrentCardIndex();
            if (idx < clientCards.length - 1) {
                arrow.classList.add('visible');
            } else {
                arrow.classList.remove('visible');
            }
        } else {
            arrow.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', updateArrowVisibility);
    window.addEventListener('resize', updateArrowVisibility);
    updateArrowVisibility();

    arrow.addEventListener('click', function() {
        const idx = getCurrentCardIndex();
        if (idx < clientCards.length - 1) {
            const nextCard = clientCards[idx + 1];
            const offset = nextCard.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    });
});
