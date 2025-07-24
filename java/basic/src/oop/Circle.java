package oop;

import java.util.Objects;

public class Circle implements Comparable<Circle> {
	private double radius = 1.0;
	private String color = "red";

	public Circle() {
	}

	public Circle(double radius) {
		this.radius = radius;
	}

	public double getRadius() {
		return this.radius;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public double getArea() {
		return radius * radius * Math.PI;
	}

	@Override
	public boolean equals(Object o) {
		if (o == null || getClass() != o.getClass())
			return false;
		Circle circle = (Circle)o;
		// System.identityHashCode()
		return Double.compare(radius, circle.radius) == 0 && Objects.equals(color, circle.color);
	}

	@Override
	public int hashCode() {
		return Objects.hash(radius, color);
	}

	@Override
	public String toString() {
		return "Circle{" +
			"radius=" + radius +
			", color='" + color + '\'' +
			", area='" + getArea() + '\'' +
			'}';
	}

	@Override
	public int compareTo(Circle c) {
		return Double.compare(this.radius, c.radius);
	}

	public static void main(String[] args) {
		Circle circle = new Circle(2);
		System.out.println("circle = " + circle);
	}

}
