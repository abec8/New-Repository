// Code for the Add Location page.
var map;

function initMap() 
{
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat : -24.994167, lng : 134.866944},
        zoom: 4,
        });
    
    var geocoder = new google.maps.Geocoder();
    
    document.getElementById("addLocation").addEventListener("click", function()
    {   
        geocodeAddress(geocoder, map);
    })
        
    function geocodeAddress(geocoder, resultsMap) 
    {
        var address = document.getElementById("address").value;
        geocoder.geocode({'address': address}, function(results, status) 
        {
            if (status === google.maps.GeocoderStatus.OK) 
                {
                    var nickname = document.getElementById("nickname").value;
                    var newNickname;                    
        
                    if (nickname !== "")
                    {
                        newNickname = nickname;
                    }
                    else
                    {
                        newNickname = document.getElementById("address").value;
                    }
                    
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    
                    var locationClass = new LocationWeatherCache();
                    locationClass.addLocation(latitude, longitude, newNickname);
                
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