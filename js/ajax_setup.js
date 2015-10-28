import $ from 'jquery';
import {API_KEY, APP_ID} from './parse_data';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});