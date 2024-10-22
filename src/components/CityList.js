import styles from "../styles/CityList.module.css";

const detailBtnClick = (cityName) => {
    window.location.href="/detail/"+cityName;
}

function CityList(props) {

    return (
        <div className={styles.cityList}>
            <div className={styles.firstContent}>
                <img className={styles.image} alt="city image" src={props.list[2]} />
                <div className={styles.contentBox}>
                    <p className={styles.content}>{props.list[0]}</p>
                    <p className={styles.content}>SIMPLE DESCRIPTION</p>
                    <p className={styles.content}>위치</p>
                    <p className={styles.detailBtn} onClick= {() => detailBtnClick(props.list[0])}>More Detail</p>
                </div>
            </div>
            
            <div className={styles.secondContent}>
                <div className={styles.contentBox}>
                    <p className={styles.content}>{props.list[1]}</p>
                    <p className={styles.content}>SIMPLE DESCRIPTION</p>
                    <p className={styles.content}>위치</p>
                    <p className={styles.detailBtn} onClick= {() => detailBtnClick(props.list[1])}>More Detail</p>
                </div>
                <img className={styles.image} alt="city image" src={props.list[3]} />
            </div>

            <div className={styles.footer}>♡</div>

        </div>

    );
}

export default CityList;