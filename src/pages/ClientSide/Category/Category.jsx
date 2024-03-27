import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={"Order Online"}
                subHeading={"From 11.00am to 10.00pm"}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/jZG3gmN/has.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/PNJghwn/Special-Menu.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/XCm6jJD/tomato.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/tJR6Y6J/Special-Menu-1.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/jZG3gmN/has.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/PNJghwn/Special-Menu.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/XCm6jJD/tomato.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/tJR6Y6J/Special-Menu-1.png" alt="" />
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;