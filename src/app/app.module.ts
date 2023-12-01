import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { TasksSectionComponent } from './tasks-section/tasks-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { ClockItemComponent } from './clock-item/clock-item.component';
import { QuizSectionComponent } from './quiz-section/quiz-section.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsSectionComponent,
    SearchSectionComponent,
    TasksSectionComponent,
    FooterSectionComponent,
    SearchBarComponent,
    ClockItemComponent,
    QuizSectionComponent
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
