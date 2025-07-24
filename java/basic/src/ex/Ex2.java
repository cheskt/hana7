package ex;

import java.util.Scanner;

public class Ex2 {
	static final int MIN_HEIGHT = 125;
	static final int MAX_HEIGHT = 165;

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Height? ");
		int height = scanner.nextInt();
		System.out.println(height >= MIN_HEIGHT && height < MAX_HEIGHT);
	}
}
