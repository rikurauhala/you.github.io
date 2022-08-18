import { useEffect, useState } from 'react';

import { keyword } from '../config';

import octokitService from '../services/octokit';

import { Repository, RepositoryFull } from '../types/types';

import Subtitle from './Subtitle';
import Paragraph from './Paragraph';
import ProjectGrid from './ProjectGrid';

const Projects = (): JSX.Element => {
  const [repositories, setRepositories] = useState<Array<RepositoryFull>>([]);
  let filteredRepositories: Array<Repository> = repositories
    .filter(repository => !repository.fork)
    .map(repository => ({
      description: repository.description,
      homepage: repository.homepage,
      html_url: repository.html_url,
      id: repository.id,
      languages_url: repository.languages_url,
      name: repository.name,
      pushed_at: new Date(repository.pushed_at),
      topics: repository.topics,
      year: repository.created_at.substring(0,4)
    }))
    .sort((a, b) => b.pushed_at.getTime() - a.pushed_at.getTime());

  if (keyword.length > 0) {
    filteredRepositories = filteredRepositories
      .filter(repository =>
        repository.topics.includes(keyword)
      );
  }

  const setState = (repositoriesFromAPI: Array<RepositoryFull>) => {
    setRepositories(repositoriesFromAPI);
  };

  useEffect(() => {
    void octokitService.getRepositories(setState);
  }, []);

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
      {
        repositories.length > 0
          ? <ProjectGrid repositories={filteredRepositories} />
          : <Paragraph content='No projects yet!' />
      }
    </>
  );
};

export default Projects;
