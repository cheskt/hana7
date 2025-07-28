package com.hana7.springdemo.jpa.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.springdemo.jpa.dto.MemberRequestDTO;
import com.hana7.springdemo.jpa.dto.MemberResponseDTO;

@RestController
@RequestMapping("/members")
public class MemberController {
	List<MemberResponseDTO> finaAll(){
		return List.of();
	}

	@PostMapping
	MemberResponseDTO save(MemberRequestDTO dto){
		return null;
	}
}
