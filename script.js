// SPA Navigation with Spinner
function navigateTo(pageId) {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    setTimeout(() => {
        // Hide all sections
        document.querySelectorAll('.page-section').forEach(p => p.style.display = 'none');
        // Show target
        document.getElementById(pageId + '-page').style.display = 'block';
        
        window.scrollTo(0, 0);
        loader.style.display = 'none';

        if (pageId === 'home') startCounter();
    }, 500);
}

// Mobile Menu
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Donation Counter
function startCounter() {
    const counter = document.getElementById('counter');
    const target = 357000;
    let current = 0;
    const step = target / 60;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            counter.innerText = target.toLocaleString();
            clearInterval(timer);
        } else {
            counter.innerText = Math.floor(current).toLocaleString();
        }
    }, 20);
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('donation-list');
    const logs = [
        { name: "Anonymous Donor", amount: "$85" },
        { name: "Anonymous Donor", amount: "$104" },
        { name: "Anonymous Donor", amount: "$793" },
        { name: "Anonymous Donor", amount: "$500" }
    ];

    logs.forEach(log => {
        list.innerHTML += `
            <div class="donation-item">
                <div class="donor-info">
                    <i class="fas fa-user-circle"></i>
                    <div style="text-align:left">
                        <strong>${log.name}</strong><br><small>${log.amount}</small>
                    </div>
                </div>
                <button class="btn btn-primary" style="padding: 5px 12px; font-size: 12px;">Donate Now</button>
            </div>
        `;
    });

    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        startCounter();
    }, 800);
});

// Modal Logic
function openPaymentModal() { document.getElementById('payment-modal').style.display = 'flex'; }
function closeModal() { document.getElementById('payment-modal').style.display = 'none'; }
function process(vendor) { alert("Opening " + vendor + " Gateway..."); closeModal(); }
