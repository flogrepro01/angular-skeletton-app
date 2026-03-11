import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PostList } from './app/components/post-list/post-list';

@Component({
  selector: 'app-root',
  imports: [PostList],
  template: `
    <app-post-list></app-post-list>
  `,
})
export class App {}

bootstrapApplication(App);
