document.getElementById("getTime").addEventListener("click", function() {
    let timezone = document.getElementById("timezone").value;
    let apiUrl = `https://worldtimeapi.org/api/timezone/${timezone}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("time").innerText = `Current Time: ${data.datetime}`;
        })
        .catch(error => {
            document.getElementById("time").innerText = "Error fetching time.";
            console.error("Error:", error);
        });
});
