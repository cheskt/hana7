package ex;

import java.util.Scanner;

public class Ex1 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("name: ");
		String name = scanner.next();
		System.out.print("addr=");
		scanner.nextLine();
		String addr = scanner.nextLine();
		System.out.print("age=");
		short age = scanner.nextShort();
		System.out.print("height=");
		float height = scanner.nextFloat();

		System.out.println("""
			<html>
			  <body></body>
			</html>""");

		System.out.printf("""
			Your profile:
			 - name: %s
			 - addr: %s
			 - age: %d""", name, addr, age);
	}
}
