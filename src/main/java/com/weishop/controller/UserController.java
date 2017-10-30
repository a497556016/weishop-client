package com.weishop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.weishop.service.UserService;

@RequestMapping("/user")
@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	@RequestMapping("/test")
	@ResponseBody
	public Object test(int current, int size) {
		return userService.test(current, size);
	}
}
