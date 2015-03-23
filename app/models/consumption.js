import DS from 'ember-data';

export default DS.Model.extend({
  _consumer: DS.belongsTo('user')
  , _consumable: DS.belongsTo('consumable')
  , consumeTime: DS.attr('number')
  , consumed: DS.attr('boolean')
});
