import {Component} from '@angular/core';
import {SqvLibComponent} from 'sqv-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test-sqv';
  chars = {};
  sqv;
  exOne;
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

  exTwo;


  runExOne() {

    this.exOne =  {

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
          type: 'region',
          start: 19,
          end: 27
        }
      ],
      id: 'sqv-1'
    };
    this.sqv = new SqvLibComponent();
    this.sqv.draw(this.exOne);
  }

  runExTwo() {

    this.exTwo = {

      mode: 'viewSequence',

      parameters: {
        colorChoice: 'opposite',
        chunkSize: 10
      },

      view: [
        'MFVPETEDMLPRLAPRPSAAVPMGHTNEIIGPTVPEVSILFGQPPQDPQM',
      ],

      colors: [
        {
          type: 'region',
          start: 1,
          end: 5,
          color: {r: 204, g: 255, b: 0}
        },
        {
          type: 'region',
          start: 6,
          end: 8,
          color: {r: 204, g: 255, b: 0}
        },
        {
          type: 'region',
          start: 9,
          end: 12,
          color: {r: 204, g: 255, b: 0}
        }
      ],
      id: 'sqv-two'
    };
    this.sqv = new SqvLibComponent();
    this.sqv.draw(this.exTwo);
  }
}
