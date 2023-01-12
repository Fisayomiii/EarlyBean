import About from "../components/About/About"
import Feautures from "../components/Features/Feautures"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Newsletter from "../components/Newsletter/Newsletter"
import Testimonials from "../components/Testimonials/Testimonials"

function Main() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Feautures />
            <Testimonials />
            <Newsletter />
            <Footer/>
        </>
    )
}

export default Main