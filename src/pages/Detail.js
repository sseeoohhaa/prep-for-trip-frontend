import { useLocation } from 'react-router-dom'; // to splig city name in url
import { useState, useEffect } from "react";
import styles from '../styles/Detail.module.css';
import Map from "../components/Map.js";
import { Wrapper } from "@googlemaps/react-wrapper";

const apiKey = process.env.REACT_APP_API_KEY;
const bostonPageMapLocation = [42.3600825, -71.0588801]; // // Code modification required

function Detail() {

    const cityName = useLocation().pathname.split("/").pop();
    const src = "/img/" + cityName + ".jpg";

    const [markerInfo, setMarkerInfo] = useState(null);
    const [zoom, setZoom] = useState(10);

    // Code modification required: get all place list When user first access the page
    useEffect(()=> {
        const placeMarkerListInfo = [
            {
                // example
                position: { lat: 42.3536908, lng: -71.0519125 },
                title: "Intercontinental Boston",
                },
        ];
        setMarkerInfo(placeMarkerListInfo);
    },[])

    // Code modification required: get all restaurant list when user click place type
    const clickRestaurantList = () => {
        const placeMarkerInfo = [
            {
                position: { lat : 42.3513454, lng : -71.0434783 },
                title: "Boston Ocean Prime",
            },
        ];
        setZoom(13); // 241018: Enlarge map when clicking on place type
        setMarkerInfo(placeMarkerInfo);
    }

    return (
        <div>
            <div>{cityName} 페이지입니다.</div>
            <img alt="city image" src={src} />
            <div className={styles.place}>
                <Wrapper apiKey={apiKey} libraries={['marker']}>
                    <Map position={bostonPageMapLocation} markerInfo={markerInfo} zoom={zoom} page={"detail"} />
                </Wrapper>
                <div className={styles.placeInfo}>
                    <div onClick= {() => clickRestaurantList()}>레스토랑</div>
                    <div>호텔</div>
                    <div>여행지</div>
                </div>
            </div>
            <div className={styles.link}>
                <p>다른 사람들의 여행 후기가 궁금하다면?</p>
                <p>Social Link</p>
            </div>
        </div>
    );
}

export default Detail;