package com.hana7.springdemo.jpa.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hana7.springdemo.jpa.entity.Memo;

@SpringBootTest
class MemoRepositoryTest {
	@Autowired
	MemoRepository repository;

	@Test
	void testClass(){
		//give
		Memo memo1 = Memo.builder().memoText("테스트").build();
		Memo saved1 = repository.save(memo1);
		assertEquals(memo1, saved1);

		Memo foundMemo = repository.findById(saved1.getMno()).orElseThrow();
		Memo savedM = repository.findById(saved1.getMno()).orElseThrow();
		assertEquals(foundMemo, saved1);

		System.out.println("repository.getClass().getName() = " + repository.getClass().getName());

		foundMemo.setMemoText("New Memo");
		repository.saveAndFlush(foundMemo);
		System.out.println("foundMemo = " + foundMemo);

		savedM.setMemoText("New Memo");
		repository.saveAndFlush(savedM);
		System.out.println("savedM = " + savedM);

		repository.deleteById(savedM.getMno());
		Optional<Memo> memo2 = repository.findById(savedM.getMno());
	}
}
