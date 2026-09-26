import { Routes } from '@angular/router';
import { Home } from './home/home';
import { InactivePost } from './inactive-post/inactive-post';
import { ActivePost } from './active-post/active-post';
import { Detail } from './detail/detail';
import { authGuard } from './shared/auth-guard/auth-guard';
import { authDeactivateGuard } from './shared/auth-guard/auth-deactivate-guard';
import { NewUser } from './new-user/new-user';


export const routes: Routes = [
     { path: '', component: Home },
     { path: 'inactive-post', component: InactivePost, canActivate:[authGuard] }, //i post inattivi sono protetti e puoi accedere solo se sei loggato!!
     { path: 'active-post', component: ActivePost },
     { path: 'post/:id', component: Detail },
     //{ path: 'users/:id', component: UserProfilo, canActivate:[authGuard] }, => se avessi un router amnche per i dettagli dei profili
     { path: 'users', loadChildren: ()=> import ('./users/users-routes')
          .then(m => m.Usersroutes) //TRASFORMA IN LAZY LOADING
      },
     { path: 'new', component: NewUser, canDeactivate:[authDeactivateGuard] },
     { path: '**', redirectTo: '' } //WILDCARD reindirizzo alla home tutte le routs non valide!!! 
   
];
