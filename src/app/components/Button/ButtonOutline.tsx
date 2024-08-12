import { ButtonHTMLAttributes, ReactNode } from 'react'

const ButtonOutline = ({
  children,
  ...props
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="rounded-lg border-[1px] border-secondary px-4 py-2 text-sm block"
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonOutline
