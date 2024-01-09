import Navbar from "../layout/Navbar";
import Hero from "../components/lists/Hero";
import AboutImg from "../assets/images/12.jpg";
import Footer from "../layout/Footer";
import ArticlesList from "../components/lists/ArticlesList";

export default function Articles() {
    return ( 
        <div>
            <Navbar />
            <Hero cName="hero-mid"
            heroImg={AboutImg}
            title="Articles"
            btnClass="hide"/>

            <ArticlesList />

            <Footer />
        </div>
    )
}