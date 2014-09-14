// wax on, wax off

var swig = require('swig');
var marked = require('marked');
var kramed = require('kramed');
var path = require('path');
var fs = require('fs');

var gh_base = "https://github.com/vzvenyach/codingforlawyers/tree/gh-pages/md/"


function makePages() {
 fs.readFile(__dirname + '/templates/_.base', {"encoding":"utf-8"}, function (err, site) {
  fs.readdir(__dirname + '/md/', function (err, files) {
   files.forEach(function (file, index, array) {
    fs.readFile(__dirname + '/md/' + file, {"encoding":"utf-8", "flag":"r"}, function (err, data) {
     kramed(data, {gfm: true, breaks:false, smartLists: true,  highlight: function (code) {return require('highlight.js').highlightAuto(code).value}, renderer: new kramed.Renderer()}, function (err, file_contents) {
      try {
        fs.mkdirSync(__dirname + '/chapters/'+ path.basename(file, '.md'));
      }
      catch (e) {
      }
      fs.writeFile(__dirname + '/chapters/'+ path.basename(file, '.md') + '/index.html', swig.render(site, {autoescape: false, locals:{content:file_contents, gh_url: gh_base + path.basename(file)}}), function (err) {
       if (err) throw err;
       console.log(file + " converted")
      })
     })
    })
   })
  }) 
 })
}

makePages()

// function makeIndex (callback) {
//  fs.readFile(__dirname + '/templates/_.base', {"encoding":"utf-8"}, function (err, site) {
//   fs.readFile(__dirname + '/index.md', {"encoding":"utf-8", "flag":"r"}, function (err, data) {
//    marked(data, {gfm: false, breaks:false, renderer: new marked.Renderer()}, function (err, file_contents) {
//     fs.writeFile(__dirname + '/index.html', swig.render(site, {autoescape: false, locals:{content:file_contents}}), function (err) {
//      if (err) throw err;
//      console.log("index.md converted")
//      callback()
//     })
//    })
//   }) 
//  })
// }

// makeIndex(makePages)