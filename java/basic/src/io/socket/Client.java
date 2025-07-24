package io.socket;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Scanner;

public class Client {
	public static final int PORT = 9999;
	public static void main(String[] args) {
		try (Socket socket = new Socket("localhost", PORT)) {
			DataInputStream in = new DataInputStream(socket.getInputStream());
			DataOutputStream out = new DataOutputStream(socket.getOutputStream());

			Scanner scanner = new Scanner(System.in);
			while(true) {
				String msg = scanner.nextLine();
				out.writeUTF(msg);
				System.out.println(in.readUTF());

				if (msg.equalsIgnoreCase("q")) {
					break;
				}
			}

			in.close();
			out.close();
		} catch (IOException e) {
			System.out.println("서버와 연결이 종료되었습니다.");
		}
	}
}
