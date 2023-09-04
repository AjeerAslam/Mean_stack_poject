import { CanActivateFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = () => {
  if(sessionStorage.getItem('id')!=null && sessionStorage.getItem('role')=='admin'){
    return true;
  }else{
    return false;
  }
};
