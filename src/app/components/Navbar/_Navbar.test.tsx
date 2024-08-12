import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
import '@testing-library/jest-dom'

describe('Navbar Component', () => {
  test('renders without crashing', () => {
    const component = render(<Navbar />)
    const navbarElement = component.queryByTestId('navbar')
    expect(navbarElement).toBeInTheDocument()
  })

  test('renders the brand logo with a link to correct page', () => {
    render(<Navbar />)
    const logoLink = screen.queryByTestId('ctaBrand')
    expect(logoLink).toHaveAttribute('href', '/')
    const brandIcon = screen.getByTestId('iconBrand')
    expect(brandIcon).toBeInTheDocument()
  })

  test('renders the setup btn', () => {
    render(<Navbar />)
    const button = screen.queryByTestId('setupBtn')
    expect(button).toBeInTheDocument()
  })
})
