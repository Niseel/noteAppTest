import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { NoteModel } from '../models/note.model';
import { Observable } from 'rxjs';

// let headers = new HttpHeaders({
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'Content-Type',
//   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
//   'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
// });

let headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
  })
}

@Injectable()
export class noteService extends BaseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }


  public getNotes(): Observable<NoteModel.NoteInfo[]> {
    const me = this;
    // const uri = 'api/v1/notes';
    const uri = '../../../assets/data/todolist.json';
    console.log(uri);
    
    return me.get<NoteModel.NoteInfo[]>(uri);
  }

  // public createDoctor(
  //   request: DoctorRequest.CreateDoctor
  // ): Observable<DoctorResponse.GetDoctors> {
  //   const me = this;
  //   const uri = 'api/doctors';
  //   return me.post(uri, request);
  // }
}
