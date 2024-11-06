import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
 

userInfo= new FormGroup(
  {
    userName: new FormControl('', Validators.required),
    userMail: new FormControl('', [Validators.required, Validators.email]),
    userMsg: new FormControl('', Validators.required),
  }
)
printInput(): void{
  if (this.userInfo.valid)
  {console.log(this.userInfo.value)};

};

resetForm(): void{
 this.userInfo.reset()
};
}
