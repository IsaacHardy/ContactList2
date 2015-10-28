import $ from 'jquery';
import _ from 'underscore';
import Router from './router';
import './ajax_setup';

let $app = $('.app');

new Router($app).start();

