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

export const Carousel = () => {
  return (
    <SectionContainer>
      <div className="card-body">
        <div className="divider divider-soft text-2xl font-bold text-center">
          Discrepancy Status Identification
        </div>
        <div className="carousel w-full mb-4">
          {carouselData.map((item) => (
            <div key={item.id} id={item.id} className="carousel-item w-full">
              <div className="flex flex-row items-center justify-around gap-2 px-2">
                {item.images.map((imageSrc, index) => (
                  <img key={index} src={`${import.meta.env.BASE_URL}${imageSrc}`} className="w-1/2" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="join w-full justify-center gap-4">
          {carouselData.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="btn btn-md rounded-md btn-soft btn-neutral shadow-md">
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
