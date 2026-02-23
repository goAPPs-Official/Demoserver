function navigateTo(pageId) {
    // 1. Hide all page sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 2. Show the requested section
    const activePage = document.getElementById(pageId + '-page');
    if (activePage) {
        activePage.style.display = 'block';
        window.scrollTo(0, 0); // Reset scroll to top
    }

    // 3. Close mobile menu if open
    document.getElementById('navLinks').classList.remove('active');
}

// Ensure the counter still runs when switching to Home
function initHome() {
    // Re-trigger your counter and feed logic here 
    // if the user navigates back to 'home'
}

// Initializing specific Page Logic
document.addEventListener('DOMContentLoaded', () => {
    // Start at home
    navigateTo('home');
});                </div>
            </div>
            <button class="btn btn-donate" style="padding: 5px 12px; font-size: 0.75rem">Donate Now</button>
        `;
        feed.appendChild(div);
    });
});
