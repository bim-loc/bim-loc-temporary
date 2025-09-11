import { SectionContainer } from '../shared/SectionContainer';

export const Abstract = () => {
  return (
    <SectionContainer>
      <div className="card-body">
        <div className="text-2xl font-bold text-center">
          Abstract
        </div>
        <div className="text-lg leading-relaxed">
          <p className="text-justify indent-8 mb-4 text-gray-700">
            Accurate and robust localization is essential for service and inspection robots, particularly 
            in feature-sparse indoor environments. Prior maps significantly enhance the robustness of indoor 
            localization. However, a precise yet compact prior map that captures comprehensive real-world details 
            is largely unavailable when encountering new or frequently changing scenarios. This study proposes BIM-Loc, 
            a discrepancy-aware LiDAR localization framework that only integrates an as-planned Building Information Model (BIM) 
            to online simultaneously estimate BIM-aligned trajectories and identify discrepancies between real-world observations 
            and as-planned BIM models.
          </p>
          <p className="text-justify indent-8 mb-4 text-gray-700">
            In this framework, a novel multi-hit ray casting strategy is developed for 
            online association of BIM structures and point clouds in both 3D observation and 2D texture mapping spaces. 
            A unified pose graph optimization framework with BIM-integrated factors is proposed to derive a BIM-aligned trajectory 
            by considering the measurements from front-end motion priors, inter-scan consistency, and BIM-scan consistency. 
            By leveraging sparse casting observations, a Bayesian kernelized inference method is employed to incrementally update 
            the discrepancy status in 2D texture space.
          </p>
          <p className="text-justify indent-8 text-gray-700">
            The resulting discrepancy status update is propagated from pixel 
            to structure levels via hierarchical Bayesian networks. In experiments, our BIM-Loc framework has undergone extensive 
            evaluation across both a self-developed BIM-robot simulation platform and real-world application datasets with significant 
            advancements clearly observed therein.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
  