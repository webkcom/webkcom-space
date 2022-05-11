import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class IPDetectorService {
    /**
     * 免费IP查询API
     * http://ip-api.com/json/{ip}
     * https://ipapi.co/{ip}/json/
     */
    // 正式上线后将localhost换成域名或服务器IP地址
    private URL = "https://localhost:7018/api/IPDetector/GetResult";
    constructor(private httpClient: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    public getIPAddress() {
        return this.httpClient.get(this.URL).pipe(catchError(this.handleError));
    }
    public getDetailInfo(IP: string) {
        // return this.httpClient.get("https://ipapi.co/"+IP+"/json/").pipe(catchError(this.handleError));
        return this.httpClient.get("http://ip-api.com/json/"+IP+"?lang=zh-CN").pipe(catchError(this.handleError));

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