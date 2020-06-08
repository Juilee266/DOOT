package application.rest.v1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import model.Request;

@RestController
@RequestMapping(value="/RegisterRequest",method= {RequestMethod.POST,RequestMethod.GET})
public class UserCreateRequestController {

	@Autowired
	JdbcTemplate jdbcTemplate;
	@RequestMapping(value="/insertRequest",method=RequestMethod.POST)
	public Integer createRequest(@RequestBody Request req)
	                                                throws Exception {
	 
		jdbcTemplate.update(
				"insert into Request_table (firstName,lName,category,description,addressL1,addressL2,city,state,region,pinCode,\r\n" + 
						"ContactNumber,typeOfRequest) values('"+ req.getFirstName()+"',"+
						"'" + req.getlName()+"',"+
						 "'" + req.getCategory()+"',"+
						 "'" + req.getDescription()+"',"+
						 "'" + req.getAddressL1()+"',"+
						 "'" + req.getAddressL2()+"',"+
						 "'" + req.getCity()+"',"+
						 "'" + req.getState()+"',"+
						 "'" + req.getRegion()+"',"+
						 "'" + req.getPinCode()+"',"+
						 "'" + req.getContactNumber()+"',"+
						"'"+req.getTypeOfRequest()+"')");
		
		String sql="SELECT max(requestId) from Request_table";
		Integer res = jdbcTemplate.queryForObject(sql, Integer.class);
	
		//sendSms("9689897023", req.getFirstName(), ""+res);
		
		return res;
	}
		
	public static String sendSms(String mobile, String name, String token)
	{
	try {
	// Construct data
	String apiKey = "apikey=" + "4aryHV13lug-7Z8UdSjAJjwJ7OKyc8bCBhCeebGvEt";
	String message = "&message=" + "Hi "+ name +", DOOT token for your request is: " + token + ".";
	String sender = "&sender=" + "TXTLCL";
	String numbers = "&numbers=" + mobile;

	// Send data
	HttpURLConnection conn = (HttpURLConnection) new URL("https://api.textlocal.in/send/?").openConnection();
	String data = apiKey + numbers + message + sender;
	conn.setDoOutput(true);
	conn.setRequestMethod("POST");
	conn.setRequestProperty("Content-Length", Integer.toString(data.length()));
	conn.getOutputStream().write(data.getBytes("UTF-8"));
	final BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	final StringBuffer stringBuffer = new StringBuffer();
	String line;
	while ((line = rd.readLine()) != null) {
	stringBuffer.append(line);
	}
	rd.close();

	return stringBuffer.toString();
	//return emp.toString();
	} catch (Exception e) {
	System.out.println("Error SMS "+e);
	return "Error "+e;
	}

	}


	
}
