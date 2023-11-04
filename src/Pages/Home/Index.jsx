import Hero from "./Hero"
import AboutUs from "./AboutUs"
import ChooseUs from "./ChooseUs"
import Faq from "./Faq"
import Testimonials from "./Testimonials"

const Index = () => {
    return (
        <>
            <Hero />
            <div className="max-w-[1700px] mx-auto">

                <AboutUs />
                <ChooseUs />
                {/* <Testimonials /> */}
                <Faq />
            </div>
        </>
    )
}

export default Index