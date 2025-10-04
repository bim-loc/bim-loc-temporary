import { SectionContainer } from '../shared/SectionContainer';
import { useState } from 'react';

// carousel data
const carouselData = [
  {
    id: 'sim_f07',
    data_type: 'simulation',
    title: 'Simulation Floor-07',
    button_title: 'Floor-07',
    images: [
      '/progress/Sim_floor_07.webp',
      '/progress/Sim_floor_07_existence.webp'
    ]
  },
  {
    id: 'sim_f08',
    data_type: 'simulation',
    title: 'Simulation Floor-08',
    button_title: 'Floor-08',
    images: [
      '/progress/Sim_floor_08.webp',
      '/progress/Sim_floor_08_existence.webp'
    ]
  },
  {
    id: 'sim_f10',
    data_type: 'simulation',
    title: 'Simulation Floor-10',
    button_title: 'Floor-10',
    images: [
      '/progress/Sim_floor_10.webp',
      '/progress/Sim_floor_10_existence.webp'
    ]
  },
  {
    id: 'sim_f12',
    data_type: 'simulation',
    title: 'Simulation Floor-12',
    button_title: 'Floor-12',
    images: [
      '/progress/Sim_floor_12.webp',
      '/progress/Sim_floor_12_existence.webp'
    ]
  },
  {
    id: 'con_f06',
    data_type: 'construction',
    title: 'Construction Floor-06',
    button_title: 'Floor-06',
    images: [
      '/progress/Real_floor_06.webp',
      '/progress/Real_floor_06_existence.webp'
    ]
  },
  {
    id: 'con_f08',
    data_type: 'construction',
    title: 'Construction Floor-08',
    button_title: 'Floor-08',
    images: [
      '/progress/Real_floor_08.webp',
      '/progress/Real_floor_08_existence.webp'
    ]
  },
];

export const Experiments = () => {
  const [activeTab, setActiveTab] = useState('sim_f07');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <SectionContainer>
      <div className="card-body">
        <div className="divider divider-neutral text-2xl font-bold text-center">
          Discrepancy Detection on 3D BIM Models
        </div>
        <div className="flex flex-row justify-around gap-4">
          <div className="text-center text-lg font-bold mt-2">Texture Map</div>
          <div className="text-center text-lg font-bold mt-2">Discrepancy Map</div>
        </div>
        <div className="carousel w-full">
          {carouselData.map((item) => (
            <div key={item.id} id={item.id} className={`carousel-item w-full ${activeTab === item.id ? 'block' : 'hidden'}`}>
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
        <div className="flex flex-col w-full">
          {/* Simulation Benchmark */}
          <fieldset className="fieldset border-base-300 border rounded-box w-full p-2">
            <legend className="fieldset-legend text-md">Simulation Benchmark (CutyU-02)</legend>
            <div role="tablist" className="tabs tabs-border w-full justify-center gap-4">
              {carouselData.filter(item => item.data_type === 'simulation').map((item) => (
                <button role="tab" key={item.id} 
                  onClick={() => handleTabClick(item.id)}
                  className={"tab tab-md rounded-md shadow-md font-bold flex-1 min-w-0 text-center bg-base-200"}>
                  {item.button_title}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Construction Benchmark (CityU) */}
          <fieldset className="fieldset border-base-300 border rounded-box w-full p-2">
            <legend className="fieldset-legend text-md">Construction Benchmark</legend>
            <div role="tablist" className="tabs tabs-border w-full justify-center gap-4">
              {carouselData.filter(item => item.data_type === 'construction').map((item) => (
                <button role="tab" key={item.id} 
                  onClick={() => handleTabClick(item.id)}
                  className={"tab tab-md rounded-md shadow-md font-bold flex-1 min-w-0 text-center bg-base-200"}>
                  {item.button_title}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </SectionContainer>
  )
}
