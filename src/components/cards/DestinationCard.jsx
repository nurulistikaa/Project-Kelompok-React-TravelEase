import KotaLama1 from "../../assets/images/2.jpg";
import KotaLama2 from "../../assets/images/3.jpg";
import LawangSewu1 from "../../assets/images/4.jpg";
import LawangSewu2 from "../../assets/images/5.jpg";
import DestinationData from "../lists/DestinationList";
import "../../assets/css/DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>TravelEase memberikan Anda kesempatan untuk menjelajahi berbagai keindahan tempat di Semarang</p>

            <DestinationData 
            className="first-des"
            heading="Kota Lama Semarang"
            text="Kota Lama Semarang, juga dikenal sebagai Little Netherlands adalah kawasan bersejarah yang memukau di Semarang, Indonesia. Dengan arsitektur kolonial Belanda yang memesona, jalan-jalan sempit yang dipenuhi bangunan kuno, dan gang-gang bersejarah, kota ini memancarkan pesona masa lalu yang kaya. Bangunan-bangunan bersejarah yang ada didalamnya menambah daya tariknya sebagai destinasi wisata yang memikat bagi penggemar sejarah dan keindahan arsitektur klasik. Kawasan ini juga menawarkan pengalaman berbelanja dan kuliner yang unik disekitarnya."
            img1={KotaLama1}
            img2={KotaLama2}/>

            <DestinationData 
            className="first-des-reverse"
            heading="Lawang Sewu"
            text="Lawang Sewu adalah sebuah bangunan bersejarah yang terletak di Semarang, Jawa Tengah, Indonesia. Nama Lawang Sewu berasal dari bahasa Jawa yang berarti seribu pintu, meskipun sebenarnya bangunan ini tidak memiliki seribu pintu. Bangunan ini memiliki arsitektur kolonial Belanda yang megah karena memiliki banyak pintu dan jendela. Awalnya digunakan sebagai kantor pusat perusahaan kereta api Belanda, kini menjadi salah satu ikon Semarang yang sering dikunjungi oleh wisatawan untuk menikmati arsitektur bersejarahnya."
            img1={LawangSewu1}
            img2={LawangSewu2}/>
        </div>
    )
}

export default Destination;