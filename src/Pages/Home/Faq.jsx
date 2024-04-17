import { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"
import { Link } from 'react-router-dom';
const Faq = () => {
    // const [showFaq, setShowFaq] = useState(false);
    const [id, setId] = useState();

    const activeFaq = id;
    const handleDown = (index) => index === id ? setId(null) : setId(index);

    return (
        <div className="w-11/12 mx-auto  pt-10 pb-20">
            <h1 className="font-semibold font-readex text-center text-5xl text-[#f79f24] mb-4">
                FAQ
            </h1>
            <div className="flex flex-col items-center gap-y-7">
                <div className={`w-[700px] md:w-11/12 transition-all  bg-gray-100 border border-slate-300 px-5 py-3 duration-300  rounded-md overflow-hidden ${activeFaq === 1 ? "h-auto" : "h-20"}`}>
                    <div className="flex justify-between w-full h-14  items-center cursor-pointer" onClick={() => handleDown(1)}>
                        <h2>What should I do if my vehicle has hail damage?</h2>
                        <span className={`text-2xl duration-300 ${activeFaq === 1 ? "-rotate-180" : "rotate-0"}`}><MdKeyboardArrowDown /></span>

                    </div>
                    <div className="mt-3">
                        If your vehicle has hail damage the first step is to document the damage with photographs and contact your insurance company to initiate a claim. Then, get in touch with us at KJS Auto Hail Repair. We'll assess the damage and work directly with your insurance provider to ensure a seamless repair process. We'll provide you with an estimate and guide you through each step to get your vehicle looking like new
                    </div>
                </div>
                <div className={`w-[700px]  md:w-11/12 transition-all  bg-gray-100 border border-slate-300 px-5 py-3 duration-300  rounded-md overflow-hidden ${activeFaq === 2 ? "h-auto" : "h-20"}`}>
                    <div className="flex justify-between w-full h-14  items-center cursor-pointer" onClick={() => handleDown(2)}>
                        <h2>How long do repairs usually take?</h2>
                        <span className={`text-2xl duration-300 ${activeFaq === 2 ? "-rotate-180" : "rotate-0"}`}><MdKeyboardArrowDown /></span>
                    </div>
                    <div className="mt-3">
                        The repair timeline can vary depending on the extent of the hail damage and our current workload however we do understand the importance of a swift turnaround. In many cases, we can complete hail damage repairs within a few days to two weeks. Our goal is to minimize your inconvenience and get you back on the road as soon as possible
                    </div>
                </div>
                <div className={`w-[700px]  md:w-11/12 transition-all  bg-gray-100 border border-slate-300 px-5 py-3 duration-300  rounded-md overflow-hidden ${activeFaq === 3 ? "h-auto" : "h-20"}`}>
                    <div className="flex justify-between w-full h-14  items-center cursor-pointer" onClick={() => handleDown(3)}>
                        <h2>What methods do you use to repair my vehicle?</h2>
                        <span className={`text-2xl duration-300 ${activeFaq === 3 ? "-rotate-180" : "rotate-0"}`}><MdKeyboardArrowDown /></span>

                    </div>
                    <div className="mt-3">
                        At KJS Auto Hail Repair we employ two primary methods to repair hail damage on your vehicle: Paintless Dent Repair (PDR) and traditional repair. For minor to moderate hail damage we often turn to PDR, a technique that involves the careful manipulation of dents from the inside of the affected panels. PDR preserves your vehicle's original factory finish, eliminating the need for extensive repainting. In cases where the hail damage is more severe or PDR isn't suitable we utilize traditional repair methods. This may entail repairing or replacing damaged panels, followed by expert color matching and painting to seamlessly blend the repaired area with the rest of your vehicle. Our skilled technicians are adept at both approaches, ensuring that your vehicle is restored to its pre-damage condition with a flawless finish that leaves no trace of the hail's impact
                    </div>
                </div>

            </div>
            <div className="mt-10 flex justify-center items-center">
                <Link to={`/Contact`} className="flex justify-center items-center w-40 h-12  mt-5 rounded-lg bg-[#f79f24] font-semibold text-white">Schedule Estimate!</Link>
            </div>
        </div>
    )
}

export default Faq