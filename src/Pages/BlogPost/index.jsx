import { useParams } from "react-router-dom";
import { useDoc } from "../../firebase/helper";

function BlogPost() {
    const params = useParams();
    const slug = params.slug || "";

    const { document, loading } = useDoc("blog", slug);

    if (loading) return <div>Loading...</div>;
    console.log(document, "document");
    return (
        <div>
             <p>Dynamic BlogPost</p>
            {
             JSON.stringify( document , null, 2)
            }
        </div>
    );
}

export default BlogPost;
