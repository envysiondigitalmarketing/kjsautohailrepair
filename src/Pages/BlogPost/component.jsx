import { useStorage } from "../../firebase/helper"

// eslint-disable-next-line react/prop-types
const HeroImage = ({ image }) => {
    
    const { imgUrl } = useStorage(image);

    return (
        <>
             <div id="hero" className="h-screen">
              <img
                className="h-full w-full object-cover"
                src={imgUrl}
                alt=""
              />
            </div>
        </>
    )
}

export default HeroImage


export const components = {
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