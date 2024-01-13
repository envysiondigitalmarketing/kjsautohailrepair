import { useStorage } from "../../firebase/helper";

// eslint-disable-next-line react/prop-types
const Author = ({imgURL, name , title}) => {

    const { imgUrl, isLoading } = useStorage(imgURL);
        console.log("PrfileImg", imgUrl);
    return (
    <div className="flex items-center">
    <div className="h-8 w-8 rounded-sm overflow-hidden flex-shrink-0">
        {isLoading ? (
            <div>Isloading...</div>
        ) : (
            <img
                className="w-full h-full object-cover object-bottom"
                src={imgUrl}
                alt="Author"
            />
        )}
    </div>
    <div className="ml-2 text-xs">
        <span className="block font-semibold text-gray-700">
            {name}
        </span>
        <span className="block font-medium text-gray-500">
            {title}
        </span>
    </div>
</div>
    )
}

export default Author;