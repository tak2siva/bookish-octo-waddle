var Backbone = require('backbone');

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

module.exports = viewKlass;
