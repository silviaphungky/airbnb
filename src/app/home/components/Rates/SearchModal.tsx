'use client'
import { Modal } from '@/app/components'
import { IconPin } from '@/app/components/Icons'
import { Dispatch, useState } from 'react'
import { bedroomMap } from './Rates'

const bedCountRules = {
  min: 1,
  max: 8,
}

const SearchModal = ({
  bedroomCount,
  bedroomType,
  open,
  setOpen,
  setBedroomType,
  setBedroomCount,
}: {
  bedroomCount: number
  bedroomType: 'private' | 'entire'
  open: boolean
  setOpen: Dispatch<boolean>
  setBedroomType: Dispatch<'private' | 'entire'>
  setBedroomCount: Dispatch<number>
}) => {
  const [bedCount, setBedCount] = useState(bedroomCount)
  const [bedType, setBedType] = useState(bedroomType)
  return (
    <Modal
      title="Tell us about your place"
      showClose
      isOpen={open}
      closeModal={() => {
        setOpen(false)
      }}
    >
      <div className="pb-8">
        <div className="text-base mb-2">Address or area</div>
        <div className="cursor-pointer rounded-[40px] border-[1px] border-gray-200 px-4 py-3 flex items-center gap-4 mt-8">
          <IconPin />
          <div className="text-base text-dark">Jakarta</div>
        </div>
      </div>

      <div className="pt-6 border-t-[1px] border-gray-200 pb-8">
        <div className="mb-2 text-base">Type of space</div>
        <div className="flex rounded-3xl py-1 px-1 bg-gray-300 space-between">
          <div
            className={`rounded-3xl ${
              bedType === 'entire' && 'bg-white'
            } flex-1 py-2 text-center cursor-pointer`}
            onClick={() => setBedType('entire')}
          >
            {bedroomMap.entire}
          </div>
          <div
            className={`flex-1 py-2 rounded-3xl text-center cursor-pointer ${
              bedType === 'private' && 'bg-white'
            }`}
            onClick={() => setBedType('private')}
          >
            {bedroomMap.private}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-6 border-t-[1px] border-gray-200">
        <div className="text-base mb-2">Bedrooms</div>
        <div className="flex gap-4 items-center">
          <button
            className="cursor-pointer rounded-full border-[1px] border-zinc-300 w-[2rem] h-[2rem] flex justify-center items-center text-lg"
            onClick={() => {
              const updatedValue = bedCount - 1
              setBedCount(
                updatedValue < bedCountRules.min
                  ? bedCountRules.min
                  : updatedValue
              )
            }}
            disabled={bedCount === bedCountRules.min}
          >
            -
          </button>
          <div>{`${bedCount}${bedCount === bedCountRules.max ? '+' : ''}`}</div>
          <button
            className="cursor-pointer rounded-full border-[1px] border-zinc-300 w-[2rem] h-[2rem] flex justify-center items-center text-lg"
            onClick={() => {
              const updatedValue = bedCount + 1
              setBedCount(
                updatedValue > bedCountRules.max
                  ? bedCountRules.max
                  : updatedValue
              )
            }}
            disabled={bedCount === bedCountRules.max}
          >
            +
          </button>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-200 mt-8">
        <button
          className="bg-black text-white rounded-lg w-full px-3 py-2 block m-auto"
          onClick={() => {
            setBedroomType(bedType)
            setBedroomCount(bedCount)
            setOpen(false)
          }}
        >
          Update your estimate
        </button>
      </div>
    </Modal>
  )
}

export default SearchModal
