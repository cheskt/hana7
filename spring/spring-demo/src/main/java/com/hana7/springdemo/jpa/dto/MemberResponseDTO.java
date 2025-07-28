package com.hana7.springdemo.jpa.dto;

import lombok.Builder;

@Builder
public class MemberResponseDTO extends MemberDTO {
	private int id;
	private String title;
	private String writer;
	private int hit;
}
