import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'test-sqv';
  chars = {};

  options = {

    mode: 'viewSequence',

    parameters: {
      fontSize: '14px',
      chunkSize: 5,
      skipIndex: 5,
      colorChoice: 'opposite'
    },

    view: [
      'AATQADLMEGMATQADLMEJGMATQADLMEGMATQADLMMATQADLMEGMATQADLMEJGMATQADLMEGZZZZZZ'

    ],

    colors: [
      {
        type: 'region',
        start: 1,
        end: 2,
        color: {r: 204, g: 255, b: 0}
      },
      {
        type: 'region',
        start: 3,
        end: 15,
        color: {r: 0, g: 102, b: 255, a: 0.4}
      },
      {
        type: 'region',
        start: 20,
        end: 22,
        color: {r: 0, g: 102, b: 255, a: 0.4}
      },
      {
        type: 'region',
        start: 23,
        end: 25,
        color: {r: 0, g: 102, b: 25, a: 0.4}
      }
    ]
  };








}
