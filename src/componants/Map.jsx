import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import MyMarker from './MyMarker';

const Map = () => {
    const [position, setPosition] = useState([51.505, -0.09]);

    const handleSelectChange = (e) => {
        const selectedOption = e.target.value;
        switch (selectedOption) {
            case 'Budapest, Hungária 162':
                setPosition([47.5144370321716, 19.09417889791732]); // Координаты Будапешта
                break;
            case 'Kriegsstraße 45':
                setPosition([49.00526787956524, 8.395921310629042]); // Координаты района в Германии
                break;
            case 'Nicosia CY':
                setPosition([35.1856, 33.3823]); // Координаты Никосии, Кипр
                break;
            case 'Baznīcas iela 20-22':
                setPosition([56.95768602295358, 24.12131595756207]); // Координаты Риги, Латвия
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div className="w-[700px] m-auto ">
                <div className='flex'>
                    <select
                        onChange={handleSelectChange}
                        className="h-10 m-2 shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:drop-shadow-lg"
                    >
                        <option value="">Choose location</option>
                        <option value="Budapest, Hungária 162">Budapest, Hungária 162</option>
                        <option value="Kriegsstraße 45">Kriegsstraße 45</option>
                        <option value="Nicosia CY">Nicosia CY</option>
                        <option value="Baznīcas iela 20-22">Baznīcas iela 20-22</option>
                    </select>
                </div>
            </div>
            <div className="w-[700px] h-[500px] m-auto my-8 border-gray border-[1px] rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <MyMarker pos={position} />
                </MapContainer>
            </div>
        </>
    );
};

export default Map;
