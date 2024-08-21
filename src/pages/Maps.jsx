import React from 'react'
import Header from '../componants/Header'
import Footer from '../componants/Footer'
import Button from '../componants/Button'
import Map from '../componants/Map'

const Maps = () => {
  return (
    <>
      <Header bgColor="purple-100" titleColor="gray-900" title="Branches" />

      <div className='py-[100px] w-[1920px] m-auto shadow-lg bg-gray-700 text-slate-300'>
        <div className='text-center p-[20px]'>
          <div className='text-4xl p-[40px]'>
            <h2>Our branches: </h2>
          </div>
          <div className='text-xl'>
            <ul>
              <li className='m-5'> ~ Budapest, Hungária 162 ~ </li>
              <li className='m-5'> ~ Kriegsstraße 45 ~ </li>
              <li className='m-5'> ~ Nicosia CY ~ </li>
              <li className='m-5'> ~ Baznīcas iela 20-22 ~ </li>
            </ul>
          </div>
        </div>

        <div className='m-[auto] my-8 text-center text-4xl'>
          <h2 className='m-[auto] '>Maps</h2>
        </div>
        <Map />

      </div>


      <Footer />
    </>
  )
}

export default Maps