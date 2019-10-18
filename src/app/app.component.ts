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

    mode: 'viewSequence', // viewSequence - alignSequences

    parameters: {
      fontSize: '14px',
      chunkSize: 5, // Number of residues before space
      // skipIndex: 5, // Number of alternating index to show
      colorChoice: 'custom' // adjacent, opposite, custom, none (just for viewSequence)
    },

    view: [
      // objType: object, dataType: index
      // {0: '1', 1: '2', 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 10: 111}  ,

      // objType: string, dataType: sequence
      'AATQADLMEGMATQADLMEJGMATQADLMEGMATQADLMMATQADLMEGMATQADLMEJGMATQADLMEGZZZZZZ',

      'MATQADLMEGMATQADLMEJGMATQADLZ',

      // 'MATQADLMEGMATQADLMEJGMATQADLMEGMATQADLMMATQADLMEGMATQADLMEJGMATQADLMEGZZZZZZ',
      //
      // 'MATQADLMEGMATQADLMEJGMATQADLMEGMATQADLMMATQADLMEGMATQADLMEJGMATQADLMEGZZZZZZ',
      //
      // 'MATQADLMEGMATQADLMEJGMATQADLMEGMATQADLMMATQADLMEGMATQADLMEJGMATQADLMEGZZZZZZ',

      // {2: 'a', 3: 'a', 4: 'a', 5 : 'a', 6: 'a', 7: 'a', 8 : 'a', 9: 'a', 11: 'b', 12: 'b', 13: 'b', 14: 'b', 20: 'b'},

      // {0: '&#x2605;', 1 : '&#x2605;', 2: '&#x2605;'},

      // objType: array, dataType: symbol
      // ['&#x2605;', '&#x2605;', '&#x2605;']

    ],

    colors: [
      {
        type: 'region',
        start: 1,
        end: 2,
        color: {r: 204, g: 255, b: 0, a: 0.4}
      },
      // {
      //   type: 'region',
      //   start: 7,
      //   end: 15,
      //   color: {r: 0, g: 102, b: 255, a: 0.4}
      // },
      // {
      //   type: 'region',
      //   start: 20,
      //   end: 22,
      //   color: {r: 0, g: 102, b: 255, a: 0.4}
      // },
      // {
      //   type: 'region',
      //   start: 23,
      //   end: 25,
      //   color: {r: 0, g: 102, b: 25, a: 0.4}
      // },
      // {
      //   type: 'insertion',
      //   start: 3,
      //   end: 4,
      //   color: {r: 45, g: 255, b: 255, a: 0.4}
      // },
      // {
      //   type: 'aminoacid',
      //   letter: 'A',
      //   color: {r: 204, g: 255, b: 0, a: 0.4}
      // },
      // {
      //   type: 'aminoacid',
      //   letter: 'B',
      //   color: {r: 255, g: 255, b: 255, a: 0.4}
      // },
      // {
      //   type: 'aminoacid',
      //   letter: 'C',
      //   color: {r: 255, g: 255, b: 0, a: 0.4}
      // },
      // {
      //   type: 'aminoacid',
      //   letter: 'D',
      //   color: {r: 255, g: 0, b: 0, a: 0.4}
      // },
      // {
      //   type: 'aminoacid',
      //   letter: 'E',
      //   color: {r: 255, g: 0, b: 102, a: 0.4}
      // },
      // {
      //   type: 'aminoacid',
      //   letter: 'F',
      //   color: {r: 0, g: 255, b: 102, a: 0.4}
      // },
      // {
      //   type: 'aminoacid',
      //   letter: 'G',
      //   color: {r: 255, g: 153, b: 0, a: 0.4}
      // },
      // {
      //   type: 'aminoacid',
      //   letter: 'H',
      //   color: {r: 0, g: 102, b: 255, a: 0.4}
      // },
      // {
      //   type: 'aminoacid',
      //   letter: 'I',
      //   color: {r: 102, g: 35, b: 0, a: 0.4}
      // }
    ]
  };








}
