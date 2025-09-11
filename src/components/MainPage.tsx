import { MainContainer } from './shared/MainContainer'
import { Title } from './sections/Title'
import { Abstract } from './sections/Abstract'
import { BibTeX } from './sections/BibTeX'
import { Video } from './sections/Video'
import { OverlapImage } from './sections/OverlapImage'
import { Latex } from './sections/Latex'
import { Carousel } from './sections/Carousel'


export const MainPage = () => {
  return (
    <MainContainer className="flex flex-col items-center">
      <Title />
      <Abstract />
      <Latex />
      <OverlapImage />
      <Video />
      <Carousel />
      <BibTeX />
    </MainContainer>
  )
}