var Backbone = require('backbone');
var viewKlass = require('./view.js');
var inifinity = require('./lib/infinity.js');

var MyCollectionView = Backbone.View.extend({
el: ".list_container",

initialize: function(data)  {
  this.initInfinity();
  this.collection = data.collection;
  this.subViews = {};
  this.listenTo(this.collection, 'add', this.addToList);
},

initInfinity: function() {
  var self = this;
  this.infinityList = (window.useInfinity) ? new infinity.ListView(this.$el) : this.$el;
  // this.infinityList.height="100%";
},

addToList: function(model) {
  var view = new viewKlass({model: model});
  this.infinityList.append(view.$el);
  view.delegateEvents();
  this.subViews[model.get('view_id')] = view;
},

render: function(model) {

}
});

module.exports = MyCollectionView;
