import {useState, useCallback,CSSProperties, ReactNode} from "react";
import {GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {has, props} from "ramda"

interface center{
    lng: number;
    lat: number;
}

interface optionsProps{
    mapId: string;
    googleMapsApiKey: string;
};
interface MapProps{
    center: center;
    mapStyle?: CSSProperties;
    children: ReactNode;
    loading: () => ReactNode;
};


function Map(options:optionsProps){
    const {isLoaded} = useJsApiLoader(options);

    if(has('mapId')(options)) return(
        <div>Please key in map id</div>
    );

    if(has('googleMapsApiKey')(options)) return(
        <div>Please key in googleMapsApiKey</div>
    );

    return function({center,mapStyle,loading, children}:MapProps){
        const [map, setMap] = useState(null)
        const onLoad = useCallback(function callback(map) {
            const bounds = new window.google.maps.LatLngBounds();
            map.fitBounds(bounds);
            setMap(map)
        }, [])

        const onUnmount = useCallback(function callback(map) {
            setMap(null)
        }, [])
        return isLoaded ? (
            <GoogleMap
                mapContainerStyle={mapStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {children}
            </GoogleMap>
        ) : loading()
    }
};
export default Map;