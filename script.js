document.addEventListener('DOMContentLoaded', () => {
    // 1. Animated Counter
    const counter = document.getElementById('counter');
    const target = +counter.getAttribute('data-target');
    
    const countUp = () => {
        const count = +counter.innerText.replace(/,/g, '');
        const inc = target / 100;

        if (count < target) {
            const nextVal = Math.ceil(count + inc);
            counter.innerText = nextVal.toLocaleString();
            setTimeout(countUp, 20);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };
    countUp();

    // 2. Donation Feed Population
    const feed = document.getElementById('donation-feed');
    const donors = [
        { name: "Anonymous Donor", amount: "$85" },
        { name: "Anonymous Donor", amount: "$104" },
        { name: "Anonymous Donor", amount: "$793" },
        { name: "Anonymous Donor", amount: "$500" }
    ];

    donors.forEach(donor => {
        const div = document.createElement('div');
        div.className = 'donation-item';
        div.innerHTML = `
            <div class="donor-info">
                <i class="fas fa-user-circle"></i>
                <div style="text-align: left;">
                    <strong>${donor.name}</strong><br>
                    <span>${donor.amount}</span>
                </div>
            </div>
            <button class="donate-btn-sm">Donate Now</button>
        `;
        feed.appendChild(div);
    });
});

function openPaymentModal() {
    // You would trigger the Payment Selection Modal from the previous step here
    alert("Redirecting to Payment Selection...");
}
