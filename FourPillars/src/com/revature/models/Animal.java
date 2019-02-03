package com.revature.models;

public abstract class Animal implements Draw {
	
	private int numOfLegs;
	private boolean hasFur;

	
	Animal(){
		super();
	}

	public int getNumOfLegs() {
		return numOfLegs;
	}

	public void setNumOfLegs(int numOfLegs) {
		this.numOfLegs = numOfLegs;
	}

	public boolean getHasFur() {
		return hasFur;
	}

	public void setHasFur(boolean hasFur) {
		this.hasFur = hasFur;
	}
	
	
}
