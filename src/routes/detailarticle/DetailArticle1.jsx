import Navbar from "../../layout/Navbar";
import "../../assets/css/DetailArticle1.css";
import Article1 from "../../assets/images/article-1.jpg";
import Footer from "../../layout/Footer";


function DetailArticle1() {
    return (
      <>
      <Navbar />
      <div className="article">
        <h1 className="judul">6 Tips Penting Sebelum Melakukan Traveling</h1>
        <p className="postdate">posted on 1 November 2023</p>
      </div>
      <div>
      <img src={Article1} className="articleimages" alt="blog 1"></img>
      </div> 
      <p className="Isi">Traveling ke sebuah destinasi impian untuk berlibur memang jadi kegiatan yang menyenangkan dan dinanti-nantikan semua orang. Apalagi setelah kesibukan yang dijalani setiap harinya, liburan ke destinasi wisata favorit bisa membantu tubuh dan pikiran menjadi lebih rileks. Biar traveling tetap nyaman, kamu perlu melakukan persiapan yang matang sebelum berangkat.  Apa aja sih yang harus dipersiapkan sebelum traveling? Ini dia 6 tips penting yang wajib kamu lakukan.
      </p>
      <p className="Isi">
        1. Rencanakan destinasi liburan dan waktunya <br></br>
        Tips yang pertama adalah menentukan destinasi liburan beserta waktu berangkatnya. Ini wajib banget dilakukan, biar kamu bisa memesan tiket dan memesan hotel favorit dari jauh-jauh hari. Biasanya, harga tiket akan jauh lebih murah jika dipesan lama sebelum keberangkatan.
      </p>
      <p className="Isi">
        2. Buat itinerary yang jelas <br></br>
        Jadwal yang jelas mulai dari berangkat sampai pulang kembali ke rumah, juga akan membuat liburanmu semakin nyaman. Dalam membuat itinerary, kamu harus memperhatikan waktu dan tempat tujuan wisata yang diinginkan. Pastikan juga untuk membuat daftar tempat wisata berdekatan yang bisa kamu kunjungi sekaligus ya, biar lebih menghemat waktu perjalanan kamu. 
      </p>
      <p className="Isi">
        3. Persiapkan semua dokumen penting yang diperlukan <br></br>
        Berbagai dokumen penting yang diperlukan selama perjalanan wajib untuk disiapkan, terutama buat kamu yang akan melakukan traveling ke luar kota atau ke luar negeri menggunakan pesawat. Dokumen seperti kartu identitas, visa, dan paspor harus kamu masukkan ke dalam dompet traveling yang mampu memuat banyak kartu dengan aman dan rapi.
      </p>
      <p className="Isi">
        4. Buat daftar barang yang akan dibawa <br></br>
        Selain dokumen penting, barang-barang yang akan kamu bawa selama traveling juga harus dipersiapkan jauh-jauh hari. Gak usah terlalu banyak, kamu cukup bawa barang secukupnya dan masukkan ke dalam koper yang akan kamu gunakan selama traveling. Tambahkan juga tas organizer untuk membuat barang tersusun lebih rapi. 
      </p>
      <p className="Isi">
        5. Siapkan obat-obatan yang diperlukan dalam satu wadah <br></br>
        Obat-obatan dan vitamin juga jangan sampai ketinggalan ya. Biar mudah dibawa traveling, simpan obat-obatan dan vitamin ke dalam kotak penyimpanan obat kecil yang compact dan aman untuk digunakan. Jangan sampai momen bersantai dan berlibur kamu jadi rusak karena tiba-tiba tubuh kamu sakit, ya. 
      </p>
      <p className="Isi">
        6. Istirahat yang cukup sebelum traveling <br></br>
        Sebelum melakukan traveling yang jauh, pastikan juga tubuh kamu mendapatkan istirahat yang cukup, ya. Makanya, persiapan traveling wajib kamu lakukan dari jauh-jauh hari, agar ketika mendekati waktu keberangkatan, kamu bisa beristirahat dengan lebih leluasa dan tidak terburu-buru.
      </p>

      <Footer />
      </>
    )
}


export default DetailArticle1;



