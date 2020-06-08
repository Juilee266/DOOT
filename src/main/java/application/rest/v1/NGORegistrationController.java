	package application.rest.v1;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.HttpHeaders;
	import org.springframework.http.HttpStatus;
	import org.springframework.http.ResponseEntity;
	import org.springframework.jdbc.core.JdbcTemplate;
	import org.springframework.web.bind.annotation.*;
	import model.NGODetails;


	///import com.ibm.db2.cmx.internal.json4j.JSONObject;

	@RestController
	@RequestMapping(value="/RegisterNGO",method= {RequestMethod.POST,RequestMethod.GET})
	public class NGORegistrationController {

		@Autowired
		JdbcTemplate jdbcTemplate;
		@RequestMapping(value="/insertNGO",method=RequestMethod.POST)
		public int createOrUpdateEmployee(@RequestBody NGODetails ngo)
		                                                throws Exception {
		    String categories=ngo.getCategories().toString();
		    System.out.println(categories);
		   	String catstr = "";
		    categories = categories.replace("[","");
		    categories = categories.replace("]","");
		    String[] cat = categories.split(",");
		    catstr = catstr + "''"+cat[0]+"''";
		    for(int i=1;i<cat.length;i++)
		    {
		    	catstr += ",''"+cat[i]+"''";
		    }
		
		    String certificate="Certificate.pdf";
		    
		    String citystr = "";
		    String cities=ngo.getCities_in_range().toString();
		    System.out.println(cities);
		    cities = cities.replace("[","");
		    cities = cities.replace("]","");
		    String[] city = cities.split(",");
		    citystr = citystr + "''"+city[0]+"''";
		    for(int i=1;i<city.length;i++)
		    {
		    	citystr += ",''"+city[i]+"''";
		    }

		    String query="insert into ngo_table(name,username,password,categories,addressl1,addressl2,city,state,pincode,contactNumber,emailid,cities_in_range,certificate,bank_acc_no,ifsc_code) "
					+ "values('" + ngo.getName()+"',"+
					"'" + ngo.getUsername()+"',"+
					 "'" + ngo.getPassword()+"',"+
					 "'" + catstr+"',"+
					 "'" + ngo.getAddressL1()+"',"+
					 "'" + ngo.getAddressL2()+"',"+
					 "'" + ngo.getCity()+"',"+
					 "'" + ngo.getState()+"',"+
					 "'" + ngo.getPincode()+"',"+
					 "'" + ngo.getContactNumber()+"',"+
					"'"+ngo.getEmailId()+"',"+
					 "'"+citystr+"',"+
					"'"+certificate+"',"+
					"'"+ngo.getBankAccNo()+"',"+
					"'"+ngo.getIfscCode()+"')";
			jdbcTemplate.update(query);
					System.out.println(query);

		    
			String sql=String.format("SELECT ngoId FROM ngo_table WHERE username='%s' and password='%s'",ngo.getUsername(),ngo.getPassword());
			
			int ngoId = (int) jdbcTemplate.queryForObject(
			            sql, new Object[] { }, Integer.class);
			System.out.println(ngoId);
			return ngoId;
		}
			
		@RequestMapping(value="/getNGO",method=RequestMethod.POST)
		public ResponseEntity<NGODetails> getData(@RequestBody NGODetails ngo)
		                                                throws Exception {
			return new ResponseEntity<NGODetails>(ngo, new HttpHeaders(), HttpStatus.OK);
		}
		
			
	

}
