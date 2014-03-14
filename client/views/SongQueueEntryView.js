define(["jquery", "backbone"], function($, Backbone){
  // SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
  var SongQueueEntryView = Backbone.View.extend({
    // your code here!
    events: {
      'click': function() {
        this.model.dequeue();
      }
    },
    render: function(){
      return this.$el.text(this.model.get("title"));
    }
  });
  return SongQueueEntryView;
});