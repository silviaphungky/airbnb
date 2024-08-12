import { useEffect, useRef, useState } from 'react'
import OverlayContainer from './OverlayContainer'

type MapProps = {
  center: google.maps.LatLngLiteral
  zoom: number
}

const Apartments = [
  {
    id: 1,
    image: 'https://storage.yandexcloud.net/apartment-images/2.jpg',
    area: 34.9,
    kitchen_area: null,
    address: 'ул. Новоалексеевская  4к4',
    lat: 55.80562399999999,
    lng: 37.641239,
    rooms_number: 1,
    bedrooms_number: 1,
    restrooms_number: 1,
    floor: 3,
    floor_count: 14,
    rent: 1500,
  },
  {
    id: 2,
    image: 'https://storage.yandexcloud.net/apartment-images/10_S939Rcf.jpg',
    area: 47,
    kitchen_area: null,
    address: 'Valovaya street 31',
    lat: 55.66497999999999,
    lng: 37.857464,
    rooms_number: 1,
    bedrooms_number: 1,
    restrooms_number: 1,
    floor: 6,
    floor_count: 9,
    rent: 2000,
  },
  {
    id: 3,
    image: 'https://storage.yandexcloud.net/apartment-images/07_uvV7gIk.jpg',
    area: 40.9,
    kitchen_area: null,
    address: 'academic Volgyn street 8A',
    lat: 55.68271799999999,
    lng: 37.544263,
    rooms_number: 3,
    bedrooms_number: 2,
    restrooms_number: 1,
    floor: 2,
    floor_count: 5,
    rent: 3000,
  },
]

const Map = ({ center, zoom }: MapProps) => {
  const ref = useRef(null)
  const [map, setMap] = useState<any | null>(null)

  useEffect(() => {
    // we need to save google-map object for adding markers and routes in future
    if (ref.current) {
      // here will connect map frame to div element in DOM by using ref hook
      let createdMap = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        disableDefaultUI: true,
        clickableIcons: false,
      })
      setMap(createdMap)
    }
  }, [])

  return (
    <div
      ref={ref}
      id="map"
      className="min-h-[300px] w-full h-full md:min-h-[550px]  rounded-3xl"
    >
      {Apartments.map((apartment, index) => (
        <OverlayContainer
          map={map}
          position={{
            lat: apartment.lat,
            lng: apartment.lng,
          }}
          key={index}
        >
          <div
            key={index}
            style={{ background: 'white', width: 'max-content' }}
            className="rounded-[20px] py-2 px-3 border-[1px] shadow-xl"
          >
            <div className="font-bold">{`Rp ${apartment.rent}`}</div>
          </div>
        </OverlayContainer>
      ))}
    </div>
  )
}

export default Map
