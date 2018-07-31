FROM nginx:latest

LABEL maintainer="MyPokemonGroup"

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80