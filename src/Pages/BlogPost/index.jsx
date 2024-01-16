import { useParams } from "react-router-dom";
import { useDoc } from "../../firebase/helper";
import ReactMarkdown from "react-markdown";
import NavBar from "../../Components/NavBar/NavBar";
import Spinner from "../../Components/Spinner";
import HeroImage, { components } from "./component";
import { useEffect, useState } from "react";
import PasswordModal from "./passwordModal";

function BlogPost() {
    const params = useParams();
    const slug = params.slug || "";

    const [showModal, setShowModal] = useState(true);
    const [passwordVerified, setPasswordVerified] = useState(false);

    useEffect(() => {
        // Check if the password has been verified before
        const isPasswordVerified =
            localStorage.getItem("passwordVerified") === "true";
        if (isPasswordVerified) {
            setPasswordVerified(true);
            setShowModal(false);
        }
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handlePasswordSubmit = () => {
        setPasswordVerified(true);
        setShowModal(false);
    };

    const { document, loading } = useDoc("blog", slug);

    if (loading) return <Spinner value={"h-screen"} />;

    if (showModal) {
        return (
            <div className="min-h-screen bg-gray-200">
                <PasswordModal
                    showModal={showModal}
                    onClose={handleCloseModal}
                    onPasswordSubmit={handlePasswordSubmit}
                />
                ;
            </div>
        );
    }
    if (passwordVerified) {
        return (
            <>
                <main className="w-full">
                    <section className="lg:pb-32">
                        <article>
                            <div className="relative overflow-hidden h-1/6 lg:screen w-full mb-12 lg:mb-16">
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-blue-400 via-black to-green-300 opacity-50"></div>

                                <div className="absolute h-full w-full flex flex-col items-center justify-center">
                                    <div className="absolute top-0 w-full">
                                        <NavBar />
                                    </div>
                                    <div className="text-center lg:mb-2">
                                        <span className="text-blue-50 mx-2 lg:mx-3 font-medium">
                                            {document?.date}
                                        </span>
                                    </div>
                                    <h1 className="text-3xl lg:text-5xl font-semibold text-center mx-4 lg:mx-0 text-blue-50">
                                        {document?.title}
                                    </h1>
                                </div>
                                <HeroImage image={document?.hero_image} />
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
}

export default BlogPost;
