import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  date = new FormControl(new Date());
  name: string;
  user: string;
  phone: string;
  email: string;
  saveProfile: boolean;

  profileSave: FormGroup;

  constructor(private authService: AuthService) { 
  }

  onSubmit() {
    this.saveProfile = false;
  }

  ngOnInit() {
      this.GetUser();
  }

  GetUser() {
    this.name = this.authService.currentUser.firstName
    this.user = this.authService.currentUser.userName
    this.phone = this.authService.currentUser.phone
    this.email = this.authService.currentUser.email
  }

}
