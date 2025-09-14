import { useState } from 'react';
import { SectionContainer } from '../shared/SectionContainer';


// Compare dict for overlap image
const compare_dict = {
  'Floor-06': {
    'discrepancy': 'Floor-06/discrepancy.webp',
    'trajectory': 'Floor-06/trajectory.webp',
  },
  'Floor-08': {
    'discrepancy': 'Floor-08/discrepancy.webp',
    'trajectory': 'Floor-08/trajectory.webp',
  },
} as const;
type FloorKey = keyof typeof compare_dict;


export const OverlapImage = () => {
  const [selected_floor, setSelectedFloor] = useState<FloorKey>('Floor-06');

  return (
    <SectionContainer>
      <div className="card-body">
        <div className="divider divider-neutral text-2xl font-bold text-center">
          BIM-Aligned Trajectory Estimation
        </div>
        {/* Overlapped Image for comparison */}
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn btn-soft btn-neutral-content w-32 shadow-md">
            {selected_floor}
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-neutral-200 w-32 p-2 rounded-md shadow-md items-center">
            {Object.keys(compare_dict).map((floor) => (
              <li key={floor}>
                <a className="font-bold" 
                  onClick={() => setSelectedFloor(floor as FloorKey)}
                >
                  {floor}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="diff aspect-4/3" tabIndex={0}>
          <div className="diff-item-1" role="img" tabIndex={0}>
            <img
              alt="Discrepancy Image" 
              src={`${import.meta.env.BASE_URL}/compare/${compare_dict[selected_floor].discrepancy}`}
            />
          </div>
          <div className="diff-item-2" role="img">
            <img
              alt="Discrepancy Image" 
              src={`${import.meta.env.BASE_URL}/compare/${compare_dict[selected_floor].trajectory}`}
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full px-8 text-lg text-gray-600 font-bold"> 
        <div> Reality-BIM Discrepancy & Comparison</div>
        <div> Reconstruction Points & Floor Plan</div>
      </div>
    </SectionContainer>
  );
};

export default OverlapImage;
