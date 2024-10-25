import { useState, useEffect, useRef } from "react";
import styles from "../styles/Map.module.css";
// import MapMarker from "./MapMarker";

function Map(props) {
    console.log("Map페이지:" , props.markerInfo);
    const [map, setMap] = useState(props.map); // null
    const [lat, setLat] = useState(props.position[0]);
    const [lng, setLng] = useState(props.position[1]);

    const ref = useRef();
    
    useEffect(()=>{
        setLat(props.position[0]);
        setLng(props.position[1]);
        const newMap = new window.google.maps.Map(ref.current, {
            center : {
                lat: lat,
                lng: lng,
            },
            zoom : props.zoom,
            mapId: '5c6e8493a93a7128', // for using AdvancedMarkerElement
        });
        setMap(newMap);
    },[])

    useEffect(() => {
        if(props.page == "main") {
            props.markerInfo.forEach(({ lat, lng, english_name }) => {
            const pinElement = new window.google.maps.marker.PinElement({
                background: '#FBBC04',
                borderColor: '#FBBC04',
                borderColor: "magenta",
                glyph: "",
                glyphColor: "magenta",
            });
  
            const marker = new window.google.maps.marker.AdvancedMarkerElement({
                position: { lat, lng },
                map: map,
                title: english_name,
                content: pinElement.element,
                gmpClickable: true,
                
            });

            marker.addListener('click', () => {
                window.location.href="/detail/"+ english_name;
            });
        });

        } else if(props.page == "detail") {
            props.markerInfo.forEach(({ lat, lng, english_name }) => {
                const pinElement = new window.google.maps.marker.PinElement({
                    background: '#FBBC04',
                    borderColor: '#FBBC04',
                    borderColor: "magenta",
                    glyph: "",
                    glyphColor: "magenta",
                });
    
                const marker = new window.google.maps.marker.AdvancedMarkerElement({
                    position: { lat, lng },
                    map: map,
                    title: english_name,
                    content: pinElement.element,
                    gmpClickable: true,
                    
                });

                marker.addListener('click', () => {
                    props.isOpen(true, props.markerInfo); // open modal window
                });
            });
        }
    }, [map])

    // 241018: Reset the map when marker info changed
    useEffect(() => {
        const newMap = new window.google.maps.Map(ref.current, {
            center : {
                lat: lat,
                lng: lng,
            },
            zoom : props.zoom,
            mapId: '5c6e8493a93a7128', // for using AdvancedMarkerElement
        });
        setMap(newMap);
    }, [props.markerInfo]);

    return (
        <div className={styles.mainMap} ref={ref} id="map">
            {/*<MapMarker map={map} markerInfo = {props.markerInfo} page={props.page} />*/}
        </div>
    );
}

export default Map;