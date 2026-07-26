import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Header } from './components/header/header';
import { LoadingService } from './services/loading';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'student-course-portal';

  isLoading$;


  constructor(
    private loadingService: LoadingService
  ) {

    this.isLoading$ = this.loadingService.isLoading$;

  }

}