package com.revature.models;

public class Cat extends Animal {
	
	protected String furPattern;
	
	Cat(){
		this.setNumOfLegs(4);
	}
	
	// method overloading
	Cat(String furPattern){
		this.setHasFur(true);
		this.furPattern = furPattern;
	}

	public String getFurPattern() {
		return furPattern;
	}

	public void setFurPattern(String furPattern) {
		this.furPattern = furPattern;
	}

	@Override
	public void draw() {
		System.out.println("Drawing a cat with "+furPattern+" Fur pattern");
		
	}
	
	
}
