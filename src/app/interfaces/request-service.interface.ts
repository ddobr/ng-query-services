import { Observable } from "rxjs";

export interface IRequestService {
  request(): Observable<string[]>;
}
