FROM debian:jessie

ENV NODE_VERSION 6.11.2
ENV NPM_VERSION 3.10.10

RUN buildDeps='curl' \
    && apt-get update \
    && apt-get install libc-dev-bin libc6-dev libpng12-0 linux-libc-dev manpages manpages-dev zlib1g-dev libc-dev-bin libc6-dev libpng12-0 libpng12-dev linux-libc-dev manpages manpages-dev zlib1g-dev libpng-dev \
    && apt-get install -y $buildDeps \
    && curl -SLO "http://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" \
    && tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 \
    && rm "node-v$NODE_VERSION-linux-x64.tar.gz" \
    && npm install -g npm@"$NPM_VERSION" \
    && apt-get purge -y --auto-remove $buildDeps
