import NusaPenida1 from "../../assets/images/2.jpg";
import NusaPenida2 from "../../assets/images/3.jpg";
import NusaDua1 from "../../assets/images/4.jpg";
import NusaDua2 from "../../assets/images/5.jpg";
import DestinationData from "../lists/DestinationList";
import "../../assets/css/DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>TravelEase memberikan Anda kesempatan untuk menjelajahi berbagai keindahan tempat di Bali</p>

            <DestinationData 
            className="first-des"
            heading="Nusa Penida"
            text="Nusa Penida, sebuah pulau eksotis yang terletak di sebelah tenggara Bali, Indonesia, memikat dengan pesonanya yang alami. Dikenal karena keindahan alamnya yang memukau, pulau ini menawarkan pantai-pantai berpasir putih yang menakjubkan, tebing-tebing yang menjulang tinggi, dan air laut yang jernih. Tempat-tempat seperti Kelingking Beach, Angel's Billabong, Crystal Bay, dan Broken Beach menjadi daya tarik utama dengan pemandangan yang mengagumkan. Aktivitas snorkeling, diving, trekking, dan petualangan alam lainnya sangat populer di sini."
            img1={NusaPenida1}
            img2={NusaPenida2}/>

            <DestinationData 
            className="first-des-reverse"
            heading="Pantai Nusa Dua"
            text="Pantai Nusa Dua, terletak di bagian selatan Bali, adalah destinasi yang terkenal dengan keindahan pantainya yang tenang dan fasilitasnya yang mewah. Pasir putihnya yang lembut dan air lautnya yang tenang menjadikannya tempat yang populer bagi para pelancong yang mencari liburan santai. Keindahan alamnya disempurnakan dengan hamparan terumbu karang yang indah, menjadikannya tempat yang bagus untuk snorkeling dan diving. Dengan suasana yang tenang, pantai Nusa Dua menawarkan pengalaman yang cocok untuk relaksasi dan kesenangan"
            img1={NusaDua1}
            img2={NusaDua2}/>
        </div>
    )
}

export default Destination;