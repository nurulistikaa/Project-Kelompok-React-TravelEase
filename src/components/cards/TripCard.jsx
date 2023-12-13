import "../../assets/css/TripStyles.css";
import TripData from "../lists/TripList";
import Trip1 from "../../assets/images/7.jpg"; 
import Trip2 from "../../assets/images/6.jpg";
import Trip3 from "../../assets/images/2.jpg";

function Trip() {
    return(
        <div className="trip">
            <h1>Services</h1>
            <p>Kami melayani Anda mengunjungi beberapa tempat tempat indah di Bali</p>
            <div className="tripcard">
                <TripData 
                image={Trip1}
                heading = "Pantai Lagoon"
                text="Pantai Lagoon dikenal dengan kehadiran laguna air yang tenang, pasir putih yang halus, dan pepohonan hijau yang membingkai pantai sehingga tempat ini diminati para pelancong."
                />
                <TripData 
                image={Trip2}
                heading = "Pantai Sanur"
                text="Pantai Sanur dikenal karena pantainya yang lembut dan tenang, Sanur menawarkan pemandangan matahari terbit yang menakjubkan dan suasana yang tenang daripada beberapa pantai lainnya di Bali."
                />
                <TripData 
                image={Trip3}
                heading = "Nusa Penida"
                text="Nusa Penida, sebuah pulau eksotis yang terletak di sebelah tenggara Bali, Indonesia, memikat dengan pesonanya yang alami. Dikenal karena keindahan alamnya yang memukau."
                />
            </div>
        </div>
    )
}

export default Trip;