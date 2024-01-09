import "../../assets/css/ArticleStyles.css";
import Article1 from "../../assets/images/article-1.jpg";
import Article2 from "../../assets/images/article-2.jpg";
import Article3 from "../../assets/images/article-3.jpeg";
import Article4 from "../../assets/images/article-4.jpg";
import Article5 from "../../assets/images/article-5.jpg";
import Article6 from "../../assets/images/article-6.jpg";
import { Link } from 'react-router-dom';

const ArticlesCard = () => {
  return (
    <div className="box-container">
    <div className="box">
        <div className="image">
            <img src={Article1} alt="blog 1"></img>
        </div>
        <div className="content">
            <div className="icons">
                <a href="#"><i className="fa-regular fa-calendar"></i> 01 November 2023</a>
                <a href="#"><i className="fa-solid fa-user"></i> by admin</a>
            </div>
            <h3>6 Tips Penting Sebelum Melakukan Traveling</h3>
            <p>Traveling ke sebuah destinasi impian untuk berlibur memang menyenangkan</p>
            <Link to="/articles-1" className="btn-blogs">read more <i cass="fas fa-link"></i></Link>
        </div>
    </div>
    <div className="box">
        <div className="image">
            <img src={Article2} alt="blog 2"></img>
        </div>
        <div className="content">
            <div className="icons">
                <a href="#"><i className="fa-regular fa-calendar"></i> 5 November 2023</a>
                <a href="#"><i className="fa-solid fa-user"></i> by admin</a>
            </div>
            <h3>8 Tips Solo Traveling Aman untuk Pemula</h3>
            <p>Mungkin belum banyak orang yang suka pergi traveling sendirian atau menjadi solo traveler. </p>
            <Link to="#" className="btn-blogs">read more <i cass="fas fa-link"></i></Link>
        </div>
    </div>
    <div className="box">
        <div className="image">
            <img src={Article3} alt="blog 3"></img>
        </div>
        <div className="content">
            <div className="icons">
                <a href="#"><i className="fa-regular fa-calendar"></i> 10 November 2023</a>
                <a href="#"><i className="fa-solid fa-user"></i> by admin</a>
            </div>
            <h3>Tips Liburan Menyenangkan Akhir Tahun</h3>
            <p>Akhir tahun menjadi salah satu momen yang paling dinantikan untuk travelling.</p>
            <a href="#" className="btn-blogs">read more <i cass="fas fa-link"></i></a>
        </div>
    </div>
    <div className="box">
        <div className="image">
            <img src={Article4} alt="blog 4"></img>
        </div>
        <div className="content">
            <div className="icons">
                <a href="#"><i className="fa-regular fa-calendar"></i> 15 November 2023</a>
                <a href="#"><i className="fa-solid fa-user"></i> by admin</a>
            </div>
            <h3>4 Cara Belanja Aman & Praktis Saat Traveling</h3>
            <p>Belanja biasanya menjadi salah satu kegiatan yang masuk dalam itinerary saat traveling. </p>
            <a href="#" className="btn-blogs">read more <i cass="fas fa-link"></i></a>
        </div>
    </div>
    <div className="box">
        <div className="image">
            <img src={Article5} alt="blog 5"></img>
        </div>
        <div className="content">
            <div className="icons">
                <a href="#"><i className="fa-regular fa-calendar"></i> 20 November 2023</a>
                <a href="#"><i className="fa-solid fa-user"></i> by admin</a>
            </div>
            <h3>Perbanyak Cairan Saat Mudik Naik Pesawat</h3>
            <p>Traveler yang mudik menggunakan pesawat terbang sebaiknya mempersiapkan diri</p>
            <a href="#" className="btn-blogs">read more <i cass="fas fa-link"></i></a>
        </div>
    </div>
    <div className="box">
        <div className="image">
            <img src={Article6} alt="blog 6"></img>
        </div>
        <div className="content">
            <div className="icons">
                <a href="#"><i className="fa-regular fa-calendar"></i> 25 November 2023</a>
                <a href="#"><i className="fa-solid fa-user"></i> by admin</a>
            </div>
            <h3>Tips Simple Naik Kereta Api, Coba Catat Deh</h3>
            <p>Layanan kereta api saat ini sudah jauh lebih baik dan terus diperbaiki sepanjang waktu.</p>
            <a href="#" className="btn-blogs">read more <i cass="fas fa-link"></i></a>
        </div>
    </div>
  </div>
  )
}

export default ArticlesCard;


