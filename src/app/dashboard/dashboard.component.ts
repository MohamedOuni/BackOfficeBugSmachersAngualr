import { Component } from '@angular/core';
import { StorageServiceService } from '../services/storage-service.service';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private storageService:StorageServiceService,private authService: AuthServiceService, private router: Router) { }

  isLoggedIn = false;
  isLoginFailed = false;

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = false;
      this.router.navigate(['/dashboard']);
    }
    else {
      this.router.navigate(['/signin']);
    }
  }
}
