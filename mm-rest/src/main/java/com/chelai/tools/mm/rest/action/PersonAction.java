package com.chelai.tools.mm.rest.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.chelai.tools.mm.rest.model.Person;
import com.chelai.tools.mm.rest.service.PersonService;

@Controller
@RequestMapping(value ="/persons")
public class PersonAction {

	@Resource(name="personService")
	PersonService personService;
	
	@RequestMapping(value ="/find",method=RequestMethod.GET)
	public void findAllPerson () {
		List<Person> list = personService.findAllPerson();
		if (null != list) {
			System.out.println(list.size());
		}
	}
}
