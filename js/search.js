const searchBtn = document.querySelector(".search-btn");

const from = document.getElementById("from");
const to = document.getElementById("to");
const date = document.getElementById("date");
const trainClass = document.getElementById("class");

const results = document.getElementById("results");

searchBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (
        from.value === "" ||
        to.value === "" ||
        date.value === "" ||
        trainClass.value === ""
    ) {
        alert("Kindly fill out all the fields.");
        return;
    }

    const filterTrains = trains.filter(function (train) {
        return train.from === from.value &&
            train.to === to.value;
    });

    results.innerHTML = "";

    if (filterTrains.length === 0) {
        results.innerHTML =
            "<h2>No trains available for this route.</h2>";
        return;
    }

    filterTrains.forEach(function (train) {

        results.innerHTML += `
<div class="train-card">

    <div class="train-header">
        <h2>${train.name}</h2>
        <span class="train-number">#${10000 + train.id}</span>
    </div>

    <div class="train-route">
        <div>
            <h3>${train.departure}</h3>
            <p>${train.from}</p>
        </div>

        <div class="route-line">
            🚆────────────🚆
            <p>8h 20m</p>
        </div>

        <div>
            <h3>${train.arrival}</h3>
            <p>${train.to}</p>
        </div>
    </div>

    <div class="train-info">
        <span>💺 ${train.class}</span>
        <span>🟢 ${train.seats} Seats</span>
        <span>₹ ${(train.id * 250) + 650}</span>
        <span>Platform ${Math.floor(Math.random() * 8) + 1}</span>
    </div>

    <button class=" hero-btn book-btn">
        Book Now
    </button>
        `;

    })

});



