# User manual

## Getting started 

### How to install

Start by getting the source code. Use one of the following ways to clone the repository from the command line. Alternatively, you may download the source code as a [zip package](https://github.com/rikurauhala/rikurauhala.github.io/archive/refs/heads/main.zip).

```bash
# Get the source code via the command line
# Choose the way you are most familiar with
 
# Clone with SSH
$ git clone git@github.com:rikurauhala/rikurauhala.github.io.git

# Clone with HTTPS
$ git clone https://github.com/rikurauhala/rikurauhala.github.io.git

# Clone with GitHub CLI
$ gh repo clone rikurauhala/rikurauhala.github.io
```

Next, make sure you are in the correct folder and install dependencies. The application will not work without installing dependencies first!

```bash
# Change directory
$ cd rikurauhala.github.io

# Install dependencies
$ npm install
```

### How to configure

#### Configuration file

The application requires some configuration. Start by renaming or copying the file `.env.default` into a new file called `.env`. Open the file in your favourite editor and replace the values with your own. It's okay to commit the .env file if you want, as it contains no secrets.

The contents of the .env configuration file are the following.

```bash
# KEYWORD
# Use this keyword to control which repositories will show up in the application
# Add the keyword to all repositories on GitHub to mark them as part of your portfolio
REACT_APP_KEYWORD='portfolio'

# NAME
# Your full name
REACT_APP_NAME='Firstname Lastname'

# REPOSITORY
# The repository where the source code is hosted
REACT_APP_REPOSITORY='https://github.com/username/repository'

# USERNAME
# Your GitHub username
REACT_APP_USERNAME='username'

# URL
# Custom url, optional
REACT_APP_URL='www.example.com'
```
#### Content

The application has two diffent configurable sections for user content. Content is written using [Markdown](https://www.markdownguide.org/cheat-sheet/).

##### About

The first one is the *About* section. This is where you can write anything about yourself you wish to tell the people visiting your portfolio. Remember that this is intended to be your professional site so you may want to write about your education, career or professional interests. You may also provide instructions on how to contact you, for example via email or on LinkedIn.

Contents of the *About* section can be written by editing the file **src/content/about.md**.

##### Projects

The second configurable section is the *Projects* section. Your project details are automatically fetched from GitHub, but you may want to provide some additional details here.

Contents of the *Projects* section can be written by editing the file **src/content/projects.md**.

##### Custom

Adding custom sections should be straightforward. Create a new component in the **src/components** directory and write the contents in a new markdown (.md) file in the **src/content** directory. For example, you may want to consider creating a custom section for your professional social media accounts.

### How to run

Start the application from the command line after installing the dependencies and configuring the application to use your username and other details. For production, I would recommend deploying the app to GitHub Pages. See instructions below.

```bash
# Run the application
$ npm start
```

### How to deploy

After making sure the application works as intended and it displays the data you want, you can deploy it to [GitHub Pages](https://pages.github.com/).

```bash
# Deploy the application to GitHub pages
$ npm run deploy -- -m "Deploy"
```

## Resources

Here is a collection of useful resources.

- [GitHub API](https://docs.github.com/en/rest) documentation
- [Markdown](https://www.markdownguide.org/cheat-sheet/) cheatsheet for writing content
- [Material UI](https://mui.com/material-ui/getting-started/overview/) documentation
- [TypeScript](https://www.typescriptlang.org/docs/) documentation
- [TypeScript](https://fullstackopen.com/en/part9) learning resources