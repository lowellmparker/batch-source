public class Loops {
    public static void main(String[] args) {
        System.out.println("Hello World");

        int x = 5;
        int greetingCount = 0;
        int greetingCount2 = 0;
        String color = "green";

        if (x > 10) {
            System.out.println("x is greater then 10");
        } else {
            System.out.println("x is equal to or less then 10");
        }

        for (int i = 0; i < 4; i++) {
            System.out.println("greetings");
        }

        while (greetingCount++ <= 4) {
            System.out.println("greetings");
        }

        do {
            greetingCount2++;
            System.out.println("greetings");
        } while (greetingCount2 < 4);

        switch (color) {
        case "green":
        System.out.println("blue and yellow make green");
            break;
        case "purple":
        System.out.println("red and blue make purple");
            break;
        case "orange":
        System.out.println("yellow and red make orange");
            break;
        default:
        System.out.println("color is unkown");
            break;
        }
    }
}