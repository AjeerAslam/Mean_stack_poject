import { CanActivateFn } from '@angular/router';

export const userAuthGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('id')!=null && sessionStorage.getItem('role')=='user'){
    return true;
  }else{
    return false;
  }
};
