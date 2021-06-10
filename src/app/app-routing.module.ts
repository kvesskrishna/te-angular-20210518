import { NgModule, Pipe } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryFormComponent } from './country-form/country-form.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent as AdminHomeComponent } from './admin/home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-info/:pid', component: ProductInfoComponent },
  { path: 'users', component: UsersComponent },
  { path: 'countries', component: CountryFormComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'visitor',
    loadChildren: () =>
      import('./visitor/visitor.module').then((m) => m.VisitorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
