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
