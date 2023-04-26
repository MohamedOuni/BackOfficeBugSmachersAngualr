import { Component } from '@angular/core';
import { StorageServiceService } from '../services/storage-service.service';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private storageService:StorageServiceService,private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = false;
      this.router.navigate(['/reclamation']);
    }
    else {
      this.router.navigate(['/signin']);
    }
  
   
  }

}
