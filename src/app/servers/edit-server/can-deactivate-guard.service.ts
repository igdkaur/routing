import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> |boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     return component.canDeactivate();             
  }
} 


// CanDeactivate method,
// which will be called by the @angular/router,
// once we try to leave a route.
// this will have the component,
// on which we're currently on as an argument.
// And this component
// needs to be of type CanComponentDeactivate,
// which means it needs to be a component,
// which has this interface here implemented.
// Therefore a component which has a CanDeactivate method.