var Person = Backbone.Model.extend({
	defaults: {
		name: 'Виктор Пелевин',
		age: '52',
		job: 'Писатель-постмодернист'
	}
});

var person = new Person();

var PeopleCollection = Backbone.Collection.extend({
	model: Person
});

var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	initialize: function() {
	},
	render: function() {
		this.collection.each(function(person){
			var personView = new PersonView({model: person});

			this.$el.append(personView.render().el);
		}, this);

		return this;
	}	
});

var PersonView = Backbone.View.extend({
	tagName: 'li',
	// className: 'person',
	// id: 'some-person',
	template: _.template($('#person-id').html()),

	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );

		return this;
	}
});

var peopleCollection = new PeopleCollection([
	{
		name: 'Дамилола Карпов',
		age: 40,
		job: 'Пилот-оператор'
	},
	{
		name: 'Кая',
		age: 18,
		job: 'Сура'
	},
	{
		name: 'Грым',
		age: 20,
		job: 'Орк-поэт'
	}
]);
var peopleView = new PeopleView({
	collection: peopleCollection
});
$(document.body).append(peopleView.render().el);