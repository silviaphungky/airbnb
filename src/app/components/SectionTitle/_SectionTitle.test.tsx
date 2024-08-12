import { render, screen } from '@testing-library/react'
import SectionTitle from './SectionTitle'
import '@testing-library/jest-dom'

const title = 'Test Title'

describe('SectionTitle Component', () => {
  test('renders without crashing', () => {
    render(<SectionTitle>{title}</SectionTitle>)
    const titleElement = screen.getByTestId('sectionTitle')
    expect(titleElement).toBeInTheDocument()
  })

  test('renders children correctly', () => {
    render(<SectionTitle>{title}</SectionTitle>)
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
  })

  test('applies the correct classes', () => {
    render(<SectionTitle>{title}</SectionTitle>)
    const titleElement = screen.getByTestId('sectionTitle')
    expect(titleElement).toHaveClass(
      'text-[26px] leading-[1.875rem] text-left md:text-[40px] md:text-center mb-8 font-semibold md:leading-[3rem]'
    )
  })
})
