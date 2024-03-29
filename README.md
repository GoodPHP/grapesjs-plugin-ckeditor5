# GrapesJS CKEditor5

This plugin replaces the default Rich Text Editor with the one from CKEditor5

Video example: 👇

[![Alt text](https://devfuture.pro/wp-content/uploads/2021/12/GrapesJS-CKEditor-2021-12-27-02-16-48.png)](https://www.youtube.com/watch?v=xn4gSMIrx-A)
<br/>

GJS.MERKET: https://gjs.market/authors/devfuture-development

<b>GrapesJS Development</b> - <a href="https://devfuture.pro/grapesjs-development/" target="_blank">link</a>
<br/>
<b>GrapesJS Donation</b> - <a href="https://opencollective.com/grapesjs" target="_blank">link</a>
<br/>
<a href="https://www.linkedin.com/in/maksym-maliyshytskyi-6ab578182/" target="_blank">Linkedin</a>

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
