import "../../assets/css/TripStyles.css";
import TripData from "../lists/TripList";
import Trip1 from "../../assets/images/2.jpg"; 
import Trip2 from "../../assets/images/6.jpg";
import Trip3 from "../../assets/images/7.jpg";

function Trip() {
    return(
        <div className="trip">
            <h1>Services</h1>
            <p>Kami melayani Anda mengunjungi beberapa tempat tempat indah di Semarang</p>
            <div className="tripcard">
                <TripData 
                image={Trip1}
                heading = "Paket 1 Hari (1D Tour)"
                text="Paket tour semarang 1 hari murah dengan destinasi yang menarik dan istimewa. Kami mengajak Anda untuk menjelajahi daya tarik terbaik kota ini dalam satu hari seperti Kota Lama dan bangunan bersejarah lainnya."
                />
                <TripData 
                image={Trip2}
                heading = "Paket 2 Hari (2D1N Tour)"
                text="Paket tour semarang 2 hari 1 Malam dengan banyak pilihan destinasi yang menarik. Kami mengajak Anda menjelahi berbagai destinasi seperti Kota Lama, Lawang Sewu, Dusun Semilir, dan masih banyak lainnya."
                />
                <TripData 
                image={Trip3}
                heading = "Paket 3 Hari (3D2N) Tour"
                text="Paket tour semarang 3 hari 2 Malam dengan banyak pilihan destinasi yang menarik. Kami mengajak Anda menjelahi berbagai destinasi seperti Lawang Sewu, Goa Kreo, Sam Poo Kong dan masih banyak lainnya. "
                />
            </div>
        </div>
    )
}

export default Trip;