import { Course } from './course';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private baseUrl: string = 'localhost:3001/courses';

    constructor(private http: HttpClient) { }

    retrieveAll(): Observable<Course[]> {
        return this.http.get<Course[]>(this.baseUrl);
    }

}