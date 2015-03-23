import DS from 'ember-data';

export default DS.Model.extend({
	email: DS.attr('String')
	, username: DS.attr('String')
	, chromeExtensionId: DS.attr('String')
	, password: DS.attr('String')
	, firstName: DS.attr('String')
	, lastName: DS.attr('String')
	, _consumptions: DS.hasMany('consumption')
});
