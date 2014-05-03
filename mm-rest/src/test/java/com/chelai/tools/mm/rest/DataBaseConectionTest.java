package com.chelai.tools.mm.rest;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;

import com.chelai.tools.mm.rest.model.Person;
import com.chelai.tools.mm.rest.service.PersonService;


public class DataBaseConectionTest extends TestBase {

	@Resource(name="personService")
	PersonService personService;
	
	
	@Test
	public void findAllPerson () {
		List<Person> list = personService.findAllPerson();
		if (null == list){
			System.out.println("this number of person is "+list.size());
			for (Person p : list) {
				System.out.println(p);
			}
		}
	}
}
