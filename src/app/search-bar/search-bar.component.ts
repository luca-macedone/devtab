import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchInput: string = '';

  constructor(private router: Router) { }

  submitForm() {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(this.searchInput)}`;

    window.location.href = searchUrl;
  }
}

