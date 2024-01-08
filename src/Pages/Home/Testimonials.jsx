import { FaStar } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import avatar1 from "../../assets/Testimonial_img1.png";
import avatar2 from "../../assets/Testimonial_img2.png";
import avatar3 from "../../assets/Testimonial_img3.png";
import avatar4 from "../../assets/Testimonial_img1.png";
const Testimonials = () => {
    return (
        <section className="w-full py-10 bg-[#f8f9fd] my-10">
            <div className="py-10">
                <h1 className="font-semibold font-readex text-center text-4xl text-[#f79f24]">
                    What Our Clients Say
                </h1>
            </div>
            <div className="py-10 w-11/12 flex justify-center items-center mx-auto lg:w-[95%] xxl:w-[1700px]">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    autoplay={true}
                    modules={[Autoplay]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },

                        490: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        928: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper mx-auto w-full"
                >
                    <SwiperSlide className="text-center flex justify-center items-center">
                        <TestimonialCard
                            imgsrc={avatar1}
                            name={"Nina "}
                            desc={
                                " “Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”"
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">
                        <TestimonialCard
                            imgsrc={avatar2}
                            name={"John "}
                            desc={
                                " “I would be lost without restaurant. I would like to personally thank you for your outstanding product.”"
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">
                        <TestimonialCard
                            imgsrc={avatar3}
                            name={"Clara"}
                            desc={
                                " “ I am completely blown away. I would also like to say thank you to all your staff. It's really wonderful.”"
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">
                        <TestimonialCard
                            imgsrc={avatar4}
                            name={"Rose"}
                            desc={
                                " “I would be lost without restaurant. I would like to personally thank you for your outstanding product.”"
                            }
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

const TestimonialCard = (props) => {
    return (
        <>
            <div className="w-[410px] h-[254px] bg-white px-5 py-10 sm:w-full flex flex-col justify-between rounded-lg shadow-md xl:w-[300px] lg:w-[290px] lg:h-[300px] md:w-[340px]">
                <div className="flex justify-between items-center flex-wrap gap-y-4">
                    <div className=" flex gap-x-5 items-center">
                        <img
                            src={props.imgsrc}
                            alt="Generic avatar pic of human silhouette"
                            className="w-20 h-20 rounded-full"
                            loading="lazy"
                        />
                        <span>
                            <h4 className="text-xl font-bold">{props.name}</h4>
                            Customer
                        </span>
                    </div>
                    <div className=" text-[#ffc222] flex sm:mx-auto">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="px-4 text-gray-500 ">{props.desc}</div>
            </div>
        </>
    );
};

export default Testimonials