export default function index() {
  return (
    <div id="header-container">
      <img src="img/makanan.jpg" alt="" className="flex min-w-screen" />
      <div className="hero-section">
        <p className="font-poppins-extrabold text-[20px] text-gray-900">
          Penyetan adalah hidangan ayam goreng khas Jawa yang lezat, dengan cita rasa pedas dan gurih yang menggugah selera. 
          Ayam gorengnya diulek atau dipenyet hingga empuk, kemudian disajikan dengan sambal pedas yang menggoda. 
          Selain itu, penyetan biasanya juga disajikan dengan timun segar, tahu goreng, dan tempe, menambah rasa dan tekstur yang berbeda dalam setiap suapan. 
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div class="bg-white">
          <img src="img/m1.jpg" alt="" className="rounded-xl" />
          <p>Steak</p>
        </div>
        <div class="bg-white">
          <img src="img/m2.jpg" alt="" className="rounded-xl" />
          <p>Pizza</p>
        </div>
        <div class="bg-white">
          <img src="img/m3.jpg" alt="" className="rounded-xl" />
          <p>Roti</p>
        </div>
        <div class="bg-white">
          <img src="img/m4.jpg" alt="" className="rounded-x1" />
          <p>Rice roll</p>
        </div>
      </div>
    </div>

  );
}