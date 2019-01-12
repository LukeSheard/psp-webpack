Perspective Webpack Plugin Error
-------------------------------------

Steps to repo:

1. Run `yarn` to install dependencies
2. Serve the root directory of this project using `serve` or `http-server`
3. Run `yarn webpack` to build webpack

```javascript
yarn webpack --mode=development
yarn run v1.12.3
$ ~/psp-webpack/node_modules/.bin/webpack --mode=development
~/psp-webpack/node_modules/@jpmorganchase/perspective/src/loader/blob_worker_loader.js:101
            return cb(null, this._compilation.assets[worker.file].children[0]._value);
                                                                          ^

TypeError: Cannot read property '0' of undefined
    at worker.compiler.runAsChild (~/psp-webpack/node_modules/@jpmorganchase/perspective/src/loader/blob_worker_loader.js:101:75)
    at compile (~/psp-webpack/node_modules/webpack/lib/Compiler.js:300:11)
    at hooks.afterCompile.callAsync.err (~/psp-webpack/node_modules/webpack/lib/Compiler.js:556:14)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (~/psp-webpack/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:15:1)
    at AsyncSeriesHook.lazyCompileHook (~/psp-webpack/node_modules/tapable/lib/Hook.js:154:20)
    at compilation.seal.err (~/psp-webpack/node_modules/webpack/lib/Compiler.js:553:30)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (~/psp-webpack/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (~/psp-webpack/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.optimizeAssets.callAsync.err (~/psp-webpack/node_modules/webpack/lib/Compilation.js:1323:35)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (~/psp-webpack/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (~/psp-webpack/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.optimizeChunkAssets.callAsync.err (~/psp-webpack/node_modules/webpack/lib/Compilation.js:1314:32)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (~/psp-webpack/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (~/psp-webpack/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.additionalAssets.callAsync.err (~/psp-webpack/node_modules/webpack/lib/Compilation.js:1309:36)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (~/psp-webpack/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (~/psp-webpack/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.optimizeTree.callAsync.err (~/psp-webpack/node_modules/webpack/lib/Compilation.js:1305:32)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (~/psp-webpack/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (~/psp-webpack/node_modules/tapable/lib/Hook.js:154:20)
    at Compilation.seal (~/psp-webpack/node_modules/webpack/lib/Compilation.js:1242:27)
    at hooks.make.callAsync.err (~/psp-webpack/node_modules/webpack/lib/Compiler.js:550:17)
    at _err0 (eval at create (~/psp-webpack/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:11:1)
    at _addModuleChain (~/psp-webpack/node_modules/webpack/lib/Compilation.js:1093:12)
    at processModuleDependencies.err (~/psp-webpack/node_modules/webpack/lib/Compilation.js:1005:9)
    at _combinedTickCallback (internal/process/next_tick.js:132:7)
    at process._tickCallback (internal/process/next_tick.js:181:9)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```