package model;

public class Event {

	int ngoId;
	String name;
	String description;
	String startTime;
	String endTime;
	String addressL1;
	String addressL2;
	String city;
	String state;
	String pinCode;
	String contactNumber;
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getNgoId() {
		return ngoId;
	}
	public void setNgoId(int ngoId) {
		this.ngoId = ngoId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime2) {
		 String startTime = ""; 
		 String[] st = startTime2.split("T");
		 startTime  = st[0] + " ,";
		 String[] st2 = st[1].split(":");
		 startTime += st2[0]+ ":" + st2[1];
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime2) {
		 String endTime = ""; 
		 String[] et = endTime2.split("T");
		 endTime  = et[0] + " ,";
		 String[] et2 = et[1].split(":");
		 endTime += et2[0]+ ":" + et2[1];
		this.endTime = endTime;
	}
	public String getAddressL1() {
		return addressL1;
	}
	public void setAddressL1(String addressL1) {
		this.addressL1 = addressL1;
	}
	public String getAddressL2() {
		return addressL2;
	}
	public void setAddressL2(String addressL2) {
		this.addressL2 = addressL2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPinCode() {
		return pinCode;
	}
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	
}
