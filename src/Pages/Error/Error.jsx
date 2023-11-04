import { Link } from "react-router-dom"

const Error = () => {
    return (
        <>
            <div className="min-w-screen min-h-screen flex justify-center items-center flex-col">
                <h1 className="text-[6vw] sm:text-4xl mb-5 text-center px-1">404 Page not Found</h1>
                <Link to={"/"} className="w-40 h-12 md:mx-auto flex justify-center items-center  mt-5 rounded-lg bg-[#f79f24] font-semibold text-white">Go Back to Home</Link>
            </div>

        </>
    )
}

export default Error