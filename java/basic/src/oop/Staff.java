package oop;

import java.util.Arrays;

public class Staff extends Person {
	private String school;
	private double pay;

	public Staff(String name, String addr, String school, double pay) {
		super(name, addr);
		this.school = school;
		this.pay = pay;
	}

	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	public double getPay() {
		return pay;
	}

	public void setPay(double pay) {
		this.pay = pay;
	}

	@Override
	public String toString() {
		return "Staff[" +
			super.toString() +
			", school='" + school + '\'' +
			", pay=" + pay +
			']';
	}

	public enum Code {
		OK(200, "OK"),
		Fail(500, "Error");

		private final int code;
		private final String msg;

		private Code(int code, String msg) {
			this.code = code;
			this.msg = msg;
		}

		public boolean isSuccess() {
			return code == 200 || msg.equals("OK");
		}
	}

	public static void main(String[] args) {
		enum Action {입금, 출금, 송금, 조회}
		enum BloodType {A, B, AB, O}
		BloodType[] types = BloodType.values();
		System.out.println("types = " + Arrays.toString(types));
		System.out.println(BloodType.A);
		System.out.println(BloodType.B);
		System.out.println("Action = " + Arrays.toString(Action.values()));

		enum Gender {
			MALE(1, "man"), FEMALE(2, "woman");

			private final int gid;
			private final String msg;

			Gender(int gid, String msg) {
				this.gid = gid;
				this.msg = msg;
			}

			public boolean isMale() {
				return this.gid == 1 || this.msg.equals("man");
			}

			public String scannerText() {
				return this.name() + "(" + this.gid + ")";
			}

			@Override
			public String toString() {
				return "Gender{" +
					"gid=" + gid +
					", msg='" + msg + '\'' +
					'}';
			}
		}

		System.out.println(Arrays.toString(Gender.values()));

		Gender g1 = Gender.MALE;
		System.out.println(g1.isMale());
		System.out.println(g1.scannerText());
		Gender g2 = Gender.valueOf("female");
		System.out.println("g2 = " + g2 + ", " + (g2 == Gender.FEMALE));
	}
}
