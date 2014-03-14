define(["jquery", "backbone", "libraryEntryView"], function($, Backbone, LibraryEntryView){
  // LibraryView.js - Defines a backbone view class for the music library.
  var LibraryView = Backbone.View.extend({

    initialize: function() {
      this.render();
    },

    render: function(){
      // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
      // see http://api.jquery.com/detach/
      this.el.id = "rightSideBar";
      this.$el.children().detach();
      this.$el.html('<h3>Library</h3>').append(
        this.collection.map(function(song){
          return new LibraryEntryView({model: song}).render();
        })
      );
    }

  });
  return LibraryView;
});