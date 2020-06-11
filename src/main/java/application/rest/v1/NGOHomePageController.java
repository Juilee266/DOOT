package application.rest.v1;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import model.Event;
import model.Event2;
import model.NGODetails;
import model.Request;
import okhttp3.internal.http.HttpHeaders;

@RestController
@RequestMapping(value = "/NGOHome", method = { RequestMethod.GET, RequestMethod.POST })
public class NGOHomePageController {

	@Autowired
	JdbcTemplate jdbcTemplate;
	@RequestMapping(value = "/signIn", method = RequestMethod.GET)
	public ResponseEntity<RequestForNGO> getTablesForNGO(@RequestParam("username") String user,@RequestParam("password") String pass, HttpServletRequest request) {

		RequestForNGO reqNGO = new RequestForNGO();
		List<ArrayList<Request>> list=new ArrayList<ArrayList<Request>>();
		int ngoId = 0;
		String cities = null ;
		String categories = null;
		String ngoName=null;
		String query = 
	            "select ngoId,cities_in_range,categories from ngo_table where username='"+user+"' and password='"+pass+"'";
		List<Map<String,Object>> res = jdbcTemplate.queryForList(query);
		for (Map m : res){
				ngoId = (int) m.get("ngoId");
			   cities = (String) m.get("cities_in_range");
			   categories = (String) m.get("categories");
			   ngoName=(String)m.get("name");
			} 
		System.out.println(ngoId);
		reqNGO.setNgoId(ngoId);
		reqNGO.setngoName(ngoName);
		System.out.println(cities+"\n"+categories);
		
		//cities = "'pune','mumbai'";
		//categories= "'food','shelter'";
		
		
        String sqlSelect = "SELECT * FROM request_table where city in ("+cities+") and category in ("+categories+") and status='PENDING'";
        System.out.println(sqlSelect);
        List<Request> listPending = jdbcTemplate.query(sqlSelect, new RequestRowMapper());
        list.add((ArrayList<Request>) listPending);
        sqlSelect = "SELECT * FROM request_table where acceptedBy = "+ngoId;
        System.out.println(sqlSelect);
        List<Request> listAccepted = jdbcTemplate.query(sqlSelect, new RequestRowMapper());
        list.add((ArrayList<Request>) listAccepted);
        reqNGO.setList(list);
		
        return new ResponseEntity<RequestForNGO>(reqNGO, HttpStatus.OK);

	}
	
	@RequestMapping(value = "/accept", method = RequestMethod.GET)
	public String acceptRequest(@RequestParam("tokenId") String token,@RequestParam("ngoId") String ngoId, HttpServletRequest request)
	{
		jdbcTemplate.update("update request_table set status='IN PROGRESS',acceptedBy ="+ngoId+" where requestId ="+token);
		return "SUCCESS";
		
	}
	@RequestMapping(value = "/outForDelivery", method = RequestMethod.GET)
	public String acceptRequest(@RequestParam("tokenId") String token,HttpServletRequest request)
	{
		jdbcTemplate.update("update request_table set status='OUT FOR DELIVERY' where requestId ="+token);
		return "SUCCESS";
		
	}
	@RequestMapping(value="/createEvent",method=RequestMethod.POST)
	public String createRequest(@RequestBody Event2 event)
	                                                throws Exception {
		
		
	 
		 String query="insert into event_table(ngoId,description,startTime,endTime,addressl1,addressl2,city,state,pincode,contactNumber) "
					+ "values(" + event.getNgoId()+","+
					"'" + event.getDescription()+"',"+
					 "'" +event.getStartTime()+"',"+
					 "'" + event.getEndTime()+"',"+
					 "'" + event.getAddressL1()+"',"+
					 "'" + event.getAddressL2()+"',"+
					 "'" + event.getCity()+"',"+
					 "'" + event.getState()+"',"+
					 "'" + event.getPinCode()+"',"+
					 "'" + event.getContactNumber()+"')";
		 jdbcTemplate.update(query);
		
		return "SUCCESS";
	}
	
}
class RequestForNGO
{
	List<ArrayList<Request>> list;
	int ngoId;
	String ngoName;
	public void setList(List<ArrayList<Request>> list) {
		this.list = list;
	}
	public void setNgoId(int ngoId) {
		this.ngoId = ngoId;
	}
	public List<ArrayList<Request>> getList() {
		return list;
	}
	public int getNgoId() {
		return ngoId;
	}
	
	public void setngoName(String ngoName) {
		this.ngoName=ngoName;
	}
	public String getngoName() {
		return ngoName;
	}
	
}

