import { Component, EventEmitter, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css'
})
export class SubmitComponent {
  urlPattern =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/;


newDestination = new FormGroup(
  {
    n_name: new FormControl('', Validators.required),
    n_country: new FormControl('', Validators.required),
    n_price: new FormControl('' , [Validators.required, Validators.min(0)]),
    n_desc: new FormControl(''),
    n_duration: new FormControl('',[Validators.min(0), Validators.pattern('^(0|[1-9][0-9]*)$')]),
    n_imgURL: new FormControl('', Validators.pattern(this.urlPattern)),
  },
)

printInput(): void{
  if (this.newDestination.valid)
 { console.log(this.newDestination.value)};
  
};

resetForm(): void{
  this.newDestination.reset();
};

}
