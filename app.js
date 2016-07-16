// Write JavaScript here
$(document).ready(function() {
var modelKlass = Backbone.Model.extend({

});

var viewKlass = Backbone.View.extend({
  className: 'list_item',
  template: MyApp.templates.list_view,
  events: {
    'click #expand': 'expand_item'
  },

  initialize: function(data) {
    this.model = data.model;
    this.$el.html(this.template(this.model.attributes));
  },

  expand_item: function() {
    alert(this.model.get('view_id'));
  }
});

var MyCollectionView = Backbone.View.extend({
  el: ".list_container",

  initialize: function(data)  {
    this.collection = data.collection;
    this.subViews = [];
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function(model) {
    var view = new viewKlass({model: model});
    this.$el.append(view.$el);
    // view.delegateEvents();
    this.subViews.push(view);
  }
});

var collectionView = new MyCollectionView({
  collection: new Backbone.Collection()
});


// collectionView.render();
for(i=0; i<10; i++) {
collectionView.collection.add(new modelKlass({view_id: (i+1)}));
}
var a = 41;

});
