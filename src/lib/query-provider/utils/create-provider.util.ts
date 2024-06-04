import { InjectionToken, Provider, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

/**
 * Создать фабрику, возвращающую тот или иной провайдер в зависимости от значения
 * query
 * @param token токен, по которому будет доступен провайд
 * @param queryParamName название query-параметра, значение которого будет
 * проверяться
 * @param candidates возможные кандидаты
 * @returns
 */
export function createQueryProvider<T>(
  token: InjectionToken<T>,
  queryParamName: string,
  candidates: ProvideCandidate<T>[],
  defaultProvider?: new () => T
): Provider {
  return {
    provide: token,
    useFactory: () => {
      const query = inject(ActivatedRoute).snapshot.queryParams;
      const found = candidates.find((candidate) => candidate.paramValue === query[queryParamName]);

      if (!found) {
        if (!defaultProvider) {
          throw new Error();
        }

        return new defaultProvider();
      }

      return new found.provider();
    }
  }
}

/** Возможный провайдер */
type ProvideCandidate<T> = {
  /** Конструктор провайдера */
  provider: new () => T,
  /** Значение query-параметра, при котором будет использован данный провайдер */
  paramValue: string,
}
