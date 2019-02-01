public class Helper{
    public static void main(String args[]){
        Helper h = new Helper();
        printNums();
        printRange(2, 8);
        printUpToVal(5);
        printString("hello", 5);
    }
    
    public static void printNums(){
        for(int i = 0; i <= 10; i++){
            System.out.println(i);
        }
    }

    public static void printRange(int x, int y){
        for(int j = x; j <= y; j++){
            System.out.println(j);
        }
    }

    public static void printUpToVal(int x){
        for(int i = 1; i <= x; i++){
            System.out.println(i);
        }
    }
    public static String cat ="";

    public static void printString(String x, int y){
        
        for(int i = 0; i < y; i++){
        cat += x;
        }

        System.out.println(cat);
    }


    
}

