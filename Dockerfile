FROM node:latest

LABEL maintainer="MyPokemonGroup"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

CMD [ "npm", "start" ]