package com.revature.prac;

//Utilizing Inheritiance through extending the class from fish
public class Salmon extends Fish {
	
	public Salmon() {
		this.setGils(0);
		this.setFins(0);
		this.setName("Salmon");
		this.setSwims(false);
		
	}
	
	public boolean edible(){
		return true;
	}
	
	
	//Here I use Polymorphism through the usage of method  overriding in my draw()
	@Override
	public void draw() {
		System.out.println("This awesome fish the name "+name+" abd has "+getGils()+" gils and this many fins "+getFins()+" and can swim "+this.getSwims()+" All because this fish is edible "+edible());
		
	}
	
	@Override
	public boolean equals(Object o) {
		if(o.getClass()!=this.getClass()) {
			return false;
		}
		
		Salmon ss = (Salmon) o;
		if(ss.getSwims()!=this.getSwims()) {
			return false;
		}if(ss.name!=this.name) {
			return false;
		}if(ss.getFins()!=this.getFins()) {
			return false;
		}if(ss.getGils()!=this.getGils()) {
			return false;
		}
		return true;
	}
	
}

