import { useEffect, useState } from 'react';

import { Tooltip } from '@mui/material';

import octokitService from '../services/octokit';

import colors from '../utils/colors';

import './LanguageBar.css';

const LanguageBar = ({ languagesUrl }: {languagesUrl: string}): JSX.Element => {
  const [languages, setLanguages] = useState<Array<string>>([]);

  const setState = (languagesFromAPI: Array<string>) => {
    setLanguages(languagesFromAPI);
  };

  useEffect(() => {
    void octokitService.getLanguages(languagesUrl, setState);
  }, []);

  const totalBytes = Object
    .entries(languages)
    .map(([_key, value]) => parseInt(value))
    .reduce((p, c) => p + c, 0);

  const barLength = Object
    .entries(languages)
    .map(pairs =>
      [pairs[0], (parseInt(pairs[1])/totalBytes*100)+'%']
    );

  return (
    <div className='languageBar'>
      {
        Object
          .entries(barLength)
          .map(([key, value]) =>
            <Tooltip arrow enterTouchDelay={0} key={key} title={value[0]}>
              <div
                className='language'
                style={{
                  backgroundColor: colors[value[0] as keyof typeof colors],
                  width: value[1]
                }}
              />
            </Tooltip>
          )
      }
    </div>
  );
};

export default LanguageBar;
