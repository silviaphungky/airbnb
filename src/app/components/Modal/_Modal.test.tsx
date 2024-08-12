import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './Modal'
import '@testing-library/jest-dom'

const mockCloseModal = jest.fn()

beforeEach(() => {
  mockCloseModal.mockClear()
})

describe('Modal Component', () => {
  test('renders the modal when isOpen is true', () => {
    render(
      <Modal isOpen={true} title="Test Modal" closeModal={mockCloseModal}>
        <p>Modal content</p>
      </Modal>
    )
    const modalElement = screen.getByTestId('modal')
    expect(modalElement).toBeInTheDocument()
  })

  test('does not render the modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} title="Test Modal" closeModal={mockCloseModal}>
        <p>Modal content</p>
      </Modal>
    )
    const modalElement = screen.queryByTestId('modal')
    expect(modalElement).not.toBeInTheDocument()
  })

  test('displays the correct title', () => {
    render(
      <Modal isOpen={true} title="Test Modal" closeModal={mockCloseModal}>
        <p>Modal content</p>
      </Modal>
    )
    const titleElement = screen.getByText('Test Modal')
    expect(titleElement).toBeInTheDocument()
  })

  test('renders the children inside the modal', () => {
    render(
      <Modal isOpen={true} title="Test Modal" closeModal={mockCloseModal}>
        <p>Modal content</p>
      </Modal>
    )
    const childrenElement = screen.getByText('Modal content')
    expect(childrenElement).toBeInTheDocument()
  })

  test('renders the close icon and calls closeModal when clicked', () => {
    render(
      <Modal
        isOpen={true}
        title="Test Modal"
        showClose={true}
        closeModal={mockCloseModal}
      >
        <p>Modal content</p>
      </Modal>
    )
    const closeIcon = screen.getByTestId('iconClose')
    expect(closeIcon).toBeInTheDocument()

    fireEvent.click(closeIcon)
    expect(mockCloseModal).toHaveBeenCalledTimes(1)
  })

  test('does not render the close icon when showClose is false', () => {
    render(
      <Modal
        isOpen={true}
        title="Test Modal"
        showClose={false}
        closeModal={mockCloseModal}
      >
        <p>Modal content</p>
      </Modal>
    )
    const closeIcon = screen.queryByTestId('iconClose')
    expect(closeIcon).not.toBeInTheDocument()
  })
})
