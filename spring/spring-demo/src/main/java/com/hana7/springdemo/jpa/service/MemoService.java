package com.hana7.springdemo.jpa.service;

import org.springframework.batch.core.BatchStatus;

public interface MemoService {
	public BatchStatus runBatch() throws Exception;
}
