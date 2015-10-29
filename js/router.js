import Backbone from 'backbone';
import $ from 'jquery';
import {ContactCollection, ContactModel} from './resources';
import {List, Each, Add} from './views';

export default Backbone.Router.extend({

  routes: {
    ""         : "redirectToList",
    "list"     : "showList",
    "each/:id" : "showEach",
    "add"      : "showAdd"
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new ContactCollection();

    this.$el.on('click', '.contact-list-item', (event) => {
      let $li = $(event.currentTarget);
      let contactId = $li.data('contact-id');
      this.navigate(`each/${contactId}`, {trigger: true});
    });

    this.$el.on('click', '.back-btn', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

    this.$el.on('click', '.contact-add-item', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

    this.$el.on('click', '.submit-btn', (event) => {
      let contact = new ContactModel({
        FirstName : $('.input-first').val(),
        LastName : $('.input-last').val(),
        Email: $('.input-email').val(),
        PhoneNumber: $('.input-phone').val(),
        Location: $('.input-location').val()
      });

      contact.save();

      let $submit = $(event.currentTarget);
      let route = $submit.data('to');
      this.navigate(route, {trigger: true});
    });

  },

  showList() {
    
    this.collection.fetch().then(() => {

      this.$el.html(List(this.collection.toJSON()));

    });


  },

  showEach(id) {

    let contact = this.collection.get(id);

    if (contact) {
      this.$el.html(Each(contact.templateData()));
    } else {
      // this.showSpinner();
      contact = this.collection.add({objectId: id});
      contact.fetch().then(() => {
        this.$el.html(
          Each(
            contact.templateData()
          )
        );
      });
    }

  },

  showAdd() {
    this.$el.html(Add(this.collection.toJSON()));
  },

  redirectToList() {
    this.navigate('list', {
      replace: true,
      trigger: true
    });


  },

  start() {
    Backbone.history.start();
    return this;
  }

});