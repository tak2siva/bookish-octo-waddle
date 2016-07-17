// Write JavaScript here

var MyCollectionView = require('./list_view.js');
var modelKlass = require('./model.js');
var bb = require('backbone');
var $ = require('jquery');
var infinity = require('./lib/infinity.js');

$(document).ready(function() {
  var collectionView = new MyCollectionView({
    collection: new bb.Collection()
  });

  for(i=0; i<200; i++) {
    collectionView.collection.add(new modelKlass({view_id: (i+1)}));
  }
});
