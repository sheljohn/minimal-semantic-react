# SemanticUI-React + Webpack

This repository contains the bare minimum to get you going with [SemanticUI-React](https://react.semantic-ui.com) and [Webpack](https://webpack.js.org/).

Specifically, this config declares the usual "big libraries" (jQuery, Lodash, React and SemanticUI) as [`externals`](https://webpack.js.org/configuration/externals/), which helps reduce significantly the final size of your bundle. Instead of being bundled together with your own code, these libraries are loaded as `<script>` tags in the header of the main HTML file (typically from a CDN).

To run this example, simply type in a terminal:
```
git clone https://github.com/sheljohn/minimal-semantic-react
cd minimal-semantic-react/
yarn install
yarn run serve
```

This will open a page at `localhost:3000`, showing a marvellous button. 
That's all! Happy hacking :) 

---

Additional information:

 - You can use `npm` instead of `yarn` if you prefer.
 - You can change the port in `webpack.config.js`, section `devServer`.

To build upon this skeleton with your own stuff:

 - Create an empty repo wherever you like (Github, Gitlab, Bitbucket, etc.);
 - After cloning this repo, just point to your git remote:
```
git remote set-url origin <address of your new repo>
git push -u origin master
```
