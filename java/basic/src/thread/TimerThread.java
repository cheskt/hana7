package thread;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class TimerThread extends Thread {
	public TimerThread(String name) {
		super(name);
	}

	@Override
	public void run() {
		String name = Thread.currentThread().getName();
		System.out.println("TimerThread started!!" + name);
		for (int i = 0; i < 5; i++) {
			System.out.println(name + ":" + i);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				System.out.println(name + " thread's interrupted!!!");
				throw new RuntimeException(e);
			}
		}
	}

	public static void main(String[] args) throws InterruptedException {
		System.out.println("Thread.currentThread().getName() = " + Thread.currentThread());

		TimerThread timer1 = new TimerThread("Timer1");
		TimerThread timer2 = new TimerThread("Timer2");
		timer1.setPriority(Thread.MIN_PRIORITY);
		timer2.setPriority(Thread.MAX_PRIORITY);
		timer1.start();
		timer2.start();

		for (int i = 0; i < 5; i++) {
			Thread.sleep(1000);
			if (i == 1) {
				timer1.join();
				timer2.join();
			}
			// timer2.interrupt();
			System.out.println(i + "번 main 쓰레드.");
		}
	}
}
