public class Customer {

    private String fName;
    private String lName;
    private int age;

    private static boolean hasMoney = true;

    Customer() {
        fName = "Kelby";
        lName = "Behounek";
        age = 27;
    }

    Customer(String fName, String lName, int age, boolean hasMoney) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    
    }

    public static void main(String[] args) {
        Customer c = new Customer("kevin", "tran", 24, true);
        System.out.println(c.toString());

        Customer c2 = new Customer();
        c2.setFName("Andrew");
        c2.setLName("Ha");
        c2.setAge(101);
        c2.setMoney(true);
        System.out.println(c2.toString());
    }

    public String toString() {
        return "Customers name is " + fName + " " + lName + ", he is " + age + " so he can have alcohol.";
    }

    public String getFName() {
        return fName;
    }

    public String getLname() {
        return lName;
    }
    public static boolean getMoney() {
        return hasMoney;
    }

    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        if(age<100 && age>0){
           this.age = age; 
        } else {
            System.out.println("Age is not valid");
        }
    }
    public void setFName(String fname) {
        this.fName = fname;
    }
    public void setLName(String lname) {
        this.lName = lname;
    }

    public void setMoney(boolean hasMoney){
        this.hasMoney = hasMoney;
    }

}