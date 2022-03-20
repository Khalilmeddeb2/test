import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../_models/cours';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})

export class CoursService {

  private _coursUrl="http://localhost:3007/api/cours" 
  constructor(private http: HttpClient) { }

  public getCours() :Observable <any> {
    

    return this.http.get<any[]>(this._coursUrl, { 'headers': headers }).pipe(response =>
      response)
      }

      createCours(cours ):Observable<Object> {
        return this.http.post(`${this._coursUrl}`,cours);
      }
      
      deleteCours(id : string)
      {
        return this.http.delete(`${this._coursUrl}/${id}`);
      } 

     getCoursById(id : string):Observable<Cours>
      {
        return this.http.get<Cours>(`${this._coursUrl}/${id}`);
    
      } 
      
      EditCours(id:string,cours):Observable<Object> {
        return this.http.put(`${this._coursUrl}/${id}`,cours);
      }

      getToutesCours() :Observable <any> {
    

        return this.http.get<any[]>(`${this._coursUrl}/toutesCours`)
          }

       updateDownload(id:string){
         return this.http.get(`${this._coursUrl}/${id}/update/download`);
       }    
//
       getCoursByClasse(id :string) :Observable <any>
       {
        return this.http.get(`${this._coursUrl}/byClasse/${id}`);
       }

      /*totalClasses() {
        return this.http.get(`${this._coursUrl}/numberclasses`);
      }*/

     
      /*getClasseByEnseignant() :Observable <any> {
    

        return this.http.get<any[]>(`${this._coursUrl}/ByEnseignant`)
          }*/
}
