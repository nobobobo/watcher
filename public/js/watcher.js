$(document).ready(function () {

    let map = tt.map({

        container: 'map',
        key: 'IZ0RMVec7S9rARyrNQXSbkwDQJQhNYUJ',
        center: { lat: 47.608013, lng: -122.335167 },
        zoom: 9,
        style: 'tomtom://vector/1/basic-main',
        language: "en-US"

    });

    function renderMakers(data) {
        console.log(data);
        data.forEach(feed => {
            let marker = new tt.Marker().setLngLat([feed.lng, feed.lat]).setPopup(new tt.Popup({ offset: 35 }).setHTML(feed.userName + ": "+ feed.body)).addTo(map);
        });
    }

    function getWithLocation(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        $.ajax({
            method: "GET",
            url: "/",
            data: { lat: lat, lng: lng }
        }).then(data => {
            var el = document.createElement('html');
            el.innerHTML = data;
            document.body.querySelector('#feeds').innerHTML = el.querySelector('#feeds').innerHTML;
        });

        $.get(
            "/api/feeds",
            { lat: lat, lng: lng },
            data => renderMakers(data)
        );
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWithLocation);
        }
    }

    getLocation();

    function postLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(postWithLocation);
        }
    }

    function postWithLocation(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        $.post("/api/feeds",
            {
                userName: $("#userName").val().trim(),
                body: $('#body').val().trim(),
                lat: lat,
                lng: lng
            },
            res => getLocation());
    }

    $("#input_form").submit(function (event) {
        event.preventDefault();
        postLocation();
    })
})