import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('String')
  , _consumptions: DS.hasMany('consumption')
});
