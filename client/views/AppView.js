// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);


    this.model.get('songQueue').on('add', function(queue){
      this.songQueueView.render();
      if(!this.model.get('currentSong').get("url")){
        this.playNextSongQueue();
      }
    }, this);
    this.model.get('songQueue').on('remove', function(queue){
      this.songQueueView.render();
    }, this);

    this.playerView.on('songFinished', function(view){
      console.log("song finished event");
      this.model.get("songQueue").shift();

      this.playNextSongQueue();
    
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  },
  playNextSongQueue: function(){
  if(this.model.get("songQueue").length > 0){
    console.log("Playing new queued song");
    this.model.set('currentSong', this.model.get("songQueue").models[0]);
  }else{
    this.model.set('currentSong', new SongModel());
  }
}
});
