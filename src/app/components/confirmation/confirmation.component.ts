import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  fullName: string;
  price: number;
  constructor(private router: Router) {
    if (
      !this.router.getCurrentNavigation() ||
      !this.router.getCurrentNavigation()?.extras ||
      !this.router.getCurrentNavigation()?.extras.state ||
      !this.router.getCurrentNavigation()?.extras.state ||
      !this.router.getCurrentNavigation()?.extras.state!['fullName'] ||
      !this.router.getCurrentNavigation()?.extras.state!['price']
    ) {
      this.router.navigate(['/404']);
    } else {
      this.fullName =
        this.router.getCurrentNavigation()?.extras.state!['fullName'];
      this.price = this.router.getCurrentNavigation()?.extras.state!['price'];
    }
  }

  ngOnInit(): void {}
}
