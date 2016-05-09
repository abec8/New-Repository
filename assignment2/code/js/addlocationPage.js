// Code for the Add Location page.
var map;
var allLocations = [];
var newNickname = "";
var newLocation;

function initMap() 
{
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat : -24.994167, lng : 134.866944},
        zoom: 4,
        });
    
    var geocoder = new google.maps.Geocoder();
    
    document.getElementById("addLocation").addEventListener("click", function()
    {
        //newNickname = document.getElementById("nickname").stringValue;
        geocodeAddress(geocoder, map);
        //newNickname = "";
    })
        
    function geocodeAddress(geocoder, resultsMap) 
    {
        var address = document.getElementById("address").value;
        geocoder.geocode({'address': address}, function(results, status) 
        {
            if (status === google.maps.GeocoderStatus.OK) 
                {
                    /*newLocation = 
                        {
                            latitude: results[0].geometry.location.lat(),
                            longitude: results[0].geometry.location.lng(),
                            nickname: newNickname
                        };*/
                    resultsMap.setCenter(results[0].geometry.location);
                    resultsMap.setZoom(15);
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location
                    });
                }
            else 
                {
                    alert("Location not found. Please try again.");
                }
        });
    }
}