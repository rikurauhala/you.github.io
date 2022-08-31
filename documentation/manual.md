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

# How to configure

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
