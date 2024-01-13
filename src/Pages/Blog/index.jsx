import { useBlogsData, useCollection } from "../../firebase/helper";
import BlogCard from "./card";
import NavBar from "../../Components/NavBar/NavBar";
import Spinner from "../../Components/Spinner";

const MainBlogPage = () => {
    const { documents, loading } = useCollection("mainBlogs");

    const { title, blogs } = documents[0] || {};

    console.log(title, blogs);
    const blogPaths =
        Array.isArray(blogs) &&
        blogs.map((docRef) => {
            return docRef.path;
        });

    const { data: blogsData, loading: loadingBlogsData } = useBlogsData(
        blogPaths || []
    );

    if (loadingBlogsData || loading) return <Spinner value={"h-screen"} />;

    console.log(blogsData, "blogsData");

    return (
        <>
            <div className="bg-blue-400">
                <NavBar />
            </div>
            {title && (
                <h1 className="p-8 text-3xl lg:text-5xl font-semibold text-center mx-4 lg:mx-0 text-black sm:text-2xl">
                    {title}
                </h1>
            )}

            <div className="pb:32">
                {blogsData &&
                    blogsData.map((blog, index) => {
                        return (
                            <BlogCard
                                key={blog.id}
                                title={blog.title}
                                description={blog.description}
                                image={blog.image}
                                link={`/${blogPaths[index]}`}
                                author={blog.author}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default MainBlogPage;
