import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { __param } from 'tslib';
@Injectable({
  providedIn: 'root'
})
export class Productoservice {

  private base = 'http://127.0.0.1:8000/api/productos';
  private categoriasUrl = 'http://127.0.0.1:8000/api/categorias';

  /**
   *
   */
  constructor(private http:HttpClient) {}
  

  listaProductos():Observable<any[]>{
    return this.http.get<any[]>(this.base);
  }
  /**realizando una peticion POST */
  
  agregaProducto(data : any):Observable<any>{
    return this.http.post<any>(this.base, data);
  }
   listaCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.categoriasUrl);
  }
  
 
  




  
 




  
}