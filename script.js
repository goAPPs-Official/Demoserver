// 1. SPA Router
function navigateTo(pageId) {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    setTimeout(() => {
        document.querySelectorAll('.page-section').forEach(p => p.style.display = 'none');
        document.getElementById(pageId + '-page').style.display = 'block';
        window.scrollTo(0, 0);
        loader.style.display = 'none';
        
        if(pageId === 'home') initCounter();
    }, 400);
}

// 2. Counter Animation
function initCounter() {
    const counter = document.getElementById('counter');
    const target = 357000;
    let val = 0;
    const step = target / 50;
    
    const interval = setInterval(() => {
        val += step;
        if (val >= target) {
            counter.innerText = target.toLocaleString();
            clearInterval(interval);
        } else {
            counter.innerText = Math.floor(val).toLocaleString();
        }
    }, 30);
}

// 3. Mobile Menu Toggle
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// 4. Fake Donation Feed
document.addEventListener('DOMContentLoaded', () => {
    const feed = document.getElementById('donation-feed');
    const data = [
        {name: "Anonymous", amount: "$85"},
        {name: "Anonymous", amount: "$104"},
        {name: "Anonymous", amount: "$793"}
    ];
    
    data.forEach(d => {
        feed.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; background:#f9f9f9; padding:15px; border-radius:10px; margin-bottom:10px;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <i class="fas fa-user-circle" style="font-size:1.5rem; color:#7c86c1;"></i>
                    <div style="text-align:left"><strong>${d.name}</strong><br><small>${d.amount}</small></div>
                </div>
                <button class="btn btn-green" style="padding:5px 10px; font-size:12px;">Donate</button>
            </div>
        `;
    });
    initCounter();
});

// 5. Modal Controls
function openPaymentModal() { document.getElementById('payment-modal').style.display = 'flex'; }
function closeModal() { document.getElementById('payment-modal').style.display = 'none'; }
function processPayment(provider) {
    alert("Redirecting to " + provider + "...");
    closeModal();
}
