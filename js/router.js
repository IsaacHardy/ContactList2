import Backbone from 'backbone';
import $ from 'jquery';
import {ContactCollection, ContactModel} from './resources';
import {List, Each, Add, Spinner, Edit} from './views';

export default Backbone.Router.extend({

  routes: {
    ""         : "redirectToList",
    "list"     : "showList",
    "each/:id" : "showEach",
    "add"      : "showAdd",
    "edit/:id" : "showEdit"
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new ContactCollection();

    this.$el.on('click', '.contact-list-item', (event) => {
      let $li = $(event.currentTarget);
      let contactId = $li.data('contact-id');
      console.log(contactId);
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

    this.$el.on('click', '.contact-edit-item', (event) => {
      let $li = $(event.currentTarget);
      let contactId = $li.data('contact-id');
      console.log($li);
      this.navigate(`edit/${contactId}`, {trigger: true});
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

    this.showSpinner();
    this.collection.fetch().then(() => {

      this.$el.html(List(this.collection.toJSON()));

    });



  },

  showEach(id) {

    let contact = this.collection.get(id);

    if (contact) {
      this.$el.html(Each(contact.templateData()));
    } else {
      this.showSpinner();
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
    this.showSpinner();
    this.$el.html(Add(this.collection.toJSON()));
  },

  showEdit(id) {
    let contact = this.collection.get(id);
    
    if (contact) {
      this.$el.html(Edit(contact.templateData()));
    } else {
      this.showSpinner();
      contact = this.collection.add({objectId: id});
      contact.fetch().then(() => {
        this.$el.html(
          Edit(
            contact.templateData()
          )
        );
      });
    }

    
  },

  redirectToList() {
    this.navigate('list', {
      replace: true,
      trigger: true
    });


  },

  showSpinner() {
    this.$el.html( Spinner() );
  },

  start() {
    Backbone.history.start();
    return this;
  }

});