import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private baseUrl: string = 'localhost:3001/courses';

    constructor(private http: HttpClient) { }

}