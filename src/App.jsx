import './App.css';
import { IoCarSportSharp } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { useEffect, useState } from 'react';
import carData from './CarsData';

function App() {
  const [primary, changer] = useState(carData);
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonPlay = (bodytype) => {
    const filtering = carData.filter((CarType) => {
      return CarType.category === bodytype;
    });
    changer(filtering);
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.mainbox');

    cards.forEach(card => {
      card.classList.remove('animation-data');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.classList.add('animation-data');
        });
      });
    });
  }, [primary]);

  return (
    <>
      <nav className="w-full h-20 bg-gradient-to-r from-[#350068] to-[#FF6978] flex items-center px-3">
        <div className="container flex justify-between items-center">
          <img className="w-[150px] sm:w-[200px] h-[40px] sm:h-[60px]" src="./logo.png" alt="logo" />
          <button
            className="lg:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
          <ul
            className={`${menuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row gap-2 z-50 sm:gap-5 items-center w-full lg:w-auto absolute lg:static top-20 lg:top-auto left-0 lg:left-auto bg-purple-700 lg:bg-transparent px-4 lg:px-0 py-4 lg:py-0`}
          >
            <li>
              <button
                onClick={() => changer(carData)}
                className="w-[80px] sm:w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-r from-[#FCFB62] to-[#1affd1] rounded-3xl text-lg sm:text-2xl font-bold"
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => buttonPlay('Supercar')}
                className="w-[120px] sm:w-[160px] h-[40px] sm:h-[50px] bg-gradient-to-r from-[#91F1EF] to-[#FFD5E0] rounded-2xl text-base sm:text-xl font-medium flex justify-center items-center gap-2 hover:bg-white"
              >
                <IoCarSportSharp className="text-2xl sm:text-3xl" />Supercars
              </button>
            </li>
            <li>
              <button
                onClick={() => buttonPlay('SUV')}
                className="w-[120px] sm:w-[160px] h-[40px] sm:h-[50px] bg-gradient-to-r from-[#91F1EF] to-[#FFD5E0] rounded-2xl text-base sm:text-xl font-medium flex justify-center items-center gap-2"
              >
                <FaCarSide className="text-3xl" />SUVs
              </button>
            </li>
            <li>
              <button
                onClick={() => buttonPlay('Sport Sedan')}
                className="w-[120px] sm:w-[160px] h-[40px] sm:h-[50px] bg-gradient-to-r from-[#91F1EF] to-[#FFD5E0] rounded-2xl text-base sm:text-xl font-medium flex justify-center items-center gap-2"
              >
                <FaCar className="text-2xl sm:text-3xl" />Sedans
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="flex gap-5 flex-wrap justify-center mt-10">
          {primary.map((product, n) => (
            <div key={n} className="mainbox">
              <div className="w-[300px] h-[400px] bg-gradient-to-r from-[#93A5CF] to-[#E4EfE9] rounded-md mb-6">
                <div>
                  {product.discount_price && (
                    <h1 className="absolute z-[1] bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-lg mt-3 ml-4 text-xl text-[#fff] font-bold">Offer!</h1>
                  )}
                  <img className="w-full h-[200px] rounded-t-md mb-5 relative" src={product.image_url} alt="Car Image" />
                </div>
                <h1 className="text-center font-bold text-3xl">{product.model}</h1>
                <h2 className="text-center font-semibold text-xl mt-3 text-[#12166c]">Horsepower: {product.horsepower} hp</h2>
                <p className="text-center font-extrabold text-xl mt-3 text-[#6c1e12]">
                  {product.discount_price ? product.discount_price : product.actual_price}
                  <span className="ml-7 text-gray-400 line-through text-center">
                    {product.discount_price && product.actual_price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
