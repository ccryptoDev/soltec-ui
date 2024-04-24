import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { InstanceTracker } from '../models/instance.model'

@Injectable({
    providedIn: 'root',
})
export class InstancesService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getInstanceID(instanceId: string): Observable<InstanceTracker> {
        return this.http.get<InstanceTracker>(`${this.apiUrl}/pasos/paso2-1/${instanceId}`);
    }
    
    
}

