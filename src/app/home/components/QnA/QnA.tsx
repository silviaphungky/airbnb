'use client'

import Link from 'next/link'
import { SectionTitle } from '@/app/components'
import { IconChevronDown } from '@/app/components/Icons'
import { useEffect, useState } from 'react'

const qna = [
  {
    q: 'Is my place right for Airbnb?',
    a: (
      <div>
        Airbnb guests are interested in all kinds of places. We have listings
        for tiny homes, cabins, treehouses, and more. Even a spare room can be a
        great place to stay.
      </div>
    ),
  },
  {
    q: 'Do I have to host all the time?',
    a: (
      <div>
        Not at all—you control your calendar. You can host once a year, a few
        nights a month, or more often.
      </div>
    ),
  },
  {
    q: 'How much should I interact with guests?',
    a: (
      <div>
        It’s up to you. Some Hosts prefer to message guests only at key
        moments—like sending a short note when they check in—while others also
        enjoy meeting their guests in person. You’ll find a style that works for
        you and your guests.
      </div>
    ),
  },
  {
    q: 'Any tips on being a great Airbnb Host?',
    a: (
      <div>
        <div>
          Getting the basics down goes a long way. Keep your place clean,
          respond to guests promptly, and provide necessary amenities, like
          fresh towels. Some Hosts like adding a personal touch, such as putting
          out fresh flowers or sharing a list of local places to explore—but
          it’s not required.
        </div>
        <Link href={'#'}>Read on for more hosting tips</Link>
      </div>
    ),
  },
  {
    q: 'What are Airbnb’s fees?',
    a: (
      <div>
        <div>
          Airbnb typically collects a flat service fee of 3% of the reservation
          subtotal when you get paid. We also collect a fee from guests when
          they book. In many areas, Airbnb collects and pays sales and tourism
          taxes automatically on your behalf as well.
        </div>
        <Link href="#">Learn more about fees</Link>
      </div>
    ),
  },
]

const QnA = () => {
  const [open, setOpen] = useState<Array<boolean>>([])

  useEffect(() => {
    const initialState = qna.map((_, index) => false)
    setOpen(initialState)
  }, [qna])

  return (
    <div
      data-testid="qnaSection"
      className="px-6 bg-gray-200 rounded-2xl md:px-[10%] w-full py-12"
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1">
          <SectionTitle>
            <div className="text-left">Your questions,</div>
            <div className="text-left">answered</div>
          </SectionTitle>
        </div>
        <div className="flex-1 mb-10">
          {qna.map((item, index) => (
            <div
              key={`qna-${index}`}
              className={`${index === qna.length - 1 ? '' : ' border-b-[1px]'}`}
            >
              <div
                className={`flex justify-between w-full cursor-pointer pt-6 pb-4`}
                onClick={() => {
                  const updated = [...open]
                  updated[index] = !updated[index]
                  setOpen(updated)
                }}
              >
                <div className="text-base md:text-2xl">{item.q}</div>
                <div className={`${open[index] ? 'rotate-180' : ''}`}>
                  <IconChevronDown />
                </div>
              </div>
              <div
                className={`text-sm md:text-lg ${
                  open[index] ? 'block mb-6 text-slate' : 'hidden'
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl gap-4">
        <div className="flex-1">
          <img
            src="https://a0.muscache.com/im/pictures/c19751e5-cd4f-41d0-898f-2580b60cae08.jpg?im_w=1200&im_q=highq"
            alt="qna placeholder"
            className="rounded-2xl"
          />
        </div>
        <div className="flex-1 px-4 pb-4 md:p-0">
          <h3 className="text-2xl md:text-4xl font-medium">
            Still have questions?
          </h3>
          <div className="text-base text-slate md:text-lg">
            Get answers from an experienced Superhost near you.
          </div>
          <button className="rounded-lg border-[1px] px-4 py-2 text-sm block mt-6 text-sm">
            Match with a Superhost
          </button>
        </div>
      </div>
    </div>
  )
}

export default QnA
