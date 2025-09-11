import { SectionContainer } from '../shared/SectionContainer';

export const OverlapImage = () => {
  return (
    <SectionContainer>
      <div className="card-body">          
        <div className="text-2xl font-bold text-center">
          BIM-Aligned Trajectory Estimation
        </div>
          <div className="relative h-160">
            <div className="absolute">
              <img
                alt="Trajectory Image" 
                src="/image_inner/trajectory.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute">
              <img 
                alt="Discrepancy Image" 
                src="/image_inner/discrepancy.png"
                className="w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4 text-lg text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <span>Projected points on Floor Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <span>Reality-BIM Discrepancy & Comparison (Hover to see)</span>
            </div>
          </div>
      </div>
    </SectionContainer>
  );
};

export default OverlapImage;
