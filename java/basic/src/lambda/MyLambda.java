package lambda;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@FunctionalInterface
interface MyPredicate<T> {
	boolean test(T t);
}

@FunctionalInterface
interface MyFunction<T, R> {
	R apply(T t);
}

@FunctionalInterface
interface MyReducer<E, R> {
	R reduce(R acc, E e);
}

public class MyLambda {
	static List<Integer> filter(List<Integer> list, MyPredicate<Integer> predicate) {
		List<Integer> results = new ArrayList<>();
		for (int e : list) {
			if (predicate.test(e))
				results.add(e);
		}

		return results;
	}

	static List<Integer> map(List<Integer> list, MyFunction<Integer, Integer> function) {
		List<Integer> results = new ArrayList<>();
		for (int e : list)
			results.add(function.apply(e));

		return results;
	}

	static Integer find(List<Integer> list, MyPredicate<Integer> predicate) {
		for (int e : list) {
			if (predicate.test(e))
				return e;
		}

		return -1;
	}

	static Integer reducer(List<Integer> list, Integer initValue, MyReducer<Integer, Integer> reducer) {
		Integer result = initValue;
		for (Integer e : list) {
			result = reducer.reduce(result, e);
		}

		return result;
	}

	public static void main(String[] args) {
		List<Integer> numbers = List.of(1, 2, 3, 4, 5);
		List<Integer> evens = filter(numbers, value -> value % 2 == 0);

		System.out.println("evens = " + evens);
		List<Integer> squares = map(numbers, value -> value * value);
		System.out.println("squares = " + squares);
		Integer bigger3 = find(numbers, value -> value > 3);
		System.out.println("bigger3 = " + bigger3);

		int sum = reducer(numbers, 0, Integer::sum);
		int sum2 = reducer(numbers, 1, Integer::sum);
		System.out.println("sum = " + sum + ", " + sum2);

		List<Integer> list = List.of(1, 10, 6, 3, 3, 5, 4, 2, 7, 7, 9, 8, 10);
		System.out.println("짝수의 개수");
		Stream<Integer> istream = list.stream().filter(n -> n % 2 == 0);
		System.out.println("istream.count() = " + istream.count());
		System.out.println("각 숫자를 제곱");
		List<Integer> list1 = list.stream().map(n -> n * n).toList();
		System.out.println("list1 = " + list1);
		System.out.println("중복 제거");
		list = list.stream().distinct().toList();
		System.out.println("list = " + list);
		System.out.println("기본 정렬");
		System.out.println("list.stream().sorted().toList() = " + list.stream().sorted().toList());
		list = list.stream().sorted().toList();
		System.out.println("역순(내림차순) 정렬");
		// list = list.stream().sorted(Comparator.reverseOrder()).toList();
		System.out.println("list = " + list);
		System.out.println("처음 5개만 출력");
		System.out.println("list.stream().limit(5).toList() = " + list.stream().limit(5).toList());
		System.out.println("처음 5개 건너뛰고 출력");
		System.out.println("list.stream().skip(5).toList() = " + list.stream().skip(5).toList());
		System.out.println("값이 5보다 큰 것만 출력");
		System.out.println(
			"list.stream().takeWhile(n -> n > 5).toList() = " + list.stream().dropWhile(n -> n <= 5).toList());
		System.out.println("1~10의 합계");
		IntStream is = IntStream.rangeClosed(1, 10);
		System.out.println("is.sum() = " + is.sum());
		System.out.println(
			"list.stream().mapToInt(n -> n.intValue()).sum() = " + list.stream().mapToInt(Integer::intValue).sum());
		System.out.println("random 5개의 평균");
		System.out.println(
			"Stream.generate(Math::random).limit(5).mapToDouble(Double::doubleValue).average() = " + Stream.generate(
				Math::random).limit(5).mapToDouble(Double::doubleValue).average());

		Optional<Integer> f5 = list.stream().filter(n -> n > 50).findFirst();
		// if (f5.isPresent())
		System.out.println("f5 = " + f5 + ", " + f5.isEmpty());

		list.stream().filter(n -> n > 5).findFirst().ifPresent(n -> System.out.println("findFirst=" + n));

		OptionalInt max = list.stream().mapToInt(Integer::intValue).max();
		max.ifPresent(System.out::println);
		Integer iMin = list.stream().min(Integer::compareTo).orElse(-1);
		System.out.println("iMin = " + iMin);
	}
}
