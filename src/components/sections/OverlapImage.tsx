import { SectionContainer } from '../shared/SectionContainer';

export const OverlapImage = () => {
  return (
    <SectionContainer>
      <div className="card-body">
        <div className="divider divider-neutral text-2xl font-bold text-center">
          BIM-Aligned Trajectory Estimation
        </div>
        <div className="diff aspect-4/3" tabIndex={0}>
          <div className="diff-item-1" role="img" tabIndex={0}>
            <img
              alt="Discrepancy Image" 
              src={`${import.meta.env.BASE_URL}/image_inner/discrepancy.png`}
            />
          </div>
          <div className="diff-item-2" role="img">
            <img
              alt="Discrepancy Image" 
              src={`${import.meta.env.BASE_URL}/image_inner/trajectory.png`}
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
