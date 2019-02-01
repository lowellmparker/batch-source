public class Helper{
    public static void main(String[] args) {
        printNums();
        printUpToVal();
        printString("hello", 5);
    }

    public static void printNums(){
        for(int i = 1; i<=10; i++){
            System.out.println(i);
        }
    }

    public static void printUpToVal() {
        int y = 0;
        while(y++<5){
            System.out.println(y);
        }
    }

    public static void printString(String val, int num) {
      for(int i = 0; i<num; i++){
           System.out.print(val);
      }
    }
}