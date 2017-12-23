import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebserviceProvider {
  baseURL: string = 'http://appsmalaya.com/webservices';

  constructor(public http: HttpClient) {
    console.log('Hello WebserviceProvider Provider');
  }

  getStaff(): Promise<any>{
    let url: string = this.baseURL + '/output.php';
    return new Promise((resolve, reject) => {
      this.http.get(url)
      .subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    })
  }

  saveStaff(staff: any): Promise<any> {
    let url: string = this.baseURL + '/createprofile.php';
    let body = JSON.stringify(staff);

    let header = new HttpHeaders().set('Content-Type', 'application/json');
    
    //let token = localStorage.getItem('TOKEN');
    // localStorage.setItem('TOKEN', getToken);

    // header.append('Authorization', 'Basic '+token);

    return new Promise((resolve, reject) => {
      this.http.post(url, body, {
        headers: header
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

}
