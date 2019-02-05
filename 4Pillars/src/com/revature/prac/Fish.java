package com.revature.prac;

//Utilizing Inheritiance through extending the class from AuquaticAnimals
public class Fish extends AuquaticAnimals {
	
	public String name = "Yummy Fish";
	private int gils;
	private int fins;
	
	public Fish() {
		this.setSwims(true);
	}
	
	public Fish(int gils, int fins, String name){
		this.gils = gils;
		this.fins = fins;
		this.name = name;
		this.setSwims(true);
	}

	//Example of encapsulation through the creation of a getter method to retrieve my variable
	public String getName() {
		return name;
	}
	//Example of encapsulation through the creation of a setter method to alter/change my variable
	public void setName(String name) {
		this.name = name;
	}
	//Example of encapsulation through the creation of a getter method to retrieve my variable
	public int getFins() {
		return fins;
	}
	//Example of encapsulation through the creation of a setter method to alter/change my variable
	public void setFins(int fins) {
		this.fins = fins;
	}
	//Example of encapsulation through the creation of a getter method to retrieve my variable
	public int getGils() {
		return gils;
	}
	//Example of encapsulation through the creation of a setter method to alter/change my variable
	public void setGils(int gils) {
		this.gils = gils;
	}

	@Override
	public boolean edible() {
		// TODO Auto-generated method stub
		return false;
	}
	
	//Here I use Polymorphism through the usage of method  overriding in my draw()

	@Override
	public void draw() {
		System.out.println("This fish "+name+" has "+gils+" gils and this many fins "+fins+" and can swim "+this.getSwims());
		
	}
	
	@Override
	
	public boolean equals(Object o) {
		if(o.getClass()!=this.getClass()) {
			return false;
		}
		
		Fish ff = (Fish) o;
		if(ff.getSwims()!=this.getSwims()) {
			return false;
		}if(ff.name!=this.name) {
			return false;
		}if(ff.fins!=this.fins) {
			return false;
		}if(ff.gils!=this.gils) {
			return false;
		}
		return true;
	}

}
