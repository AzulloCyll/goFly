interface GPSPos {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export const findCurrenGPSLocation = (setCurrentCoordinates: Function) => {
  function success(position: GPSPos) {
    const { latitude, longitude } = position.coords;

    const result = {
      lat: latitude,
      lon: longitude,
    };
    setCurrentCoordinates(result);
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
