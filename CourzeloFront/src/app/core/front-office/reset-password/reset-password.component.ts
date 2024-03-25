import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { MustMatch } from 'src/app/shared/validators/confirmPassword';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  resetPasswordToken: any;
  user: any = {};

  constructor( private formBuilder: FormBuilder,
    private authService: AuthServiceService, private activatedRoute: ActivatedRoute,
    private router: Router) {  console.log("wsel lena ")}

    ngOnInit(): void {
      this.resetPasswordForm = this.formBuilder.group({
        password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$")]],
        confirmPassword: [''],
      },
        {
          validator: MustMatch('password', 'confirmPassword')
  
        }
      );
  

      this.resetPasswordToken = this.activatedRoute.snapshot.paramMap.get('resetPasswordToken');
        console.log("resetPasswordToken")
      this.authService.getUserByResetPasswordToken(this.resetPasswordToken).subscribe(
        (data) => {
         
          this.user = data;
        }
      );
    }

    get registerFormControl() {
      return this.resetPasswordForm.controls;
    }
    resetPassword() {

      this.authService.resetPassword(this.resetPasswordToken, this.user).subscribe(
        (data) => {
  
         alert("Votre mot de passe a bien été modifié")
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 4000);
        },
        (error) => {
          alert("Un problème est survenu pendant le changement de votre mot de passe.")
        }
      );
  
  
  
    }

}
