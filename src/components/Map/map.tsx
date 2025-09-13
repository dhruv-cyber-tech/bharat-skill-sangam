// src/components/Map/Map.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ gurus }) => {
  return (
    <MapContainer center={[22.3072, 73.1812]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {gurus.map(guru => (
        <Marker key={guru.id} position={[guru.latitude, guru.longitude]}>
          <Popup>{guru.full_name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};