'use client'
import { IconSearch } from '@/app/components/Icons'
import { thousandSeparator } from '@/app/utils/thousandSeparator'
import { Status, Wrapper } from '@googlemaps/react-wrapper'
import Link from 'next/link'
import React, { ReactElement, useState } from 'react'
import Map from './Map'
import SearchModal from './SearchModal'
import NightConfigModal from './NightConfigModal'

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>
  if (status === Status.FAILURE) return <h3>{status} ...</h3>
  return <></>
}

export const bedroomMap = {
  private: 'Private room',
  entire: 'Entire Place',
}

const Rates = () => {
  const [open, setOpen] = useState(false)
  const [slideValue, setSlideValue] = useState(7)
  const [rate, setRate] = useState(748469)
  const [openNightConfig, setOpenNightConfig] = useState(false)
  const [bedroomCount, setBedroomCount] = useState(1)
  const [bedroomType, setBedroomType] = useState<'entire' | 'private'>('entire')

  return (
    <div
      data-testid="ratesSection"
      className="flex gap-6 pb-8 md:gap-0 flex-col px-6 md:pb-12 md:flex-row items-center md:px-[10%] "
    >
      <div className="flex-1">
        <div className="max-w-[410px]">
          <h1 className="text-[40px] text-primary font-medium md:text-5xl leading-4 text-center">
            Airbnb it.
          </h1>
          <h1 className="text-[40px] md:text-5xl font-medium text-center">
            You could earn
          </h1>
          <div className="text-[50px] md:text-[68px] mt-4 font-medium text-center leading-[4rem]">
            <span>Rp</span>
            <span>{thousandSeparator(rate * slideValue)}</span>
          </div>
          <div className="text-sm mt-10 text-center">
            <span
              className="font-semibold underline cursor-pointer underline-offset-2"
              onClick={() => setOpenNightConfig(true)}
            >
              {`${slideValue} nights `}
            </span>
            <span>at an estimated Rp{thousandSeparator(rate)} a night</span>
          </div>
          <div className="my-4">
            <label
              htmlFor="default-range"
              className="block mb-2 text-sm font-medium text-gray-900"
            ></label>
            <input
              id="default-range"
              type="range"
              value={slideValue}
              className="w-full h-1 bg-gray-200 border-0 rounded-lg accent-secondary cursor-pointer"
              min={1}
              max={30}
              step={1}
              onChange={(e) => setSlideValue(Number(e.target.value))}
            />
          </div>

          <div className="text-center">
            <Link href={'#'} className="text-xs text-slate mt-2 underline">
              Learn how we estimate your earnings
            </Link>
          </div>

          <div
            className="cursor-pointer rounded-[40px] border-[1px] border-gray-200 px-4 py-2 flex items-center gap-4 mt-8"
            onClick={() => setOpen(true)}
          >
            <IconSearch />
            <div>
              <div className="text-sm font-medium">Jakarta</div>
              <div className="text-sm text-slate">
                {bedroomMap[bedroomType]} · {bedroomCount} bedrooms
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1">
        <div className="w-full">
          <Wrapper apiKey={process.env.MAPS_API_KEY || ''} render={render}>
            <Map
              center={{ lat: 55.80562399999999, lng: 37.641239 }}
              zoom={11}
            />
          </Wrapper>
        </div>
      </div>

      {open && (
        <SearchModal
          bedroomCount={bedroomCount}
          bedroomType={bedroomType}
          open={open}
          setOpen={setOpen}
          setBedroomType={setBedroomType}
          setBedroomCount={setBedroomCount}
        />
      )}
      {openNightConfig && (
        <NightConfigModal
          slideValue={slideValue}
          open={openNightConfig}
          setOpen={setOpenNightConfig}
          setSlideValue={setSlideValue}
        />
      )}
    </div>
  )
}

export default Rates
