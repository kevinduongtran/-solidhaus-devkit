import { Component } from '@angular/core';

@Component({
  selector: 'app-<%= dasherize(name) %>-page',
  templateUrl: './<%= dasherize(name) %>.page.html',
  styleUrls: ['./<%= dasherize(name) %>.page.scss']
})
export class <%= classify(name) %>Page { }
