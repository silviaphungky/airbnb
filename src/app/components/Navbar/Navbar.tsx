import Link from 'next/link'
import { IconBrand } from '../Icons'
import SetupBtn from './SetupBtn'

const Navbar = () => {
  return (
    <div
      data-testid="navbar"
      className="px-6 h-[64px] flex justify-between items-center fixed z-[5] top-0 w-full md:h-[80px] py-4 bg-white md:px-[10%]"
    >
      <div>
        <Link href={'/'} data-testid="ctaBrand">
          <div data-testid="iconBrand">
            <IconBrand />
          </div>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <div>Ready to Airbnb it?</div>
        <SetupBtn />
      </div>
    </div>
  )
}

export default Navbar
