import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss'
})
export class NewsSectionComponent implements OnInit {
  news: Array<any> = []
  googleNews: Array<any> = []
  mediumNews: Array<any> = []
  isLoading: boolean = true

  ngOnInit(): void {
    this.fetchNews()
  }

  async fetchNews() {
    this.isLoading = true;

    try {
      await Promise.all([
        this.fetchGoogleTopNews(),
        this.fetchMediumTopNews()
      ])
    } catch (error) {
      console.error(error);
    } finally {
      this.news = [...this.googleNews, ...this.mediumNews]
      this.isLoading = false
    }



  }

  async fetchGoogleTopNews(): Promise<void> {
    const response = await axios
      .get(`${environment.GOOGLE_TOP_NEWS}`)
      .then(response => {
        // console.log(response)
        if (response.status == 200) {
          this.googleNews = response.data.items;
        } else {
          this.googleNews = []
        };
      })
      .catch(error => {
        // console.error(error)
        throw new Error(error);
      })
  }

  async fetchMediumTopNews(): Promise<void> {
    const result = await axios
      .get(`${environment.MEDIUM_TOP_NEWS}`)
      .then(response => {
        if (response.status == 200) {
          this.mediumNews = response.data.items
          // console.log(response.data.items, this.mediumNews)
        } else {
          this.mediumNews = []
        }
      })
      .catch(error => {
        // console.error(error)
        throw new Error(error);
      })
  }

  getYesterday(): Date {

    const today = new Date();

    today.setDate(today.getDate() - 1);

    return today;
  }

  formatDate(dateString: string) {
    let date = new Date(dateString)
    return date.toLocaleString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })
  }

}
