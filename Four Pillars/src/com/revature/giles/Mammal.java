package com.revature.giles;

public abstract class Mammal extends Animals {
	
	//Instance Variables
	private int numLegs;
	public String noise;
	public String furColor;

	public Mammal() {
		super();
	}
	
	//Mammal Constructor
	public Mammal(int numLegs, String noise, String furColor) {
		super();
		this.numLegs = numLegs;
		this.noise = noise;
		this.furColor = furColor;
	}
	
	//Getter/setter for number of legs	
	public int getNumLegs() {
		return numLegs;
	}
	public void setNumLegs(int numLegs) {
		this.numLegs = numLegs;
	}
	
	public String getNoise() {
		return noise;
	}
	public void setNoise(String noise) {
		this.noise = noise;
	}
	
	public String furColor() {
		return furColor;
	}
	public void furColor(String furColor) {
	}
	
	public static void drinksWater() {
		System.out.println("Takes a drink");
	}
	
	
	public boolean equals (Object o) {
		Mammal a1 = (Mammal) o;
		if(o.getClass() != this.getClass()) {
			return false;
		}
		if(this.noise != a1.getNoise()) {
			return false;
		}
		if(this.furColor != a1.furColor()) {
			return false;
		}
		if(o.getClass() != this.getClass()) {
			return false;
		}
		else return true;
	}
}