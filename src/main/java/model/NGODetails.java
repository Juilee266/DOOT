package model;
import java.util.List;

public class NGODetails {
	int ngoId;
	String name;
	String username;
	String password;
	List<String> categories;
	String addressL1;
	String addressL2;
	String city;
	String state;
	String pincode;
	String contactNumber;
	String emailId;
	String accountDetails;
	String IFSCCode;
	List<String> cities_in_range;
	String certificate;
	String status;
	String bankAccNo;
	String ifscCode;
	public String getBankAccNo() {
		return bankAccNo;
	}
	public void setBankAccNo(String bankAccNo) {
		this.bankAccNo = bankAccNo;
	}
	public String getIfscCode() {
		return ifscCode;
	}
	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}
	public int getNgoId() {
		return ngoId;
	}
	public void setNgoId(int ngoId) {
		this.ngoId = ngoId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getaccountDetails() {
		return accountDetails;
	}
	public void setaccountDetails(String accountDetails) {
		this.accountDetails = accountDetails;
	}

	public String getIFSCCode() {
		return IFSCCode;
	}
	public void setIFSCCode(String IFSCCode) {
		this.IFSCCode = IFSCCode;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<String> getCategories() {
		return categories;
	}
	public void setCategories(List<String> categories) {
		this.categories = categories;
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
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public List<String> getCities_in_range() {
		return cities_in_range;
	}
	public void setCities_in_range(List<String> cities_in_range) {
		this.cities_in_range = cities_in_range;
	}
	public String getCertificate() {
		return certificate;
	}
	public void setCertificate(String certificate) {
		this.certificate = certificate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
/*
CREATE TABLE ngo_table (
ngoId INTEGER GENERATED ALWAYS AS IDENTITY(START WITH 100, INCREMENT BY 5) PRIMARY KEY NOT NULL ,
name varchar(50) not null,
userName VARCHAR(25) NOT NULL UNIQUE,
Password VARCHAR(25) NOT NULL UNIQUE,
categories VARCHAR(1000),
AddressL1 VARCHAR(100) NOT NULL,
AddressL2 VARCHAR(100),
City VARCHAR(40) NOT NULL,
State VARCHAR(40) NOT NULL,
pinCode VARCHAR(10),
ContactNumber CHAR(10),
EmailId VARCHAR(40),
cities_in_range VARCHAR(1000),
Certificate VARCHAR(40) NOT NULL,
Status VARCHAR(15) DEFAULT 'APPROVED'
);
*/