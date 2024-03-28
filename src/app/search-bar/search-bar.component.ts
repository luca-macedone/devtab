import { Component, OnInit } from '@angular/core';
import { GoogleSearchServiceService } from '../google-search-service.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {
  searchInput: string = '';
  searchControl: FormControl = new FormControl();
  results: any[] = []
  isInputFocus: boolean = false;

  constructor(private googleSearchService: GoogleSearchServiceService) { }

  // submitForm() {
  //   // const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(this.searchInput)}`;

  //   // window.location.href = searchUrl;
  // }

  ngOnInit(): void {
    this.searchInput = ''
    this.results = []

    this.searchControl.valueChanges.pipe(
      debounceTime(1000), // Aggiungi un ritardo di 500ms
      distinctUntilChanged() // Emetti solo se il valore attuale è diverso dall'ultimo
    ).subscribe(query => {
      this.onSearch(query);
    });
  }

  navigateTo(_link: string) {
    window.location.href = _link;
  }

  removeFocus() {
    setTimeout(() => {
      this.isInputFocus = false;
    }, 500);
  }

  activateFocus() {
    this.isInputFocus = true;
  }

  onSearch(_q: any): void {
    // if (this.searchInput.length > 2) {
    //   this.googleSearchService.search(_q).subscribe({
    //     next: (response) => {
    //       this.results = response.items;
    //     },
    //     error: (err) => {
    //       console.error('search error', err);
    //     }
    //   })
    // }
    if (!_q.trim()) {
      this.results = [];
      return;
    }
    this.googleSearchService.search(_q).subscribe({
      next: (response) => {
        this.results = response.items;
      },
      error: (error) => {
        console.error('Search error:', error);
      }
    });
  }
}

