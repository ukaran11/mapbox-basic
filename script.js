mapboxgl.accessToken = 
'pk.eyJ1IjoidWthcmFuMTEiLCJhIjoiY2txMm1kNXMyMDUwbDJvdXN3ZWw5bXB1OSJ9._5e8iWKsXIYPSEb7xsvKNg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {

}

function setupMap(center){
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom: 15
      })

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav)

      const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
        //   unit:'metric',
        //   profile: 'mapbox/cycling'
      }) 
      map.addControl(directions, 'top-left')

    }