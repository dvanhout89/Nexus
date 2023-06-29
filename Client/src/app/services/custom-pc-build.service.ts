import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomPCBuild } from '../models/custom-pc-build.model';

@Injectable({
    providedIn: 'root'
  })
  export class CustomPCBuildService {
    private apiUrl = 'http://localhost:8080/api/custom-pc-builds';
  
    constructor(private http: HttpClient) { }
  
    // Implement methods for managing custom PC builds (e.g., create, update, delete, retrieve).
  
    // Example method:
    createCustomPCBuild(customPCBuild: CustomPCBuild): Observable<CustomPCBuild> {
      return this.http.post<CustomPCBuild>(this.apiUrl, customPCBuild);
    }
  
    // Other methods...
  
  }