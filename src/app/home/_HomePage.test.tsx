import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import HomePage from './page'

describe('<HomePage />', () => {
  test('renders the HomePage without crashing', async () => {
    render(await HomePage())

    const homePageElement = screen.getByTestId('homePage')
    expect(homePageElement).toBeInTheDocument()
  })

  test('renders the Rates section', async () => {
    render(await HomePage())
    const ratesSection = screen.getByTestId('ratesSection')
    expect(ratesSection).toBeInTheDocument()
  })

  test('renders the Setup section', async () => {
    render(await HomePage())
    const setupSection = screen.getByTestId('setupSection')
    expect(setupSection).toBeInTheDocument()
  })

  test('renders the Host section', async () => {
    render(await HomePage())
    const hostSection = screen.getByTestId('hostSection')
    expect(hostSection).toBeInTheDocument()
  })

  test('renders the Comparation section', async () => {
    render(await HomePage())
    const comparationSection = screen.getByTestId('comparationSection')
    expect(comparationSection).toBeInTheDocument()
  })

  test('renders the QnA section', async () => {
    render(await HomePage())
    const qnaSection = screen.getByTestId('qnaSection')
    expect(qnaSection).toBeInTheDocument()
  })
})
