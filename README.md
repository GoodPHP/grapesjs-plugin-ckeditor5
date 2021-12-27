# GrapesJS CKEditor5

This plugin replaces the default Rich Text Editor with the one from CKEditor5

<p align="center"><img src="https://devfuture.pro/wp-content/uploads/2021/12/GrapesJS-CKEditor-2021-12-27-02-16-48.png" alt="GrapesJS CKeditor5" align="center"/></p>
<br/>

Video example: 👇
[![Alt text](https://camo.githubusercontent.com/3ce0d5d1a61c5017c965206df823081364bef5a045f96b66e79ef21c2dd4521c/68747470733a2f2f632e636b736f757263652e636f6d2f612f312f696d672f6e706d2f636b656469746f72352d6275696c642d636c61737369632e706e67)](https://www.youtube.com/watch?v=xn4gSMIrx-A)


<b>GrapesJS Development</b> - <a href="https://devfuture.pro/grapesjs-development/" target="_blank">link</a>
<br/>
<b>GrapesJS Donation</b> - <a href="https://opencollective.com/grapesjs" target="_blank">link</a>

## Summary

* Plugin
  * Name: `gjs-plugin-ckeditor5`
  * Options:
      * `options` CKEditor's configuration object, eg. `{ language: 'en', toolbar: [...], ...}`
      * `position` Position side of the toolbar, default: `left`, options: `left|center|right`



## Download

* `npm i grapesjs-plugin-ckeditor5` or `yarn add grapesjs-plugin-ckeditor5`
* Latest release link https://github.com/GoodPHP/grapesjs-plugin-ckeditor5/



## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="ckeditor5/build/ckeditor.js"></script>
<script src="dist/grapesjs-plugin-ckeditor5.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      plugins: ['gjs-plugin-ckeditor5'],
      pluginsOpts: {
        'gjs-plugin-ckeditor5': {
            position: 'left',
            options: {
              trackChanges: {},
              toolbar: {
                items: [
                  'heading',
                  '|',
                  'fontColor',
                  'fontSize',
                  'fontFamily',
                  'fontBackgroundColor',
                  'alignment',
                  'bold',
                  'italic',
                  'underline',
                  'strikethrough',
                  'link',
                  'bulletedList',
                  'numberedList',
                  'horizontalLine',
                  '|',
                  'outdent',
                  'indent',
                  '|',
                  'blockQuote',
                  'insertTable',
                  '|',
                  'undo',
                  'redo'
                ]
              },
              language: 'en',
              table: {
                contentToolbar: [
                  'tableColumn',
                  'tableRow',
                  'mergeTableCells',
                  'tableCellProperties',
                  'tableProperties'
                ]
              },
              licenseKey: ''
            }
          }
      }
  });
</script>
```



## Development

Clone the repository

```sh
$ git clone https://github.com/GoodPHP/grapesjs-plugin-ckeditor5.git
$ cd grapesjs-plugin-ckeditor5
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```
