package thread;

public class Vote {

	public static void main(String[] args) {
		Runnable voteCounter = () -> {
			int percent = 0;
			String name = Thread.currentThread().getName();
			while (percent < 100) {
				int rate = (int)(Math.random() * 5) + 1;
				if ((percent + rate) > 100) {
					rate = 100 - percent;
				}
				percent += rate;

				System.out.printf("%5s 개표율: %d%% (개표증가율: %d%%) %s%n", name, percent, rate, "*".repeat(percent));

				try {
					Thread.sleep((long)(1000 * Math.random()));
				} catch (InterruptedException e) {
					System.out.println("Interrupted!!");
					return;
				}
			}
		};

		Thread t1 = new Thread(voteCounter, "제1지역구");
		Thread t2 = new Thread(voteCounter, "제2지역구");
		Thread t3 = new Thread(voteCounter, "제3지역구");
		t1.start();
		t2.start();
		t3.start();
	}
}
