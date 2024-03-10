import NavBar from "../../Components/NavBar/NavBar"

const Review = () => {
    return (
        <>
            <NavBar />
            <div className="pb-10 flex justify-center items-center flex-col">
                <div className="w-full md:w-11/12 md:flex-col mx-auto flex justify-center min-h-[400px] my-6 mt-20 max-w-[1700px] rounded-lg">
                    <div className="w-7/12 h-full p-3 md:w-full px-9">
                        <h2 className="text-2xl py-7">Leave Us A Review</h2>
                        <p></p>
                        <div className="">
                            <form name='review' action="/submit-review" method="post" netlify='true' className="flex flex-col gap-y-4" id='review'>
                                <input type="hidden" name="form-name" value="review" />
                                <div className="flex gap-x-4">
                                    <input type="text" name='name' placeholder="Name" className="w-full pl-2 py-2 outline-none rounded-md border border-gray-300 " required />
                                    <input type="text" name='vehicle' placeholder="Vehicle" className="w-full pl-2 py-2 outline-none rounded-md border border-gray-300 " required />
                                </div>
                                <div className="">
                                    <select title='Referred by...' name='referred-by' required className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 custom-select" defaultValue='referred-by'> 
                                        <option disabled value="referred-by" className=''>
                                            Referred by...
                                        </option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Jason">Jason</option>
                                        <option value="Shandra">Shandra</option>
                                        <option value="Chris">Chris</option>
                                        <option value="Adam">Adam</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="">
                                    <select title='Rating' name='rating' placeholder="Stars" required className="w-full pl-2 py-2 outline-none rounded-md border border-gray-300 custom-select">
                                        <option value="0">Stars</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="">
                                    <textarea name="notes" id="notes" cols="30" rows="5" className="w-full pl-2 py-2 outline-none rounded-md border border-gray-300 " placeholder="Notes (Optional)"></textarea>
                                </div>
                                <button className="w-40 h-12 mt-1 rounded-lg bg-[#f79f24] font-semibold text-white">Submit Review</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review;