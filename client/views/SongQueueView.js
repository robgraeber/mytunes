define(["backbone", "jquery", "songQueueEntryView"], function(Backbone, $, SongQueueEntryView){
  // SongQueueView.js - Defines a backbone view class for the song queue.
  var SongQueueView = Backbone.View.extend({
    initialize: function() {
      this.render();
    },
    render: function(){
      console.log(this.collection.length);
      this.$el.html('<h3>Song Queue</h3>').append(
        this.collection.map(function(song){
          return new SongQueueEntryView({model: song}).render();
        })
      );
    }
  });
  return SongQueueView;
});