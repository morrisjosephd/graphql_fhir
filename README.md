# Setting up Development Environment

### Clone the respository
https://github.com/PillarTechnology/template-react-express-mongo

### Install yarn
`brew update`

`brew install yarn`

### Install docker
`brew cask install docker`
start docker from Applications Directory

### Install global dependencies
`yarn global add pm2`

### Install package dependencies
`<PATH_TO_PROJECT>/scripts/runme setup`


# Running the application

### Running locally
`<PATH_TO_PROJECT>/scripts/runme run`

This will run both the server and client on localhost. The server will be running on port 3001, while the client will be served up from 3000
