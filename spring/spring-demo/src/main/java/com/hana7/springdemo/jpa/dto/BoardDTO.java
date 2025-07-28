package com.hana7.springdemo.jpa.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
// @NoArgsConstructor
@AllArgsConstructor
@Data
public class BoardDTO {
	private Long bno;

	private String title;

	private String content;

	private String writer;

	private LocalDateTime regDate;

	private Integer hit;
}
