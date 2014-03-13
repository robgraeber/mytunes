//the require library is configuring paths
require.config({
  paths: {
    "jquery": "bower_components/jquery/jquery.min",
    "underscore": "bower_components/underscore-amd/underscore",
    "backbone": "bower_components/backbone-amd/backbone",
    "data": "data/data",
    "songModel": "models/SongModel",
    "songs": "collections/Songs",
    "songQueue": "collections/SongQueue",
    "appModel": "models/AppModel",
    "playerView": "views/PlayerView",
    "libraryView": "views/LibraryView",
    "libraryEntryView": "views/LibraryEntryView",
    "appView": "views/AppView",
    "songQueueEntryView": "views/SongQueueEntryView",
    "songQueueView": "views/SongQueueView"
  }
});
//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(["jquery", "songs", "data", "appModel", "appView"], 
  function($, Songs, songData, AppModel, AppView){
    var library = new Songs(songData);
    var app = new AppModel({library: library});

    // build a view for the top level of the whole app
    var appView = new AppView({model: app});

    // put the view onto the screen
    $('body').append(appView.render());
});