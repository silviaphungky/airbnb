import { SectionTitle } from '@/app/components'

const contents = [
  {
    title: 'One-to-one guidance from a Superhost',
    desc: 'We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest—by phone, video call, or chat.',
  },
  {
    title: 'An experienced guest for your first booking',
    desc: 'For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.',
  },
  {
    title: 'Specialized support from Airbnb',
    desc: 'New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.',
  },
]

const Setup = () => {
  return (
    <div
      data-testid="setupSection"
      className=" pb-[40px] pt-12 md:px-[10%] md:pb-[120px] "
    >
      <div className="px-6 md:px-0">
        <SectionTitle>Airbnb it easily with Airbnb Setup</SectionTitle>
      </div>
      <div>
        <picture>
          <source
            media="(max-width:650px)"
            srcSet="https://a0.muscache.com/im/pictures/ad406f6f-2fae-404f-99c1-5521a4c1e563.jpg?im_w=720&im_q=highq"
          />
          <img
            src="https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq"
            alt="airbnb super host"
          />
        </picture>
      </div>
      <div className="px-6 md:px-0 flex flex-col gap-10 mt-10 md:flex-row md:justify-between md:px-8">
        {contents.map((item, index) => (
          <div key={`content-${index}`} style={{ flex: '0 0 31%' }}>
            <div className="mb-2 font-medium text-lg">{item.title}</div>
            <div className="text-slate text-base">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Setup
