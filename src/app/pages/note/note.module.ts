import { NgModule } from '@angular/core';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteListComponent } from './note-list/note-list.component';
import { ShareModule } from '../../shared/shared.module'
import { noteService } from '../../shared/services/note.service';

const declarations = [
  NoteListComponent,
  NoteItemComponent
];

const imports: any = [
  ShareModule,
]; 

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [
    NoteListComponent,
    NoteItemComponent
  ],
  providers: [noteService],
})
export class NoteModule {}
