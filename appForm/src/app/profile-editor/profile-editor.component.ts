import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  // profileForm=new FormGroup({
  //   firstname : new FormControl(''),
  //   lastname : new FormControl(''),
  //   address : new FormGroup({
  //     street : new FormControl(''),
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     zip : new FormControl('')
  //   })

  // });

  profileForm =this.fb.group({
    firstname : ['',Validators.required],
    lastname : [''],
    address : this.fb.group({
      street: [''],
      city :[''],
      state : [''],
      zip : [''],
    }),
  });

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
