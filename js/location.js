export const getCoords = async () => {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
    };
};