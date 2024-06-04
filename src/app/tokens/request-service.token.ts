import { InjectionToken } from "@angular/core";
import { IRequestService } from "../interfaces/request-service.interface";

export const REQUEST_SERVICE_TOKEN = new InjectionToken<IRequestService>('Request service that gets all user names');
