import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { IconClose } from '../Icons'

interface Props {
  isOpen: boolean
  title: string
  showClose?: boolean
  closeModal: () => void
  children: React.ReactNode
  iconClose?: ReactNode
}

const Modal: React.FC<Props> = ({
  title,
  showClose,
  isOpen,
  closeModal,
  children,
  iconClose,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
        onClose={closeModal}
        data-testid="modal"
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-sm font-bold text-gray-900 border-b-[1px] border-gray-200  px-4 py-3 flex"
                >
                  {showClose && (
                    <div
                      className="cursor-pointer"
                      onClick={closeModal}
                      data-testid="iconClose"
                    >
                      {iconClose || <IconClose />}
                    </div>
                  )}
                  <div className="w-full text-center" data-testId="modalTitle">
                    {title}
                  </div>
                </DialogTitle>
                <div className="p-4" data-testid="modalChildren">
                  {children}
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
