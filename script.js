function trackBus() {
    var busNumber = document.getElementById("bus-number").value;
    var destination = document.getElementById("destination").value;
    
    // Make a request to the server to get the bus location
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var busLocation = JSON.parse(this.responseText);
            displayMap(busLocation);
        }
    };
    request.open("GET", "getBusLocation.php?busNumber=" + busNumber + "&destination=" + destination, true);
    request.send();
}

function displayMap(busLocation) {
    var mapOptions = {
        center: new google.maps.LatLng(busLocation.latitude, busLocation.longitude),
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(busLocation.latitude, busLocation.longitude),
        map: map
    });
}
