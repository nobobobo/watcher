
    function myFunction() {
        var x = document.getElementById("myModal");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    };

    let map = tt.map({

        container: 'map',
        key: 'IZ0RMVec7S9rARyrNQXSbkwDQJQhNYUJ',
        center: { lat: 47.608013, lng: -122.335167 },
        zoom: 10,
        style: 'tomtom://vector/1/basic-main',
        language: "en-US"

    });

    var queryURL = "http://api.tomtom.com/map/1/tile/basic/main/0/0/0.png?key=YkNFDJfvOLhUnW5FxY4Dz44ZpE6UQR65";
    $(document).ready(function () {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
        });
    });