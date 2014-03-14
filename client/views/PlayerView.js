define(["backbone", "jquery"], function(Backbone, $){
  // PlayerView.js - Defines a backbone view class for the music player.
  var PlayerView = Backbone.View.extend({

    // HTML5 (native) audio tag is being used
    // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
    audioBox: $("<audio controls autoplay />"),
    
    initialize: function() {
      this.$el.addClass("audioBox");
      this.$el.append(this.audioBox);
    },
    events: {
      'ended': function() {
        console.log("song over!!");
        this.model.set('playing', false);
        this.trigger("songFinished", this);
      }
    },
    setSong: function(song){
      this.model = song;
      this.model.set('playing', true);
      this.render();
    },
    endSong: function(song){
      console.log("endSong");
      $("audio")[0].currentTime = 999999;
      this.model.set('playing', false);
      this.trigger("songFinished", this);
      //magic happens here
    },

    render: function(){
      return this.audioBox.attr('src', this.model ? this.model.get('url') : '');
    }

  });
  return PlayerView;
});