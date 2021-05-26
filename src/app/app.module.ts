import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MathsTableComponent } from './maths-table/maths-table.component';
import { AnimalSelectorComponent } from './animal-selector/animal-selector.component';
import { ConditionalFormComponent } from './conditional-form/conditional-form.component';
import { HightlightDirective } from './directives/hightlight.directive';
import { MaskPipe } from './pipes/mask.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, MathsTableComponent, AnimalSelectorComponent, ConditionalFormComponent, HightlightDirective, MaskPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
