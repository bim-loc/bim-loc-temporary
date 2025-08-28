import { SectionContainer } from "../shared/SectionContainer";
import { MainContainer } from "../shared/MainContainer";

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-500 hover:text-blue-700 underline"
  >
    {children}
  </a>
);

export const Footer = () => {
  return (
    <MainContainer className="items-center">
      <SectionContainer className="text-center text-sm p-1">
        <span className="whitespace-nowrap">
        This project website is inspired by &nbsp;
        <ExternalLink href="https://nerfies.github.io/">Nerfies</ExternalLink>,&nbsp;
        powered by <ExternalLink href="https://vitejs.dev/">Vite</ExternalLink>,&nbsp;
        <ExternalLink href="https://react.dev/">React</ExternalLink>,&nbsp;
        <ExternalLink href="https://tailwindcss.com/">Tailwind CSS</ExternalLink>, and&nbsp;
        <ExternalLink href="https://daisyui.com/">DaisyUI</ExternalLink>.
        </span>
      </SectionContainer>
    </MainContainer>
  )
}