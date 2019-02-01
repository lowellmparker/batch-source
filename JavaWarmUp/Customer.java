public class Customer{
    private int age;
    private String hobby;
    private boolean boughtItem;
    static int sales;
   
    public String toString(){
        return ("Customer is "+age+" years old likes "+hobby+", Bought Item? "+boughtItem+".");
    }

    public static void main(String args[]){
            
        Customer c = new Customer();
        System.out.println(c.toString());
         
    }

    Customer(){
        age = 18;
        hobby = "gaming";
        boughtItem = true;
        sales++;
    }

    Customer(int age, String hobby){
        this.hobby = hobby;
        this.age = age;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

    public String getHobby(){
        return hobby;
    }

    public void setHobby(String hobby){
        this.hobby = hobby;
    }

    public boolean boughtItem(){
        return boughtItem;
    }

    public void boughtItem(boolean boughtItem){
        this.boughtItem = boughtItem;
    }


}