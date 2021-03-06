import EmberRouter from '@ember/routing/router';
import config from 'asmr-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('videos');
  this.route('pick', { path: '/pick-your-video' });
});

