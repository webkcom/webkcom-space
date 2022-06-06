import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PasswdGenService {
    private Numbers = "0123456789";
    private Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private Lowercase = "abcdefghijklmnopqrstuvwxyz";
    private Spchar = "!\"#$%&'()*+'-./:;<=>?@[\\]^_`{|}~";

    public getResult(conditions: any) {
        return this.passwdGen(conditions.containnumbers, conditions.containuppercase, conditions.containlowercase, conditions.containspchar, conditions.strlength, conditions.count)
    }

    private passwdGen(containNumbers: boolean, containUppercase: boolean, containLowercase: boolean, containSpchar: boolean, strLength: number, count: number) {
        let scope: string[] = this.getScope(containNumbers, containUppercase, containLowercase, containSpchar);
        let randomNum = this.randomSelect(scope.length, strLength);
        let result = this.spliceString(scope, randomNum, strLength, count);
        return result;
    }
    // 获取密码包含的元素范围
    private getScope(containNumbers: boolean, containUppercase: boolean, containLowercase: boolean, containSpchar: boolean) {
        let scope: string[] = [];
        if (containNumbers) {
            scope.push(this.Numbers);
        }
        if (containUppercase) {
            scope.push(this.Uppercase);
        }
        if (containLowercase) {
            scope.push(this.Lowercase);
        }
        if (containSpchar) {
            scope.push(this.Spchar);
        }
        return scope;
    }
    // 随机分配不同组的抽取次数
    private randomSelect(arrlength: number, strlength: number) {
        let randomNum: number[] = [];
        let sum = 0;
        do {
            sum = 0;
            for (let i = 0; i < arrlength; i++) {
                randomNum[i] = Math.floor(Math.random() * (strlength-arrlength+1)+1);
                sum += randomNum[i];
            }
        }
        while (sum != strlength);// 保证符合条件的字符至少有一位
        // console.log(randomNum);
        return randomNum;
    }

    // 拼接并打乱字符串顺序
    private spliceString(scope: string[], randomNum: number[], strLength: number, count: number) {
        let result = "";
        let num = 0;
        let temp:string[]=[];
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < randomNum.length; j++) {
                for (let k = 0; k < randomNum[j]; k++) {
                    let index = Math.floor(Math.random() * (scope[j].length) + 1);
                    if (num < strLength) {
                        temp[num]= scope[j].slice(index - 1, index);
                        num++;
                    }
                }
            }
            // console.log(temp);
            for (let l = strLength-1; l >= 0; l--) {
                let index = Math.floor(Math.random() * l);
                result += temp[index];
                temp[index] = temp[l];
            }
            result += "\n";
            temp =[];
            num=0;
        }
        return result;
    }
    // 获取错误信息
    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}