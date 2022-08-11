/* eslint-disable @typescript-eslint/no-unused-vars */
import Project from './Project';

import './Projects.css';

const Projects = ({ repositories }: {repositories: Array<any>}): JSX.Element => {
  return (
    <div>
      <h2>Projects</h2>
      {repositories.map(repository =>
        <Project
          key={repository.id}
          name={repository.name}
        />
      )}
    </div>
  );
};

export default Projects;
