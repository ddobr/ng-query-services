import { Injectable } from "@angular/core";
import { IRequestService } from "../interfaces/request-service.interface";
import { Observable, of } from "rxjs";

@Injectable()
export class ARequestService implements IRequestService {
  public request(): Observable<string[]> {
    return of(['John', 'Bill', 'Alex']);
  }
}
