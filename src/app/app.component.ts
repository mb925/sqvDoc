import {Component} from '@angular/core';
import {SqvLibComponent} from 'sqv-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test-sqv';

  options = {

    mode: 'viewSequence',

    parameters: {
      fontSize: '14px',
      chunkSize: 10,
      skipIndex: 5,
      colorChoice: 'opposite'
    },

    view: [
      'MFVPETEDMLPRLAPRPSAAVPMGHTNEIIGPTVPEVSILFGQPPQDPQMQPQQPN',
      {2: 'a', 3: 'a', 4: 'a', 5 : 'a', 6: 'a', 7: 'a', 8 : 'a',  40: 'b', 41: 'b',
        42: 'b', 43: 'b', 44: 'b', 93: 'a', 94: 'a'},
      {0: '&#x2605;', 1 : '&#x2605;', 31: '&#x2605;', 32 : '&#x2605;', 51: '&#x2605;',  52: '&#x2605;'},
      {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 10: 11, 11: 12, 12: 13, 13: 14, 	14: 15, 15: 16}
    ],

    colors: [
      {
        type: 'region',
        start: 1,
        end: 20,
        color: {r: 204, g: 255, b: 0}
      },
      {
        type: 'region',
        start: 25,
        end: 45,
        color: {r: 0, g: 102, b: 255, a: 0.4}
      },
      {
        type: 'region',
        start: 45,
        end: 50,
        color: {r: 0, g: 102, b: 255, a: 0.4}
      },
      {
        type: 'region',
        start: 23,
        end: 25,
        color: {r: 0, g: 102, b: 25, a: 0.4}
      }
    ],
    id: 'sqv-op'
  };
  optionsAlign = {

    mode: 'alignSequences',

    parameters: {
      fontSize: '14px',
      chunkSize: 20,
      skipIndex: 5,
      colorChoice: 'opposite'
    },

    view: [
      'MFVPETEDMLPRLAPRPSA',
      'MFVPETEDMLPRLAPRPSA',
      'MFVPETEDMLPRLAPRPSA',
      'MFVPETEDMLPRLAPRPSA',
      'MFVPETEDMLPRLAPRPSA',
      'MFVPETEDMLPRLAPRPSA',
      {2: 'a', 3: 'a', 4: 'a', 5 : 'a', 6: 'a', 7: 'a', 8 : 'a',  40: 'b', 41: 'b',
        42: 'b', 43: 'b', 44: 'b', 93: 'a', 94: 'a'},
      {0: '&#x2605;', 1 : '&#x2605;', 31: '&#x2605;', 32 : '&#x2605;', 60: '&#x2605;',  	61: '&#x2605;'},
      {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 10: 11, 11: 12, 12: 13, 13: 14, 	14: 15, 15: 16, 92: 93, 93: 94}
    ],

    colors: [
      {
        type: 'aminoacid',
        letter: 'A',
        color: {r: 204, g: 255, b: 0, a: 0.4}
      },
      {
        type: 'aminoacid',
        letter: 'D',
        color: {r: 0, g: 255, b: 102, a: 0.4}
      },
      {
        type: 'aminoacid',
        letter: 'M',
        color: {r: 0, g: 0, b: 255, a: 0.4}
      }
    ],
    id: 'sqv-al'
  };

  exOne =  {

      mode: 'viewSequence',

      parameters: {
        colorChoice: 'opposite'
      },

      view: [
        'MFVPETEDMLPRLAPRPSAAVPMGHTNEIIGPTVPEVSILFGQPPQDPQM'
      ],

      colors: [
        {
          type: 'region',
          start: 1,
          end: 18
        },
        {
          type: 'insertion',
          start: 19,
          end: 24,
          color: {r: 255, g: 255, b: 0, a: 0.5}
        },
        {
          type: 'region',
          start: 25,
          end: 34
        }
      ],
      id: 'sqv-1'
    };

  exIndexes = {

    mode: 'viewSequence',

    parameters: {
      skipIndex: 5,
      chunkSize: 20,
      colorChoice: 'opposite'
    },

    view: [
      'MFVPETEDMLPRLAPRPSAAVPMGHTNEIIGPTVPEVSILFGQPPQDPQM',
      {2: 'a', 3: 'a', 4: 'a', 5 : 'a', 6: 'a', 7: 'a', 8 : 'a',  20: 'b', 21: 'b',
        22: 'b', 23: 'b', 24: 'b'},
      {0: '&#x2605;', 1 : '&#x2605;', 31: '&#x2605;', 32 : '&#x2605;'},
      {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 10: 11, 11: 12, 12: 13, 13: 14, 	14: 15, 15: 16}
    ],

    colors: [
      {
        type: 'region',
        start: 21,
        end: 38
      }
    ],
    id: 'sqv-ind'
  };

    exColors = {

      mode: 'viewSequence',

      parameters: {
        colorChoice: 'custom',
        chunkSize: 20
      },

      view: [
        'MFVPETEDMLPRLAPRPSAAVPMGHTNEIIGPTVPEVSILFGQPPQDPQM',
      ],

      colors: [
        {
          type: 'region',
          start: 1,
          end: 12,
          color: {r: 237, g: 203, b: 150}
        },
        {
          type: 'region',
          start: 15,
          end: 19,
          color: {r: 96, g: 87, b: 112, a: 0.5}
        },
        {
          type: 'region',
          start: 22,
          end: 26,
          color: {r: 221, g: 189, b: 213}
        }
      ],
      id: 'sqv-colo'
    };
}
