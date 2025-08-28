import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { SectionContainer } from '../shared/SectionContainer';

export const Latex = () => {
  return (
    <SectionContainer>
      <div className="card-body">
        <div className="text-center mb-4">
          Inline math example: The quadratic formula is <InlineMath math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" /> 
          which solves the equation <InlineMath math="ax^2 + bx + c = 0" />.
        </div>      
        <div className="flex flex-col items-center gap-4">
          <BlockMath math="\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}" />
          <BlockMath math="\begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}" />
        </div>
      </div>
    </SectionContainer>
  )
}

export default Latex;
