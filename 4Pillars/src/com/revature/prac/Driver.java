package com.revature.prac;

public class Driver {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Fish f = new Fish();
//		f.setFins(50);
//		f.setGils(0);
//		f.setName("Tilapia");
//		f.setSwims(true);
//		f.draw();
//		
//		Salmon s = new Salmon();
//		
//		s.draw();
		
		
		Jellyfish j = new Jellyfish();
		j.setDanglies(30);
		j.setSwims(true);
//	    method hiding
		j.swim();
		j.draw();
		j.squishyFactor('y');
		
		
//virtual method invocation		
		AuquaticAnimals aa1 = new Jellyfish();
		AuquaticAnimals aa2 = new Fish();
		AuquaticAnimals aa3 = new Salmon();
		
		AuquaticAnimals[] arr = new AuquaticAnimals[3];
		arr[0] = aa1;
		arr[1] = aa2;
		arr[2] = aa3;
		
		for(AuquaticAnimals aa: arr) {
			aa.draw();
			System.out.println(aa.getClass());
		}
//equals check
		Jellyfish jFish = new Jellyfish();
		System.out.println(jFish);
		Jellyfish jFish2 = new Jellyfish();
		System.out.println(jFish);
		System.out.println("Using a reference: "+(jFish==jFish2));
		 System.out.println("Using a value: "+(jFish.equals(jFish2)));
	}

}