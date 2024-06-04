import { Injectable } from "@angular/core";
import { IRequestService } from "../interfaces/request-service.interface";
import { Observable, of } from "rxjs";

@Injectable()
export class DefaultRequestService implements IRequestService {
  public request(): Observable<string[]> {
    return of(['Я дефолтная реализация и буду использоваться всегда когда не указан нужный квери параметр']);
  }
}
