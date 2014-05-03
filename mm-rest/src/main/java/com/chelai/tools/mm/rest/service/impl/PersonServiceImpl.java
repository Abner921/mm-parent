package com.chelai.tools.mm.rest.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chelai.tools.mm.rest.dao.PersonDao;
import com.chelai.tools.mm.rest.model.Person;
import com.chelai.tools.mm.rest.service.PersonService;

@Service("personService")
public class PersonServiceImpl implements PersonService{

	@Resource(name="personDao")
	PersonDao persondao;
	
	public List<Person> findAllPerson() {
		return persondao.findAllPerson();
	}

}
