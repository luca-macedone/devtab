import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { TasksSectionComponent } from './tasks-section/tasks-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { ClockItemComponent } from './clock-item/clock-item.component';
import { QuizSectionComponent } from './quiz-section/quiz-section.component';

import { NgIconsModule } from '@ng-icons/core';
import { faSolidCircleCheck, faSolidArrowUp, faSolidCirclePlus, faSolidCircleXmark, faSolidSun, faSolidMoon, faSolidCopyright, faSolidListCheck, faSolidCheck } from '@ng-icons/font-awesome/solid';
import { faCircleCheck } from '@ng-icons/font-awesome/regular';
import { faBrandLinkedinIn, faBrandGithub } from '@ng-icons/font-awesome/brands';
import { HttpClientModule } from '@angular/common/http';
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
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    HttpClientModule,
    NgIconsModule.withIcons({ faSolidCircleCheck, faCircleCheck, faSolidArrowUp, faSolidCirclePlus, faSolidCircleXmark, faSolidSun, faSolidMoon, faBrandLinkedinIn, faBrandGithub, faSolidCopyright, faSolidListCheck, faSolidCheck })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
