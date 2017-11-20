# Node starter template

This is a starter template for node projects using `@std/esm` to enable `import` and `export` functionality on the fly and without the need of a compilation step.

With the onward progress of Node, many of the missing gaps filled with Babel are now filled. While Babel is a great project, the additional compilation step and debugging can be cumbersome. 

`@std/esm` bridges an important gap in Node and the evolving JavaScript language--modules. This starter is a quick and easy way to start a Node project using `@std/esm`. It includes useful tools for testing and debugging as well.

# Testing with Ava

This starter includes Ava and configures it to use `@std/esm` so that library files can be included into test using `import` and `export` syntax.

# Debugging

This starter template also includes debugger configurations for use with Visual Studio Code.

# Use

Treat `main.js` as the entry point and load from `index.js`. If using Babel / Webpack, `main.js` would be the entry point; `index.js` is the `@std/esm` loader.

Be aware that this particular config enables root level `await` statements. To be `babel` compatible, either additional plugins would need to be used or this feature should not be used or should be disabled. (See `package.json`).

Basic commands

`yarn dev` - Use `nodemon` to watch for file changes and re-execute on change.

`yarn test` - Run tests with `ava`, configured to use `@std/esm` as a loader.

`yarn test-watch` - Same as above only watch for changes and re-run tests.

