import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFooter } from '../../components/main-footer/main-footer';
import { MainNavbar } from '../../components/main-navbar/main-navbar';
import { FabDevButton } from '../../../settings/components/fab-dev-button/fab-dev-button';

@Component({
  selector: 'shared-main-layout',
  imports: [RouterOutlet, MainFooter, MainNavbar, FabDevButton],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout { }
