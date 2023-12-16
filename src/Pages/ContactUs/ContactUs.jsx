import { IoLocationSharp } from "react-icons/io5"
import { BsMailbox2, BsTelephoneFill } from "react-icons/bs"
import { BiSolidTimeFive } from "react-icons/bi"
import { MdEmail } from 'react-icons/md';
import NavBar from "../../Components/NavBar/NavBar"
const ContactUs = () => {
    return (
        <>
            <NavBar />
            <div className=" pb-10  flex justify-center items-center flex-col">
                <div className="bg-contact_bg min-h-[400px] w-full flex justify-center items-center bg-cover bg-center">
                <h1 className="text-center text-4xl text-white">Contact Us</h1>
            </div>
            <div className="w-full md:w-11/12  md:flex-col mx-auto  flex justify-center min-h-[400px] my-6 mt-20 max-w-[1700px] rounded-lg">
                <div className="w-7/12 h-full p-3 md:w-full px-9">
                    <h2 className="text-2xl py-7">Get In Touch</h2>
                    <div className="">
                        <form name='contact' method="POST" netlify action="" className="flex flex-col gap-y-4" hidden>
                            <input type="hidden" name="contact" value="contact" />
                        </form>
                        <form name='contact' method="POST" netlify action="" className="flex flex-col gap-y-4" id='contact'>
                            <div className="flex gap-x-4">
                                <input type="text" name='name' placeholder="Name" className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 " />
                            </div>
                            <div className="">
                                <input type="text" name='email' placeholder="Email" className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 " />
                            </div>
                            <div className="">
                                <input type="text" name='subject' placeholder="Subject" className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 " />
                            </div>
                            <div className="">
                                <select title='Referred by...' name='referred-by' placeholder="Referred by..." required='required' className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 custom-select" defaultValue='referred-by'> 
                                    <option disabled value="referred-by" className=''>
                                        Referred by...
                                    </option>
                                    <option value="multiple">Jason</option>
                                    <option value="web-dev">Shandra</option>
                                    <option value="web-dev">Chris</option>
                                    <option value="advertisements">Robert</option>
                                    <option value="blogging">Anthony</option>
                                    <option value="blogging">Other</option>
                                </select>
                            </div>
                            <div className="">
                                <textarea name="" id="" cols="30" rows="10" className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 " placeholder="Message"></textarea>

                            </div>
                            <button className="w-40 h-12  mt-1 rounded-lg bg-[#f79f24] font-semibold text-white">Send Message</button>
                        </form>
                    </div>
                </div>
                    <div className="bg-[#f79f24] w-[500px] rounded-lg sm:w-full min-h-full flex flex-col gap-y-14 justify-center pl-7 md:w-full md:py-10 md:gap-y-9">
                        <div className="flex  items-center gap-x-2 w-full flex-wrap ">

                            <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">
                                <IoLocationSharp className="text-xl sm:text-base text-white" />
                            </span>
                            <span className="font-semibold text-white">Address</span>
                            <span className="text-white">1670 Paonia St Suite 120, 80915</span>

                        </div>
                        <div className="flex  items-center gap-x-2 w-full flex-wrap">
                            <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">

                                <BsTelephoneFill className="text-xl sm:text-base text-white" />
                            </span>
                            <span className="font-semibold text-white">Phone Number</span>
                            <span className="text-white">(214) 766-6176</span>
                        </div>
                        <div className="flex  items-center gap-x-2 w-full flex-wrap">
                            <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">

                                <MdEmail className="text-xl sm:text-base text-white" />
                            </span>
                            <span className="font-semibold text-white">Email</span>
                            <span className="text-white">contact@kjsautohailrepair.com</span>
                        </div>
                        <div className="flex  items-center gap-x-2 w-full flex-wrap">
                            <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">

                                <BiSolidTimeFive className="text-xl sm:text-base text-white" />
                            </span>
                            <span className="font-semibold text-white">Timing</span>
                            <span className="text-white"> Mon - Fri 8:00 - 5:00</span>
                        </div>

                    </div>
                    {/* <div className="w-3/6 flex justify-center md:w-full">
                        <img src="/src/assets/contact.webp" className=" rounded-lg w-9/12 lg:w-11/12 md:w-8/12 h-6/6" alt=""/>
                    </div> */}

                </div>

            </div>
        </>
    )
}

export default ContactUs