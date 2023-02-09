#!/bin/bash

#############################################################################################
#                                                                                           #
#  Use this installation script to automate the process of setting up the project for you.  #
#  Please refer to the requirements before running the script.                              #
#                                                                                           #
#  https://github.com/rikurauhala/you.github.io                                             #
#                                                                                           #
#############################################################################################

SOURCE="https://github.com/rikurauhala/you.github.io"
NOTICE="\033[0;33m"
LINK="\033[1;34m"
STEP="\033[0;36m"
NC="\033[0m"
PREFIX="${NOTICE}[!]${NC} "
QUESTION="${NOTICE}[?]${NC} "

function print_link {
    printf "${PREFIX}${LINK}$1\n"
}

function print_question {
    printf "${QUESTION}${STEP}($1 / 10)${NC} $2"
}

function print_other {
    printf "${PREFIX}$1\n"
}

function print_status {
    printf "${PREFIX}${STEP}($1 / 10)${NC} $2\n"
}

print_status 1 "Downloading the source code..."
git clone $SOURCE
print_status 2 "Source code downloaded"

cd you.github.io

print_status 3 "Installing dependencies..."
npm install
print_status 4 "Dependencies installed"

touch .env

print_question 5 "What is your username on GitHub? Type here: "
read username
while true; do
    if [[ ! -z $username ]]; then
        echo REACT_APP_USERNAME=$username >> .env
        break
    else
        print_question "Username cannot be empty! Type here: "
        read username
    fi
done
print_question 6 "What is your real name? Enter to skip: "
read name
echo REACT_APP_NAME=$name >> .env
print_question 7 "Set up a keyword to filter repositories. Enter to skip: "
read keyword
echo REACT_APP_KEYWORD=$keyword >> .env
print_question 8 "Do you have a custom url for the application? Enter to skip: "
read url
if [[ ! -z $url ]]; then
    echo REACT_APP_URL=$url >> .env
    touch public/CNAME
    echo $url >> public/CNAME
    print_other "Custom url set to ${url}"
else
    echo REACT_APP_URL="" >> .env
fi

print_question 9 "Write something about yourself. Enter to skip: "
read about
if [[ ! -z $about ]]; then
    about_file="src/content/about.md"
    rm $about_file
    touch $about_file
    echo "## About" >> $about_file
    echo "" >> $about_file
    echo $about >> $about_file
else
    print_other "You can always edit the file src/content/about.md later!"
fi

print_question 10 "Write something about your projects. Enter to skip: "
read projects
if [[ ! -z $projects ]]; then
    projects_file="src/content/projects.md"
    rm $projects_file
    touch $projects_file
    echo "## Projects" >> $projects_file
    echo "" >> $projects_file
    echo $about >> $projects_file
else
    print_other "You can always edit the file src/content/projects.md later!"
fi
