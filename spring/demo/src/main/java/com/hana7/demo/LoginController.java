package com.hana7.demo;

public class LoginController {
	public String loginForm() {
		return "<form>"
			+ "<input name='email'>"
			+ "<button type='submit'>Sign In</button>"
			+ "</form>";
	}
}
