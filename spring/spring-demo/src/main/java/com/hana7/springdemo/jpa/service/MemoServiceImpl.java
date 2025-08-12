package com.hana7.springdemo.jpa.service;

import java.time.LocalDateTime;

import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.hana7.springdemo.jpa.entity.MemoState;
import com.hana7.springdemo.jpa.repository.MemoRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemoServiceImpl implements MemoService {
	private final MemoRepository repository;
	private final JobLauncher jobLauncher;
	private final Job csvJob;

	@Override
	// public BatchStatus runBatch(String filePath) throws Exception {
	public BatchStatus runBatch() throws Exception {
		JobParameters jobParameters = new JobParametersBuilder().addLong("time", System.currentTimeMillis())
			// .addString("filePath", filePath)
			.toJobParameters();

		return jobLauncher.run(csvJob, jobParameters).getStatus();
	}

	@Scheduled(cron = "0 5 * * * *")
	public void updateStateBatch() throws Exception {
		MemoState state = MemoState.PAYED;
		while (state != MemoState.DELIVERED) {
			LocalDateTime now = LocalDateTime.now();
			System.out.println("now = " + now);

			System.out.println(
				"--> " + state + ", " + state.getNextState() + ": " + now.minusSeconds(state.stateInterval()));
			int affectedRowCount = repository.updateStateBatch(
				state, state.getNextState(),
				now.minusMinutes(state.stateInterval()));
			System.out.println(" ==> affectedRowCount = " + affectedRowCount);

			state = state.getNextState();
		}
	}
}
