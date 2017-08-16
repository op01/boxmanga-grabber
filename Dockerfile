FROM node:8
RUN apt update && apt install -y \
  xvfb zsh vim \
  x11-xkb-utils \
  xfonts-100dpi \
  xfonts-75dpi \
  xfonts-scalable \
  xfonts-cyrillic \
  x11-apps \
  clang \
  libdbus-1-dev \
  libgtk2.0-dev \
  libnotify-dev \
  libgnome-keyring-dev \
  libgconf2-dev \
  libasound2-dev \
  libcap-dev \
  libcups2-dev \
  libxtst-dev \
  libxss1 \
  libnss3-dev \
  gcc-multilib \
  g++-multilib

EXPOSE 8080
ENV DEBUG="nightmare"
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY docker-entrypoint.sh /entrypoint
RUN chmod +x /entrypoint
ENTRYPOINT ["/entrypoint"]
CMD ["npm","start"]
VOLUME /app
COPY child.js index.js server.js /app/