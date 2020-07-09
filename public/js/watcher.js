$(document).ready(function () {

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWithLocation);
        }
    }


    function getWithLocation(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        
        $.ajax({
            method: "GET",
            url: "/",
            data: { lat: lat, lng: lng }
        }).then(data => {
            document.body.innerHTML = data;
        });
    }

    getLocation();
})