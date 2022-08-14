import { Repository } from '../types/types';

import Subtitle from './Subtitle';
import Paragraph from './Paragraph';
import ProjectGrid from './ProjectGrid';

const Projects = ({ repositories }: { repositories: Array<Repository> }): JSX.Element => {
  const subtitle = 'Projects';
  const content = `
    Here is a selection of projects I have worked on.
    Click the name of the project to view the source code and documentation on GitHub.
    Hover over or tap the colored bar to see which languages the code base consists of.
    The last section lists relevant topics.
  `;

  return (
    <>
      <Subtitle subtitle={subtitle} />
      <Paragraph content={content} />
      <ProjectGrid repositories={repositories} />
    </>
  );
};

export default Projects;
