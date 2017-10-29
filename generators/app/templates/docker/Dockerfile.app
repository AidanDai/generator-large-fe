FROM webaidan/<%= name %>:production

ADD . /app
WORKDIR /app

RUN rm -rf node_modules \
    && ln -s /env/node_modules ./node_modules \
    && npm run static
