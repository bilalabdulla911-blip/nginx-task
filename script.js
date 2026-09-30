// Scroll to destinations
function scrollToDestinations() {
    document.getElementById("destinations").scrollIntoView({
        behavior: "smooth"
    });
}


// Show destination message
function showMessage(destination) {
    alert(
        "You selected " + destination +
        ". Get ready for an amazing travel experience!"
    );
}


// Booking form
function bookTrip(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;

    let message = document.getElementById("bookingMessage");

    message.innerHTML =
        "Thank you, " + name +
        "! Your trip to " + destination +
        " is planned for " + date + ".";

    // Clear form
    document.querySelector("form").reset();
}
