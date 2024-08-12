import { ReactNode } from 'react'

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1
      data-testid="sectionTitle"
      className="text-[26px] leading-[1.875rem] text-left md:text-[40px] md:text-center mb-8 font-semibold md:leading-[3rem]"
    >
      {children}
    </h1>
  )
}

export default SectionTitle
