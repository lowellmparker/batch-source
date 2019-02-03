package com.revature.prac;

//Utilizing Inheritiance through extending the class from AuquaticAnimals

public class Jellyfish extends AuquaticAnimals {

	private int danglies;

/*This is an example of my method overloading through the pillar of Polymorphism due to the change of data types 
 in the parameter of the method squishyFactor*/
	public void squishyFactor(int squishyNess) {
		System.out.println("That jelly has aa squish factor of 10");
	}
	
    public void squishyFactor(char squishyNess) {
    	System.out.println("That jelly has aa squish factor of YES");
	}
	
	public Jellyfish() {
		super();
		this.setSwims(true);
	}
	
	
	public Jellyfish (int danglies) {
		this.danglies = danglies;
		this.setSwims(true);
		this.squishyFactor(0);
	}
	
	//Example of encapsulation through the creation of a getter method to retrieve my variable
	public int getDanglies() {
		return danglies;
	}

	//Example of encapsulation through the creation of a setter method to alter/change my variable
	public void setDanglies(int danglies) {
		this.danglies = danglies;
	}

	//Here I use Polymorphism through the usage of method  overriding in my draw()
	public void draw() {
		System.out.println("This awesome Jelly has "+getDanglies()+" and can swim "+this.getSwims()+". All because this fish is edible "+edible());
	}
	@Override
	public boolean edible() {
		// TODO Auto-generated method stub
		return false;
	}

	
	
}
