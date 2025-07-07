import java.util.Scanner;

public class Ex1 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("당신의 이름을 입력하세요 ->>>>");
		String name = sc.next();

		System.out.print("당신의 주소 입력하세요 ->>>>");
		sc.nextLine();
		String address = sc.nextLine();

		System.out.print("당신의 나이를 입력하세요 ->>>>");
		int age = sc.nextInt();

		System.out.print("당신의 키(cm)를 입력하세요 ->>>>");
		double height = sc.nextDouble();

		System.out.printf("""
			- name: %s,
			- address: %s,
			- age: %d,
			- height: %.1f""", name, address, age, height);
	}
}
