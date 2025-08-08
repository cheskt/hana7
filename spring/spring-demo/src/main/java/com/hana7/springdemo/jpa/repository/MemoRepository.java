package com.hana7.springdemo.jpa.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.hana7.springdemo.jpa.entity.Memo;
import com.hana7.springdemo.jpa.entity.MemoState;

public interface MemoRepository extends JpaRepository<Memo, Integer>, QuerydslPredicateExecutor<Memo> {
	@Modifying                   // payed -> preparing  (5초)
	@Transactional               //    20     25 - 5초 = 20, (24 - 5) => 19 (26 - 5) = 21
	@Query("update Memo m set m.state = :nextState, m.statedAt = now(), updatedAt = :timeToUp"
		+ " where m.state = :state and m.statedAt <= :timeToUp")
	int updateStateBatch(@Param("state") MemoState state,
		@Param("nextState") MemoState nextState,
		@Param("timeToUp") LocalDateTime timeToUp);

	List<Memo> findByMnoBetweenOrderByMnoDesc(int start, int end);

	List<Memo> findByMnoBetween(int start, int end, Sort sorting);

	void deleteByMnoBetween(int start, int end);

	long removeByMnoBetween(int start, int end);

	@Query("select m from Memo m where m.mno > :boundary order by m.mno desc")
	List<Memo> getListOverDesc(@Param("boundary") int boundary);

	@Query("select m.mno, m.memoText from Memo m order by m.mno desc")
	List<Object[]> getListSomeDesc();

}
