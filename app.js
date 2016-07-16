// Write JavaScript here
$(document).ready(function() {
var modelKlass = Backbone.Model.extend({

});

var viewKlass = Backbone.View.extend({
  className: 'list_item',
  template: {row_1: MyApp.templates.row_1,
      row_2: MyApp.templates.row_2},

  defaults: {
    expanded: false
  },

  events: {
    'click #expand': 'expand_item'
  },


  initialize: function(data) {
    this.model = data.model;
    this.$el.html(this.template.row_1(this.model.attributes));
  },

  expand_item: function() {
    // alert(this.model.get('view_id'));
    if(!this.expanded) {
       this.$el.append(this.template.row_2(this.model.attributes));
       this.expanded = true;
     } else {
       this.collapse();
       this.expanded = false;
     }
  },

  collapse: function() {
    this.$('.row_2').remove();
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
for(i=0; i<100; i++) {
collectionView.collection.add(new modelKlass({view_id: (i+1)}));
}
var a = 41;

});
