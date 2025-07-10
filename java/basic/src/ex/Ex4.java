package ex;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Ex4 {
	public static void scoreToGrade(int score) {
		char grade = switch (score / 10) {
			case 10, 9 -> 'A';
			case 8 -> 'B';
			case 7 -> 'C';
			default -> 'F';
		};
		System.out.println(grade);
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		// 1번
		System.out.print("점수 입력 : ");

		int score = Integer.parseInt(br.readLine());

		scoreToGrade(score);

		//2번
		System.out.print("학점을 입력하시오 ->>>>>");
		int point = br.read();
		char p = (char)point;

		String message = switch (point) {
			case 'A', 'B' -> "참 잘했음";
			case 'C', 'D' -> "좀 더 노력해";
			default -> "다음 학기에 다시 만나요";
		};
		System.out.println(message);
	}
}
