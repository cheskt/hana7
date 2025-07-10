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
			"school='" + school + '\'' +
			", pay=" + pay +
			']';
	}

	public static void main(String[] args) {
		enum Action {입금, 출금, 송금, 조회}
		enum BloodType {A, B, AB, O}
		BloodType.values();
		System.out.println(BloodType.A);
		System.out.println("Actions" + Arrays.toString(Action.values()));

		enum Gender {
			Male(1, "man"), Female(2, "woman");

			private final int gid;
			private final String msg;

			Gender(int gid, String msg) {
				this.gid = gid;
				this.msg = msg;
			}

			public boolean isMale() {
				return this.gid == 1 || this.msg.equals("male");
			}

			public String scannerText() {
				return this.name();
			}
		}
		System.out.println(Arrays.toString(Gender.values()));

		Gender g1 = Gender.Male;
		System.out.println(g1.isMale());

		Gender g2 = Gender.valueOf("Female");
		System.out.println(g2);
	}
}
