package com.revature.models;

public class Cat extends Animal {
	
	protected String furPattern;
	
	Cat(){
		this.setNumOfLegs(4);
	}
	
	// method overloading
	Cat(String furPattern){
		this.setNumOfLegs(4);
		this.setHasFur(true);
		this.furPattern = furPattern;
	}
	
	// error in Lion when changing this to static causing makeSound method in the Lion subclass to be ignored.
	public static void makeSound() {
		System.out.println("Meow");
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
	
	public boolean equals(Object o) {
		if(o.getClass()!=this.getClass()) {
			return false;
		}
		Cat c = (Cat) o;
		if(c.getNumOfLegs()!=this.getNumOfLegs()) {
			return false;
		}
		if(c.furPattern!=this.furPattern) {
			return false;
		}
		return true;
		
	}
	
	
}