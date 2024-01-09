import Navbar from "../layout/Navbar";
import Hero from "../components/lists/Hero";
import AboutImg from "../assets/images/8.jpg";
import Footer from "../layout/Footer";
import AboutUs from "../components/lists/AboutUsList";


export default function About() {
    return (
        <div>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={AboutImg}
            title="About"
            btnClass="hide"/>
            <AboutUs />
            <Footer />
        </div>
    )
}