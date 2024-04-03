import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent implements OnInit {
  themeSetting: 'light' | 'dark' | 'system' = 'system';
  maskEl: HTMLElement | null = null;
  isThemeSettingShowing: boolean = false;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const storedTheme = this.localStorageService.getItem('theme');
    this.themeSetting = storedTheme ? storedTheme as 'light' | 'dark' | 'system' : 'system';
    this.applyTheme();
  }

  isDark(): boolean {

    return document.body.classList.contains('dark');
  }

  onChangeTheme(evt: any) {
    if (evt) {
      switch (evt) {
        case '0':
          this.themeSetting = 'light';
          break;
        case '1':
          this.themeSetting = 'system';
          break;
        case '2':
          this.themeSetting = 'dark';
          break;
        default:
          this.themeSetting = 'system';
      }
    } else {
      this.themeSetting = 'system';
    }
    this.localStorageService.setItem('theme', this.themeSetting);
    this.applyTheme();
  }

  applyTheme() {
    const useDarkMode = this.themeSetting === 'dark' || (this.themeSetting === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (useDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    this.setBg();
    this.setMask();
    this.setScrollbarColor();
  }

  setBg() {
    document.body.classList.toggle('ms-dark-bg', this.themeSetting === 'dark' || (this.themeSetting === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches));
  }

  setScrollbarColor() {
    const useDarkMode = this.themeSetting === 'dark' || (this.themeSetting === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.body.classList.toggle('scroll-dark', useDarkMode);
    document.body.classList.toggle('scroll-light', !useDarkMode);
  }

  setMask() {
    this.maskEl = document.querySelector('#mask');
    if (this.maskEl) {
      this.maskEl.classList.toggle('mask-dark', this.themeSetting === 'dark' || (this.themeSetting === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches));
    }
  }
}
