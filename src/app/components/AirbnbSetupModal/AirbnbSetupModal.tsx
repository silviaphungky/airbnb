import { Dispatch } from 'react'
import Modal from '../Modal'

const AirbnbSetupModal = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<boolean>
}) => {
  return (
    <Modal
      title="Log in or sign up"
      showClose
      isOpen={open}
      closeModal={() => {
        setOpen(false)
      }}
    >
      <div className="text-2xl">Welcome to Airbnb</div>
    </Modal>
  )
}

export default AirbnbSetupModal
