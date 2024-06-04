import { Component, inject, signal } from "@angular/core";
import { createQueryProvider } from "../../lib/query-provider/utils/create-provider.util";
import { ARequestService } from "../services/a-request.service";
import { BRequestService } from "../services/b-request.service";
import { REQUEST_SERVICE_TOKEN } from "../tokens/request-service.token";
import { toSignal } from "@angular/core/rxjs-interop";
import { NgFor } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DefaultRequestService } from "../services/default-request.service";

@Component({
  standalone: true,
  templateUrl: './constructor.component.html',
  providers: [
    createQueryProvider(
      REQUEST_SERVICE_TOKEN,
      'mode',
      [
        {
          paramValue: 'a',
          provider: ARequestService,
        },
        {
          paramValue: 'b',
          provider: BRequestService,
        }
      ],
      DefaultRequestService
    )
  ],
  imports: [
    NgFor,
    RouterLink,
  ]
})
export class ConstructorComponent {
  public users$ = toSignal(inject(REQUEST_SERVICE_TOKEN).request());

  public modeName$ = signal(inject(ActivatedRoute).snapshot.queryParams['mode']);
  public url$ = signal(location.href.replace(location.origin, ''));
}
