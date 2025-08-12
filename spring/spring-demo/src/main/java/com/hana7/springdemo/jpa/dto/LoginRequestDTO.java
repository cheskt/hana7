package com.hana7.springdemo.jpa.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginRequestDTO(
	@NotBlank(message = "사용자명은 필수입니다!")
	@Size(min = 1, max = 30, message = "..")
	@Schema(name = "username", example = "sample@gmail.com")
	String username,

	@NotBlank(message = "비밀번호는 필수입니다!")
	@Schema(name = "password", example = "pwd00")
	String password
) {
}
