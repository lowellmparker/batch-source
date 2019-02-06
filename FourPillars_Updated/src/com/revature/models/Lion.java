package com.revature.models;

public class Lion extends Cat {
	

	private int tailLength;
	
	Lion(){
		super();
	}
	
	Lion(int tailLength){
		this.tailLength = tailLength;
	}
	
	public static void makeSound() {
		System.out.println("Raawr im a lion.");
	}
	
	public String getFurPattern() {
		return furPattern;
	}
	
	//Override from parent class

	public void setFurPattern(String furPattern) {
		if(this.furPattern == "none")
		this.furPattern = furPattern;
	}
	

	public int getTailLength() {
		return tailLength;
	}

	public void setTailLength(int tailLength) {
		this.tailLength = tailLength;
	}
	
	public void draw() {
		System.out.println("Drawing a Lion with tail Length of "+tailLength+" and fur pattern of"+furPattern);
	}

}