import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Graph } from '../data/graph.model';

@Injectable({
  providedIn: 'root'
})
export class FlaskRequestService {

  constructor(private http:HttpClient) { }

  voiceRec(formData:FormData)
  {
    return this.http.post<{"keyword":""}>("http://127.0.0.1:5000/predict",formData)
  }
  getGraph(req:Graph)
    {
       return this.http.post("http://127.0.0.1:5000/graph",req,{ responseType: 'blob' });
    }
}
