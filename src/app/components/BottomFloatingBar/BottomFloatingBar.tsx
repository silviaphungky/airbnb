'use client'
import { useState } from 'react'
import AirbnbSetupModal from '../AirbnbSetupModal'
import { ButtonPrimary } from '../Button'
import { IconHomeAdd } from '../Icons'

const BottomFloatingBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div
      data-testid="bottomFloatingBar"
      className="shadow-xl fixed bottom-0 md:hidden z-[5] px-6 pb-4 bg-white w-full"
    >
      <div data-testId="bottomText" className="text-center mt-1">
        Ready to Airbnb it?
      </div>
      <div className="mt-2">
        <ButtonPrimary
          data-testid="setupBtn"
          full
          onClick={() => setOpen(true)}
        >
          <IconHomeAdd />
          <span className="text-white">Airbnb Setup</span>
        </ButtonPrimary>
      </div>
      {open && <AirbnbSetupModal open={open} setOpen={setOpen} />}
    </div>
  )
}

export default BottomFloatingBar
