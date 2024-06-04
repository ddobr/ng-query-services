import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  standalone: true,
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private readonly _router = inject(Router);

  public navigateToConstructor(mode?: 'a' | 'b'): void {
    this._router.navigate(['/constructor'], { queryParams: { mode }});
  }
}
