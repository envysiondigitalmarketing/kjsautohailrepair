import NavBar from "../../Components/NavBar/NavBar";
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div className="">
            <div className="bg-service_bg  min-h-[700px] bg-cover bg-center rounded-br-[30%]">
                <NavBar />
                <div className="flex justify-center items-center w-full min-h-[500px]">

                    <h1 className="text-center text-4xl text-white">Services We Offer</h1>
                </div>
            </div>
            <div className="mt-10 pb-10 max-w-[1700px] mx-auto">
                <p className="mx-auto w-8/12 text-lg sm:w-11/12">
                    <span className="text-[#f79f24] text-3xl mr-3 block mb-4">
                        Hail damage
                    </span>
                    can be a frustrating and unexpected ordeal for vehicle owners. These icy pellets from
                    the sky can wreak havoc on your vehicle's exterior leaving behind unsightly dents and dings. At
                    KJS Auto Hail Repair we understand the unique challenges that hail damage presents and we're
                    here to provide you with expert solutions. With over 30 years of industry experience we've seen it
                    all and have developed specialized techniques to effectively repair hail damage and restore your
                    vehicle to its pre-damage condition</p>
                <h2 className="text-3xl sm:w-11/12 font-semibold w-8/12 mx-auto  my-6">The Importance of Prompt Repairs</h2>
                <div className="flex w-8/12 mx-auto sm:w-11/12 items-center gap-x-5 lg:flex-col lg:gap-y-6">
                    <div className="w-full lg:w-full">
                        <p className="text-lg ">
                            When it comes to hail damage swift action is crucial. Hail dents may seem minor at first but they
                            can lead to more significant issues if left unaddressed. Prompt repairs not only preserve the
                            aesthetics of your vehicle but also safeguard its structural integrity. Hail damage can compromise
                            the protective layers of your car's finish making it susceptible to rust and further deterioration
                            over time. By choosing KJS Auto Hail Repair you're making the choice to address hail damage
                            promptly ensuring that your vehicle remains safe, attractive, and protected against long-term
                            damage. Don't wait; let us restore your vehicle to its original beauty and keep it in top condition.
                        </p>
                    </div>
                    {/* <div className="w-1/2 lg:w-full">
                        <img src={ServiceImg} alt="" loading='lazy'/>
                    </div> */}
                </div>
                <div className="mt-10 flex justify-center items-center">
                    <Link to={`/Contact`} className="flex justify-center items-center w-40 h-12  mt-5 rounded-lg bg-[#f79f24] font-semibold text-white">Schedule Estimate!</Link>
                </div>
                {/* Our Hail Damage Service */}
                <div className="mt-5 relative">
                    <h1 className="w-8/12 sm:w-11/12  mx-auto text-3xl text-[#f79f24]">Our Hail Damage Services</h1>
                    <p className=" w-8/12 mx-auto text-xl mt-4 md:w-10/12  sm:w-11/12">
                        At KJS Auto Hail Repair we specialize in providing comprehensive hail damage repair services that
                        are tailored to meet the unique needs of your vehicle. Our team of experienced technicians is
                        dedicated to restoring your vehicle to its pre-damage condition ensuring that it looks and
                        performs as if the hailstorm never happened. Here's an overview of our hail damage services:
                    </p>
                    {/* <div className="sm:hidden absolute top-1/4 left-0 bg-orange-400 h-10 w-10 rounded-full opacity-30"></div>
                    <div className="sm:hidden absolute top-20 right-20 bg-orange-400 h-10 w-10 rounded-full opacity-30"></div> */}
                    {/* <img src={Dots} className="sm:hidden md:right-0 absolute bottom-0 right-24 w-24 h-24 opacity-30" /> */}
                    {/* <img src={arrow} className="sm:hidden absolute md:left-0 bottom-0 left-20  w-20 h-20" /> */}
                    {/* <img src={car} className="sm:hidden absolute bottom-1/2 right-20 opacity-30 w-24 h-24" /> */}
                    <ul className="w-8/12 mx-auto mt-8 sm:w-11/12">
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Paintless Dent Repair (PDR):
                            </span>
                            <p>
                                Our skilled technicians are experts in Paintless Dent Repair (PDR),
                                a highly effective method for removing minor to moderate hail dents. With PDR we gently
                                massage and reshape the damaged areas from the inside of the affected panels preserving your
                                vehicle's original factory finish without the need for extensive repainting.</p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Traditional Repair:
                            </span>
                            <p>

                                For hail damage that is more severe or where PDR may not be suitable, we
                                offer traditional repair services.This may involve repairing or replacing damaged panels and
                                applying expert color matching and painting techniques to seamlessly blend the repaired areas
                                with the rest of your vehicle.</p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Insurance Claim Assistance:

                            </span>
                            <p>
                                Dealing with insurance claims can be complex and time - consuming.
                                We're here to simplify the process for you. Our team will work directly with your insurance
                                provider to ensure a smooth and hassle - free claims experience, helping you navigate the
                                paperwork and approvals required for your hail damage repairs.</p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Quality Craftsmanship:
                            </span>
                            <p>
                                At KJS Auto Hail Repair we take pride in our commitment to quality
                                craftsmanship. Every repair we undertake is executed with precision and attention to detail. We strive for flawless results that exceed your expectations ensuring that your vehicle leaves our shop
                                in pristine condition.
                            </p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Timely Turnaround:
                            </span>
                            <p>
                                We understand that your time is valuable.Our goal is to minimize your inconvenience by providing timely hail damage repairs. In many cases we can complete repairs within a few days to a week, getting you back on the road as soon as possible.
                            </p>
                        </li>
                    </ul>

                    <div className="mt-10 flex justify-center items-center">
                        <Link to={`/Contact`} className="flex justify-center items-center w-40 h-12  mt-5 rounded-lg bg-[#f79f24] font-semibold text-white">Schedule Estimate!</Link>
                    </div>

                    <p className=" w-8/12 mx-auto text-xl mt-9 md:w-10/12  sm:w-11/12">When you choose KJS Auto Hail Repair for hail damage repair you're choosing a team that cares about your vehicle's well-being and your peace of mind. We're here to restore your vehicle's beauty, functionality, and value, making your experience with us as seamless as possible.
                    </p>
                </div>


                {/* Repair Process */}


                <div className="mt-5 relative">
                    <h1 className="mx-auto w-8/12 sm:w-11/12 text-3xl text-[#f79f24]">The Repair Process</h1>
                    <p className=" w-8/12 mx-auto text-xl mt-4 md:w-10/12  sm:w-11/12">
                        At KJS Auto Hail Repair we understand that experiencing hail damage can be stressful which is why we've streamlined our repair process to make it as convenient and straightforward as possible for you. Here's what you can expect during the repair journey when you entrust us with your
                        hail-damaged vehicle:
                    </p>
                    {/* <div className="sm:hidden absolute top-1/4 left-0 bg-orange-400 h-10 w-10 rounded-full opacity-30"></div>
                    <div className="sm:hidden absolute top-20 right-20 bg-orange-400 h-10 w-10 rounded-full opacity-30"></div> */}
                    {/* <img src={Dots} className="sm:hidden md:right-0 absolute bottom-0 right-24 w-24 h-24 opacity-30" /> */}
                    {/* <img src={arrow} className="sm:hidden md:left-0 absolute bottom-0 left-20 rotate-45 w-20 h-20" /> */}
                    {/* <img src={car2} className="sm:hidden absolute bottom-1/2 right-20 opacity-30 w-24 h-24" /> */}
                    <ul className="w-8/12 mx-auto mt-8 sm:w-11/12">
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Free Damage Assessment:
                            </span>
                            <p>
                                The process begins with a complimentary, thorough assessment of
                                your vehicle's hail damage. Our experienced technicians will examine the extent of the dents,
                                dings, and related damage to provide you with an accurate overview of the necessary repairs
                            </p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Detailed Estimate:
                            </span>
                            <p>

                                Following the assessment, we'll provide you with a detailed estimate that
                                outlines the repair plan, including the methods and techniques we'll employ. We'll also discuss the
                                estimated timeline for completing the repairs.

                            </p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Insurance Coordination:

                            </span>
                            <p>
                                If you're working with an insurance claim we'll assist you in navigating
                                the often complex insurance process. Our team has experience working with various insurance
                                providers and we'll work directly with them to ensure that your claim is processed smoothly
                            </p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Repair Execution:
                            </span>
                            <p>

                                Once you've approved the repair plan and received insurance approval (if
                                applicable), we'll get to work promptly. If your vehicle requires Paintless Dent Repair (PDR) our
                                skilled technicians will carefully massage and reshape the dented areas from the inside of the
                                panels preserving your vehicle's original finish. For more severe damage or where PDR is not
                                suitable we'll use traditional repair methods which may involve panel repair or replacement.
                            </p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Color Matching and Painting:
                            </span>
                            <p>
                                If painting is necessary, our experts will meticulously match the
                                paint to your vehicle's original color ensuring a seamless finish. We take great care to blend the
                                repaired areas with the rest of your vehicle leaving no visible traces of the hail damage.

                            </p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Quality Assurance:
                            </span>
                            <p>
                                Throughout the repair process our quality assurance team conducts
                                rigorous inspections to verify that all repairs meet our high standards. We aim for perfection and
                                no vehicle leaves our shop without undergoing a thorough quality check.

                            </p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Timely Completion:
                            </span>
                            <p>
                                We understand the importance of getting you back on the road swiftly.
                                Depending on the extent of the damage our repairs are typically completed within a few days to a
                                week.

                            </p>
                        </li>
                        <li>
                            <span className="text-[#f79f24] text-xl font-semibold">
                                Vehicle Return
                            </span>
                            <p>
                                Once the repairs are finished we'll contact you to schedule a convenient time for
                                you to pick up your fully restored vehicle. You'll find your vehicle looking as good as new with all
                                hail damage effectively repaired

                            </p>
                        </li>
                    </ul>

                    <p className=" w-8/12 mx-auto text-xl mt-9 md:w-10/12  sm:w-11/12">At KJS Auto Hail Repair we take pride in our transparent, customer-centric repair process. Our
                        goal is to make your experience with us as smooth as possible ensuring that your vehicle is
                        returned to you in its pre-damage condition. When it comes to hail damage repairs, trust us to
                        deliver exceptional service from start to finish
                    </p>
                </div>
                <div className="mt-10 flex justify-center items-center">
                    <Link to={`/Contact`} className="flex justify-center items-center w-40 h-12  mt-5 rounded-lg bg-[#f79f24] font-semibold text-white">Schedule Estimate!</Link>
                </div>
            </div>
        </div >
    )
}

export default Service

