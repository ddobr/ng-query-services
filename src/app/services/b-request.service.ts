import { Injectable, inject } from "@angular/core";
import { IRequestService } from "../interfaces/request-service.interface";
import { Observable, map, of } from "rxjs";
import { HttpClient } from '@angular/common/http'

@Injectable()
export class BRequestService implements IRequestService {
  private readonly http = inject(HttpClient);

  public request(): Observable<string[]> {
    return this.http.get<{ name: string }[]>('https://jsonplaceholder.typicode.com/users', { responseType: 'json', observe: 'body' })
      .pipe(
        map((response) => response.map(user => user.name))
      )
  }
}
