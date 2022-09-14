import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService } from './../../course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../../course';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course!: Course;

  constructor(private courseService: CourseService, private router: RouterModule, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.courseService.retrieveById(+!this.route.snapshot.paramMap.get('id')).subscribe({
        next: course => this.course = course,
        error: err => console.log('Error', err)
      })
  }

}
