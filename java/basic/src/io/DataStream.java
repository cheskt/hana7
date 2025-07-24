package io;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import bank.Account;

public class DataStream {
	public final static Account[] accounts = {
		new Account().insert("1111", "Conan", 30000),
		new Account("2222", "Rose").deposit(10000),
		new Account("3333", "Miran", 20000),
	};

	public static void main(String[] args) throws FileNotFoundException {
		String apiUrl = "https://jsonplaceholder.typicode.com/posts";

		// try (HttpClient client = HttpClient.newBuilder()
		// 	.version(HttpClient.Version.HTTP_2)
		// 	.followRedirects(HttpClient.Redirect.NORMAL).connectTimeout(Duration.ofSeconds(5)).build()) {
		try {
			HttpClient client = HttpClient.newHttpClient();

			HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create(apiUrl))
				.timeout(Duration.ofSeconds(30))
				.header("Accept", "application/json")
				.header("User-Agent", "Java HttpClient")
				.GET()
				.build();

			HttpResponse<String> response = client.send(request,
				HttpResponse.BodyHandlers.ofString());

			System.out.println("상태 코드: " + response.statusCode());
			System.out.println("응답 헤더: " + response.headers().map());
			System.out.println("응답(body): " + response.body());

			// JSON 파싱
			// if (response.statusCode() == 200) {
				ObjectMapper objMapper = new ObjectMapper();
			// 	Post post = objMapper.readValue(response.body(), Post.class);
			// 	System.out.println(post);
			// }
			List<Post> posts = objMapper.readValue(response.body(), new TypeReference<List<Post>>(){});
			System.out.println("posts = " + posts);
		} catch (Exception e) {
			System.err.println("HttpClient 오류: " + e.getMessage());
		}

		// try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("./tmp/accounts.obj"))) {
		// 	oos.writeObject(accounts);
		// } catch (IOException e) {
		// 	throw new RuntimeException(e);
		// }
		//
		// try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("./tmp/accounts.obj"))) {
		// 	Account[] newAccounts = (Account[])ois.readObject();
		// 	System.out.println("newAccounts = " + Arrays.toString(newAccounts));
		// } catch (IOException | ClassNotFoundException e) {
		// 	throw new RuntimeException(e);
		// }

		log("abc", "efg");
		log();
		log("aaa");
	}

	public static void log(String... strs) {
		if (strs.length == 0)
			System.out.println();
		else
			System.out.println("\\033[31m" + Arrays.toString(strs) + "\\033[0m");
	}

	public static void dataStream() {
		Account acc = accounts[0];
		System.out.println("acc = " + acc);

		try (DataOutputStream dos = new DataOutputStream(new FileOutputStream("./tmp/account.dat"))) {
			dos.writeUTF(acc.getAccountNo());
			dos.writeUTF(acc.getName());
			dos.writeInt(acc.getBalance());
		} catch (IOException e) {
			throw new RuntimeException(e);
		}

		try (DataInputStream dis = new DataInputStream(new FileInputStream("./tmp/account.dat"))) {
			Account newer = new Account(dis.readUTF(), dis.readUTF(), dis.readInt());
			System.out.println("newer = " + newer);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
}
