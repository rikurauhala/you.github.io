# Architecture

## Structure

Here is a short overview of the project structure. For instructions, see [manual](manual.md).

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

<!--

## User interface

The application is a single-page web application. Users can access it via their web browser. Requests to all but the root will lead to a "404 not found" page. The main application page consists of smaller parts.

### Info

#### Profile picture

#### Name

#### Bio

#### Details

### About

### Projects

#### Search bar

#### The grid

### Footer

-->

<!--

## Application state

Write here.

## Code style

Write here.

-->
