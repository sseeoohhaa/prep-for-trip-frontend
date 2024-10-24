import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import carouselImg1 from "/img/Boston.jpg";
// You attempted to import /img/Boston.jpg which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.

function Carousel() {

    const images = [
        {
            src: "/img/Newport.jpg",
            city: "Newport",
        },
        {
            src: "/img/Boston.jpg",
            city: "Boston",
        },
        {
            src: "/img/Chicago.jpg",
            city: "Chicago",
        },
        {
            src: "/img/Philadelphia.jpg",
            city: "Philadelphia",
        },
        {   
            src: "/img/Chicago.jpg",
            city: "Chicago",
        },
    ];

    const imgClick = (cityName) => {
        window.location.href="/detail/"+cityName;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // contents count
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        fade: true,
        pauseOnHover: true, // when mouse hover
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, idx) => (
                    <div>
                        <img alt="carousel image" src={images[idx].src} onClick={() => imgClick(images[idx].city)}/>
                    </div>
                ))
                }  
            </Slider>
        </div>
    );

}

export default Carousel;