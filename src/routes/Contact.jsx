import Navbar from "../layout/Navbar";
import Hero from "../components/lists/Hero";
import AboutImg from "../assets/images/11.jpg";
import Footer from "../layout/Footer";
import ContactForm from "../components/form/ContactForm";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={AboutImg}
            title="Contact"
            btnClass="hide"/>
            <ContactForm />
            <Footer />
        </div>
    )
}