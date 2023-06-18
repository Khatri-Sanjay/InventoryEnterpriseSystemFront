import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForms: FormGroup = new FormGroup({});
  submitted: boolean | undefined;
  isSubmitting: boolean | undefined;
  fieldTextType: boolean | undefined;

  constructor(
    private form: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForms = this.form.group({
      firstName: [undefined, Validators.required],
      lastName: [undefined, Validators.required],
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
      phoneNumber: [undefined],
      address: [undefined],
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.signupForms.controls;
  }
  onSendData(signup: any) {
    console.log("thichyoo");
    // this.router.navigate(['login'])
    this.submitted = true;
    console.log(signup);
    if (this.signupForms.valid) {
      debugger
      this.userService.addUser(signup).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          this.router.navigate(['/login']);
          console.log('user addded successfully');
        },
        (error: any) => {
          this.isSubmitting = false;
        }
      );
    } else {
      console.log('Error on adding the data');
    }
  }
  signIn() {
    this.router.navigate(['auth/login']);
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


}
