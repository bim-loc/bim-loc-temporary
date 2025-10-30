import { SectionContainer } from '../shared/SectionContainer';

const video_url_list = [
  {
    id: 'simulation',
    url: 'https://www.youtube.com/embed/qyvKdIYjmdc',
    title: 'Simulation Benchmark (Office-01, Speed up x5)',
  },
  {
    id: 'construction-f06',
    url: 'https://www.youtube.com/embed/YLP0EsT-fmo',
    title: 'Construction Benchmark (Floor-06, Speed up x5)',
  },
  {
    id: 'construction-f08',
    url: 'https://www.youtube.com/embed/RwSfap5dQoA',
    title: 'Construction Benchmark (Floor-08, Speed up x5)',
  },
]

export const Video = () => {
  return (
    <SectionContainer>
      <div className="card-body p-6">
        <div className="divider divider-neutral text-2xl font-bold text-center">
            Video Demonstration
        </div>
        {video_url_list.map((video) => (
          <div key={video.id}>
            <div className="text-xl font-bold text-left mt-4">
              {video.title}
            </div>
            <div className="relative group mt-4">
              <div className="aspect-video w-full relative overflow-hidden">
                <iframe
                  className="w-full h-full rounded-md"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Video;
