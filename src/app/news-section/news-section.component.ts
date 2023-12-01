import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

interface Article {
  source: {},
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
}

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss'
})
export class NewsSectionComponent implements OnInit {
  news_api_base = `https://newsapi.org/v2/top-headlines`
  // api_query = '?q=WebDevelopment'
  // from_date_query = `&from=${this.getYesterday()}`
  sorting_query = '&sortBy=popularity'
  key = `&apiKey=${environment.NEWS_API_KEY}`
  // category_query = '&categoty=technology'
  country_query = '?country=it'

  news: Array<Article> = []

  ngOnInit(): void {
    axios
      .get(`${this.news_api_base + this.country_query + this.sorting_query + this.key}`)
      .then(response => {
        if (response.data.status == 'ok') {
          this.news = response.data.articles
          // console.log(this.news)
        }
      })
      .catch(error => {
        console.error(error.getMessage())
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
