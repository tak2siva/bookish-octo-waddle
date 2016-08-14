var Backbone = require('backbone');
var $ = require('jquery');

var viewKlass = Backbone.View.extend({
  className: 'list_item',
  template: {row_1: MyApp.templates.row_1,
      row_2: MyApp.templates.row_2},

  defaults: {
      expanded: false,
      isRendered: false
  },

  events: {
    'click #expand': 'expand_item'
  },


  initialize: function(data) {
    this.model = data.model;
    this.render();
  },

  render: function () {
      this.$el.html(this.template.row_1(this.model.attributes));
      this.$el.attr("data-id", this.model.get('view_id'));
      this.isRendered = true;
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
  },

  isVisible: function() {
      var rect = this.$el[0].getBoundingClientRect();
      return (
          (rect.height > 0 || rect.width > 0) &&
          rect.bottom >= 0 &&
          rect.right >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
  },

  emptyDiv: function () {
      var el = $('<div></div>').height(this.$el.height());
      return el;
  },

  softDelete: function() {
      if(this.isRendered) {
          this.el_bkp = this.$el.html();
          this.$el.html(this.emptyDiv());
          this.isRendered = false;
      }
  },

  restore: function () {
      if(!this.isRendered) {
          this.$el.html(this.el_bkp);
          this.delegateEvents();
          this.isRendered = true;
      }
  }
});

module.exports = viewKlass;
