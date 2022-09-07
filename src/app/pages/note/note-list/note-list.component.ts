import { Component, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/shared/components/base.component';
import { NoteModel } from 'src/app/shared/models/note.model';
import { noteService } from './../../../shared/services/note.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent extends BaseComponent {
  public items: NoteModel.NoteInfo[] = [];

  constructor(private noteService: noteService) { 
    super();
  }
  
  ngOnInit() {
    const me = this;
    console.log('hee');
    me.getNotes();
    
  }
  
  private getNotes() {
    const me = this;
    me.noteService
      .getNotes()
      .pipe(takeUntil(me.destroy$))
      .subscribe((res: any) => {
        me.items = res;
        console.log(me.items);
      });
  }
  
  onDestroy(): void {
    
  }
}
