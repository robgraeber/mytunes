define(["backbone"], function(Backbone){
  // SongModel.js - Defines a backbone model class for songs.
  var SongModel = Backbone.Model.extend({
    play: function(){
      // Triggering an event here will also trigger the event on the collection
      this.trigger('play', this);
    },
    enqueue: function(){
      this.trigger('enqueue', this);
    },
    dequeue: function(){
      console.log("model:dequeue")
      this.trigger('dequeue', this);
    }
  });
  SongModel.prototype.enqueue.restore = function(){
  };

  return SongModel;
});