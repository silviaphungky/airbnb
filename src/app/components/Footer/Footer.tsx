import Link from 'next/link'
import { IconFb, IconGlobe, IconIg, IconSwitch, IconTwitter } from '../Icons'

const sections = [
  {
    title: 'Support',
    child: [
      {
        text: 'Help Center',
        link: '',
      },
      {
        text: 'AirCover',
        link: '',
      },
      {
        text: 'Anti-discrimination',
        link: '',
      },
      {
        text: 'Disability support',
        link: '',
      },
      {
        text: 'Cancellation options',
        link: '',
      },
      {
        text: 'Report neighborhood concern',
        link: '',
      },
    ],
  },
  {
    title: 'Hosting',
    child: [
      {
        text: 'Airbnb your home',
        link: '',
      },
      {
        text: 'AirCover for Hosts',
        link: '',
      },
      {
        text: 'Hosting resources',
        link: '',
      },
      {
        text: 'Community forum',
        link: '',
      },
      {
        text: 'Hosting responsibly',
        link: '',
      },
      {
        text: 'Airbnb-friendly apartments',
        link: '',
      },
      {
        text: 'Join a free Hosting class',
        link: '',
      },
    ],
  },
  {
    title: 'Airbnb',
    child: [
      {
        text: 'Newsroom',
        link: '',
      },
      {
        text: 'New features',
        link: '',
      },
      {
        text: 'Careers',
        link: '',
      },
      {
        text: 'Investors',
        link: '',
      },
      {
        text: 'Gift cards',
        link: '',
      },
      {
        text: 'Airbnb.org emergency stays',
        link: '',
      },
    ],
  },
]

const socmed = [
  {
    icon: <IconFb />,
    link: '#',
  },
  {
    icon: <IconTwitter />,
    link: '#',
  },
  {
    icon: <IconIg />,
    link: '#',
  },
]

const Footer = () => {
  return (
    <div className="pb-32 pt-10 px-6 border-y-[1px] md:py-10 bg-gray-200 md:px-[10%]">
      <div className="flex gap-4 flex-col md:flex-row">
        {sections.map((item, index) => (
          <div key={`footer-${index}`} className="flex-1">
            <div className="font-medium mb-2">{item.title}</div>
            {item.child.map((child, i) => (
              <div key={`menu-${i}`} className="mb-2 text-sm">
                <Link href={child.link}>{child.text}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex-col-reverse items-left lg:flex-row mt-8 flex justify-between md:items-center">
        <div className="mt-4 flex-wrap w-[180px] gap-1 md:flex-nowrap md:w-max flex md:gap-2 text-sm items-center md:mt-0">
          <div>© 2024 Airbnb, Inc.</div>
          <div>·</div>
          <Link href="#">Terms</Link>
          <div>·</div>
          <Link href="#">Sitemap</Link>
          <div>·</div>
          <Link href="#">Privacy</Link>
          <div>·</div>
          <Link href="#" className="flex gap-2 items-center">
            <span>Your Privacy Choices</span>
            <span>
              <IconSwitch />
            </span>
          </Link>
        </div>
        <div className="flex gap-3 items-center text-sm">
          <div className="flex gap-2 items-center cursor-pointer">
            <IconGlobe />
            <div>English (US)</div>
          </div>
          <div className="cursor-pointer">
            <span className="font-medium">Rp</span> IDR
          </div>
          <div className="hidden md:flex lg:flex gap-2">
            {socmed.map((item, index) => (
              <Link href={item.link} key={index}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
