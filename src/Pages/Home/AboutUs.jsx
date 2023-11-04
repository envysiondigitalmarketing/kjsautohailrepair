// import Dots from "../../assets/Dots.png"
// import arrow from "../../assets/arrow.png"
// import car from "../../assets/car.png"
import AboutImg from "../../assets/about.jpg"
const AboutUs = () => {
    return (
        <div className=" py-6 flex flex-col mt-9 relative">
            <h1 className="text-5xl  w-11/12 mx-auto font-semibold  text-[#f79f24]">About Us</h1>
            <div className="w-11/12 gap-x-10 md:flex-col   text-xl sm:text-lg flex  gap-y-4 mt-7 mx-auto">
                {/* <div className=" sm:hidden absolute top-1/4 left-0 bg-orange-400 h-10 w-10 rounded-full opacity-30"></div>
                <div className=" sm:hidden absolute top-20 right-20 bg-orange-400 h-10 w-10 rounded-full opacity-30"></div> */}
                {/* <img src={Dots} className=" sm:hidden absolute bottom-0 right-24 w-24 h-24 opacity-30" /> */}
                {/* <img src={arrow} className=" sm:hidden absolute bottom-0 left-20 rotate-45 w-20 h-20" /> */}
                {/* <img src={car} className=" sm:hidden absolute bottom-1/2 right-20 opacity-30 w-24 h-24" /> */}
                <ul className=" flex flex-col gap-y-6 w-1/2 md:w-full">
                    <li>

                        <p className="relative">
                            <span className="text-[#f79f24] font-semibold mr-1">
                                At KJS Auto Hail Repair
                            </span>
                            we're more than just a repair shop, we're your trusted partner in
                            automotive restoration. With over three decades of industry expertise our journey in the world of
                            auto body repair began with a passion for precision and a commitment to excellence</p>
                    </li>
                    <li> <p className="">
                        <span className="text-[#f79f24] font-semibold mr-1">
                            Our team of experienced technicians
                        </span>
                        brings together a wealth of knowledge and skills honed over
                        years of hands-on experience. We've seen it all and each challenge has only strengthened our
                        resolve to deliver top-notch auto body hail repair services</p></li>
                    <li><p className="">
                        <span className="text-[#f79f24] font-semibold mr-1">
                            We believe that excellence
                        </span>
                        is achieved through attention to detail which is
                        why we proudly handle every aspect of the repair process in-house. AT KJS Auto Hail Repair we do not outsource any part of the repair journey. From the initial assessment to the final coat of paint every step is meticulously executed right here within our state-of-the-art facilities
                    </p></li>
                    <li>  
                        <p className="">
                            <span className="text-[#f79f24] font-semibold mr-1">
                                We understand that your vehicle
                            </span>
                            is not just a means of transportation; it's an essential part of your daily life. That's why we treat every repair project with
                            the same care and attention we would give to our own vehicles. Our mission is simple: to restore your vehicle to its pre-damage condition while providing you with a seamless and stress-free experience
                        </p>
                    </li>
                    <li><p className="">
                        <span className="text-[#f79f24] font-semibold mr-1">
                            We take pride in our ability
                        </span> 
                        to seamlessly integrate every aspect of the repair process. From
                        precision dent repair to flawless painting and finishing, it's all done under one roof. This commitment to in-house excellence ensures that your vehicle is restored to its pre-damage condition efficiently and effectively. Thank you for considering us as your preferred auto body repair destination, we look forward to serving you and your vehicle with dedication and passion. Your satisfaction is our driving force and we can't wait to exceed your expectations
                    </p></li>
                </ul>
                <div className="w-1/2 flex justify-center md:w-full">
                    <img src={AboutImg} className="w-9/12 object-cover lg:w-11/12 md:w-8/12 h-5/6" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs