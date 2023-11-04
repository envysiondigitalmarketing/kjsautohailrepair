import ChooseUsCard from "../../Components/ChooseUsCard/ChooseUsCard"

const ChooseUs = () => {
    return (
        <div className="bg-[#f8f9fd] pt-1 pb-1">
            <div className="w-7/12 mx-auto sm:w-11/12">

                <h1 className="text-5xl my-6 text-center text-[#f79f24] font-semibold">Why Choose Us</h1>
                <p className="text-xl sm:text-left text-center mt-3">When it comes to selecting an auto body shop for your vehicle's repair needs we understand that
                    you have options. At KJS Auto Hail Repair we're here to make that decision an easy one by
                    highlighting what sets us apart</p>
            </div>
            <div className="w-11/12 mx-auto pt-9 flex justify-around gap-x-5 gap-y-14  flex-wrap">
                <ChooseUsCard text="Decades of Experience" description="With over 30 years in the industry our team boasts a depth of
            knowledge and skill that only comes with time. We've encountered virtually every type of
            repair challenge and our seasoned technicians have mastered the art of automotive
                restoration." />
                <ChooseUsCard text="In-House Expertise" description="Unlike many other shops that outsource various stages of the repair
process we take pride in handling everything in-house. From initial assessment to precision
repair and final painting we keep it all under one roof. This means greater quality control,
faster turnaround times, and a seamless experience for you" />
                <ChooseUsCard text="State-of-the-Art Facilities" description=" Our facilities are equipped with the latest industry technologies
and tools allowing us to deliver the highest standard of repair work. We invest in
innovation to ensure that your vehicle receives the best possible care." />
                <ChooseUsCard text="Customer-Centric Approach" description=" Your satisfaction is our top priority. We treat your vehicle as
if it were our own and we're committed to delivering results that meet or exceed your
expectations. Our friendly and knowledgeable staff is always ready to assist you and
address your concerns" />
                <ChooseUsCard text="Flawless Painting" description="Our in-house painting expertise ensures that every vehicle leaves our
shop looking as good as new. We take pride in the precision and artistry of our painting
work making sure that your vehicle's finish is impeccable" />
            </div>
            <div className="">
                <p className="text-center sm:text-left text-xl w-7/12 mx-auto my-12 sm:w-11/12">
                    When you choose KJS Auto Hail Repair you're not just choosing a repair shop; you're selecting a
                    partner dedicated to delivering the highest quality repairs, outstanding customer service, and a
                    commitment to excellence. Your vehicle deserves nothing less and neither do you. Experience the
                    difference with us and you'll see why our customers prefer our services.
                </p>
            </div>
        </div>
    )
}

export default ChooseUs