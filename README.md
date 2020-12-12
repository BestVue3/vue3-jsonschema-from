# vue3 jsonschema form

![Coverage](https://img.shields.io/coveralls/github/pure-vue/vue3-jsonschema-from)
![License](https://img.shields.io/npm/l/@v3jsf/core)
![Version](https://img.shields.io/npm/v/@v3jsf/core)

> This library is still under early developing, some api will change before we reach `1.0.0` version.

Web Forms never come that easy, Just vue3 component and JsonSchema, you can nearly do everything to build your own form.

If you:

- want to build dynamic form which you try to save the form config into your database
- tried of writting form code by typing every field
- try to build some system which your user can build a form by Drag And Drop

you should try this.

You can play with the [playground]() to get familiar with this lib. Or you may want to read the [doc]() to find out what exactly this lib can do.

# How to contribute

As I saied, this repo is still under heavy development, if you have some idea about how this lib should be, issue and pr always welcome.

### Development Setup

First you should clone this repo

```shell
git clone https://github.com/pure-vue/vue3-jsonschema-from.git

```

This is a monorepo which use `lerna` to manage different packages. The simplest way to setup is run:

```shell
npx lerna bootstrap
```

Then you can run `npm run dev` to build packages, it will listen to file changes and do auto rebuild.

We have a `playground` project, you can cd to it and run `npm run dev` to start it.

We still trying hard to make our process better.

### How to PR

You can fork this repo, and do some change on your forked repo.

After you done your coding, you'd better run unit test to make sure everything alright. And if you add some new feature, you should add some unit tests to tell people your code will work fine.

Then you push your code to github, and github will gidue you to make the PR.
