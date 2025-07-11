package oopex;

public class ShapeMain {
	public static void main(String[] args) {
		long startTimeMs = System.currentTimeMillis();
		long startTime = System.nanoTime();
		Circle circle = new Circle(3);
		Circle circle1 = new Circle(3);
		System.out.println(circle.equals(circle1));
		ResizableCircle resizableCircle = new ResizableCircle(7);
		AppShape<Circle> ac = new AppShape<>(circle);
		System.out.println(System.currentTimeMillis() - startTimeMs);
		System.out.println(System.nanoTime() - startTime);

		System.out.println(System.getenv());

		// AppShape.safeResize(circle, 10);
		AppShape.safeResize(resizableCircle, 10);
		// AppShape.safeResize2(circle, 10);
		AppShape.safeResize2(resizableCircle, 10);

		AppShape<?>[] shapes = {
			new AppShape<>(circle),
			new AppShape<>(new Rectangle(3, 4)),
			new AppShape<>(resizableCircle),
			new AppShape<>(new ResizableRectangle(7, 8)),
			new AppShape<>(new Triangle(4, 3))
		};

		for (AppShape<?> shape : shapes) {
			shape.print();
			try {
				shape.resize(10);
			} catch (IllegalStateException e) {
				System.err.println(e.getMessage());
			}
		}
	}
}
