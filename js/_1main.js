$(function() {
	// model
	App.Models.Person = Backbone.Model.extend({
		defaults: {
			name: 'Виктор Пелевин',
			age: '52',
			job: 'Писатель-постмодернист'
		}
	});

	var person = new App.Models.Person();

	// collection
	App.Collections.People = Backbone.Collection.extend({
		model: App.Models.Person
	});

	// single people view
	App.Views.People = Backbone.View.extend({
		tagName: 'ul',

		initialize: function() {
		},
		render: function() {
			this.collection.each(function(person){
				var personView = new App.Views.Person({model: person});

				this.$el.append(personView.render().el);
			}, this);

			return this;
		}	
	});

	// single person view
	App.Views.Person = Backbone.View.extend({
		tagName: 'li',
		// className: 'person',
		// id: 'some-person',
		template: template('personTemplate'),

		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );

			return this;
		}
	});

	var peopleCollection = new App.Collections.People([
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
	var peopleView = new App.Views.People({
		collection: peopleCollection
	});
	
	
	$(document.body).append(peopleView.render().el);
}());