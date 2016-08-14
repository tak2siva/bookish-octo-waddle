// Write JavaScript here

var MyCollectionView = require('./list_view.js');
var modelKlass = require('./model.js');
var bb = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var infinity = require('./lib/infinity.js');

window.useInfinity = false;
window.useCloak = true;


$(document).ready(function() {
  window.collectionView = new MyCollectionView({
    collection: new bb.Collection()
  });

  for(i=0; i<5000; i++) {
    collectionView.collection.add(new modelKlass({view_id: (i+1)}));
  }

  window.scrollHandler = function () {
    $('.list_item').each(function () {
      var id = $(this).attr('data-id');
      if(collectionView.subViews[id].isVisible()) {
        collectionView.subViews[id].restore();
      } else {
        collectionView.subViews[id].softDelete();
      }
    })
  };

  if(window.useCloak) {
    console.log("setting scroll handler");
    $(window).on('scroll', _.debounce(scrollHandler, 350));
  }
});

