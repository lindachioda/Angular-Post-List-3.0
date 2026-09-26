import { CanDeactivateFn } from '@angular/router';



export const authDeactivateGuard: CanDeactivateFn<any> = (component) => { 
  //creo una guard deactivate perchè quello che faccio ora è controllare se utente puo uscire, non entrare
  if(component.cambioRotta()){ //se cambio rotta è true allora ritorna alert
    return true
  }else{
  return confirm('Non hai completato il form, sei sicur* di voler uscire?')
  //CONFIRM e non ALERT perchè così return un booleano!!!!
  }
}
