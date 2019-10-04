import $ from 'jquery';

class GoogleMap {
  constructor() {
		this.googleMap();
	}

	googleMap() {
		$(window).on('load', function() {
			var addressString = '84 Kingsbridge Dr., Lumberton, NJ 08048';
			var myLatLng = {
				lat: 39.974010, 
				lng: -74.795440
			}

			// 1. To render map
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 13,
				center: myLatLng
			});

			// 2. Add Marker
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: "Click to See Address"
			});

			// 3. Add Window Info
			var infowindow = new google.maps.InfoWindow({
				content: addressString
			});

			// 4. Open Info Window Marker is Clicked
			marker.addListener('click', function () {
				infowindow.open(map, marker);
			});

		});
	}
}

export default GoogleMap;