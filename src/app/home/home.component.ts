import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private data: any;
  returnUrl: string;
  error = '';
  loading = false;
  name: string = '';
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.setValue();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    this.authenticationService.getApi()
      .pipe(first())
      .subscribe(
        data => {
          this.data = data;
          console.log(">>>>>>>>>", data);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
  setValue() {
    this.name = 'Sanu';
    console.log(">>>", this.name);
    
  }

}
