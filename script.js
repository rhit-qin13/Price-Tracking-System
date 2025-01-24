// Sample Data for Price Comparison
const comparisonData = [
    { product: "Laptop", seller: "Amazon", price: "$1000", link: "#" },
    { product: "Laptop", seller: "BestBuy", price: "$950", link: "#" },
    { product: "Phone", seller: "Walmart", price: "$699", link: "#" }
];

// Populate Comparison Table
const tableBody = document.querySelector("#comparison-table tbody");
comparisonData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.product}</td>
        <td>${item.seller}</td>
        <td>${item.price}</td>
        <td><a href="${item.link}" target="_blank">Buy</a></td>
    `;
    tableBody.appendChild(row);
});

// Sample Data for Price History Chart
const priceHistoryData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: "Laptop Price ($)",
        data: [1000, 950, 920, 970, 940, 890],
        borderColor: "#000",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        fill: true
    }]
};

// Render Price History Chart using Chart.js
const ctx = document.getElementById("price-chart").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: priceHistoryData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            }
        }
    }
});

// Search Product Functionality
function searchProduct() {
    const searchBar = document.getElementById("search-bar").value;
    alert(`Searching for: ${searchBar}`);
}

// Generate Report Functionality
function generateReport(event) {
    event.preventDefault();
    const product = document.getElementById("product").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    if (product && startDate && endDate) {
        alert(`Generating report for ${product} from ${startDate} to ${endDate}`);
    } else {
        alert("Please fill out all fields.");
    }
}
