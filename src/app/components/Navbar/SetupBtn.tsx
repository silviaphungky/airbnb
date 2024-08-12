'use client'

import { useState } from 'react'
import { ButtonPrimary } from '../Button'
import { IconHomeAdd } from '../Icons'
import AirbnbSetupModal from '../AirbnbSetupModal'

const SetupBtn = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ButtonPrimary data-testid="setupBtn" onClick={() => setOpen(true)}>
        <IconHomeAdd />
        <span className="text-white">Airbnb Setup</span>
      </ButtonPrimary>
      {open && <AirbnbSetupModal open={open} setOpen={setOpen} />}
    </>
  )
}

export default SetupBtn
