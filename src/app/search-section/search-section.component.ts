import { Component } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.scss'
})
export class SearchSectionComponent {
  isDark() {
    if (document.body.classList.contains('dark')) {
      return true
    } else {
      return false
    }
  }
}
