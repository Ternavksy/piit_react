import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

// Компонент для добавления маркеров по клику
const AddMarker = ({ markers, setMarkers }) => {
    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setMarkers([...markers, { id: Date.now(), position: [lat, lng], name: "New Point" }]);
        }
    });

    return null;
};

const MapPage = () => {
    // Список точек на карте
    const [markers, setMarkers] = useState([
        { id: 1, position: [48.8584, 2.2945], name: "Eiffel Tower" },
        { id: 2, position: [40.6892, -74.0445], name: "Statue of Liberty" }
    ]);

    // Функция для изменения имени точки
    const editMarker = (id, newName) => {
        setMarkers(markers.map(marker => marker.id === id ? { ...marker, name: newName } : marker));
    };

    return (
        <div className={styles.mapContainer}>
            <h2 className={styles.title}>Map Management</h2>
            <MapContainer center={[51.505, -0.09]} zoom={3} className={styles.map}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <AddMarker markers={markers} setMarkers={setMarkers} />
                {markers.map(marker => (
                    <Marker key={marker.id} position={marker.position}>
                        <Popup>
                            <input
                                type="text"
                                defaultValue={marker.name}
                                onBlur={(e) => editMarker(marker.id, e.target.value)}
                            />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapPage;
