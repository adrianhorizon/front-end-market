import { Component, OnInit } from '@angular/core';
import { NavigationMenu } from 'src/app/shared/models/profile-side-bar.model';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-profile-side-bar',
  templateUrl: './profile-side-bar.component.html',
  styleUrls: ['./profile-side-bar.component.scss']
})
export class ProfileSideBarComponent implements OnInit {
  name: string;
  profileMenu: NavigationMenu[] = [
    {
      icon: '',
      title: 'Mi perfil',
      url: '/account/profile',
    },
    {
      icon: '',
      title: 'Contraseña',
      url: '/account/password'
    },
    {
      icon: '',
      title: 'Tarjetas de crédito',
      url: '/account/card',
    },
    {
      icon: '',
      title: 'Diecciones',
      url: '/account/address'
    },
    {
      icon: '',
      title: 'Ajustar notifaciones',
      url: '/account/notifications'
    },
    {
      icon: '',
      title: 'Mis pedidos',
      url: '/account/orders'
    }
  ];

  constructor(private authService: AuthService) { 
  }

  ngOnInit() {
      this.GetUser();
  }

  GetUser() {
    this.name = this.authService.currentUser.firstName
  }

}
