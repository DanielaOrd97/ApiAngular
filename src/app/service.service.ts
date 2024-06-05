import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  apiUrl = 'https://my-burger-api.herokuapp.com/burgers';
  imageUploadUrl = 'gs://burguerapi-59f2a.appspot.com';

  data: any[] = [];
  data1: any = {};

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }

  saveProduct(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  editBurguer(id: number) {
    let currentBurguer = this.data.find((b) => {
      return b.id === id;
    });
    this.http.put(this.apiUrl + '/' + id, currentBurguer);
    console.log(currentBurguer);
  }

  getBurguer(burguerId: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + burguerId);
  }

  // updateBurguer(data1: object, burguerId: number) {
  //   return this.http.put(this.apiUrl + '/' + burguerId, data1);
  // }

  updateBurguer(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // getBurguer(burguerId: number) {
  //   this.http.get(this.apiUrl + '/' + 'edit-burguer/' + burguerId);
  // }

  // editBurguer(id: number) {
  //   let currentBurguer = this.data.find((b) => {
  //     return b.id === id;
  //   });
  //   console.log(currentBurguer);
  // }

  // private burgerData: any;

  // setBurgerData(data: any) {
  //   this.burgerData = data;
  // }

  // getBurgerData() {
  //   return this.burgerData;
  // }
}
