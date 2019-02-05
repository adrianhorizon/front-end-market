import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title = 'Categorias';
  subTitle = 'Acerca de nosotros';
  download = 'Descarga la App';
  playStore = 'Play Store';
  appStore = 'App Store';
  subscribe = 'Síguenos';
  option = [
    {
      name: 'Market POS',
      url: '/'
    },
    {
      name: 'Market Mercado',
      url: '/'
    },
    {
      name: 'Market Stylus',
      url: '/'
    },
    {
      name: 'Market Walk',
      url: '/'
    }
  ];
  optionCenter = [
    {
      title: 'Aviso de privacidad',
      url: '/'
    },
    {
      title: 'Términos y condiciones',
      url: '/'
    },
    {
      title: 'Kit Market',
      url: '/'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
