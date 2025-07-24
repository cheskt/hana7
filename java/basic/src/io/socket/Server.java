package io.socket;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

public class Server {
	public static final int PORT = 9999;

	public static void main(String[] args) throws IOException {
		try (ServerSocket server = new ServerSocket(PORT)) {
			Socket client = server.accept();
			System.out.println("client = " + client);
			DataInputStream in = new DataInputStream(client.getInputStream());
			DataOutputStream out = new DataOutputStream(client.getOutputStream());

			while(true) {
				String msg = in.readUTF();
				System.out.println("client: " + msg);

				if (msg.equalsIgnoreCase("q")) {
					out.writeUTF("Bye~~");
					break;
				} else {
					out.writeUTF(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss a")) + ">> " + msg);
				}
			}

			in.close();
			out.close();
		} catch (Exception e) {
			System.out.println("Server down!!");
		}

		log("aaa", "bbb");
	}

	public static void log(String... msgs) {
		System.out.println(Arrays.toString(msgs));
	}
}
