import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { SectionContainer } from '../shared/SectionContainer';


const methodologyData = [
  {
    title: '1. Multi-Hit Ray Casting',
    description: 'Multi-Hit Ray Casting',
  },
  
  {
    title: '2. BIM-Aligned Trajectory Estimation',
    description: 'BIM-Aligned Trajectory Estimation',
  },
  {
    title: '3. Discrepancy Identification',
    description: 'Discrepancy Status Identification',
  },
];

export const ProblemFormulation = () => {
  return (
    <>
      <SectionContainer>
        <div className="card-body">
          {/* Problem Formulation */}
          <div className="divider divider-neutral text-2xl font-bold text-center">
            Problem Formulation
          </div>
          <div className="flex flex-col items-center">
            <BlockMath math="\begin{equation*}
                            \begin{split}
                                (\hat{\mathcal{X}}, \hat{\mathcal{L}}) & = \arg\max_{\mathcal{X}, \mathcal{L}}\Big[p(\mathcal{X}, \mathcal{L}|\mathcal{Z}, \mathcal{B})\Big] \\ 
                                                                    & = \arg\max_{\mathcal{X}, \mathcal{L}}\Big[p(\mathcal{X})\cdot \prod_{n=1}^N\prod_{k=1}^K \ p(\boldsymbol{z}_k|\boldsymbol{x}_k, \boldsymbol{b}_n)^{(1-\mathbb{I}_n)}\cdot p(\mathcal{L}|\mathcal{B})\Big] \ ,
                            \end{split}
                            \end{equation*}" />
            <BlockMath math="\begin{equation*}
                              \mathcal{E} = r(\boldsymbol{x}_0)+\sum_{k=1}^K \underbrace{r(\boldsymbol{x}_k|\boldsymbol{x}_{k-1})}_{(0)} + 
                              \sum^K_{k=1}\sum_{n=1}^N\underbrace{\delta(n, k)}_{(1)} \cdot \underbrace{r(\mathcal{P}_k, \boldsymbol{x}_k, \boldsymbol{b}_n)}_{(2)}\cdot\underbrace{(1-\mathbb{I}_n)}_{(3)}
                              \end{equation*}" />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className="card-body">
          <div className="divider divider-neutral text-2xl font-bold text-center">
            Methodology
          </div>
          {methodologyData.map((item) => (
          <fieldset className="fieldset rounded-box w-full border border-base-300 p-4">
            <legend className="fieldset-legend text-xl font-bold">{item.title}</legend>
            <div className="flex flex-row justify-between gap-4">
              <div className="skeleton h-36 w-1/3"/>
              <div className="flex flex-col h-36 w-2/3 gap-y-2">
                <div className="skeleton h-9 w-1/2"/>
                <div className="skeleton h-9 w-3/4"/>
                <div className="skeleton h-9 w-full"/>
                <div className="skeleton h-9 w-full"/>
              </div>
            </div>
          </fieldset>
          ))}
        </div>
      </SectionContainer>
    </>
  )
}

export default ProblemFormulation;
