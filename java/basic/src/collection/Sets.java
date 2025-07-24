package collection;

import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

import oop.Circle;

public class Sets {
	public static void main(String[] args) {
		Set<Integer> set1 = new HashSet<>();
		set1.add(1100);
		set1.add(22);
		set1.add(55);
		set1.add(550);
		System.out.println("set1 = " + set1);

		Set<Integer> set2 = new TreeSet<>();
		set2.add(1100);
		set2.add(22);
		set2.add(55);
		set2.add(550);
		set2.add(999);
		System.out.println("set2 = " + set2);

		Set<Circle> circles = new TreeSet<>();
		circles.add(new Circle(25));
		circles.add(new Circle(15));
		circles.add(new Circle(5));
		circles.add(new Circle(50));
		System.out.println("circles = " + circles);
	}
}
