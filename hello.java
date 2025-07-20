import java.util.Arrays;
import java.util.function.Function;

class hello1 {

    public static void main(String[] args) throws Exception {
        System.out.println(1);

        System.out.println(2);


        new Thread(() -> {
            try {
                Thread.sleep(4500);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            System.out.println("Hello world1");
        }).start();
        //Thread.sleep(4500);
        new Thread(() -> {
            System.out.println("Hello world2");
        }).start();

        System.out.println(3);

        System.out.println(4);

    }
}