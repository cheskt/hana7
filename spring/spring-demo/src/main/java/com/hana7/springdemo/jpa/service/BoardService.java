package com.hana7.springdemo.jpa.service;

import java.util.List;

import com.hana7.springdemo.jpa.dto.BoardResponseDTO;

public interface BoardService {
	List<BoardResponseDTO> getPageList(int page, int countPerPage);

	BoardResponseDTO getBoard(int id);
}
