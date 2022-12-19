import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";

interface Server {
  id: number;
  name:string;
  status: string;
}

// export class ServerResolver implements Resolve<{id: string, name: string, status: string}> {
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable< {

//   }
// }


@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serverService: ServersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer(+route.params['id']);
  }
}



// Resolve is a generic type
// should wrap item/data field will get here,
// will fetch a server here,define the type here.
// could outsource- interface/model
