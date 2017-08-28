# generator-large-fe

> Generator-large-fe is a powerful generator for Front end engineer or Full Stack Developer, which can be used to create and Large FE projects that use React(antd or antd-mobile), Redux, Immutable, Express.  

## Installation

First, install [Yeoman](http://yeoman.io) and generator-large-fe using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-large-fe
```

Then generate your new project:

```bash
yo large-fe
```

## Usage

```bash
npm run gulp:dev // only firstly when development or you change some file in `.client/assets`

npm run dll // only firstly when development

npm run init // npm run gulp:dev && npm run dll

npm run dev // start development

npm run deploy // deploy application
```

## Generating Command

### create module

```
Description:
    Creates a new module

Example:
    yo large-fe:module user

    arguments:
        first: module name, like home, user ...

    This will create:
        app/client/user

- it can create controllers in batch, when you use `yo large-fe:module home user ...`
```

see [create a new module](./generators/module/README.md)  for more detail

### create view

```
Description:
    Creates a new view in module

Example:
    yo large-fe:view user profile

    This will create:
        app/client/user/views/profile

    arguments
        first: module name, like home, user ...
        second: view name, like index, profile ...
    options:
        first: Do you use Redux? `--redux` or empty, default without redux for this view

- it can create controllers in batch,  when you use `yo large-fe:view user profile  setting ...`
```

see [create a new view in module](./generators/view/README.md)  for more detail

### create component

```
Description:
    Creates a new component

Example:
    yo large-fe:component header                              # create header component in global(default)
    yo large-fe:component user header                         # create header component in user module
    yo large-fe:component user index header                   # create header component in index view of user module
    yo large-fe:component user index header --container       # create header container component in index view of user module
    
    This will create:
        app/client/common/components/Header
        app/client/user/views/components/Header
        app/client/user/views/index/components/Header
        app/client/user/views/index/containers/Header

    arguments:
        first: module name, like home, user ... it's selectable
        second: view name, like profile, setting ... it's selectable
        third: component name, like header, menu ...

    options
        first:  is it presentational component or container component ? --component is default 
                --component is presentational component
                --container is container component
```

## Features

### FE Project

- [x] react
- [x] antd or antd-mobile
- [x] redux
- [x] immutable
- [x] css module
- [x] postcss
- [x] less

### Front end Engineering

- [x] eslint
- [x] gulp
- [x] webpack

### Node Arch

- [x] express

## Planned Features and updates

- [ ] gitlab hooks of eslint 
- [ ] support express logs and tests firstly
- [ ] support more Node Arch, example koa, egg and so on

## Requirements

Make sure your Node.js version is >= 7.6.0 and npm version is >= 3.0.0

## Contribute

Contributions are welcome. If you find something is missing or there are errors hidden somewhere, feel free to add a new issue.

If you want to submit a pull request please do so from and against the develop branch.

```bash
git clone git@git.iguokr.com:wenqiao/generator-large-fe.git

npm link
```

## Maintainer

- AidanDai aidandai@126.com

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [AidanDai](https://aidandai.github.io)
