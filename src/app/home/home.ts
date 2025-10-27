import { Component } from '@angular/core';
import { Productoservice } from '../core/service/productoservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  //declaramos una variables para recibir la data del backend
  productos:any[]=[];
  categorias: any[]=[];
  nuevoProducto  = {
    nombre: '',
    precio:'',
    categoriaID:''
  }
  /**
   *
   */
  // creamo un constructor para llamar a nuestro servicio
  constructor(private productoService:Productoservice) {
        this.listarProductos();
        this.listarCategorias();
  }
  //creamos un metodo para listar productos desde el servicio
  listarCategorias(): void {
  this.productoService.listaCategorias().subscribe({
    next: (data) => this.categorias = data,
    error: (err) => console.error('error al cargar categorías', err)
  })
}

  listarProductos():void
  {

    this.productoService.listaProductos().subscribe({
      next:(data)=> {
        this.productos = data
        console.log(this.productos);
      
      },
      error:(err)=>console.error('error al cargar productos',err)
    })

  }

agregarProducto(nombre: string, precio: number, categoriaID: number): void {
  const data = { 
    nombre, 
    precio, 
    categoria_id: categoriaID   // <-- clave correcta para Laravel
  };

  this.productoService.agregaProducto(data).subscribe({
    next: () => this.listarProductos(),
    error: (err) => console.error('error al agregar producto', err)
  })
}
 obtenerNombreCategoria(id: number): string {
  const cat = this.categorias.find(c => c.id === id);
  return cat ? cat.nombre : '';
}



}