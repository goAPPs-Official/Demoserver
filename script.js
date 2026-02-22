let targetAmount = 100000;
let currentAmount = 0;
let donations = [
  { name: "John Doe", amount: 50 },
  { name: "Jane Smith", amount: 100 },
  { name: "Anonymous", amount: 25 }
];

function animateCounter() {
  let display = document.getElementById("amount");
  let progress = document.getElementById("progress-fill");
  let increment = targetAmount / 200;

  let interval = setInterval(() => {
    if (currentAmount < 35000) {
      currentAmount += increment;
      display.textContent = `$${Math.floor(currentAmount).toLocaleString()}`;
      progress.style.width = `${(currentAmount / targetAmount) * 100}%`;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function populateDonations() {
  const list = document.getElementById("donation-list");
  donations.forEach(d => {
    let item = document.createElement("li");
    item.textContent = `${d.name} donated $${d.amount}`;
    list.appendChild(item);
  });
}

function share() {
  alert("Share this campaign on social media!");
}

function donate() {
  alert("Redirecting to donation page...");
}

window.onload = () => {
  animateCounter();
  populateDonations();
};
