package oop;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.IntStream;

@FunctionalInterface
interface InterFace {
	void print(String k);
}

interface MakeIntArray {
	int[] make(int len);
}

// setTimeout( (a) -> console.log(a), 1000);
// setTimeout( console.log, 1000)
class Outer {
	// InterFace inter = k -> System.out.println(k);
	InterFace inter = System.out::println;

	// MakeIntArray mia = (len) -> new int[len];
	MakeIntArray mia = int[]::new;

	void print() {
		inter.print("K");
	}
}

interface MyPredicate<T> {
	boolean test(T t);
}

interface MyFunction<T, R> {
	R apply(T t);
}

interface MyReducer<T, R> {
	R reduce(R a, T e);
}

public class Inners {
	static List<Integer> filter(List<Integer> list, MyPredicate<Integer> predicate) {
		List<Integer> results = new ArrayList<>();
		for (Integer i : list) {
			if (predicate.test(i))
				results.add(i);
		}
		return results;
	}

	static List<Integer> map(List<Integer> list, MyFunction<Integer, Integer> function) {
		List<Integer> results = new ArrayList<>();
		for (Integer i : list)
			results.add(function.apply(i));
		return results;
	}

	static Integer find(List<Integer> list, MyPredicate<Integer> predicate) {
		for (int i : list) {
			if (predicate.test(i)) {
				return i;
			}
		}

		return 0;
	}

	static Integer reducer(List<Integer> list, int initValue, MyReducer<Integer, Integer> reducer) {
		int result = initValue;
		for (Integer i : list)
			result = reducer.reduce(result, i);

		return result;
	}

	public static void main(String[] args) {
		Outer o = new Outer();
		o.print();

		Comparator<String> cpLen = Comparator.comparingInt(String::length);

		// Comparator<String> cpToInt = (o1, o2) -> Integer.parseInt(o1) - Integer.parseInt(o2);
		Comparator<String> cpToInt = Comparator.comparingInt(Integer::parseInt);

		String[] strs = {"1", "002", "03"};
		Arrays.sort(strs, cpLen);
		System.out.println("strs = " + Arrays.toString(strs));

		IntStream range1 = IntStream.range(1, 6); // [1,2,3,4,5]
		IntStream range2 = IntStream.rangeClosed(1, 5); // [1,2,3,4,5]

		Arrays.sort(strs, cpToInt);
		System.out.println("strs = " + Arrays.toString(strs));

		List<Integer> numbers = List.of(6, 1, 2, 3, 4, 5);
		// List<Integer> evens = filter(numbers, value -> value % 2 == 0);
		// System.out.println("evens = " + evens);
		List<Integer> squares = map(numbers, value -> value * value);
		System.out.println("squares = " + squares);
		Integer bigger3 = find(numbers, value -> value > 3);
		System.out.println("bigger3 = " + bigger3);
		int sum = reducer(numbers, 0, Integer::sum);
		System.out.println("sum = " + sum);

		numbers.stream()
			.takeWhile(n -> n < 5)
			.peek(n -> System.out.print("before: " + n + ", "))
			.map(n -> n * n)
			.peek(n -> System.out.print("after: " + n + ", "))
			.limit(5)
			.forEach(n -> System.out.println("최종값: " + n));
	}
}
