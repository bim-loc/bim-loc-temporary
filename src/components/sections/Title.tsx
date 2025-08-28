import { 
  DocumentTextIcon, 
  BookOpenIcon, 
  FolderIcon, 
  EnvelopeIcon,
  InformationCircleIcon 
} from '@heroicons/react/24/outline';
import { SectionContainer } from '../shared/SectionContainer';

export const Title = () => {
  // logo地址，没有则置为""即可
  const logo = './BKI.png';

  // 标题
  const title = 'BIM-Loc';

  // 标题补充，没有则置为''即可
  const title_supp = 'BIM-Integrated Discrepancy-Aware LiDAR Localization';

  // 作者清单（包含作者姓名、头像、主页、地址序号）
  const authors = [
    {
      name: "Yinqiang ZHANG",
      icon: "./icon/capoo.webp",
      homepage: "https://junyaohu.github.io/",
      address_flag: "1"
    },
    {
      name: "Liang LU",
      icon: "./icon/capoo.webp",
      homepage: "",
      address_flag: "1"
    },
    {
      name: "Yipeng PAN",
      icon: "./icon/capoo.webp",
      homepage: "",
      address_flag: "1"
    },
    {
      name: "Maolin LEI",
      icon: "./icon/capoo.webp",
      homepage: "",
      address_flag: "2"
    },
    {
      name: "Xiaowei LUO",
      icon: "./icon/capoo.webp",
      homepage: "",
      address_flag: "3"
    },
    {
      name: "Jia PAN",
      icon: "./icon/capoo.webp",
      homepage: "",
      address_flag: "1,*"
    },
  ];

  // 地址清单（包含地址名称、头像、主页、地址序号）
  const addresses = [
    {
      address_flag: "1",
      name: "The University of Hong Kong",
      icon: "./icon/home.png",
      homepage: "https://www.hku.hk/"
    },
    {
      address_flag: "2",
      name: "City University of Hong Kong",
      icon: "./icon/ikun.avif",
      homepage: "https://www.cityu.edu.hk/"
    },
  ];

  // 共一和通讯提示
  const con_and_corresponding_author = 
    "*: Corresponding Author";

  // 最新消息
  // const news = "🔥 [2024-12-15] This template project is still under development.";
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
  const buttons = [
    {
      disabled: true,
      name: "Paper",
      icon: "DocumentTextIcon",
    },
    {
      disabled: true,
      name: "中译版",
      icon: "BookOpenIcon",
    },
    {
      disabled: false,
      name: "Code",
      link: "https://github.com/JunyaoHu/academic-project-page-template-vue",
      icon: "FolderIcon",
    },
    {
      disabled: false,
      name: "Demo",
      link: "https://junyaohu.github.io/academic-project-page-template-vue",
      icon: "EnvelopeIcon",
    },
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
        <div className="mb-5">
          <div className="flex flex-wrap justify-center gap-8">
            {authors.map((author, index) => (
              <div key={index} className="flex flex-row items-center gap-4 text-center">
                <img 
                  src={author.icon} 
                  alt={author.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-base">{author.name}</p>
                  <p className="text-sm text-gray-600">{author.address_flag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 地址信息 */}
        <div>
          <div className="flex flex-wrap justify-center gap-8">
            {addresses.map((address, index) => (
              <div key={index} className="flex flex-row items-center gap-4 text-center">
                <img 
                  src={address.icon} 
                  alt={address.name}
                  className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
                />
                <div className="text-center">
                  <p className="text-sm">{address.name}</p>
                  <p className="text-xs text-gray-600">{address.address_flag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 共一和通讯提示 */}
        <p className="text-sm text-gray-600 mb-5">
          {con_and_corresponding_author}
        </p>

        {/* 最新消息 */}
        {news && (
        <div className="alert alert-info max-w-2xl mx-auto mb-5">
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
              className={`btn btn-neutral btn-md rounded-4xl shadow-lg 
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
