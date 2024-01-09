import Navbar from "../layout/Navbar";
import Hero from "../components/lists/Hero";
import HomeImg from "../assets/images/1.jpg";
import Destination from "../components/cards/DestinationCard";
import Trip from "../components/cards/TripCard";
import Footer from "../layout/Footer";


export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero 
            cName="hero"
            heroImg={HomeImg}
            title="Your Journey Your Story"
            text="Pilih Tujuan Destinasi Favorit Anda"
            buttonText="Jelajahi"
            url="/"
            btnClass="show"/>
            <Destination />
            <Trip />
            <Footer />
        </div>
    )
}