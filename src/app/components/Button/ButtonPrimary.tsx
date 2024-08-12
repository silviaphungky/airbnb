import { ButtonHTMLAttributes, ReactNode } from 'react'

const ButtonPrimary = ({
  children,
  full,
  ...props
}: {
  children: ReactNode
  full?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`flex items-center gap-2 bg-primary rounded-lg px-4 py-2 justify-center ${
        full && 'w-full'
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonPrimary
