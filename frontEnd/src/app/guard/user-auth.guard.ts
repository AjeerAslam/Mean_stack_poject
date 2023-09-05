import { CanActivateFn } from '@angular/router';

export const userAuthGuard: CanActivateFn = (route, state) => {
  //// user authentication
  if(sessionStorage.getItem('id')!=null && sessionStorage.getItem('role')=='user'){
    return true;
  }else{
    return false;
  }
};
