import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../Equipment/equipment/equipment.module';
import { ResponseModel } from '../../core/request/response/response.module'


@Injectable({
  providedIn: 'root'
})

export class EquipmentServiceService {

  private apiUrl = "http://localhost:8080/api/v1/equipments";
  private savedEquipment: Equipment | null = null;

  constructor(private http: HttpClient) { }

  getEquipments(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(this.apiUrl);
  }

  addEquipments(equipment: Equipment): Observable<ResponseModel<Equipment>>{
    equipment.quantite = 0 ;
    return  this.http.post<ResponseModel<Equipment>>(this.apiUrl, equipment);
  }
  deleteEquipments(id?: number): Observable<ResponseModel<Equipment>> {
    console.log("ana hna "+ id );
    return this.http.delete(this.apiUrl + '/' + id) as Observable<ResponseModel<Equipment>>;
  }
  getByID(id?: number): Observable<ResponseModel< Equipment>> {
    return this.http.get(this.apiUrl + '/' + id ) as  Observable<ResponseModel< Equipment>>;
  }
}
