import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { SectionContainer } from '../shared/SectionContainer';


const methodologyData = [
  {
    label: '(0)',
    title: 'Front-end odometry',
    description: 'Front-end odometry',
    disabled: false,
  },
  
  {
    label: '(1)',
    title: 'BIM-point association',
    description: 'BIM-point association',
    disabled: false,
  },
  {
    label: '(2)',
    title: 'BIM-observation consistency',
    description: 'BIM-observation consistency',
    disabled: false,
  },
  {
    label: '(3)',
    title: 'Discrepancy indentification',
    description: 'Discrepancy indentification',
    disabled: false,
  },
];

export const ProblemFormulation = () => {
  return (
    <>
      <SectionContainer>
        <div className="card-body">
          {/* Problem Formulation */}
          <div className="divider divider-neutral text-2xl font-bold text-center">
            <div className="flex flex-row gap-2 xl:flex-nowrap flex-wrap justify-center">
              <div>Methodology</div>
            </div>
          </div>

          <fieldset className="fieldset border-base-300 border rounded-box rounded-md w-full">
            <legend className="fieldset-legend text-lg">
              Max-A-Posteriori Formulation
            </legend>
            <div className="text-lg">
              <BlockMath math="\begin{equation*}
                              \begin{split}
                                  (\hat{\mathcal{X}}, \hat{\mathcal{L}}) & = \arg\max_{\mathcal{X}, \mathcal{L}}\Big[p(\mathcal{X}, \mathcal{L}|\mathcal{Z}, \mathcal{B})\Big] \\ 
                                                                      & = \arg\max_{\mathcal{X}, \mathcal{L}}\Big[p(\mathcal{X})\cdot \prod_{n=1}^N\prod_{k=1}^K \ p(\boldsymbol{z}_k|\boldsymbol{x}_k, \boldsymbol{b}_n)^{(1-\mathbb{I}_n)}\cdot p(\mathcal{L}|\mathcal{B})\Big] \ ,
                              \end{split}
                              \end{equation*}" />
            </div>
          </fieldset>

          <fieldset className="fieldset border-base-300 border rounded-box rounded-md w-full">
            <legend className="fieldset-legend text-lg">
              Residual Formulation
            </legend>
            <div className="text-lg">
              <BlockMath math="\begin{equation*}
                                \mathcal{E} = r(\boldsymbol{x}_0)+\sum_{k=1}^K \underbrace{r(\boldsymbol{x}_k|\boldsymbol{x}_{k-1})}_{(0)} + 
                                \sum^K_{k=1}\sum_{n=1}^N\underbrace{\delta(n, k)}_{(1)} \cdot \underbrace{r(\mathcal{P}_k, \boldsymbol{x}_k, \boldsymbol{b}_n)}_{(2)}\cdot\underbrace{(1-\mathbb{I}_n)}_{(3)}
                                \end{equation*}" />
            </div>
            <div className="flex flex-row flex-wrap justify-center w-full mt-2 p-2">
              <ul className="list w-1/2 text-xl">
                  {methodologyData.map((item) => (
                    <li className="list-row">
                      <strong className="text-2xl opacity-50">{item.label}</strong> 
                      <div className="btn btn-ghost btn-lg">{item.title}</div>
                    </li>
                  ))}
              </ul>
              <div className="skeleton h-auto w-1/2"/>
            </div>
          </fieldset>
        </div>
      </SectionContainer>
    </>
  )
}

export default ProblemFormulation;
