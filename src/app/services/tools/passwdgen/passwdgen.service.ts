import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PasswdGenService {
    private apiUrl = "https://localhost:7255/api/PasswdGen";

    constructor(private httpClient: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    // 从后台获取处理过后的字符串
    public getResult(conditions: any) {
        var url = this.apiUrl+'/GetResult?option1='+conditions.numbers+'&option2='+conditions.letters+'&option3='+conditions.symbols+'&length='+conditions.length;
        // return this.httpClient.get(this.url,{responseType: 'text'}).pipe(catchError(this.handleError));
        return this.httpClient.get(url).pipe(catchError(this.handleError));
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