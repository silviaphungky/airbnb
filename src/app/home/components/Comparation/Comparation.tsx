/* eslint-disable @next/next/no-img-element */
import { IconChecklist, IconX } from '@/app/components/Icons'
import { SectionTitle } from '@/app/components'
import { Fragment } from 'react'
import Link from 'next/link'

const comparations = [
  {
    title: 'Guest identity verification',
    desc: 'Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.',
    airbnb: true,
    competitor: true,
  },
  {
    title: 'Reservation screening',
    desc: 'Our proprietary technology analyzes hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.',
    airbnb: true,
    competitor: false,
  },
  {
    title: '$3M damage protection',
    desc: 'Airbnb reimburses you for damage caused by guests to your home and belongings and includes these specialized protections:',
    airbnb: true,
    competitor: false,
    children: [
      {
        title: 'Art & valuables',
        airbnb: true,
        competitor: false,
      },
      {
        title: 'Auto & boat',
        airbnb: true,
        competitor: false,
      },
      {
        title: 'Pet damage',
        airbnb: true,
        competitor: false,
      },
      {
        title: 'Income loss',
        airbnb: true,
        competitor: false,
      },
      {
        title: 'Deep cleaning',
        airbnb: true,
        competitor: false,
      },
    ],
  },
  {
    title: '$1M liability insurance',
    desc: 'You’re protected in the rare event that a guest gets hurt or their belongings are damaged or stolen.',
    airbnb: true,
    competitor: false,
  },
  {
    title: '24-hour safety line',
    desc: 'If you ever feel unsafe, our app provides one-tap access to specially-trained safety agents, day or night.',
    airbnb: true,
    competitor: false,
  },
]

const Comparation = () => {
  return (
    <div
      data-testid="comparationSection"
      className="px-6 pt-4 pb-16 md:px-[10%] md:pt-12"
    >
      <div className="md:px-20">
        <img
          src="https://a0.muscache.com/im/pictures/5318dacc-6476-4195-8dd2-b9a66fa2efbb.jpg?im_w=480&im_q=highq"
          alt="air cover host"
          className="m-left mb-4 block md:m-auto"
          width={170}
          height={'auto'}
        />
        <SectionTitle>Airbnb it with top‑to‑bottom protection</SectionTitle>
        <table>
          <thead>
            <tr>
              <th className="width-2/4"></th>
              <th className="width-1/4 text-lg font-normal">Airbnb</th>
              <th className="width-1/4 text-lg font-normal">Competitors</th>
            </tr>
          </thead>
          <tbody>
            {comparations.map((item, index) => (
              <Fragment key={`comparison-${index}`}>
                <tr>
                  <td className="w-2/4 pt-6">
                    <div className="text-lg md:text-2xl font-medium">
                      {item.title}
                    </div>
                  </td>

                  <td className="w-1/4" align="center">
                    {item.airbnb ? <IconChecklist /> : <IconX />}
                  </td>
                  <td className="w-1/4" align="center">
                    {item.competitor ? <IconChecklist /> : <IconX />}
                  </td>
                </tr>
                <tr className="border-b-[1px]">
                  <td colSpan={3} className="py-6 table-cell md:hidden">
                    <div className="text-slate text-base">{item.desc}</div>
                  </td>
                  <td className="py-6 hidden md:table-cell">
                    <div className="text-slate text-base">{item.desc}</div>
                  </td>
                </tr>

                {item.children?.map((child, i) => (
                  <tr key={`child-${i}`} className="border-b-[1px]">
                    <td className="text-sm width-2/4 py-6 md:text-lg">
                      {child.title}
                    </td>
                    <td className="width-1/4" align="center">
                      {child.airbnb ? <IconChecklist /> : <IconX />}
                    </td>
                    <td className="width-1/4" align="center">
                      {child.competitor ? <IconChecklist /> : <IconX />}
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>

        <div className="text-slate text-sm mt-6">
          Comparison is based on public information and free offerings by top
          competitors as of 10/22.{' '}
          <Link href={'#'} className="font-medium underline underline-offset-2">
            Find details and exclusions here.
          </Link>
        </div>

        <button className="border-[1px] px-4 py-2 text-sm rounded-lg mt-8 block m-auto">
          Learn more
        </button>
      </div>
    </div>
  )
}

export default Comparation
