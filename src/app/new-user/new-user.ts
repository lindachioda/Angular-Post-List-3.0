import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserServicies } from '../servicies/user-servicies';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../user/user';
import { authGuard } from '../shared/auth-guard/auth-guard';

@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, CommonModule, FormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.scss',
})
export class NewUser {

  newUser = { //per il nuovo oggetto che si aggiunge all'array
    name: '',
    email: '',
    ruolo: ''
  }

  @ViewChild ('newuser') newuser! : NgForm

  constructor(private userServicies:UserServicies){}

// metodo per aggiungere users dal form
  addNewUser(form:NgForm){ //è ngForm
    let users = this.userServicies.getUsers() //prendere l'array di service con get
    let user: User = { //creo un nuov oggetto per l'array che ho già in service
           id: users.length ? users[users.length -1].id +1 :1, //ultimo id +1, //se array è vuoto allora lascia 1!
           name: this.newUser.name,
           email: this.newUser.email,
           ruolo: this.newUser.ruolo,
    }

    this.userServicies.addUser(user) //inserisci tutto il nuovo oggetto user composto da newUser diversi con il metodo di service!

    form.resetForm()//è un reset specifico del form!!!!
  }

//metodo guard per non cambiare rotta se form incompleto
cambioRotta():boolean { //è booleano perchè mi dice solo se è vero o no
  if(this.newUser.name || this.newUser.email || this.newUser.ruolo) {
    return false //se  almeno un input è pieno BLOCCA e aspetta di finire il form
  } else{
    return true //se gli input sono vuoti cambia pure rotta
    
  }
    
}
}
