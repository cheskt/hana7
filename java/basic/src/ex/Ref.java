package ex;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Arrays;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Ref extends Parent {
	private String name;
	private boolean isGuest;

	public Ref(int id, String name) {
		super(id);
		this.name = name;
	}

	public int getIdByName(String name) {
		return name.equals(this.name) ? getId() : -1;
	}

	private String getPrivateInfo() {
		return String.format("%d - %s", getId(), this.name);
	}

	public static void main(String[] args) {
		Class<Ref> c = Ref.class;
		System.out.println("c = " + c);

		Ref r = new Ref(1, "Hong");
		Class<? extends Parent> rc = r.getClass();
		System.out.println("rc = " + rc + ", " + rc.isPrimitive());
		System.out.println("rc.getDeclaredFields() = " + Arrays.toString(rc.getDeclaredFields()));

		int m = rc.getModifiers();
		System.out.println("rc.getModifiers() = " + m + '-' + Modifier.toString(m));

		try {
			Class<?> c2 = Class.forName("ex.Ref");
			System.out.println("c2 = " + c2);
		} catch (ClassNotFoundException e) {
			throw new RuntimeException(e);
		}

		// Method[] methods = rc.getMethods();
		Method[] methods = rc.getDeclaredMethods();
		for (Method mt : methods)
			System.out.println("mt = " + mt);

		try {
			Method privateInfo = rc.getDeclaredMethod("getPrivateInfo");
			String info = privateInfo.invoke(r).toString();
			System.out.println("info = " + info);
		} catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
			throw new RuntimeException(e);
		}

		try {
			Method getName = rc.getMethod("getIdByName", String.class);
			int id = (int)getName.invoke(r, "Hong");
			System.out.println("id = " + id);
		} catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
			throw new RuntimeException(e);
		}
	}
}

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
class Parent {
	private int id;
}
