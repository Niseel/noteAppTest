import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { NoteModule } from './pages/note/note.module';
import { ShareModule } from './shared/shared.module';

const declarations = [AppComponent, LayoutComponent];
const imports = [BrowserModule, AppRoutingModule, NoteModule, ShareModule, HttpClientModule]

@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    ...imports,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
