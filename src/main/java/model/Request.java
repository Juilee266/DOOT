package model;

public class Request {
	int requestId;
	String firstName;
	String lName;
	String category;
	String description;
	String addressL1;
	String addressL2;
	String city;
	String state;
	String region;
	String pinCode;
	String contactNumber;
	String typeOfRequest;
	int acceptedBy;
	String status;
	public int getRequestId() {
		return requestId;
	}
	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
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
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
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
	public String getTypeOfRequest() {
		return typeOfRequest;
	}
	public void setTypeOfRequest(String typeOfRequest) {
		this.typeOfRequest = typeOfRequest;
	}
	public int getAcceptedBy() {
		return acceptedBy;
	}
	public void setAcceptedBy(int acceptedBy) {
		this.acceptedBy = acceptedBy;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
/*
 * CREATE TABLE request_table (
requestId INTEGER GENERATED ALWAYS AS IDENTITY(START WITH 1000, INCREMENT BY 3) PRIMARY KEY NOT NULL,
firstName VARCHAR(25) NOT NULL,
lName VARCHAR(25) NOT NULL,
category VARCHAR(25) NOT NULL,
description VARCHAR(500),
addressL1 VARCHAR(100) NOT NULL,
addressL2 VARCHAR(100),
city VARCHAR(40) NOT NULL,
state VARCHAR(40) NOT NULL,
region VARCHAR(40),
pinCode VARCHAR(10),
ContactNumber CHAR(10),
typeOfRequest VARCHAR(25) NOT NULL,
acceptedBy INTEGER,
Status VARCHAR(25) DEFAULT 'PENDING',
FOREIGN KEY (acceptedBy) REFERENCES ngo_table(ngoID)
);
 */
