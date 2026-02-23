document.addEventListener('DOMContentLoaded', () => {
    // 1. Counter Animation
    const counter = document.getElementById('counter');
    const target = 357000;
    let current = 0;
    const increment = target / 60;

    const updateCounter = () => {
        if (current < target) {
            current += increment;
            counter.innerText = Math.floor(current).toLocaleString();
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };
    updateCounter();

    // 2. Donation Feed
    const feed = document.getElementById('donation-feed');
    const logs = [
        { name: "Anonymous Donor", amount: "$85" },
        { name: "Anonymous Donor", amount: "$104" },
        { name: "Anonymous Donor", amount: "$793" },
        { name: "Anonymous Donor", amount: "$500" }
    ];

    logs.forEach(don => {
        const div = document.createElement('div');
        div.className = 'feed-row';
        div.innerHTML = `
            <div class="donor-box">
                <i class="fas fa-user-circle"></i>
                <div style="text-align:left">
                    <strong>${don.name}</strong><br>
                    <small>${don.amount}</small>
                </div>
            </div>
            <button class="btn btn-donate" style="padding: 5px 12px; font-size: 0.75rem">Donate Now</button>
        `;
        feed.appendChild(div);
    });
});
// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate an API call
        formStatus.innerText = "Sending your message...";
        formStatus.className = "form-status";

        setTimeout(() => {
            formStatus.innerText = "Message sent successfully! We will get back to you shortly.";
            formStatus.classList.add("status-success");
            contactForm.reset();
        }, 1500);
    });
}
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// Close menu when a link is clicked (Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});
function navigateTo(pageId) {
    const loader = document.getElementById('loader');
    
    // 1. Show Loader
    loader.style.display = 'flex';

    // 2. Short delay to simulate "loading" and allow transition
    setTimeout(() => {
        // Hide all page sections
        const sections = document.querySelectorAll('.page-section');
        sections.forEach(section => section.style.display = 'none');

        // Show requested section
        const activePage = document.getElementById(pageId + '-page');
        if (activePage) {
            activePage.style.display = 'block';
            window.scrollTo(0, 0);
        }

        // Hide mobile menu
        document.getElementById('navLinks').classList.remove('active');

        // 3. Hide Loader
        loader.style.display = 'none';
        
        // Re-initialize home-specific animations (like the counter)
        if (pageId === 'home') {
            initCounter(); 
        }
    }, 400); // 400ms is the perfect "snappy" delay
}

function initCounter() {
    // Re-trigger the counter animation logic we built earlier
    const counter = document.getElementById('counter');
    if (counter) {
        counter.innerText = "0";
        // Call your countUp function here...
    }
}