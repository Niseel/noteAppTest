import { AboutComponent } from '../pages/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../pages/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const declarations: any[] = [
  HeaderComponent,
  SidebarComponent,
  AboutComponent,
  ErrorComponent
];

const imports = [
  BrowserModule,
  CommonModule,
];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class ShareModule {}
