/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';

import { Tooltip } from '@mui/material';

import { Octokit } from 'octokit';

import { colors } from '../utils/colors';

import './LanguageBar.css';

const LanguageBar = ({ languagesUrl }: {languagesUrl: string}): JSX.Element => {
  const [languages, setLanguages] = useState<Array<string>>([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const octokit = new Octokit();
        const { data } = await octokit.request(`GET ${languagesUrl}`);
        setLanguages(data);
      } catch (error) {
        console.log(error);
      }
    };
    void fetchLanguages();
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
            <Tooltip title={value[0]} arrow>
              <div
                key={key}
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
