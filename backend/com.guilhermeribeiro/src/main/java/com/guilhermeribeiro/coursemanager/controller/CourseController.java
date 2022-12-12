package com.guilhermeribeiro.coursemanager.controller;

import com.guilhermeribeiro.coursemanager.model.Course;
import com.guilhermeribeiro.coursemanager.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/courses")
@AllArgsConstructor
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public List<Course> courseList() {
        return courseRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Course> findCourseById(@RequestParam(value = "id") Long id) {
        return courseRepository.findById(id)
                .map(course -> ResponseEntity.ok().body(course))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(value = "/{code}")
    public ResponseEntity<Course> findCourseByCode(@RequestParam(value = "code") String code) {
        Course courseByCode = courseRepository.findByCode(code);

        if (courseByCode == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(courseByCode, HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<Course> newCourse(@RequestBody Course course) {
        return ResponseEntity.status(HttpStatus.CREATED).body(courseRepository.save(course));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        return courseRepository.findById(id)
                .map(courseDel -> {
                    courseRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
