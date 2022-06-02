import { Component, OnInit } from '@angular/core';
import { PasswdGenService } from 'src/app/services/tools/passwdgen/passwdgen.service';

@Component({
  selector: 'app-passwdgen',
  templateUrl: './passwdgen.component.html',
  styleUrls: ['./passwdgen.component.less']
})
export class PasswdGenComponent implements OnInit {
  value: any;
  strLength = 6;
  count = 1;
  str: string[]=["0-9","A-Z","a-z","! \" # $ % & ' ( ) * + ' - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~"];
  containNumbers = false;
  containUppercase = false;
  containLowercase = false;
  containSpchar = false;

  constructor(private passwdGen: PasswdGenService) { }

  ngOnInit(): void {
  }
  getString() {
    if (!this.containNumbers && 
      !this.containUppercase && 
      !this.containLowercase && 
      !this.containSpchar){
      window.alert("请至少选择一项条件");
    }
    else {
      let conditions = {
        containnumbers: this.containNumbers,
        containuppercase: this.containUppercase,
        containlowercase: this.containLowercase,
        containspchar: this.containSpchar,
        strlength: this.strLength,
        count: this.count
      }

      this.value = this.passwdGen.getResult(conditions);
    }

  }
}
