import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../Services/usuarios.service'
import Swal from 'sweetalert2'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  @Input() usuarios: any 
  @Input() rol: any 
  @Input() id: any 
  Usuario = {
    rol: "",
    id: ""
  }
  UsuarioM = {
    nombre: "",
    email: "",
    apellidos: "",
    _id: ""
  }
  role=0;
  newvista= false

  constructor(public UsuariosService: UsuariosService, private router: Router) {}

  ngOnInit(){
    this.obtenerUsuarios();
   this.rol = localStorage.getItem('rol');

    if(this.rol == '3'){
      
    }else{
      //this.router.navigate(['/']);
    }
  }

  obtenerUsuarios() {
    
    this.id = localStorage.getItem('id');
    this.UsuariosService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
    }).catch((err) =>{
      console.log(err);
    })
    console.log(this.usuarios);
  }

  modificar(usuario: any){
    this.UsuarioM.apellidos = usuario.apellidos
    this.UsuarioM.email = usuario.email
    this.UsuarioM.nombre = usuario.nombre
    this.UsuarioM._id = usuario._id
    this.newvista = true
  }
  mod(){
    this.UsuariosService.modificarUsuario(this.UsuarioM).then((data: any) =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'accion Exitosa',
        showConfirmButton: false,
        timer: 1500
      })
      location.reload();
    }).catch((err) =>{
      //console.log(err);
        })

  }
 

  acenderUsuario(usuario: any){
    this.role = parseInt(usuario.rol);

    if(this.role >= 3){
      this.role = 3;
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Imposible asender mas',
        showConfirmButton: false,
        timer: 1500
      })
    
    }else{
      this.role = this.role + 1;
      usuario.rol = this.role
      this.UsuariosService.modificarUsuario(usuario).then((data: any) =>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'accion Exitosa',
            showConfirmButton: false,
            timer: 1500
          })
        }).catch((err) =>{
          //console.log(err);
            })
    }
  }

  degradarUsuario(usuario: any){
    this.role = parseInt(usuario.rol);

    if(this.role <= 1){
      this.role = 3;
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Imposible degradar mas',
        showConfirmButton: false,
        timer: 1500
      })
    
    }else{
      this.role = this.role - 1;
      usuario.rol = this.role
      
      this.UsuariosService.modificarUsuario(usuario).then((data: any) =>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'accion Exitosa',
            showConfirmButton: false,
            timer: 1500
          })
        }).catch((err) =>{
          //console.log(err);
            })
    }

  }
    
  cerrarVista(){
    this.newvista = false
  }
  


}