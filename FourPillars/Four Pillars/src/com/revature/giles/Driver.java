package com.revature.giles;

public class Driver {
	
	public static void main(String[] args) {
		System.out.println("A new fox has been born: ");
		Animals f1 = new Fox("orange", 4);
		System.out.println("The fox takes a drink.");
		f1.drinksWater();
		f1.eats("chicken nugget");
		f1.getHasLegs();
		f1.setHasLegs(true);
//		f1.getNumLegs();
//		f1.setNumLegs(4);
		f1.setHasFur(true);
		System.out.println(f1.toString());
		
		
	}
;
}