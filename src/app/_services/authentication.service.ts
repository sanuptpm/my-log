import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

    getApi() {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
            .pipe(map((res:any) => {
                return res
            }));
    }
}
