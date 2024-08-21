import React, { useEffect, useState } from 'react';
import Header from '../componants/Header';
import Footer from '../componants/Footer';
import Button from '../componants/Button';
import phoneArray from '../phoneArray.json';

// carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const sliceTheArray = (arr, num) => {
  const start = (num - 1) * 3;
  return arr.slice(start, start + 3);
};

const Home = () => {
  const [value, setValue] = useState('');
  const [choose, setChoose] = useState('price');
  const [filteredArr, setFilteredArr] = useState([]);
  const [currentArr, setCurrentArr] = useState([]);
  const [btnNumber, setBtnNumber] = useState(1);
  const [cart, setCart] = useState([]); // Состояние для корзины

  useEffect(() => {
    setFilteredArr(phoneArray);
    setCurrentArr(sliceTheArray(phoneArray, 1));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const newArr = filteredPhone(phoneArray, choose, value);
    setFilteredArr(newArr);
    setCurrentArr(sliceTheArray(newArr, 1));
    setBtnNumber(1);
  };

  const handleButtonClick = (pageNumber) => {
    setCurrentArr(sliceTheArray(filteredArr, pageNumber));
    setBtnNumber(pageNumber);
  };

  const nextBtn = () => {
    if (btnNumber < Math.ceil(filteredArr.length / 3)) {
      handleButtonClick(btnNumber + 1);
    }
  };

  const backBtn = () => {
    if (btnNumber > 1) {
      handleButtonClick(btnNumber - 1);
    }
  };

  const buttonsGenerator = (numOfButtons) => (
    Array.from({ length: numOfButtons }, (_, i) => (
      <Button key={i} number={i + 1} func={() => handleButtonClick(i + 1)} page={btnNumber} />
    ))
  );

  const filteredPhone = (phones, criterion, value) => {
    if (!value) return phones;
    return phones.filter(phone => phone[criterion].toString().toLowerCase().includes(value.toLowerCase()));
  };

  const addToCart = (phone) => {
    setCart([...cart, phone]);
  };

  const removeFromCart = (phoneToRemove) => {
    setCart(cart.filter(phone => phone.id !== phoneToRemove.id));
  };

  return (
    <div className="bg-gray-700">
      <Header titleColor="black" title="Home" />

      <div className="carousel-container mt-[100px]">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          <div>
            <img src="https://staticfiles.warthunder.com/upload/image/0_Wallpaper_Renders/Aircraft/1920x1080_seek_and_destroy_logo_eng_d31e85bdeb023aaed2a306befa4b3492.jpg" alt="Pic 1" />
          </div>
          <div>
            <img src="https://static.warthunder.com/upload/image/0_Wallpaper_Renders/1920x1080_logo_fire_and_ice_finnish_ground_forces_eng_2589dca47849801babaa7291e7c725df.jpg" alt="Pic 2" />
          </div>
          <div>
            <img src="https://staticfiles.warthunder.com/upload/image/0_Wallpaper_Renders/1920x1080_air_superiority_logo_0af39eb7a0d03993c71023344a3ed58b.jpg" alt="Pic 3" />
          </div>
          <div>
            <img src="https://static.warthunder.com/upload/image/0_Wallpaper_Renders/Other/1920x1080_la_royale_logo_894a1ccecf55d0605567aed1545a6e28.jpg" alt="Pic 4" />
          </div>
          <div>
            <img src="https://static.warthunder.com/upload/image/0_Wallpaper_Renders/1920x1080_sky_guardians_ah_6m_logo_eng_a4d2d590a78efabfd7c37161f6fc191c.jpg" alt="Pic 5" />
          </div>
        </Carousel>
      </div>

      <div className='py-[180px] text-xl px-[180px] text-slate-300'>
        <section className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Welcome to War Thunder store!</h1>
          <p className='text-lg mb-8'>Here you can buy premium vehicles, golden eagles and a premium account!</p>
        </section>

        <section className='mt-8 mb-4 mx-auto max-w-lg text-center'>
          <form onSubmit={handleSearch}>
            <div className="flex items-center justify-center">
              <input
                id="search"
                type="text"
                placeholder="Enter value to search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-10 m-2 shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:drop-shadow-lg"
              />
              <select
                value={choose}
                onChange={(e) => setChoose(e.target.value)}
                className="h-10 px-3 m-2 text-sm text-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              >
                <option value="price">Price</option>
                <option value="nation">Nation</option>
                <option value="model">Model</option>
              </select>
              <button
                type="submit"
                className="h-[40px] bg-cyan-600 hover:bg-cyan-800 text-white font-bold px-4 rounded-full focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105 link inline-block"
              >
                Search
              </button>
            </div>
          </form>
        </section>

        <section className='my-12'>
          <h2 className='text-3xl font-semibold mb-6'>Our Products</h2>
          <div className='grid grid-cols-3 gap-6'>
            {currentArr.map(phone => (
              <div key={phone.id} className='border p-4 rounded-lg'>
                <img src={phone.image} alt={phone.model} className='w-full h-auto mb-5' />
                <h3 className='text-2xl font-bold'>{phone.model}</h3>
                <p className='text-xl'>{phone.nation}</p>
                <p className='text-xl'>${phone.price}</p>
                <p className='text-lg'>{phone.description}</p>
                <button
                  className='mt-4 bg-yellow-400 text-white py-2 px-4 rounded  transform transition-transform duration-300 hover:scale-105 link inline-block hover:bg-yellow-600 font-bold'
                  onClick={() => addToCart(phone)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>



        <div className="flex w-[800px] m-auto justify-around">
          <Button dis={btnNumber === 1} number="Back" name="Back" func={backBtn} />
          {buttonsGenerator(Math.ceil(filteredArr.length / 3))}
          <Button dis={btnNumber === Math.ceil(filteredArr.length / 3)} number="Next" name="Next" func={nextBtn} />
        </div>

        <section className='my-12'>
          <h2 className='text-3xl font-semibold mb-6'>Shopping Cart</h2>
          <div className='border p-4 rounded-lg'>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className='flex justify-between items-center'>
                    <span>{item.model} - ${item.price}</span>
                    <button
                      className='bg-red-600 text-white px-2 py-1 rounded  transform transition-transform duration-300 hover:scale-105 link inline-block hover:bg-red-800 font-bold'
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className='my-12'>
          <h2 className='text-3xl font-semibold mb-6'>Why Choose War Thunder Premium Shop?</h2>
          <div className='grid grid-cols-2 gap-6'>
            <div className='border p-4 rounded-lg'>
              <h3 className='text-2xl font-bold mb-2'>Exclusive Content</h3>
              <p>Access a wide range of premium vehicles, boosters, and other unique content not available in the standard game. Enhance your gameplay with exclusive items that give you an edge on the battlefield.</p>
            </div>
            <div className='border p-4 rounded-lg'>
              <h3 className='text-2xl font-bold mb-2'>Faster Progression</h3>
              <p>Enjoy faster progression with premium account benefits. Earn more rewards, research vehicles quicker, and climb the ranks with ease.</p>
            </div>
            <div className='border p-4 rounded-lg'>
              <h3 className='text-2xl font-bold mb-2'>Special Offers and Discounts</h3>
              <p>Take advantage of regular discounts and special offers available only in the premium shop. Get the best deals on bundles, premium vehicles, and other in-game content.</p>
            </div>
            <div className='border p-4 rounded-lg'>
              <h3 className='text-2xl font-bold mb-2'>Support the Game's Development</h3>
              <p>By purchasing from the War Thunder Premium Shop, you're directly supporting the continued development of the game. Your contributions help bring new content, improvements, and features to the community.</p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center">
        <iframe width="1000" height="588" src="https://www.youtube.com/embed/DIsdWN78JS4"
          title="&#39;SEEK &amp; DESTROY&#39; UPDATE / WAR THUNDER" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
       
      <Footer />
    </div>
  );
}

export default Home;
