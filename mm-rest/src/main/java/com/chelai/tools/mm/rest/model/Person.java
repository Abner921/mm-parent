package com.chelai.tools.mm.rest.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Person {

	@Id
	private String id;
	private String name;
	private int age;
	private String adress;
	
	public Person() {
		
	}
	
	public Person(String id, String name, int age, String adress) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.adress = adress;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}
	
	@Override
	public String toString() {
		
		return "id="+id+" name="+name+" age="+age+" adress="+adress;
	}
}
