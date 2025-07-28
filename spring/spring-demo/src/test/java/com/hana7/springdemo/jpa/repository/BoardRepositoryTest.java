package com.hana7.springdemo.jpa.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.stream.Stream;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Rollback;

import com.hana7.springdemo.jpa.entity.Board;

@Rollback(false)
class BoardRepositoryTest extends RepositoryTest {
	@Autowired
	BoardRepository repository;

	@Test
	@Order(1)
	void addTest() {
		repository.saveAll(
			Stream.iterate(1, n -> n + 1)
				  .limit(100)
				  .map(n -> Board.builder()
								 .title("Title" + n)
								 .writer("Writer" + n)
								 .build())
				  .toList());

		assertEquals(100, repository.count());
	}

	@Test
	@Order(2)
	void pageListTest() {
		repository.findAll(
			PageRequest.of(0, 10, Sort.by(Sort.Order.desc("id")))).forEach(this::print);
	}

}
