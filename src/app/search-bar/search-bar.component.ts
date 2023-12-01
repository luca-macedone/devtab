import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {
  searchInput: string = '';

  submitForm() {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(this.searchInput)}`;

    window.location.href = searchUrl;
  }

  ngOnInit(): void {
    this.searchInput = ''
  }
}

