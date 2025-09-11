import { MainContainer } from "../shared/MainContainer";
import { SectionContainer } from "../shared/SectionContainer";

export const Navbar = () => {
  return (
    <MainContainer className="items-center">
      <SectionContainer className="text-center text-lg font-bold p-2">
        <span className="italic text-primary">
          BIM-Loc: BIM-Integrated Discrepancy-Aware Indoor LiDAR-based Localization
        </span>
      </SectionContainer>
    </MainContainer>
  )
}

