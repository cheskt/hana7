package ex;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Ex3 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		//1번
		System.out.println("인원 수를 입력하시오");
		int fam = Integer.parseInt(br.readLine());

		int mon = 400000;
		int disMon = 200000;

		if (fam > 4) {
			mon = 1000000;
		} else {
			mon = (fam - 1) * disMon + mon;
		}

		System.out.printf("%,d원 지원%n", mon);

		//2번
		System.out.println("전기 사용량을 입력하세요 ->>>");
		double[] mon1 = {99.3, 187.9, 280.6};
		int[] mon2 = {910, 1600, 7300};

		double elec = Double.parseDouble(br.readLine());
		int var;

		if (elec <= 200) {
			var = 0;
		} else if (elec <= 400) {
			var = 1;
		} else {
			var = 2;
		}
		System.out.printf("""
			사용량: %.1f kmh
			기본요금 : %d 원
			단가: %.1f 원
			전기 요금: %.1f 원""", elec, mon2[var], mon1[var], mon1[var] * elec + mon2[var]);
	}
}
