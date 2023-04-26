import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  form: any = {
    nom: null,
    prenom: null,
    username: null,
    email: null,
    password: null,
    dateNaissance: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles: string[] = [];
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private storageService:StorageServiceService,private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = false;
      this.router.navigate(['/dashboard']);
    }
    else {
      this.router.navigate(['/signup']);
    }
  
   
  }

  onSubmit(): void {
    const { nom , prenom , username , email ,password ,dateNaissance,roles} = this.form;

    this.authService.register( nom , prenom , username , email ,password ,dateNaissance,roles).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/signin']);

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
