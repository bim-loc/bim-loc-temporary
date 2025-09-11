import { 
  DocumentTextIcon, 
  BookOpenIcon, 
  FolderIcon, 
  EnvelopeIcon,
  InformationCircleIcon 
} from '@heroicons/react/24/outline';
import { SectionContainer } from '../shared/SectionContainer';

export const Title = () => {
  const logo = './BKI.png';
  const title = 'BIM-Loc';
  const title_supp = 'BIM-Integrated Discrepancy-Aware Indoor LiDAR-based Localization';
  const authors = [
    {
      name: "Author A",
      icon: "./icon/capoo.webp",
      address_flag: "1"
    },
    {
      name: "Author B",
      icon: "./icon/capoo.webp",
      address_flag: "1"
    },
    {
      name: "Author C",
      icon: "./icon/capoo.webp",
      address_flag: "1"
    },
    {
      name: "Author D",
      icon: "./icon/capoo.webp",
      address_flag: "2"
    },
    {
      name: "Author E",
      icon: "./icon/capoo.webp",
      address_flag: "3"
    },
    {
      name: "Author F",
      icon: "./icon/capoo.webp",
      address_flag: "1,★"
    },
  ];

  const addresses = [
    {
      address_flag: "1",
      name: "The University of ABCF",
      icon: "./icon/home.png",
    },
    {
      address_flag: "2",
      name: "The Institut of D",
      icon: "./icon/ikun.avif",
    },
    {
      address_flag: "3",
      name: "The Institut of E",
      icon: "./icon/ikun.avif",
    },
  ];

  const con_and_corresponding_author = 
    "★: Corresponding Author";

  // 最新消息
  const news = "[2025-09-11] This template project is still under development.";
  // const news: string = "";

  // 强调内容
  // const emphases = [
  //   "🎉 [ABCD 2024] Poster",
  //   "🥰 欢迎关注\"减论\"微信公众号/B站/知乎/小红书",
  //   "传递人工智能算法科普教育的减约理解",
  //   "提升信息效率及认知维度"
  // ];
  const emphases: string[] = [];

  // 提供引导资料链接
  const buttons = [
    {
      disabled: true,
      name: "Paper",
      icon: "DocumentTextIcon",
    },
    {
      disabled: true,
      name: "Code",
      link: "https://github.com/JunyaoHu/academic-project-page-template-vue",
      icon: "FolderIcon",
    },
    // {
    //   disabled: false,
    //   name: "Demo",
    //   link: "https://junyaohu.github.io/academic-project-page-template-vue",
    //   icon: "EnvelopeIcon",
    // },
  ];

  return (
    <SectionContainer>
      <div className="card-body text-center">
        {/* Logo */}
        {logo && (
          <div>
            <img src={logo} alt="BIM-Loc" className="h-35 mx-auto" />
          </div>
        )}

        {/* Main Title */}
        <div className="text-3xl font-bold text-primary">
          <div className="text-4xl mb-2 font-extrabold" style={{
            background: 'linear-gradient(135deg, #ff6b6b 0%, #51cf66 25%, #868e96 50%, #ff8787 75%, #69db7c 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
            animation: 'gradient 2s ease infinite'
          }}>
            {title}
          </div>
          <div className="text-secondary text-center mb-4">
            {title_supp}
          </div>
        </div>

        {/* 作者信息 */}
        <div className="mb-4">
          <div className="flex flex-wrap justify-center gap-6">
            {authors.map((author, index) => (
              <div key={index} className="group relative">
                <div className="flex flex-col items-center rounded-2xl
                                transition-all duration-300 border border-gray-100 min-w-[180px]">
                  {/* <img 
                    src={author.icon} 
                    alt={author.name}
                    className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                  /> */}
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full mb-3"></div>
                  <div className="text-center">
                    <p className="font-bold text-lg text-gray-800 mb-1 group-hover:text-primary 
                                  transition-colors duration-300">
                      {author.name}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {author.address_flag}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 地址信息 */}
        <div className="mb-4">
          <div className="flex flex-wrap justify-center gap-6">
            {addresses.map((address, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-3">
                {/* <img 
                  src={address.icon} 
                  alt={address.name}
                  className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
                /> */}
                <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
                <div className="text-left">
                  <p className="font-medium text-gray-800 text-md">{address.name}</p>
                  <div className="mt-1">
                    <span className="inline-flex items-center px-2 py-1 rounded-full
                                    text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                      {address.address_flag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 共一和通讯提示 */}
        <p className="text-md text-gray-600 mb-6 font-bold">
          {con_and_corresponding_author}
        </p>

        {/* 最新消息 */}
        {news && (
        <div className="alert alert-info max-w-2xl text-lg text-gray-600 mx-auto mb-6 shadow-md">
          <InformationCircleIcon className="w-6 h-6 shrink-0" />
          <span>{news}</span>
        </div>
        )}

        {/* 强调内容 */}
        {emphases.length > 0 && (
          <div className="card bg-base-100 shadow-md max-w-4xl mx-auto mb-5">
            <div className="card-body">
              {emphases.map((emphasis, index) => (
                <p key={index} className="text-center my-2">
                  {emphasis}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* 按钮组 */}
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((button, index) => (
            <div
              key={index}
              className={`btn btn-neutral btn-lg rounded-4xl shadow-lg 
                        ${button.disabled ? 'btn-disabled' : ''}`}
              onClick={() => {
                if (!button.disabled && button.link) {
                  window.open(button.link, '_blank');
                }
              }}
            >
              {button.icon === "DocumentTextIcon" && <DocumentTextIcon className="w-5 h-5 mr-2" />}
              {button.icon === "BookOpenIcon" && <BookOpenIcon className="w-5 h-5 mr-2" />}
              {button.icon === "FolderIcon" && <FolderIcon className="w-5 h-5 mr-2" />}
              {button.icon === "EnvelopeIcon" && <EnvelopeIcon className="w-5 h-5 mr-2" />}
              {button.name}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Title;
