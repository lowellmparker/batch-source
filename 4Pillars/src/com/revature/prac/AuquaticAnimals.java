package com.revature.prac;


//Utilizing abstraction I'm able to implement the method that I set up in the Interface Edible.java
public abstract class AuquaticAnimals implements Ediable {
	
	private boolean swims;
	
	public AuquaticAnimals() {
		super();
	}
	
	public abstract void draw();{
		System.out.println("This Animal is wet");
	}
	
	//Example of encapsulation through the creation of a getter method to retrieve my variable

	public boolean getSwims() {
		return swims;
	}
	
	//Example of encapsulation through the creation of a setter method to alter/change my variable

	public void setSwims(boolean swims) {
		this.swims = swims;
	}
	
	
}
