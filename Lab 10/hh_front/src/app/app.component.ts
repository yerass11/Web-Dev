import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {TopBarComponent} from "./top-bar/top-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompanyListComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';
}
