import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFooter } from '../../components/main-footer/main-footer';
import { MainNavbar } from '../../components/main-navbar/main-navbar';

@Component({
  selector: 'shared-main-layout',
  imports: [RouterOutlet, MainFooter, MainNavbar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout { }
