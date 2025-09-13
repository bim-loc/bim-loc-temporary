import { SectionContainer } from '../shared/SectionContainer';

// carousel data
const carouselData = [
  {
    id: 'item1',
    title: 'Real Floor 06',
    images: [
      '/progress/Real_floor_06.png',
      '/progress/Real_floor_06_existence.png'
    ]
  },
  {
    id: 'item2',
    title: 'Real Floor 08',
    images: [
      '/progress/Real_floor_08.png',
      '/progress/Real_floor_08_existence.png'
    ]
  },
  {
    id: 'item3',
    title: 'Sim Floor 07',
    images: [
      '/progress/Sim_floor_07.png',
      '/progress/Sim_floor_07_existence.png'
    ]
  }
];

export const Experiments = () => {
  return (
    <SectionContainer>
      <div className="card-body">
        <div className="divider divider-neutral text-2xl font-bold text-center">
          Discrepancy Status Identification
        </div>
        <div className="carousel w-full">
          {carouselData.map((item) => (
            <div key={item.id} id={item.id} className="carousel-item w-full">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center gap-1">
                    {item.images.map((imageSrc, index) => (
                      <img key={index} 
                      src={`${import.meta.env.BASE_URL}${imageSrc}`} 
                      className="w-1/2" 
                      alt={item.title}
                      />
                    ))}
                </div>
                <div className="text-center text-lg font-bold mt-2">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div role="tablist" className="tabs tabs-border w-full justify-center gap-4">
          {carouselData.map((item) => (
            <a role="tab" key={item.id} href={`#${item.id}`} 
              className="tab tab-md bg-neutral-content rounded-md shadow-md font-bold">
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
