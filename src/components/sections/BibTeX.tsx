import { SectionContainer } from '../shared/SectionContainer';

export const BibTeX = () => {
  const bibtexEntries = [
    {
      key: 'bibtex',
      title: 'BibTeX References',
      bibtex: `@inproceedings{bim_loc_tbd,
        title={{BIM-Loc: BIM-Integrated Discrepancy-Aware Indoor LiDAR-based Localization}},
        author={Yinqiang Zhang and Liang Lu and Yinpeng Pan and Maolin Lei and Xiaowei Luo and Jia Pan},
        booktitle={TBD},
        year={TBD},
        pages={TBD}
      }`,
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('BibTeX copied to clipboard');
    });
  };

  return (
    <SectionContainer>
      <div className="card-body">
        <div className="divider divider-neutral text-2xl font-bold text-center">
          BibTeX References
        </div>
        {bibtexEntries.map((entry) => (
          <div key={entry.key}>
            <pre 
              className="bg-base-200 p-4 rounded-lg overflow-auto text-sm leading-relaxed 
                        cursor-pointer hover:bg-base-300 transition-colors select-none"
              onClick={() => copyToClipboard(entry.bibtex)}
              title="Click to copy BibTeX"
            >
              <code>{entry.bibtex}</code>
            </pre>
          </div>
        ))}     
      </div>
    </SectionContainer>
  );
};

export default BibTeX;