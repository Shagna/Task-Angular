import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `<!-- Show product list -->`
})
export default class ProductList {
  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = +params['page'] || "api";
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  nextPage() {
    this.router.navigate(['/dashboard'], { queryParams: {api:toString } });
  }
}