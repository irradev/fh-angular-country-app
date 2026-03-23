import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopMenu } from '../../../country/components/top-menu/top-menu';
import { TogglerDarkTheme } from '../toggler-dark-theme/toggler-dark-theme';

@Component({
  selector: 'shared-main-navbar',
  imports: [TopMenu, TogglerDarkTheme, RouterLink],
  templateUrl: './main-navbar.html',
})
export class MainNavbar { }
