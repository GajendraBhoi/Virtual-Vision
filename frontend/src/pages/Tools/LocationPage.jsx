import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationPage = () => {
    const [position, setPosition] = useState(null);
    const [address, setAddress] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition([latitude, longitude]);

            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                .then((res) => res.json())
                .then((data) => {
                    const fullAddress = data.display_name;
                    setAddress(fullAddress);

                    // Speak first 3 words
                    const words = fullAddress.split(' ').slice(0, 3).join(' ');
                    const msg = new SpeechSynthesisUtterance(words);
                    window.speechSynthesis.speak(msg);
                });
        });
    }, []);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '50%' }}>
                {position && (
                    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                        <Marker position={position}>
                            <Popup>Your Location</Popup>
                        </Marker>
                    </MapContainer>
                )}
            </div>
            <div style={{ width: '50%', padding: '20px' }}>
                <h2>Your Location</h2>
                {address ? <p>{address}</p> : <p>Loading...</p>}
            </div>
        </div>
    );
};

export default LocationPage;
