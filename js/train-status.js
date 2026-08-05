const statusResults = document.getElementById("statusResults");
const searchTrain = document.getElementById("searchTrain");

const statuses = [
    "🟢 On Time",
    "🟡 Arriving Soon",
    "🔴 Delayed 15 min",
    "🔵 Departed",
    "⚪ Boarding",
    "🟣 Reached Destination"
];

const coaches = [
    "A1",
    "A2",
    "B1",
    "B2",
    "S1",
    "S2",
    "CC"
];

function displayTrains(list) {

    statusResults.innerHTML = "";

    list.forEach(train => {

        const status = statuses[Math.floor(Math.random() * statuses.length)];

        const platform = Math.floor(Math.random() * 10) + 1;

        const coach = coaches[Math.floor(Math.random() * coaches.length)];

        statusResults.innerHTML += `

        <div class="train-card">

            <div class="train-header">

                <h2>${train.name}</h2>

                <span class="train-number">
                    #${10000 + train.id}
                </span>

            </div>

            <div class="train-route">

                <div>

                    <h3>${train.departure}</h3>

                    <p>${train.from}</p>

                </div>

                <div class="route-line">

                    🚆────────🚆

                </div>

                <div>

                    <h3>${train.arrival}</h3>

                    <p>${train.to}</p>

                </div>

            </div>

            <div class="train-info">

                <span>${status}</span>

                <span>Platform ${platform}</span>

                <span>Coach ${coach}</span>

                <span>${train.class}</span>

                <span>${train.seats} Seats</span>

            </div>

        </div>

        `;

    });

}

displayTrains(trains);

searchTrain.addEventListener("input", () => {

    const value = searchTrain.value.toLowerCase();

    const filtered = trains.filter(train =>

        train.name.toLowerCase().includes(value)

    );

    displayTrains(filtered);

});