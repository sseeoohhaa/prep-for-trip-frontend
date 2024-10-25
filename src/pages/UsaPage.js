import CityList from "../components/CityList";
import axios from "axios";

// // Code modification required
const list1 = ["Boston", "Newyork", "/img/Boston.jpg", "/img/Newyork.jpg"];
const list2 = ["Philadelphia", "Newport", "/img/Philadelphia.jpg", "/img/Newport.jpg"];
const list3 = ["Chicago", "Providence", "/img/Chicago.jpg", "/img/준비중.jpg"];

function UsaPage() {

    const [cityInfo, setCityInfo] = useState(null);
    const src = "/img/" + cityName + ".jpg";
    function getCityList() {
      axios.get("/api/city")
      .then((res) => {
        console.log(res);
        setCityInfo(res.data);
      }
      ).catch((err) => {
        console.log(err);
      }) // axios
    }
    
    useEffect(() => {
      getCityList(); // get all city data for map
    }, []);


    return (
        <div>
            <div>
                <p>미국</p>
                <p>Description 1</p>
                <p>Description 2</p>

                {cityInfo != null ? (
                    <CityList cityInfo={cityInfo} />
                ) : null}
            </div>
        </div>
    );
}

export default UsaPage;