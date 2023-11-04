
const ChooseUsCard = (props) => {
    return (
        <div className="w-[370px] h-[36 0px] shadow-md border border-gray-200  justify-evenly rounded-lg flex flex-col items-center py-6 px-5">
            {/* <div className="w-[90px] h-[90px] bg-[#007bff] rounded-full flex items-center justify-center">
                {props.icon}
            </div> */}
            <h2 className="text-xl font-semibold my-5">{props.text}</h2>
            <p className="text-center">
                {props.description}
            </p>

        </div>
    )
}

export default ChooseUsCard