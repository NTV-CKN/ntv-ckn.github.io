import java.util.Arrays;
import java.util.function.Function;

class hello1 {

    public static void main(String[] args) {
        System.out.println("Call " + tmp());
        System.out.println("Call2 " + (100 - tmp2()));
        System.out.println(1100 +"Call2");
        Function<Integer, String> convert = number -> {return "NUmber is: " + number; };
        System.out.println(convert.apply(2));

    }

    private static String tmp() {
        System.out.println("Call inner 1");
        return "End";
    }

    private static int tmp2() {
        System.out.println("Call inner 2");
        return 2;
    }
}