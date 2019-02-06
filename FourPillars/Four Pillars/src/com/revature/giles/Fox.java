package com.revature.giles;

public class Fox extends Mammal {

	//I want to make it that if hasLegs == true THEN numLegs = 4


		public Fox(){
			super();	
		}
	    //overriding
		public void makeNoise() {
			System.out.println("Ring-ding-ding-ding-ding-dingading");
		}
		
		
		//overloading
		public Fox(String furColor, int numLegs) {
			this.furColor = furColor;
			makeNoise();
		}
		
		
		public String getFurColor() {
			return furColor;
		}
		//cant override static method
		public static void drinksWater() {
			System.out.println("Ahhhhhhh");
		}

		public boolean equals (Object o) {
			Fox a1 = (Fox) o;
			if(o.getClass() != this.getClass()) {
				return false;
			}
			if(this.furColor() != a1.furColor()) {
				return false;
			}
			return true;
		}
	}
