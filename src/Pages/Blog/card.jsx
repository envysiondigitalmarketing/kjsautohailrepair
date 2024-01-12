import { Link } from "react-router-dom";
import { useStorage } from "../../firebase/helper";
import Spinner from "../../Components/Spinner";
import Author from "./author";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ title, description, image, link, date, author }) => {
    const { imgUrl, loading } = useStorage(image);

    return (
        <section className="pt-32 mb-10">
            <div>
                <ul className="mx-auto w-1/2 -mt-20 md:mx-auto md:w-11/12 lg:mx-auto">
                    <div>
                        <div
                            className="relative"
                            style={{ border: "3px solid #36acc0" }}
                        >
                            <Link
                                to={link}
                                className="flex sm:flex-col gap-x-12 p-2 sm:h-auto  rounded-sm overflow-hidden shadow-sm hover:shadow-md border-gray-200 bg-white custom_color_border"
                            >
                                <div className="h-60 sm:full">
                                    {loading ? (
                                        <Spinner value={"mt-12"} />
                                    ) : (
                                        <img
                                            className="w-full h-full object-cover"
                                            src={imgUrl}
                                            alt="A man sitting alone in a cafe waiting for someone who will never show up."
                                        />
                                    )}
                                </div>
                                <div className="">
                                    <div className="mt-2">
                                        <span className="text-gray-400 mx-2 font-medium text-sm">
                                            {date}
                                        </span>
                                    </div>
                                    <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                                        {title}
                                    </h2>
                                    <p className="text-sm mb-6 flex-grow max-w-prose text-gray-600">
                                        {description}
                                    </p>
                                    {loading ? (
                                        "Loading..."
                                    ) : (
                                        <Author
                                            imgURL={author.image}
                                            name={author.name}
                                            title={author.title}
                                        />
                                    )}
                                </div>
                            </Link>
                        </div>
                    </div>
                </ul>
            </div>
        </section>
    );
};

export default BlogCard;
