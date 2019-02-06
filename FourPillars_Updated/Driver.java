package com.revature.models;

public class Driver {
	
	public static void main(String[] args) {
		
	System.out.println("Lion:");
	Lion l = new Lion(5);
	l.draw();
	System.out.println();
	
	//virtual method invocation
	Cat c = new Lion();
	c.makeSound();
	
	Cat c1 = new Cat("Spot");
	Cat c2 = new Cat("Spot");
	
	
	System.out.println("Using reference: " + (c1==c2));
	System.out.println("Using value: " + (c1.equals(c2)));
	
	System.out.println(c1.getHasFur());
	System.out.println(c2.getHasFur());
	}
	

	
	
}