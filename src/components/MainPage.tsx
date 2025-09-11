import { MainContainer } from './shared/MainContainer'
import { Title } from './sections/Title'
import { Abstract } from './sections/Abstract'
import { BibTeX } from './sections/BibTeX'
import { Video } from './sections/Video'
import { OverlapImage } from './sections/OverlapImage'
import { ProblemFormulation } from './sections/ProblemFormulation'
import { Experiments } from './sections/Experiments'


export const MainPage = () => {
  return (
    <MainContainer className="flex flex-col items-center">
      <Title />
      <Abstract />
      <ProblemFormulation />
      <OverlapImage />
      <Video />
      <Experiments />
      <BibTeX />
    </MainContainer>
  )
}