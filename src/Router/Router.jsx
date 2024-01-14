
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Index from '../Pages/Home/Index'
import Footer from '../Components/Footer/Footer'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Service from '../Pages/Services/Service'
import ScrollTop from "../Utils/ScrollTop"
import Error from "../Pages/Error/Error"

import MainBlogPage from "../Pages/Blog/index"
import BlogPost from "../Pages/BlogPost/index"

const Router = () => {
    return (
        <BrowserRouter>
            {/* <NavBar /> */}

            <Routes>
                <Route exact path='/' element={<Index />} />
                <Route exact path='/Service' element={<Service />} />
                <Route exact path='/Contact' element={<ContactUs />} />
                <Route path='*' element={<Error />} />
                
                <Route path='/blog' element={<MainBlogPage />} />
                <Route path='/blog/:slug' element={<BlogPost />} />
            </Routes>
            <Footer />
            <ScrollTop />
        </BrowserRouter>
    )
}

export default Router
