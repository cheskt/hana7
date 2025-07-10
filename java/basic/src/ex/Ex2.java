package ex;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Ex2 {
	static final int MIN_CUT = 125;
	static final int MAX_CUT = 165;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		System.out.println("어린이의 신장(cm)를 입력하세요: ");
		int height = Integer.parseInt(br.readLine());

		System.out.println(height >= MIN_CUT && height < MAX_CUT);
	}
}
