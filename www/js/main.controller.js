/**
 * Created by Administrator on 2017/9/19.
 */
var app = LocalStorageService.get('App',{verson:'1.0.0',run:false});
if(app.run===false){
  app.run=true;
  LocalStoeageService.update('App',app);
  $state.go('welcome');
}
else {
  $state.go('app.playlists');
}
