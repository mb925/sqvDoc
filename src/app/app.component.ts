import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProteinResponse} from '../interface/interface.component';
import {SqvLibComponent} from 'sqv-lib';
import {MyLibComponent} from 'liibb';
import {ElementRef} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  title = 'test-sqv';
  url = 'http://protein.bio.unipd.it/repeatsdb-lite-ws/get-results/4bbda057-377a-49c5-864a-8cba1f44d46a/_A';
  prot: ProteinResponse;
  unitsStartEnd = [];
  insStartEnd = [];
  unitsNum: number;
  insNum: number;
  chars = {};
  chars2 = {};
  sqv: SqvLibComponent;
  lib: MyLibComponent;

  lb = {
    name: '<p>Martina</p>'
  };

  options = {
    colorBy: 'region',

    rows: [

      {type: 'chars', chars:  {  0: '0', 1: '1', 2: '2', 3 : '3',
          4: '4', 5: '5', 6 : '6', 7: '7'
        }},

      {type: 'chars', chars: { 1 : '&#x2605;', 2: '&#x2605;', 100 : '&#x2605;', 102: '&#x2605;'}},

      {type: 'chars', chars: {  2: 'alp', 3: 'alp', 4: 'alp', 5 : 'alp',
          6: 'alp', 7: 'alp', 8 : 'alp', 9: 'alp', 30: 'bet', 31: 'bet',
          32: 'bet', 101: 'alp', 102: 'alp', 103 : 'alp', 104: 'alp', 106: 'bet',
          150: 'alp', 152: 'alp', 153 : 'alp', 154: 'alp'
        }},

      {type: 'sequence', chars: {  0: 'A', 1: 'A', 2: 'A', 3 : 'A',
          4: 'A', 5: 'A', 6 : 'A', 7: 'A'
        }},
    ],

    /** Number of alternating index to show */
    setIndex: 7,
    /** Number of residues per line */
    chunkSize: 50,

    /** scelta colori aa Align */
    paletteAa: {
      A: 'rgba(204, 255, 0, 0.4)',
      R: 'rgba(0, 0, 255, 0.4)',
      N: 'rgba(204, 0, 255, 0.4)',
      D: 'rgba(255, 0, 0, 0.4)',
      C: 'rgba(255, 255, 0, 0.4)',
      Q: 'rgba(255, 0, 204, 0.4)',
      E: 'rgba(255, 0, 102, 0.4)',
      G: 'rgba(255, 153, 0, 0.4)',
      H: 'rgba(0, 102, 255, 0.4)',
      I: 'rgba(102, 35, 0, 0.4)',
      L: 'rgba(51, 255, 0, 0.4)',
      K: 'rgba(102, 0, 255, 0.4)',
      M: 'rgba(0, 65, 0, 0.4)',
      F: 'rgba(0, 255, 102, 0.4)',
      P: 'rgba(255, 204, 0, 0.4)',
      S: 'rgba(255, 51, 0, 0.4)',
      T: 'rgba(255, 102, 0, 0.4)',
      W: 'rgba(0, 204, 255, 0.4)',
      Y: 'rgba(0, 255, 204, 0.4)',
      V: 'rgba(153, 255, 0, 0.4)',
      B: 'rgba(255, 255, 255, 0.4)',
      X: 'rgba(125, 100, 255, 0.4)',
      Z: 'rgba(255, 125, 255, 0.4)',
    },
    /** scelta dei colori per le unità. */
    /** customizable: Es. colors: ['hsl(60,100%,60%)', 'hsl(80,100%,60%)'] */
    colors: ['hsl(60,100%,60%)', 'hsl(80,100%,60%)'],
    /** customizable, opposite or adjacent */
    colorChoice: 'customizable',
    /** scelta del colore per le inserzioni. Es. colorIns: ['hsl(0,22%,16%)'] */
    colorIns: 'hsl(0,22%,16%, 0.5)',
    unitsStartEnd: [3, 16, 20, 29],
    insStartEnd: [1, 2],
    /** numero di unità */
    unitsNum: 2,
    /** numero di inserzioni */
    insNum: 2
  };


  constructor(private http: HttpClient, private elementRef: ElementRef) {
  }

    change() {

      this.options.setIndex = 2;
      this.options.colorChoice = 'adjacent';

      console.log('<<<<<<<< this.options on change '
        + this.options.setIndex);
      console.log('<<<<<<<< this.options on change '
        + this.options.colorChoice);

      this.lb.name = '<p>New</p>';



      this.sqv = new SqvLibComponent();
      this.sqv.draw(this.options);
    }

  ngOnInit() {
    // this.http.get<ProteinResponse>(this.url)
    //   .subscribe(data => {
    //     this.prot = data;
    //     console.log(this.prot);
    //
    //     // tslint:disable-next-line:forin
    //     for (const key1 in this.prot.parsedDB.regions) {
    //       /** RegDetails */
    //       const value1 = this.prot.parsedDB.regions[key1];
    //       /** for each insertion recover the array  */
    //       // tslint:disable-next-line:forin
    //       for (const keyIns in value1.insertions) {
    //         /** InsertionsDetails */
    //         const valueIns = value1.insertions[keyIns];
    //         console.log('Insertion: ' + valueIns.startPos + '-'  + valueIns.endPos);
    //         const startIns =  +valueIns.startPos;
    //         const endIns =  +valueIns.endPos;
    //         this.insStartEnd.push(startIns);
    //         this.insStartEnd.push(endIns);
    //       }
    //
    //       // tslint:disable-next-line:forin
    //       for (const key2 in value1.units) {
    //         /** UnitDetails */
    //         const value2 = value1.units[key2];
    //         console.log('Unit: ' + value2.startPos + '-'  + value2.endPos);
    //         const startPos =  +value2.startPos;
    //         const endPos =  +value2.endPos;
    //         this.unitsStartEnd.push(startPos);
    //         this.unitsStartEnd.push(endPos);
    //         this.unitsNum = this.unitsStartEnd.length / 2;
    //         this.insNum = this.insStartEnd.length / 2;
    //
    //         for (let i = 0; i < this.prot.parsedMapping.sequence.length; i ++) {
    //
    //           this.chars[this.prot.parsedMapping.positions[i]] = this.prot.parsedMapping.sequence[i];
    //           this.chars2[this.prot.parsedMapping.positions[i]] = this.prot.parsedMapping.positions[i];
    //         }
    //
    //
    //       }
    //     }
    //
    //   });


  }

}
