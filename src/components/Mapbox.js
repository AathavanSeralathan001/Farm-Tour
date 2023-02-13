import React, {useState} from 'react';
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {Marker, NavigationControl, Popup, FullscreenControl, GeolocateControl} from "react-map-gl";


export default function Mapbox() {
    const [lng, setLng] = useState(77.47984226456911);
    const [lat, setLat] = useState(10.987384851638415);
    
    const [palanilng, setLng1] = useState(77.5004934);
    const [palanilat, setLat1] = useState(10.4978128);
    
    const [tirupurlng, setLng2] = useState(77.3472673);
    const [tirupurlat, setLat2] = useState(11.1671878);
  
    const [gujaratlng, setLng3] = useState(71.745261);
    const [gujaratlat, setLat3] = useState(22.3850051);
  
    const [rajastanlng, setLng4] = useState(73.7684549);
    const [rajastanlat, setLat4] = useState(26.8105777);
  
    const [agralng, setLng5] = useState(78.0098161);
    const [agralat, setLat5] = useState(27.1752554);
  
    const [hyderabadlng, setLng6] = useState(78.4740613);
    const [hyderabadlat, setLat6] = useState(17.360589);
  
    const [munnarlng, setLng7] = useState(77.0600915);
    const [munnarlat, setLat7] = useState(10.0869959);
  
    const [nainitallng, setLng8] = useState(79.4154809);
    const [nainitallat, setLat8] = useState(29.2947829);
  
    const [bilaspurlng, setLng9] = useState(79.298385);
    const [bilaspurlat, setLat9] = useState(28.8680526);
  
    return (
      <div className='container App'>
        <div className='row'>
          <div className='col'>
         
            <Map 
              mapboxAccessToken="pk.eyJ1IjoiYXNlZWxqYWZlciIsImEiOiJjbDl6dXA0cnMwaXd5M3ZudmMyZXNzNDk3In0.HONSdaCJzAwwTWudutUjbQ"
              style={{width:"1000px",height:"1000px",borderRadius:"15px",border:"1px solid black", marginLeft:"50px"}}  //marginLeft:"640px//</div>
              initialViewState={{longitude:lng, latitude:lat}}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              
            >
              <Marker longitude={lng} latitude={lat}  />
              <Marker longitude={palanilng} latitude={palanilat}/>
              <Marker longitude={tirupurlng} latitude={tirupurlat}/>
              <Marker longitude={gujaratlng} latitude={gujaratlat}/>
              <Marker longitude={rajastanlng} latitude={rajastanlat}/>
              <Marker longitude={agralng} latitude={agralat}/>
              <Marker longitude={hyderabadlng} latitude={hyderabadlat}/>
              <Marker longitude={munnarlng} latitude={munnarlat}/>
              <Marker longitude={nainitallng} latitude={nainitallat}/>
              <Marker longitude={bilaspurlng} latitude={bilaspurlat}/>
              <NavigationControl position='bottom-right'/>
              <GeolocateControl/>
              <FullscreenControl/>
              
            </Map>
          </div>
        </div>
      </div>
    );
  
}



