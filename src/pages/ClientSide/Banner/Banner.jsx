import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/mGpB7F9/Modern-Gaming-Cover-You-Tube-Channel-Art-1.png" />
            </div>
            
            <div>
                <img src="https://i.ibb.co/QrCHs3r/Modern-Gaming-Cover-You-Tube-Channel-Art-2.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/CVbCTTQ/Modern-Gaming-Cover-You-Tube-Channel-Art.png" />
            </div>
            
            
        </Carousel>
    );
};

export default Banner;