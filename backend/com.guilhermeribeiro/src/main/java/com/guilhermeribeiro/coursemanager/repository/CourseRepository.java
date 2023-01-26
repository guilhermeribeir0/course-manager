package com.guilhermeribeiro.coursemanager.repository;

import com.guilhermeribeiro.coursemanager.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository  extends JpaRepository<Course, Long> {

    @Query(value = "SELECT * FROM course WHERE UPPER(course.code) LIKE CONCAT('%',UPPER(:name),'%')", nativeQuery = true)
    public List<Course> findByCode(@Param("code") String code);

    @Query(value = "SELECT * FROM course WHERE UPPER(course.name) LIKE CONCAT('%',UPPER(:name),'%')", nativeQuery = true)
    public List<Course> findByName(@Param("name") String name);

}
