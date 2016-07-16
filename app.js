// Write JavaScript here
$(document).ready(function() {
var modelKlass = Backbone.Model.extend({

});

var viewKlass = Marionette.ItemView.extend({
  template: MyApp.templates.list_view,
  triggers: {
    'click #expand': 'expand_item'
  },
  expand_item: function() {
    console.log("asdf");
  }
});

var MyCollectionView = Marionette.CollectionView.extend({
  el: ".list_container",
  getChildView: function(item) {
    return viewKlass;
  }
});

var collectionView = new MyCollectionView({
  collection: new Backbone.Collection()
});


collectionView.render();
for(i=0; i<10; i++) {
collectionView.collection.add(new modelKlass({view_id: (i+1)}));
}
var a = 41;

});
