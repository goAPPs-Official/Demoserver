// Sidebar Toggle Logic
function toggleSidebar(show) {
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('sidebar-overlay');
    if (show) {
        menu.classList.add('active');
        overlay.style.display = 'block';
    } else {
        menu.classList.remove('active');
        overlay.style.display = 'none';
    }
}

// Navigation Router with Auto-Hide Side Menu
function navigateTo(pageId) {
    // 1. Auto-hide menu if navigating
    toggleSidebar(false);
    
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    setTimeout(() => {
        document.querySelectorAll('.page-section').forEach(p => p.style.display = 'none');
        document.getElementById(pageId + '-page').style.display = 'block';
        window.scrollTo(0, 0);
        loader.style.display = 'none';
        
        if (pageId === 'home') initCounter();
    }, 450);
}

// Initializing the Donation Feed
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('donation-list');
    const donors = [
        { name: "Anonymous Donor", amount: "$85" },
        { name: "Anonymous Donor", amount: "$104" },
        { name: "Anonymous Donor", amount: "$793" },
        { name: "Anonymous Donor", amount: "$500" }
    ];

    donors.forEach(d => {
        list.innerHTML += `
            <div class="donation-item" style="display:flex; justify-content:space-between; align-items:center; background:#f5f5f5; padding:12px; border-radius:15px; margin-bottom:10px;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <i class="fas fa-user-circle" style="font-size:2rem; color:#7c86c1;"></i>
                    <div style="text-align:left"><strong>${d.name}</strong><br><small>${d.amount}</small></div>
                </div>
                <button class="btn btn-primary" style="padding: 5px 12px; font-size: 12px; border-radius:5px;">Donate Now</button>
            </div>
        `;
    });
});

// Counter Logic
function initCounter() {
    const counter = document.getElementById('counter');
    const target = 357000;
    let val = 0;
    const interval = setInterval(() => {
        val += 7000;
        if (val >= target) {
            counter.innerText = target.toLocaleString();
            clearInterval(interval);
        } else {
            counter.innerText = val.toLocaleString();
        }
    }, 30);
}
