import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Goods {
	String name;
	int price;
	int stocks;
	int amount;

	public Goods(String name, int price, int stocks, int amount) {
		this.name = name;
		this.price = price;
		this.stocks = stocks;
		this.amount = amount;
	}

	public Goods(String... strs) {
		this(strs[0], Integer.parseInt(strs[1]),
			Integer.parseInt(strs[2]), Integer.parseInt(strs[3]));
	}

	public static void main(String[] args) throws IOException {
		Goods[] goods = new Goods[100];
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int goodsIdx = 0;

		while (true) {
			String line = br.readLine().strip();
			if (line.isBlank())
				break;

			if (line.equals("exit"))
				break;

			String[] data = line.split("\\s+");
			goods[goodsIdx++] = new Goods(data);
		}

		System.out.println("상품명 가격 재고량 판매량");
		for (Goods g : goods) {
			if (g == null)
				break;
			System.out.printf("%4s %,5d %3d %3d%n", g.name, g.price, g.stocks, g.amount);
		}
	}
}
