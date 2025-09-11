import { SectionContainer } from '../shared/SectionContainer';

const video_url_list = [
  {
    id: 'real_performance',
    url: 'https://www.youtube.com/embed/w3OknlQ9L6c',
    title: 'BIM-Loc in Construction Site',
  },
  {
    id: 'simulation',
    url: 'https://www.youtube.com/embed/qyvKdIYjmdc',
    title: 'BIM-Loc in Simulation',
  },
]

export const Video = () => {
  return (
    <SectionContainer>
      <div className="card-body p-6">

        {video_url_list.map((video) => (
          <div key={video.id}>
            <div className="divider divider-neutral text-2xl font-bold text-center">
              {video.title}
            </div>
            <div className="relative group">
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
