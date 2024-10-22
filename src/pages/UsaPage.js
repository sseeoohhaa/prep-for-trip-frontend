import CityList from "../components/CityList";

// // Code modification required
const list1 = ["Boston", "Newyork", "/img/Boston.jpg", "/img/Newyork.jpg"];
const list2 = ["Philadelphia", "Newport", "/img/Philadelphia.jpg"];
const list3 = ["Chicago", "Providence"];

function UsaPage() {
    return (
        <div>
            <div>
                <p>미국</p>
                <p>Description 1</p>
                <p>Description 2</p>

                <CityList list={list1} />
                <CityList list={list2} />
                <CityList list={list3} />
            </div>
        </div>
    );
}

export default UsaPage;