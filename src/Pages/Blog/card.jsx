import { Link } from "react-router-dom";
import { useStorage } from "../../firebase/helper";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ title, description, image, link }) => {
    const { imgUrl, loading } = useStorage(image);

    return(
    <div 
        style={{
            border: "1px solid black",
            padding: "1rem",
            margin: "1rem",
        }}
    >
        <div 
            style={{
                width: "100%",
                height: "300px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        className="blog-card__image">
        {loading ? <div>Loading...</div> : <img src={imgUrl} alt="" />}
        </div>
        <div className="blog-card__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={link}>Read More</Link>
        </div>
    </div>
    )
}

export default BlogCard;