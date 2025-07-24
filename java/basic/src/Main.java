import java.util.Arrays;
import java.util.regex.Pattern;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
	public static void main(String[] args) {
		//TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
		int radius = 100;
		Integer[] iarr = new Integer[10];
		iarr[1] = 1;
		iarr[4] = 4;
		// Objects.requireNonNull(iarr[0]);
		System.out.println(Arrays.toString(iarr));
		// to see how IntelliJ IDEA suggests fixing it.
		System.out.printf("Hello and welcome!%n" + radius);

		for (int i = 1; i <= 2; i++) {
			//TIP Press <shortcut actionId="Debug"/> to start debugging your code. We have set one <icon src="AllIcons.Debugger.Db_set_breakpoint"/> breakpoint
			// for you, but you can always add more by pressing <shortcut actionId="ToggleLineBreakpoint"/>.
			System.out.println("i = " + i);

			String url = "https://naver.com/abc=1";
			String domain = url.replaceAll("https?://([^/]+).*", "$1");
			System.out.println("domain = " + domain);
		}
	}
}
