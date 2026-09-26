import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root',
})
export class UserServicies {

  //array users

  users: User[] = [

    { id: 1,
      name:"Carlo",
      email: "carlo.carlo@carlo.carlo",
      ruolo: "admin"
    },

    { id: 2,
      name:"Paola",
      email: "sonopaola@io.comm",
      ruolo: "user"
    }
  ]


  getUsers(): User[] {
    console.log(this.users)
    return this.users
  }

  getUsersId(id:number) {
    return this.users.find(user=> user.id === id)
  }

  addUser(user: User) { //il service collega user.ts. new-user.ts!!
    this.users.push(user)
}
}
