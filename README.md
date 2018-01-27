# react-native-asset
[![npm version](https://badge.fury.io/js/react-native-asset.svg)](https://badge.fury.io/js/react-native-asset)[![Build Status](https://travis-ci.org/unimonkiez/react-native-asset.svg?branch=master)](https://travis-ci.org/unimonkiez/react-native-asset)

## Link and unlink assets to your react-native project with ease!

### [Check out this starter-kit to use your assets with even more simplicity.](https://github.com/unimonkiez/react-platformula-boilerplate)

## Usage
* Install
  ```bash
  npm install -g react-native-asset
  # or yarn
  yarn global add react-native-asset
  ```
* Add assets to you package json as you would with `react-native link`
  ```json
  ...
   "rnpm": {
      "assets": [
        "./src/font",
        "./src/mp3"
      ]
   }
  ```
* Run the command and linking + unlinking is automatic!
  ```bash
  react-native-asset
  ```
## Exaplain
With `react-native link` you have to unlink the files manually, which is hard work.  
Instead this library writes `link-assets-manifest.json` to the root of `android` and `ios` folders to keep track of the files which it added, for later removing it for you if missing from your `assets`!

## Parameters
* `-p, --path` - path to project, defaults to cwd.
* `-a, --assets` - assets paths, for example `react-native-asset -a ./src/font ./src/mp3`.
* `-ios-a, --ios-assets` - ios assets paths, will disable android linking
* `-android-a, --android-assets` - android assets paths, will disable ios linking.
* `-n-u, --no-unlink` - Not to unlink assets which not longer exists, not recommanded.