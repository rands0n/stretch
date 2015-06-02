# [Stretch](https://randsonjs.github.io/stretch)

A collection of LESS variables, mixins and functions for writing better CSS

The Stretch Website! For more information check [master branch](https://github.com/randsonjs/stretch/blob/master/README.md).

## How it works?

We use docpad [DocPad](https://github.com/bevry/docpad), a static generator in [Node](http://nodejs.org/), and the best way to install it is via [npm](http://npmjs.org/).

1. You need to clone the project:

```sh
$ git clone git@github.com:randsonjs/stretch.git
```

2. Then go to the folder

```sh
$ cd stretch
```

3. Change branch to `site`:

```sh
$ git checkout site
```

4. And finally, install all dependencies

```sh
$ [sudo] npm install & bower install 
```

Now you're good to go!

## Usage

DocPad has three basic options used in this project

To regenerate the site as you edit and save files, which can be viewed at `http://localhost:9778`, run:

```sh
$ npm run watch
```

To generate a static version of the site, that is ready to upload to a server (it will create a folder called `out`), run:

```sh
$ npm run build
```

To generate and send the output to `gh-pages` branch, run:

```sh
$ npm run deploy
```

## Contributing

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](https://github.com/randsonjs/stretch/blob/master/README.md).

* [Bug reports](https://github.com/randsonjs/stretch/blob/master/CONTRIBUTING.md#bugs)
* [Feature requests](https://github.com/randsonjs/stretch/blob/master/CONTRIBUTING.md#features)
* [Pull requests](https://github.com/randsonjs/stretch/blob/master/CONTRIBUTING.md#pull-requests)

## License
[MIT License](https://github.com/randsonjs/stretch/blob/master/LICENSE) © Randson Oliveira
