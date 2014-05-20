package com.chelai.tools.mm.rest.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chelai.tools.mm.rest.dao.IUserDao;
import com.chelai.tools.mm.rest.model.User;
import com.chelai.tools.mm.rest.service.IUserService;

@Service("userService")
public class UserServiceImpl implements IUserService{

	@Resource(name="userDao")
	private IUserDao userDao;
	
	public User findUser(User u) {
		return userDao.findUser(u);
	}

}
