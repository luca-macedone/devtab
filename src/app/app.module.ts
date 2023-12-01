import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { PromptSectionComponent } from './prompt-section/prompt-section.component';
import { TasksSectionComponent } from './tasks-section/tasks-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import axios from 'axios';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ClockItemComponent } from './clock-item/clock-item.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsSectionComponent,
    SearchSectionComponent,
    PromptSectionComponent,
    TasksSectionComponent,
    FooterSectionComponent,
    SearchBarComponent,
    ClockItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
