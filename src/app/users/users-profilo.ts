import { Component, inject, Input, OnInit } from '@angular/core';
import { UserServicies } from '../servicies/user-servicies';
import { User } from '../user/user';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/auth-service/auth-service';

@Component({
  selector: 'app-users-profilo',
  imports: [CommonModule],
  templateUrl: './users-profilo.html',
  styleUrl: './users-profilo.scss',
})
export class UsersProfilo {

  authService = inject(AuthService) //variabile per inserire Authguard

   constructor(private userServicies:UserServicies){}

   @Input() user?: User //in parent è: userSelezionati?: User

}
