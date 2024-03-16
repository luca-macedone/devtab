import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent implements OnInit {
  darkThemeLS: string = this.localStorageService.getItem('theme') ? this.localStorageService.getItem('theme') : 'light'
  darkTheme: boolean = this.darkThemeLS == 'light' ? false : true
  maskEl: HTMLElement | null = null

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    if (this.localStorageService.getItem('theme')) {
      if (this.localStorageService.getItem('theme') === 'dark' || (!(this.localStorageService.getItem('theme')) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    } else {
      this.localStorageService.setItem('theme', 'light')
    }
    this.setBg()
    this.setMask()
    this.setScrollbarColor()
  }

  isDark() {
    if (document.body.classList.contains('dark')) {
      return true
    } else {
      return false
    }
  }

  toggleDarkMode() {
    if (this.localStorageService.getItem('theme') == 'light') {
      this.localStorageService.removeItem('theme')
      this.localStorageService.setItem('theme', 'dark')
      this.darkTheme = !this.darkTheme
      document.body.classList.add('dark')
    } else if (this.localStorageService.getItem('theme') == 'dark') {
      this.localStorageService.removeItem('theme')
      this.localStorageService.setItem('theme', 'light')
      this.darkTheme = !this.darkTheme
      document.body.classList.remove('dark')
    }
    this.setBg()
    this.setMask()
    this.setScrollbarColor()
  }

  setBg() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.add('ms-dark-bg')
    } else {
      document.body.classList.remove('ms-dark-bg')
    }
  }

  setScrollbarColor() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('scroll-light')
      document.body.classList.add('scroll-dark')
    } else {
      document.body.classList.remove('scroll-dark')
      document.body.classList.add('scroll-light')
    }
  }

  setMask() {
    this.maskEl = document.querySelector('#mask')
    if (this.maskEl) {
      if (document.body.classList.contains('dark')) {
        this.maskEl.classList.add('mask-dark')
      } else {
        this.maskEl.classList.remove('mask-dark')
      }
    }
  }

}
