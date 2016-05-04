// Code for the Add Location page.
var map;
var allLocations = [];
var STORAGE_KEY = "allLocations";
var tempNickname;
var tempLocation;

function initMap() 
{
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -37.9120467, lng: 145.1343136},
        zoom: 17,
        });
    
    var geocoder = new google.maps.Geocoder();
    
    document.getElementById("addLocation").addEventListener("click", function()
    {
        geocodeAddress(geocoder, map);
        tempNickname = document.getElementById("nickname").stringValue;
    });
        
    function geocodeAddress(geocoder, resultsMap) 
    {
        var address = document.getElementById("address").value;
        geocoder.geocode({'address': address}, function(results, status) 
        {
            if (status === google.maps.GeocoderStatus.OK) 
                {
                    tempLocation = 
                        {
                            nickname: tempNickname,
                            location: results[0].geometry.location
                        };
                    localStorage.getItem(STORAGE_KEY);
                    allLocations.push(tempLocation);
                    var allLocationsAsJSON = JSON.stringify(allLocations);
                    //saveLocations
                }
            else 
                {
                    alert("Location not found. Please try again.");
                }
        });
    };
}