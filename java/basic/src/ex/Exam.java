package ex;

public class Exam {
	public static void main(String[] args) {
		// System.out.println("args=" + args.length);
		// int midScore = 50;
		// int finalScore = 80;
		// System.out.println("midScore=" + midScore);
		// System.out.printf("finalScore=%d%n", finalScore);
		//
		// System.out.printf("mid: %03d + final: %d = %d", midScore, finalScore, midScore + finalScore);

		PrintTable pt = new PrintTable();
		PrintThread th1 = new PrintThread(pt, 2);
		PrintThread th2 = new PrintThread(pt, 5);
		th1.start();
		th2.start();
	}
}

class PrintThread extends Thread {
	PrintTable pt;
	int n;

	PrintThread(PrintTable pt, int n) {
		this.pt = pt;
		this.n = n;
	}

	public void run() {
		pt.printTable(n);
	}
}

class PrintTable {
	//구구단 출력하는 동기화가 필요한 메소드, synchronized
	public synchronized void printTable(int n) {
		System.out.println(n + "단 출력");
		for (int i = 1; i < 10; i++) {
			System.out.println(n + " * " + i + " = " + n * i);
			try {
				Thread.sleep(200);
			} catch (InterruptedException e) {
				return;
			}
		}
	}
}
