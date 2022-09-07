import { Component, Input, OnInit } from '@angular/core';

import { NoteModel } from 'src/app/shared/models/note.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input()
  items: NoteModel.NoteInfo[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
