package thread;

class R implements Runnable {
	@Override
	public void run() {

	}
}

public class ThreadEx {
	public static void main(String[] args) {
		Runnable vc = () -> {
			int percent = 0;
			while (percent < 100) {
				int rate = (int)(Math.random() * 5) + 1;
				percent += rate;
				if (percent > 100) {
					rate -= (percent - 100);
					percent = 100;
				}

				System.out.printf("%5s 개표율: %d%% (증가율: %d) %s %n", Thread.currentThread().getName(), percent, rate,
					"*".repeat(percent));

				try {
					Thread.sleep((long)(1000 * Math.random()));
				} catch (InterruptedException e) {
					throw new RuntimeException(e);
				}
			}
		};

		// Thread t = new Thread(new TimerRunnable());
		Thread t = new Thread(vc, "제1개표구");
		t.start();

		new Thread(vc, "제2개표구").start();

		Thread t2 = new Thread(new Runnable() {
			@Override
			public void run() {
				for (int i = 0; i < 5; i++) {
					System.out.println(i);
				}
			}
		});

		Thread t3 = new Thread(() -> {
			for (int i = 0; i < 5; i++) {
				System.out.println(i);
			}
		});
	}
}
