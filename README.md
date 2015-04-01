#  Base Html


Base Html assets and index.html
Powered with Bower, Less and Bootstrap 3+

####features:
 - uglify js
 - less
 - cssmin

#### Version
1.0.0


### Installation - Dependencies

You need Node JS [node js](https://nodejs.org/)

You need grunt installed globally:

```sh
$ npm install -g grunt-cli
```
Bower installed. Bower is a command line utility.
```sh
$ npm install -g bower
```

and Bower installer installed.
```sh
$ npm install -g bower-installer
```


### Installation
clone project
```sh
$ git clone git@github.com:gnribeiro/gnr_html.git
$ npm install
$ bower-installer
$ grunt
```

### Development

watch js, css, less:
```sh
$ grunt watch
```
### Production
distrubution task (compress less, minify css, uglify, minify js)
```sh
$ grunt prod
```


##### dev notes

- To add new js files (concat js), in gruntfile.js search for 'themes_js' 
- To add css files (minicss), in gruntfile.js search for 'themes_css'