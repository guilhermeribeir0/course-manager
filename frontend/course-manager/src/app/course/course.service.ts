import { Course } from './course';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private readonly baseUrl: string = 'api/courses';

    constructor(private http: HttpClient) { }

    retrieveAll(): Observable<Course[]> {
        return this.http.get<Course[]>(this.baseUrl);
    }

    retrieveById(id: number): Observable<Course> {
        return this.http.get<Course>(`${this.baseUrl}/${id}`);
    }

    retrieveByCode(code: string): Observable<Course[]> {
        code.toUpperCase();
        return this.http.get<Course[]>(`${this.baseUrl}/{code}?code=${code}`);
    }

    retrieveByName(name: String): Observable<Course[]> {
        return this.http.get<Course[]>(`${this.baseUrl}/{name}?name=${name}`);
    }

    save(course: Course): Observable<Course> {
        if(course.id) {
            return this.http.put<Course>(`${this.baseUrl}/${course.id}`, course);
        } else {
            return this.http.post<Course>(`${this.baseUrl}`, course);
        }
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${id}`);
    }


}