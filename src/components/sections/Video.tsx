import { SectionContainer } from '../shared/SectionContainer';

export const Video = () => {
  return (
    <SectionContainer>
        <div className="card-body">
          <video controls className="block">
            <source src="./video/real_performance.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </SectionContainer>
  );
};

export default Video;
