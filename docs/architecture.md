# Architecture

## Overview

This document explains the architecture of the application and works as a manual for contributors in a beginner-friendly way.

The application is a single-page web app written in TypeScript. The application can be deployed to [GitHub pages](https://pages.github.com/) with the npm package [gh-pages](https://github.com/tschaub/gh-pages). Data is fetched from GitHub using [Octokit](https://github.com/octokit/octokit.js) and the [GitHub REST API](https://docs.github.com/en/rest).

## Structure

Here is a short overview of the project structure. For instructions, see [manual](manual.md).

### build

Not committed to the repository. Contains the contents of the public folder and the compiled JavaScript code.

### documentation

As the name would suggest, project documentation is located here. This document, architecture.md provides insight into how the application works. The file manual.md contains the user manual and instructions for setting up and configuring the application.

```
├── documentation
│   ├── architecture.md
│   └── manual.md
```

### public

This directory contains the index.html page and the custom 404 page for GitHub Pages. The favicon directory contains different variations of the favicon. The file CNAME can be used to configure a custom domain for the deployed application.

Read more about the public folder [here](https://create-react-app.dev/docs/using-the-public-folder/).

```
├── public
│   ├── favicon
│   │   ├── -.ico
│   │   ├── ...
│   │   └── z.ico
│   ├── 404.css
│   ├── 404.html
│   ├── CNAME
│   ├── index.html
│   ├── manifest.json
│   ├── README.md
│   └── robots.txt
```

### src

The source code is located here.

The directory *components* contains React components for all smaller segments of the page. User content are located in the *content* directory. All requests to the GitHub REST API are made via the Octokit service located in *services*. As we are using TypeScript, most type definitions can be found in the folder *types*. The directory *utils* contains miscellaneous objects and data used by the application.

The main component is called *App.tsx*.

```
├── src
│   ├── components
│   │   ├── About
│   │   │   ├── ...
│   │   ├── Footer
│   │   │   ├── ...
│   │   ├── Info
│   │   │   ├── ...
│   │   └── Projects
│   │       ├── ...
│   ├── content
│   │   ├── about.md
│   │   └── projects.md
│   ├── services
│   │   └── octokit.ts
│   ├── types
│   │   ├── environment.d.ts
│   │   ├── markdown.d.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── colors.json
│   │   ├── colors.ts
│   │   └── initialObjects.ts
│   ├── App.css
│   ├── App.tsx
│   ├── config.ts
│   └── index.tsx
├── .env
├── .env.default
├── .eslintrc
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## User interface

The program is a single-page web application. Users can access it via their web browser on various devices. Requests to all but the root address will lead to a "404 not found" page. The main application page consists of smaller parts.

### Info

The *info* section consists of four smaller components. All data in this section is fetched from the GitHub API.

#### Profile picture

Profile picture of the user. While loading, a gray blinking skeleton component is displayed.

#### Name

Full name of the user. If no name has been set, the GitHub username will be used instead.

#### Bio

Bio of the user. Should be descriptive yet not too long. Could contain a title / position or other relevant information about the user. Examples: *Computer science student at University of Example* or *Full stack developer at Company Inc*.

#### Details

Other details from the profile: company, location, GitHub account name and Twitter account name. Only existing details are displayed. The details badges for the GitHub and Twitter accounts also contain links to said profiles.

### About

The *About* section is expected to be customized by the person setting up the application. This section contains relevant information about the author. The contents of this section are stored in the file `src/content/about.md`.

For instructions, refer to the [manual](manual.md#about-1).

### Projects

The *Projects* section contains the "main" functionality of the application. The first section of this component is similar to the *About* section (see above). The author can customize the introductory part by editing the file `src/content/projects.md`.

For instructions, refer to the [manual](manual.md#projects-1).

#### Search bar

The *search bar* allows the user to search from the list of projects. Content that can be searched can be included in either the project description or its topics.

#### The grid

The project *grid* contains details about the projects. The projects are listed in the order the repositories were updated. This way the latest projects are always at the top. All data is fetched from GitHub.

The grid consists of smaller components in the following order:

- Title
  - the name of the repository the project is hosted in
  - contains a link to the repository
- Year
  - based on the year the repository was created
- Description
  - reposition description
- Language bar
  - displays the programming languages used in the project
  - based on the languages listed in the repository
- Topics
  - topics or "tags" from the repository.

<!-- more about the language bar ? -->

### Footer

Always displayed at the bottom of the page. Contains the following details:

- Address
  - address of the website
  - *username*.github.io by default
  - can be customised in the config file
- Name
  - full name of the author
  - optional
- Year
  - the current year (2022)
- Source code
  - link to the source code
  - assumed to be `https://github.com/username/username.github.io`

## Application state

Application state is managed with the [useState](https://reactjs.org/docs/hooks-state.html) hook.

## Services

[Octokit](https://github.com/octokit/octokit.js) is used to make calls to the GitHub [REST API](https://docs.github.com/en/rest). Within the application, all related functionality can be found in the file `src/services/octokit.ts`. The Octokit service is used to set the application state.

## Code style

[ESLint](https://eslint.org/) is used to check the code style. The linter is configured with the file `.eslintrc`, located in the root directory of the project.

For development with VS Code the ESLint [plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is recommended.

### Imports

For Material UI components, default imports should be used.

```ts
// import like this
import Delete from '@mui/icons-material/Delete';

// instead of like this
import { Delete } from '@mui/icons-material';
```

<!--

## Functionality

Write here.

-->
