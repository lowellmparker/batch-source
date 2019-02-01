public class Loops{

    public static void main(String[] args){
        int x = 8;
        String color = "purple";
        System.out.println("Hello World");

        if(x < 10){
            System.out.println(x+" is less than 10");
        }
        else{ System.out.println(x+" is greater than 10");}

        for(int i = 0; i < 4; i++){
            System.out.println("greetings");
        }
        int j = 0;
        while(j < 5){
            System.out.println("greetings");
            j++;
        }

        switch(color){
            case "purple":
                System.out.println("blue + red");
            case "green":
                System.out.println("yellow + blue");
            case "orange":
                System.out.println("yellow + red");
            default:
                System.out.println("no color");
        }


        
    }

}