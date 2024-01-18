import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {environment} from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable()
export class InterestServices {

    constructor(
        private _api: HttpClient
    ) { }

    consultarTipoTramite (plazo:number,monto:number): Observable<any> {
        const endpoint = `${environment.interest}${plazo}/${monto}`
        return this._api.get(endpoint);
    }


}