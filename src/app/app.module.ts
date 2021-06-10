import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MathsTableComponent } from './maths-table/maths-table.component';
import { AnimalSelectorComponent } from './animal-selector/animal-selector.component';
import { ConditionalFormComponent } from './conditional-form/conditional-form.component';
import { HightlightDirective } from './directives/hightlight.directive';
import { MaskPipe } from './pipes/mask.pipe';
import { UserSearchPipe } from './pipes/user-search.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryFormComponent } from './country-form/country-form.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MathsTableComponent,
    AnimalSelectorComponent,
    ConditionalFormComponent,
    HightlightDirective,
    MaskPipe,
    UserSearchPipe,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    ProductComponent,
    ProductInfoComponent,
    UsersComponent,
    UserComponent,
    CountryFormComponent,
    PostsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
