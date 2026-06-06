import { useState } from 'react';
import { SectionContainer } from '../shared/SectionContainer';


// Compare dict for overlap image
const data_folder_name = 'trajectory';
const compare_dict = {
  'Floor-06 (Livox Mid-360)': {
    'discrepancy': 'Floor-06-livox/discrepancy.webp',
    'trajectory': 'Floor-06-livox/trajectory.webp',
    'aspect': '4/3',
  },
  'Floor-08 (Livox Mid-360)': {
    'discrepancy': 'Floor-08-livox/discrepancy.webp',
    'trajectory': 'Floor-08-livox/trajectory.webp',
    'aspect': '4/3',
  },
} as const;
type FloorKey = keyof typeof compare_dict;


export const OverlapImage = () => {
  const [selected_floor, setSelectedFloor] = useState<FloorKey>('Floor-06 (Livox Mid-360)');

  return (
    <SectionContainer>
      <div className="card-body">
        <div className="divider divider-neutral text-2xl font-bold text-center">
          Localization & Discrepancy Detection Performance
        </div>
        {/* <div className="p-2 text-xl">
          The trajectory estimation is further improved by BIM-integrated pose graph optimization. A comparison of image pair shows the deliverables of BIM-Loc algorihtm.
        </div> */}
        {/* Overlapped Image for comparison */}
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn btn-soft w-full shadow-md">
            {selected_floor}
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-200 w-full p-2 items-center">
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

        <div className={`diff aspect-4/3`} tabIndex={0}>
          <div className="diff-item-1" role="img" tabIndex={0}>
            <img
              alt="Discrepancy Image" 
              src={`${import.meta.env.BASE_URL}${data_folder_name}/${compare_dict[selected_floor].discrepancy}`}
            />
          </div>
          <div className="diff-item-2" role="img">
            <img
              alt="Discrepancy Image" 
              src={`${import.meta.env.BASE_URL}${data_folder_name}/${compare_dict[selected_floor].trajectory}`}
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>

      <div className="flex flex-row justify-around w-full px-8 text-lg font-bold"> 
        <div> BIM-Reality Discrepancy</div>
        <div> Reconstruction Points</div>
      </div>
    </SectionContainer>
  );
};

export default OverlapImage;
