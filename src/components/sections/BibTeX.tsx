import { SectionContainer } from '../shared/SectionContainer';

export const BibTeX = () => {
  const bibtexEntries = [
    {
      key: 'bibtex',
      title: 'BibTeX References',
      bibtex: `@inproceedings{template2025,
        title={Academic Project Page Template},
        author={Zhang, Yinqiang and Others},
        booktitle={Proceedings of the Conference},
        year={2025},
        pages={1--20}
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
        {bibtexEntries.map((entry) => (
          <div key={entry.key}>
            <div className="p-2 mb-2">
              <span className="font-semibold text-lg">{entry.title}</span>
            </div>
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