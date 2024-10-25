import { useLocation } from 'react-router-dom'; // to splig city name in url
import { useState, useEffect } from "react";
import styles from '../styles/Detail.module.css';
import Map from "../components/Map";
import ModalWindow from "../components//ModalWindow";
import { Wrapper } from "@googlemaps/react-wrapper";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

function Detail() {

    const cityName = useLocation().pathname.split("/").pop(); // get city name
    const src = "/img/" + cityName + ".jpg";

    const [zoom, setZoom] = useState(10); // initial map zoom level

    const [modalOpen, setModalOpen] = useState(false);
    const [placeInfo, setPlaceInfo] = useState(null);
    function isOpen(state, info) {
        if(state) {
            setModalOpen(true);
            setPlaceInfo(info);
        } else {
            setModalOpen(false);
        }
    } // modal window open function

    const [markerInfo, setMarkerInfo] = useState(null);
    const [detailPagePosition, setDetailPagePosition] = useState(null);
    const [cityInfo, setCityInfo] = useState(null);
    function getCityInfo() {
        axios.get("/api/city/"+cityName)
        .then((res) => {
          console.log(res);
          setDetailPagePosition(res.data);
          setCityInfo(res.data);
        }
        ).catch((err) => {
          console.log(err);
        }) // axios
    }

    function getPlaceList() {
        axios.get("/api/place/"+cityName)
        .then((res) => {
          console.log(res);
          setMarkerInfo(res.data);
        }
        ).catch((err) => {
          console.log(err);
        }) // axios
    }

    function getPlaceInfo() {
        axios.get("/api/place/"+type)
        .then((res) => {
          console.log(res);
          setMarkerInfo(res.data);
        }
        ).catch((err) => {
          console.log(err);
        }) // axios
    }

    useEffect(()=> {
        // Code modification required: get all place list
        const placeMarkerInfoList = [
            {
                // example
                position: { lat: 42.3536908, lng: -71.0519125 },
                title: "Intercontinental Boston",
                },
        ];
        setMarkerInfo(placeMarkerInfoList);

        getCityInfo(); // get specific city data
        //getPlaceList(); // get all place data for map
    },[])

    // Code modification required: get all restaurant list when user click place type
    function clickRestaurantList() {
        // getPlaceInfo();
        const placeMarkerInfo = [
            {
                position: { lat : 42.3513454, lng : -71.0434783 },
                title: "Boston Ocean Prime",
            },
        ];
        setZoom(13); // 241018: Enlarge map when clicking on place type
        setMarkerInfo(placeMarkerInfo);
    }

    function clickHotelList() {}
    function clicTouristAttraction() {}

    return (
        <div>
            {modalOpen ? (
                <ModalWindow isOpen={isOpen} placeInfo={placeInfo}/>
            ) : null}
            <div>{cityName} 페이지입니다.</div>
            <img alt="city image" src={src} />
            <div className={styles.mapContainer}>
                {detailPagePosition != null ? (
                    <Wrapper apiKey={apiKey} libraries={['marker']}>
                        <Map position={detailPagePosition} markerInfo={markerInfo} zoom={zoom} page={"detail"} />
                    </Wrapper>
                ) : null}

                <div className={styles.placeList}>
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