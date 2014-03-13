// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  render: function(){
    return this.$el.text(this.model.get("title"));
  }
});
