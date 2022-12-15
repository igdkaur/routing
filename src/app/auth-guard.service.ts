import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error("Method not implemented.");
  }
  
}

// define that Angular should execute this code before a route is loaded.
// CanActivate can run both asynchronously
// returning an observable or a promise or synchronously
// because you might have some guards
// which execute some code which runs completely on the client,
// therefore it runs synchronously.
// Or you might have some code
// which takes a couple of seconds to finish
// because you use a timeout in there.
// Or you reach out to a server,
// so it runs asynchronously