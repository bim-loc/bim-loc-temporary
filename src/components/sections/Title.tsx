import { 
  DocumentTextIcon, 
  BookOpenIcon, 
  FolderIcon, 
  EnvelopeIcon,
  InformationCircleIcon 
} from '@heroicons/react/24/outline';
import { SectionContainer } from '../shared/SectionContainer';

export const Title = () => {
  const logo = './BKI.webp';
  const title = 'BIM-Loc';
  const title_supp = 'BIM-Integrated Discrepancy-Aware Indoor LiDAR-based Localization';
  const authors = [
    {
      name: "Yinqiang Zhang",
      icon: "./icon/capoo.webp",
      address_flag: "1"
    },
    {
      name: "Liang Lu",
      icon: "./icon/capoo.webp",
      address_flag: "1"
    },
    {
      name: "Yipeng Pan",
      icon: "./icon/capoo.webp",
      address_flag: "1"
    },
    {
      name: "Maolin Lei",
      icon: "./icon/capoo.webp",
      address_flag: "3"
    },
    {
      name: "Xiaowei Luo",
      icon: "./icon/capoo.webp",
      address_flag: "2"
    },
    {
      name: "Jia Pan",
      icon: "./icon/capoo.webp",
      address_flag: "1,★"
    },
  ];

  const addresses = [
    {
      address_flag: "1",
      name: "The University of Hong Kong (HKU)",
      icon: "./icon/home.png",
    },
    {
      address_flag: "2",
      name: "City University of Hong Kong (CityU)",
      icon: "./icon/ikun.avif",
    },
    {
      address_flag: "3",
      name: "Italian Institute of Technology (IIT)",
      icon: "./icon/ikun.avif",
    },
  ];

  const con_and_corresponding_author = 
    "★: Corresponding Author";

  // 最新消息
  // const news = "[2025-09-11] This template project is still under development.";
  const news: string = "";

  // 强调内容
  // const emphases = [
  //   "🎉 [ABCD 2024] Poster",
  //   "🥰 欢迎关注\"减论\"微信公众号/B站/知乎/小红书",
  //   "传递人工智能算法科普教育的减约理解",
  //   "提升信息效率及认知维度"
  // ];
  const emphases: string[] = [];

  // 提供引导资料链接
  // const buttons = [
  //   {
  //     disabled: true,
  //     name: "Arxiv",
  //     icon: "DocumentTextIcon",
  //   },
  //   {
  //     disabled: true,
  //     name: "Code",
  //     link: "",
  //     icon: "FolderIcon",
  //   },
  // ];

  const buttons: any[] = [];

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

        {/* <div className="mb-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
            {authors.map((author, index) => (
              <div key={index} className="group relative">
                <div className="flex flex-col items-center rounded-2xl transition-all duration-300 
                                w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-1rem)] 
                                min-w-[140px] max-w-[200px]">
                  <div className="skeleton h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 shrink-0 rounded-full mb-2 sm:mb-3"></div>
                  <div className="text-center">
                    <p className="font-bold text-sm sm:text-base md:text-lg text-gray-800 mb-1 group-hover:text-primary 
                                  transition-colors duration-300 leading-tight">
                      {author.name}
                    </p>
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-1.5 sm:mr-2"></span>
                      {author.address_flag}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="mb-4">
          <div className="flex flex-wrap justify-center gap-6">
            {addresses.map((address, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-3">
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
        </div> */}

        <div className="mb-4">
          <div className="flex flex-wrap justify-center gap-2">
            {authors.map((author, index) => (
              <span key={index} className="text-xl font-bold">
                {author.name} <sup>{author.address_flag}</sup>
                {index < authors.length - 1 && <span className="mx-1">,</span>}
              </span>
            ))}
          </div>
          <div className="mt-2">
            {addresses.map((address, index) => (
              <span key={index} className="text-md text-gray-500">
                {address.address_flag}: {address.name} 
                {index < addresses.length - 1 && <span className="mx-2">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* 共一和通讯提示 */}
        <p className="text-lg text-gray-600 mb-6 font-bold">
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
