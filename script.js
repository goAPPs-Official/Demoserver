document.addEventListener('DOMContentLoaded', () => {
    // 1. Counter Logic
    const counter = document.getElementById('counter');
    const target = 357000;
    let count = 0;
    
    const increment = target / 50;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            counter.innerText = target.toLocaleString();
            clearInterval(timer);
        } else {
            counter.innerText = Math.floor(count).toLocaleString();
        }
    }, 30);

    // 2. Feed Population
    const feed = document.getElementById('live-feed');
    const recentDonations = [
        { name: "Anonymous Donor", amount: "$85" },
        { name: "Anonymous Donor", amount: "$104" },
        { name: "Anonymous Donor", amount: "$793" },
        { name: "Anonymous Donor", amount: "$500" }
    ];

    recentDonations.forEach(don => {
        const row = document.createElement('div');
        row.className = 'feed-item';
        row.innerHTML = `
            <div class="donor-meta">
                <i class="fas fa-user-circle"></i>
                <div style="text-align:left">
                    <strong>${don.name}</strong><br>
                    <small>${don.amount}</small>
                </div>
            </div>
            <button class="btn btn-donate" style="padding: 5px 15px; font-size: 0.8rem">Donate Now</button>
        `;
        feed.appendChild(row);
    });
});

// Modal Controls
function openPaymentModal() { document.getElementById('payment-modal').style.display = 'flex'; }
function closeModal() { document.getElementById('payment-modal').style.display = 'none'; }
