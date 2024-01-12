import { useParams } from "react-router-dom";
import { useDoc } from "../../firebase/helper";
import serviceImg from "../../assets/service.webp";
import ReactMarkdown from "react-markdown";
import NavBar from "../../Components/NavBar/NavBar";
import Spinner from "../../Components/Spinner";

function BlogPost() {
  const params = useParams();
  const slug = params.slug || "";

  const { document, loading } = useDoc("blog", slug);

  if (loading) return <Spinner value={"h-screen"} />;

  console.log(document, "document");

  const components = {
    h1: ({ node, children }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ node, children }) => (
      <h2 className="text-3xl font-bold my-3">{children}</h2>
    ),
    h3: ({ node, children }) => (
      <h3 className="text-2xl font-bold my-2">{children}</h3>
    ),
    p: ({ node, children }) => (
      <p className="text-base my-3 leading-8">{children}</p>
    ),
    ol: ({ node, ordered, start, children }) => (
      <ol className="list-decimal list-list-outside my-3">{children}</ol>
    ),
    ul: ({ node, ordered, start, children }) => (
      <ul className="list-disc list-inside my-3">{children}</ul>
    ),
    blockquote: ({ node, children }) => (
      <blockquote className="border-l-4 pl-4 border-gray-500 italic my-4">
        {children}
      </blockquote>
    ),
    table: ({ node, children }) => (
      <table className="table-auto my-4">{children}</table>
    ),
  };

  return (
    <>
    <div className="bg-silver">
        <NavBar />
    </div>
    <main className="w-full">
      <section className="lg:pb-32">
        <article>
          <div className="relative overflow-hidden h-1/6 lg:screen w-full mb-12 lg:mb-16">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-blue-400 via-black to-green-300 opacity-50"></div>

            <div className="absolute h-full w-full flex flex-col items-center justify-center">
              <div className="text-center lg:mb-2">
                <span className="text-blue-50 mx-2 lg:mx-3 font-medium">
                  {document?.date}
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-semibold text-center mx-4 lg:mx-0 text-blue-50">
                {document?.title}
              </h1>
            </div>

            <div className="h-screen">
              <img
                className="h-full w-full object-cover"
                src={serviceImg}
                alt=""
              />
            </div>
          </div>

          <div className="max-w-prose mx-auto md:mx-6 lg:mx-auto text-gray-600">
            <p className="mb-12 text-lg lg:text-xl font-semibold text-gray-700">
              {document?.description}
            </p>

            <ReactMarkdown components={components}>
              {document?.body}
            </ReactMarkdown>
          </div>
        </article>
      </section>
    </main>
    </>
  );
}

export default BlogPost;
