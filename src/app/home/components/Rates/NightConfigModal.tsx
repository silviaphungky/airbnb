'use client'
import { Modal } from '@/app/components'
import { NUMBER_ONLY } from '@/app/utils/regex'
import { Dispatch, useState } from 'react'

const min = 1
const max = 30

const NightConfigModal = ({
  slideValue,
  open,
  setOpen,
  setSlideValue,
}: {
  slideValue: number
  open: boolean
  setOpen: Dispatch<boolean>
  setSlideValue: Dispatch<number>
}) => {
  const [val, setVal] = useState(slideValue)

  return (
    <Modal
      title="How many nights?"
      showClose
      isOpen={open}
      closeModal={() => {
        setOpen(false)
      }}
    >
      <div className="flex justify-between items-center pt-6 w-full px=6">
        <div className="flex justify-between items-center w-full">
          <button
            className="cursor-pointer rounded-full border-[1px] border-zinc-300  w-[2rem] h-[2rem] flex justify-center items-center"
            onClick={() => {
              const updatedValue = val - 1
              setVal(updatedValue < min ? min : updatedValue)
            }}
            disabled={val === min}
          >
            -
          </button>
          <div>
            <input
              className="border-[1px] border-dark rounded-lg px-3 py-3 text-center"
              min={min}
              max={max}
              value={val}
              onChange={(e) => {
                const value = e.target.value
                const number = Number(value.replace(NUMBER_ONLY, ''))
                if (number < min) setVal(min)
                else if (number > max) setVal(max)
                else setVal(number)
              }}
            />
          </div>
          <button
            className="cursor-pointer rounded-full border-[1px] border-zinc-300 w-[2rem] h-[2rem] flex justify-center items-center"
            onClick={() => {
              const updatedValue = val + 1
              setVal(updatedValue > max ? max : updatedValue)
            }}
            disabled={val === max}
          >
            +
          </button>
        </div>
      </div>
      <div className="font-medium text-center mt-2 text-sm">Night</div>
      <div className="text-slate text-sm text-center">
        20 nights booked on average if available all month
      </div>
      <div className="border-t-[1px] border-gray-200 mt-8">
        <button
          className="bg-black text-white rounded-lg w-full px-3 py-2 block m-auto"
          onClick={() => {
            setSlideValue(val)
            setOpen(false)
          }}
        >
          Update your estimate
        </button>
      </div>
    </Modal>
  )
}

export default NightConfigModal
