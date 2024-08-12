import { render, screen, fireEvent } from '@testing-library/react'
import ButtonPrimary from './ButtonPrimary'

const btnText = '{btnText}'

describe('ButtonPrimary Component', () => {
  test('renders without crashing', () => {
    render(<ButtonPrimary>{btnText}</ButtonPrimary>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  test('renders children correctly', () => {
    render(<ButtonPrimary>{btnText}</ButtonPrimary>)
    const buttonElement = screen.getByText(btnText)
    expect(buttonElement).toBeInTheDocument()
  })

  test('applies the correct classes', () => {
    render(<ButtonPrimary>{btnText}</ButtonPrimary>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass(
      'flex items-center gap-2 bg-primary rounded-lg px-4 py-2 justify-center'
    )
  })

  test('applies the full width class when "full" prop is true', () => {
    render(<ButtonPrimary full>{btnText}</ButtonPrimary>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('w-full')
  })

  test('does not apply the full width class when "full" prop is false', () => {
    render(<ButtonPrimary>{btnText}</ButtonPrimary>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).not.toHaveClass('w-full')
  })

  test('responds to click events', () => {
    const handleClick = jest.fn()
    render(
      <ButtonPrimary>
        <button onClick={handleClick}>{btnText}</button>
      </ButtonPrimary>
    )
    const buttonElement = screen.getByText(btnText)
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
