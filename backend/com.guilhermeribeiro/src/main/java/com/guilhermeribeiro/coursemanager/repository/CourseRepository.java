package com.guilhermeribeiro.coursemanager.repository;

import com.guilhermeribeiro.coursemanager.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository  extends JpaRepository<Course, Long> {

    public Course findByCode(String code);

    public Course findByName(String name);

}
