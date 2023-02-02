import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import octokitService from '../../services/octokit';

import colors from '../../utils/colors';

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

  const noLanguages = languages
    && Object.keys(languages).length === 0
    && Object.getPrototypeOf(languages) === Object.prototype;

  if (noLanguages) {
    return (
      <Box marginTop="15px">
        <Tooltip arrow enterTouchDelay={0} title="No languages!">
          <div
            style={{
              backgroundColor: '#0f3552',
              display: 'inline-block',
              height: '7px',
              width: '100%'
            }}
          />
        </Tooltip>
      </Box>
    );
  }

  return (
    <Box marginTop="15px">
      {
        Object
          .entries(barLength)
          .map(([key, value]) =>
            <Tooltip arrow enterTouchDelay={0} key={key} title={value[0]}>
              <div
                style={{
                  backgroundColor: colors[value[0] as keyof typeof colors],
                  display: 'inline-block',
                  height: '7px',
                  width: value[1]
                }}
              />
            </Tooltip>
          )
      }
    </Box>
  );
};

export default LanguageBar;
