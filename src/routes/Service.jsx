import Navbar from "../layout/Navbar";
import Hero from "../components/lists/Hero";
import AboutImg from "../assets/images/9.jpg";
import Footer from "../layout/Footer";
import Trip from "../components/cards/TripCard";

export default function Service() {
    return (
        <div>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={AboutImg}
            title="Services"
            btnClass="hide"/>
            <Trip />
            <Footer/>
        </div>
    )
}