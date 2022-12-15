import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if(authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
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


//ang auto sends this data

