package com.cs.restapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs.restapi.entity.SubjectInfo;
import com.cs.restapi.services.SubjectServices;

@CrossOrigin
@RestController
@RequestMapping(path = "/subject")
public class SubjectController {
	
	@Autowired
	private SubjectServices subjectService;
	
	@PostMapping("/add")
	public SubjectInfo addSubject(@RequestBody SubjectInfo subject) {
		return this.subjectService.addSubject(subject); 
	}
	
	@PutMapping("/update")
	public SubjectInfo updateSubject(@RequestBody SubjectInfo subject) {
		return this.subjectService.updateSubject(subject);
	}
	
	@DeleteMapping("/delete/{subject_id}")
	public SubjectInfo deleteSubject(@PathVariable int subject_id) {
		return this.subjectService.deleteSubject(subject_id);
	}
	
	@GetMapping("/getAll")
	public List<SubjectInfo> getAllSubject(){
		return this.subjectService.getAllSubject();
	}
	
	@GetMapping("/getByClassCoordinator/{classcoordinator_id}")
	public List<SubjectInfo> getByClassCoordinator(@PathVariable int classcoordinator_id){
		return this.subjectService.getSubjectByClassCoordinator(classcoordinator_id);
	}
}
