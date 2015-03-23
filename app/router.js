import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("consumptions", function() {});
  this.resource("users", function() {});
  this.resource("consumables", function() {});
});

export default Router;
