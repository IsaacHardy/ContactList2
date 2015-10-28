import Backbone from 'backbone';
import {APP_URL} from '../parse_data';
import ContactModel from './contactModel';

export default Backbone.Collection.extend({

  url: APP_URL,

  model: ContactModel,

  parse: function(data) {
    return data.results;
  }

});