import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmark-section',
  templateUrl: './bookmark-section.component.html',
  styleUrl: './bookmark-section.component.scss'
})
export class BookmarkSectionComponent {
  bookmarks: any[] = [
    { name: 'ChatGPT', url: 'https://chat.openai.com/', img_url: 'https://upload.vectorlogo.zone/logos/openai/images/2d0c228b-22e2-44ae-8fbd-d1d7646605c2.svg' },
    { name: 'GitHub', url: 'https://github.com/', img_url: 'https://www.vectorlogo.zone/logos/github/github-tile.svg' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com/', img_url: 'https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-tile.svg' },
    { name: 'MDN', url: 'https://developer.mozilla.org/', img_url: 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/m/mdn.svg' },
    { name: 'Free Code Camp', url: 'https://www.freecodecamp.org/', img_url: 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/brands/free-code-camp.svg' },
    { name: 'DevTo', url: 'https://dev.to/', img_url: 'https://www.vectorlogo.zone/logos/devto/devto-icon.svg' },
    { name: 'W3Schools', url: 'https://www.w3schools.com/', img_url: 'https://www.vectorlogo.zone/logos/w3schools/w3schools-icon.svg' },
    { name: 'Google Developers', url: 'https://developers.google.com/', img_url: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
  ]

  navigateTo(_link: string) {
    window.location.href = _link;
  }
}
