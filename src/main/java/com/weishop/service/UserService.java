package com.weishop.service;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@FeignClient(name="${weishop-server-id}",fallback=UserServiceHystric.class)
public interface UserService {
	
	@RequestMapping(value="user/test")
	public Object test(@RequestParam("current")int current,@RequestParam("size")int size);
}
