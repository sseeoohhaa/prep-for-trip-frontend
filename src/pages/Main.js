import styles from '../styles/Main.module.css';
import Map from "../components/Map.js";
import { Wrapper } from "@googlemaps/react-wrapper";

const apiKey = process.env.REACT_APP_API_KEY;
const mainPageMapLocation = [46.729553, -94.6858998];

// Code modification required
const markerInfo = [
    {
      position: { lat: 42.3600825, lng: -71.0588801 },
      title: "Boston",
    },
    {
      position: { lat: 40.7127753, lng: -74.0059728 },
      title: "Newyork",
    },
    {
      position: { lat: 39.9525839, lng: -75.1652215 },
      title: "Philadelphia",
    },
    {
      position: { lat: 41.4901024, lng : -71.3128285 },
      title: "Newport",
    },
    {
      position: { lat: 41.8781136, lng: -87.6297982 },
      title: "Chicago",
    },
    {
        position: { lat: 41.8239891, lng: -71.4128343 },
        title: "Providence",
      },
];

function Main() {

    return (
        <div className={styles.main}>
         
            <div>
                <p>Prep for Trip에 오신 걸 환영합니다.</p>
                <p>Description 1</p>
                <p>Description 2</p>
                <br></br>
                <p>지도에서 다양한 여행지를 찾아보세요</p>
                <Wrapper apiKey={apiKey} libraries={['marker']}>
                    <Map position={mainPageMapLocation} markerInfo={markerInfo} zoom={4.5} page={"main"} />
                </Wrapper>
            </div>
            
        </div>
    );
}

export default Main;