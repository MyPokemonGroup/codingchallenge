FROM node:alpine

WORKDIR /usr/src/app

RUN apk update
#RUN apk add gcc musl-dev libxslt-dev
RUN apk add --no-cache python python-dev python3 python3-dev \
    libexif udev xvfb chromium chromium-chromedriver \
    linux-headers build-base bash git ca-certificates && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
    pip3 install selenium && \
    pip3 install pyvirtualdisplay && \
    pip3 install xvfbwrapper && \
    rm -r /root/.cache
RUN apk add py3-lxml


LABEL maintainer="MyPokemonGroup"

COPY ./lib/chromedriver /usr/src/app/lib/chromedriver

VOLUME [ "/usr/src/app" ]

CMD [ "npm", "start" ]
