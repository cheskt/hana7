import java.util.Scanner;

public class Account {
	int accountNo;
	String name;
	double balance;
	static int staticValue = 0;

	public Account(int accountNo, String name, double balance) {
		this.insert(accountNo, name, balance);
	}

	static void printStatic() {
		System.out.println("printStatic>>" + Account.staticValue);
	}

	void insert(int accountNo, String name, double amt) {
		this.accountNo = accountNo;
		this.name = name;
		balance = amt;
	}

	void deposit(double amt) {
		this.action(amt);
	}

	void withdraw(double amt) {
		if (amt > this.balance) {
			System.out.println("잔액이 부족합니다!" + Account.staticValue);
			return;
		}

		this.action(-amt);
	}

	private void action(double amt) {
		this.balance += amt;
		this.checkBalance();
	}

	private void checkBalance() {
		System.out.printf("%s님의 잔액은 %,9.1f원 입니다.%n", this.name, this.balance);
	}

	void display() {
		System.out.println(this);
	}
	
	@Override
	public String toString() {
		return "Account{" +
			"accountNo=" + accountNo +
			", name='" + name + '\'' +
			", balance=" + balance +
			'}';
	}

	public static void main(String[] args) {
		Account.printStatic();
		Account account = new Account(1111, "코난", 10000);

		Scanner scanner = new Scanner(System.in);
		while (true) {
			System.out.print("+: 입금, -: 출금, Q/Enter: 종료> ");
			String action = scanner.next();
			if (action.isBlank() || "Q".equalsIgnoreCase(action)) {
				System.out.println("작업이 완료되었습니다.");
				account.display();
				break;
			}

			boolean isDeposit = "+".equals(action);
			String actionText = isDeposit ? "입금" : "출금";
			System.out.print("얼마를 " + actionText + "하시겠어요? " + Account.staticValue);

			double amt = scanner.nextDouble();

			if (isDeposit) {
				account.deposit(amt);
			} else {
				account.withdraw(amt);
			}
		}

	}
}
