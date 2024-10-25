import styles from '../styles/Main.module.css';
import Map from "../components/Map.js";
import Carousel from "../components/Carousel.js";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const mainPagePosition = [46.729553, -94.6858998]; // 북미 대륙 focus

function Main() {

  const [markerInfo, setMarkerInfo] = useState(null);
  function getCityList() {
    axios.get("/api/city")
    .then((res) => {
      console.log(res);
      setMarkerInfo(res.data);
    }
    ).catch((err) => {
      console.log(err);
    }) // axios
  }
  
  useEffect(() => {
    getCityList(); // get all city data for map
  }, []);

  return (
    <div className={styles.main}>
      <p>Prep for Trip에 오신 걸 환영합니다.</p>
      <p>Description 1</p>
      <p>Description 2</p>
      <br></br>
      <div className={styles.carousel}>
        <Carousel />
      </div>
      <br></br>
      <p>지도에서 다양한 여행지를 찾아보세요</p>
      {markerInfo != null ? (
        <Wrapper apiKey={apiKey} libraries={['marker']}>
          <Map position={mainPagePosition} markerInfo={markerInfo} zoom={4.5} page={"main"} />
        </Wrapper>
      ) : null}

    </div>
  );
}

export default Main;

/*
<Wrapper apiKey={apiKey} libraries={['marker']}>
              <Map position={mainPageMapLocation} markerInfo={markerInfo} zoom={4.5} page={"main"} />
            </Wrapper>
*/