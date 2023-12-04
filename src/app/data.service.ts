import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com' ;

  constructor(private http: HttpClient) { }

  // saveRecord(data: any): Observable<any> {
  //   return this.http.post('https://jsonplaceholder.typicode.com/posts', this.saveRecord, data);
   
  // }
  // getAllDetails(): Observable<any> {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')

  // }
  
  // getDetailsById(_userId: string): Observable<any> {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  // }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/id');
  }

  updateItem(id: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/posts/${id}`, updatedData);
 
  }

  patchItem(id: number, updatedData: any): Observable<any> {
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/id', updatedData);
  }
}

