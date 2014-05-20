package com.chelai.tools.mm.rest.action;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.chelai.tools.mm.rest.model.User;
import com.chelai.tools.mm.rest.service.IUserService;



@Controller
@RequestMapping(value ="/login")
public class LoginAction {

	@Resource(name="userService")
	private IUserService userService;
	
	@RequestMapping(value ="/login.do")
	public String login (User u,Model model) {
		
		if ("".equalsIgnoreCase(u.getUsername().trim()) || null == u.getUsername() || null == u.getPassword() || "".equalsIgnoreCase(u.getPassword().trim())) {
			model.addAttribute("error", "用户名或密码不能为空");
			return "login";
		}
		
		User user = userService .findUser(u);
		
		if (null == user) {
			model.addAttribute("error", "用户名不存在");
			return "login";
		}
		
		return "mainPage";
	}
}
