angular.module('angularfireSlackApp')
  .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
    var channelsCtrl = this;

    channelsCtrl.profile = profile;
    channelsCtrl.channels = channels;

    channelsCtrl.getDisplayName = Users.getDisplayName;
    channelsCtrl.getGravatar = Users.getGravatar;

    channelsCtrl.users = Users.all;

    Users.setOnline(channelsCtrl.profile.$id);

    channelsCtrl.newChannel = {
      name: ''
    };

    channelsCtrl.createChannel = function(){
      channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref){
        $state.go('channels.messages', {channelId: ref.key()});
      });
    };

    channelsCtrl.logout = function(){
      channelsCtrl.profile.online = null;
      channelsCtrl.profile.$save().then(function(){
        Auth.$unauth();
        $state.go('home');
      });
    };
  });
