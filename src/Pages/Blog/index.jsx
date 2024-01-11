import { useBlogsData, useCollection } from "../../firebase/helper";
import BlogCard from "./card";

const MainBlogPage = () => {

    const { documents, loading } = useCollection("mainBlogs");

    const { title, blogs } = documents[0] || {};

    console.log(title, blogs);
    const blogPaths = Array.isArray(blogs) && blogs.map((docRef) => {
        return docRef.path
    });

    console.log(blogPaths , "blogDataPromises");

    const { data: blogsData, loading: loadingBlogsData } = useBlogsData(blogPaths || []);

    if (loadingBlogsData || loading) return <div>Loading blogs...</div>;

    console.log(blogsData, "blogsData");
    
    return (
        <>
            Main Blog Page
            {
                blogsData && blogsData.map((blog, index) => {
                    return (
                        <BlogCard
                            key={blog.id}
                            title={blog.title}
                            description={blog.description}
                            image={blog.image}
                            link={`/${blogPaths[index]}` }
                        />
                    )
                })
            }
        </>
    )
}

export default MainBlogPage;
