interface GPSPos {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export const findCurrenGPSLocation = (
  setCurrentLat: Function,
  setCurrentLon: Function
) => {
  function success(position: GPSPos) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setCurrentLat(latitude);
    setCurrentLon(longitude);
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
