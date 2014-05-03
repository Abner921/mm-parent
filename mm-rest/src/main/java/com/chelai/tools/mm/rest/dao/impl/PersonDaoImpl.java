package com.chelai.tools.mm.rest.dao.impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.chelai.tools.mm.rest.dao.PersonDao;
import com.chelai.tools.mm.rest.model.Person;

@Repository("personDao")
public class PersonDaoImpl implements PersonDao{

	@Resource
	private SessionFactory sessionFactory;
	
	@SuppressWarnings("unchecked")
	public List<Person> findAllPerson() {
		String hql = "from PERSON";
	    Query query = sessionFactory.getCurrentSession().createQuery(hql);
		List<Person>list= query.list();  
		return list;
	}

}
