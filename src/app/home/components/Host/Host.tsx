import { ButtonOutline } from '@/app/components'
import { SectionTitle } from '@/app/components'

const hosts = [
  {
    img: 'https://a0.muscache.com/im/pictures/mediaverse/A4RE-PLP/original/88139d34-f308-43fc-908f-a07b893d794b.jpeg?im_w=1200&im_q=highq',
    name: 'Nani',
    location: 'Resident & Host Dallas, TX',
  },
  {
    img: 'https://a0.muscache.com/im/pictures/mediaverse/A4RE-PLP/original/46faca6b-df8a-4b76-9d45-d8bac7151141.jpeg?im_w=1200&im_q=highq',
    name: 'Jeff and Amador',
    location: 'Residents & Hosts San Diego, CA',
  },
  {
    img: 'https://a0.muscache.com/im/pictures/mediaverse/A4RE-PLP/original/2dbad1eb-dc50-4ed4-b796-ebcf2b236139.jpeg?im_w=1200&im_q=highq',
    name: 'Buddy',
    location: 'Resident & Host Denver, CO',
  },
]

const Host = () => {
  return (
    <div data-testid="hostSection" className="px-0 pb-12 pt-0 md:px-[10%]">
      <div className="px-0 md:px-20">
        <div className="px-6 md:px-0">
          <SectionTitle>
            <div>Need a place where you can host?</div>
            <div>Try Airbnb-friendly apartments</div>
          </SectionTitle>
        </div>
        <div
          className="gap-0 flex md:gap-8"
          style={{
            scrollbarWidth: 'none',
            overflow: 'auto',
          }}
        >
          {hosts.map((item, i) => (
            <div
              key={`host-${i}`}
              className={`px-[6px] ${
                i > 0 && i < hosts.length - 1 && 'flex-70'
              } ${i === 0 && 'pl-6 flex-75 md:pl-0 '} ${
                i === hosts.length - 1 && 'pr-6 flex-75 md:pr-0 '
              } md:flex-1`}
            >
              <img
                src={item.img}
                className="rounded-xl mb-4"
                width={'100%'}
                height={180}
              />
              <div className="text-center font-medium text-xs">{item.name}</div>
              <div className="text-center text-xs">{item.location}</div>
            </div>
          ))}
        </div>
        <div className="px-6 md:px-0 mb-8 text-left text-base md:text-center md:mb-12 mt-6 md:text-2xl">
          We’ve partnered with apartment buildings across the US so you can rent
          a place to live and host on Airbnb part-time. The typical host earned
          <strong>{` $3650/year `}</strong> and hosted 28 nights. *
        </div>
        <div className="px-6 md:px-0 text-xs text-center">
          *The typical Host earnings amount represents the median amount of
          earnings for Hosts in US Airbnb-friendly apartment buildings between
          Jan1 - Dec 31, 2023, according to internal Airbnb data for revenue
          earned by Hosts.
        </div>
        <div className="px-6 md:px-0 md:float-center md:flex md:justify-center md:mt-6">
          <ButtonOutline>Explore Cities</ButtonOutline>
        </div>
      </div>
    </div>
  )
}

export default Host
