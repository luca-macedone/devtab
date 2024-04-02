import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsServiceService {
  base_url: string = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";

  constructor() { }

  async fetch() {
    let res: any = await this.fetchIDs();
    // console.log(res);
    return res ? res : [];
  }

  private async fetchIDs() {
    // let latestNewsIDs: any[] = [];

    // return await axios
    //   .get(this.base_url)
    //   .then((response) => {
    //     latestNewsIDs = response.data.slice(0, 10);
    //     console.log(latestNewsIDs);
    //   })
    //   .catch(err => console.error(err))
    //   .finally(() => { return this.fetchNews(latestNewsIDs) })

    try {
      const response = await axios.get(this.base_url);
      const latestNewsIDs = response.data.slice(0, 10);
      // console.log(latestNewsIDs);
      return this.fetchNews(latestNewsIDs);
    } catch (err) {
      console.error(err);
      return []; // o gestisci l'errore in altro modo
    }


  }

  private async fetchNews(IDs: any[]) {
    let news: any[] = [];

    await Promise.all(
      IDs.map(async (_id) => {
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${_id}.json?print=pretty`);
        news.push(response.data);
      })
    );
    // console.log(news);
    return news;
  }
}
