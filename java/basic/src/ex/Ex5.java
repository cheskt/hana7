package ex;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Ex5 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		System.out.print("구구단의 시작단 입력 ->>>> ");
		int start = Integer.parseInt(br.readLine());

		System.out.print("구구단의 끝단 입력 ->>>> ");
		int end = Integer.parseInt(br.readLine());

		if (start <= end) {
			for (int i = 11; i < 20; i++) {
				for (int j = start; j <= end; j++) {
					System.out.printf("%d * %d = %3d  ", j, i, i * j);
				}
				System.out.println();
			}
		} else {
			for (int i = 11; i < 20; i++) {
				for (int j = start; j >= end; j--) {
					System.out.printf("%d * %d = %3d  ", j, i, i * j);
				}
				System.out.println();
			}
		}
	}
}
