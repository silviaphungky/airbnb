import { Rates, Setup, Comparation, Host, QnA } from './components'

const HomePage = async () => {
  async function fetchArea(userInput: string) {
    'use server'
    if (!userInput) return {}

    const response = await fetch(
      `https://www.airbnb.com/api/v2/autocompletes-personalized?locale=en&currency=IDR&country=ID&key=d306zoyjsyarp7ifhu67rjxn52tv0t20&language=en&locale=en&num_results=5&user_input=${userInput}l&api_version=1.2.0&satori_config_token=EhIiQTIiMhISMhIiEhIhJQIyQjX8ARUGFQIKjgEFAA&region=-1&options=should_filter_by_vertical_refinement%7Cshow_only_locations%7Cexclude_listing_names`
    )
    return response.json()
  }

  return (
    <div data-testid="homePage">
      <Rates fetchArea={fetchArea} />
      <Setup />
      <Host />
      <Comparation />
      <QnA />
    </div>
  )
}

export default HomePage
