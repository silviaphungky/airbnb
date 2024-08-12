import { fireEvent, render, screen } from '@testing-library/react'
import ButtonOutline from './ButtonOutline'

const btnText = 'Click Me'

describe('ButtonOutline Component', () => {
  test('renders without crashing', () => {
    render(<ButtonOutline>{btnText}</ButtonOutline>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  test('renders children correctly', () => {
    render(<ButtonOutline>{btnText}</ButtonOutline>)
    const buttonElement = screen.getByText(btnText)
    expect(buttonElement).toBeInTheDocument()
  })

  test('applies the correct classes', () => {
    render(<ButtonOutline>{btnText}</ButtonOutline>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass(
      'rounded-lg border-[1px] border-secondary px-4 py-2 text-sm block'
    )
  })

  test('responds to click events', () => {
    const handleClick = jest.fn()
    render(
      <ButtonOutline>
        <button onClick={handleClick}>{btnText}</button>
      </ButtonOutline>
    )
    const buttonElement = screen.getByText(btnText)
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
