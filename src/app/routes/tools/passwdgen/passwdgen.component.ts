import { Component, OnInit } from '@angular/core';
import { PasswdGenService } from 'src/app/services/tools/passwdgen/passwdgen.service';

@Component({
  selector: 'app-passwdgen',
  templateUrl: './passwdgen.component.html',
  styleUrls: ['./passwdgen.component.less']
})
export class PasswdGenComponent implements OnInit {
  value: any;
  length = 3;
  numbers !: boolean;
  letters !: boolean;
  symbols !: boolean;
  containNumbers = false;
  containLetters = false;
  containSymbols = false;

  constructor(private passwdGen: PasswdGenService) { }

  ngOnInit(): void {
  }
  getString() {
    if (!this.containNumbers && !this.containLetters && !this.containSymbols) {
      window.alert("请至少选择一项条件");
    }
    else {
      let conditions = {
        numbers: this.containNumbers,
        letters: this.containLetters,
        symbols: this.containSymbols,
        length: this.length
      }

      this.passwdGen.getResult(conditions)
        .subscribe((result) => this.value = Object.values(result));
    }
  }

}
