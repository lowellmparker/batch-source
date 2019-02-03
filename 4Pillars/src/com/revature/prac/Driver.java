package com.revature.prac;

public class Driver {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Fish f = new Fish();
		f.setFins(50);
		f.setGils(0);
		f.setName("Tilapia");
		f.setSwims(true);
		f.draw();
		
		Salmon s = new Salmon();
		
		s.draw();
		
		
		Jellyfish j = new Jellyfish();
		j.setDanglies(30);
		j.setSwims(true);
		j.draw();
		j.squishyFactor('y');
	}

}