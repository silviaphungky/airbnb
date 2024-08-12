'use client'
import { Modal } from '@/app/components'
import { IconChevronDown, IconPin } from '@/app/components/Icons'
import { Dispatch, useEffect, useState } from 'react'
import { bedroomMap } from './Rates'
import useDebounce from '@/app/utils/useDebounce'

const bedCountRules = {
  min: 1,
  max: 8,
}

const titleMap = {
  all: 'Tell us about your place',
  search: 'Your address or area',
}

const SearchModal = ({
  area,
  bedroomCount,
  bedroomType,
  open,
  setOpen,
  setArea,
  setBedroomType,
  setBedroomCount,
  fetchArea,
}: {
  area: string
  bedroomCount: number
  bedroomType: 'private' | 'entire'
  open: boolean
  setArea: Dispatch<string>
  setOpen: Dispatch<boolean>
  setBedroomType: Dispatch<'private' | 'entire'>
  setBedroomCount: Dispatch<number>
  fetchArea: (
    userInput: string
  ) => Promise<{ autocomplete_terms: Array<{ display_name: string }> }>
}) => {
  const [content, setContent] = useState<'all' | 'search'>('all')
  const [bedCount, setBedCount] = useState(bedroomCount)
  const [bedType, setBedType] = useState(bedroomType)
  const [areaList, setAreaList] = useState<Array<string>>([])
  const [selectedArea, setSelectedArea] = useState(area)
  const [keywords, setKeywords] = useState('')
  const [loading, setLoading] = useState(false)
  const debouncedValue = useDebounce(keywords, 500)

  const fetchData = async (debouncedValue: string) => {
    setLoading(true)
    const data = (await fetchArea(debouncedValue)) || {
      autocomplete_terms: [],
    }
    setLoading(false)
    setAreaList(data.autocomplete_terms.map((item) => item.display_name))
  }

  useEffect(() => {
    if (debouncedValue) {
      fetchData(debouncedValue)
    }
  }, [debouncedValue])

  const onBack = {
    all: () => {
      setOpen(false)
    },
    search: () => setContent('all'),
  }

  const section = {
    all: (
      <>
        <div className="pb-8">
          <div className="text-base mb-2">Address or area</div>
          <div
            className="cursor-pointer rounded-[40px] border-[1px] border-gray-200 px-4 py-3 flex items-center gap-4 mt-4"
            onClick={() => setContent('search')}
          >
            <IconPin />
            <div className="text-base text-dark">{selectedArea}</div>
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
            <div>{`${bedCount}${
              bedCount === bedCountRules.max ? '+' : ''
            }`}</div>
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
              setArea(selectedArea)
              setBedroomType(bedType)
              setBedroomCount(bedCount)
              setOpen(false)
              setAreaList([])
            }}
          >
            Update your estimate
          </button>
        </div>
      </>
    ),
    search: (
      <div>
        <div
          className="cursor-pointer rounded-[40px] border-[1px] border-dark px-4 py-3 flex items-center gap-4 mt-2"
          onClick={() => setContent('search')}
        >
          <div className="w-[2rem]">
            <IconPin />
          </div>
          <input
            autoFocus
            className="text-base text-dark w-full outline-none"
            placeholder={`Where's your place?`}
            onChange={async (e) => {
              const value = e.target.value
              setKeywords(value)
            }}
          />
        </div>
        <div className="mt-4">
          {loading && <div>Loading....</div>}
          {areaList.map((item, index) => (
            <div
              key={`result-${index}`}
              className="flex gap-2 py-2 items-center border-b-[1px] border-gray-200 text-sm"
              onClick={() => {
                setSelectedArea(item)
                setContent('all')
              }}
            >
              <div className="w-[2rem]">
                <IconPin />
              </div>
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  }

  return (
    <Modal
      title={titleMap[content]}
      showClose
      isOpen={open}
      closeModal={onBack[content]}
      iconClose={
        content === 'search' ? (
          <div className="rotate-90">
            <IconChevronDown />
          </div>
        ) : null
      }
    >
      {section[content]}
    </Modal>
  )
}

export default SearchModal
