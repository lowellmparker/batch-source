

public abstract class Animals implements livingOrganism {
	private boolean hasFur;
	private boolean hasLegs;
	
	
	}
	public void makeNoise() {
		System.out.println("Makes Noise");
	}
	
	public void eats(String food) {
		System.out.println("Eats Something");
	}
	
	//Getter
	public boolean getHasLegs() {
		return hasLegs;
	//setter for hasLegs
	}
	public void setHasLegs(boolean hasLegs) {
		this.hasLegs = hasLegs;
		if (hasLegs == true) {
			
		}
	}
	
	//Getter for hasFur
	public boolean getHasFur() {
		return hasFur;
	//setter for hasFUR
	}
	public void setHasFur(boolean hasFur) {
		this.hasFur = hasFur;
	}
	
	public String toString() {
		return "Animal: hasLegs = "+hasLegs+", hasFur = "+hasFur;
	}
	
	public boolean equals (Object o) {
		Animals a1 = (Animals) o;
		If(o.getClass() != this.getClass()) {
			return false;
		}
		
		If(this.hasFur != a1.gethasFur()) {
			return false;
		}
		
		If(this.hasLegs != a1.getHasLegs()) {
			return false;
		}
//going to attempt to override in Fox class
		public static int drinksWater(int counter) {
			counter++;
		}
}



	
