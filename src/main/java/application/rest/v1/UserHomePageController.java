package application.rest.v1;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import model.Request;

@RestController
@RequestMapping(value = "/UserHome", method = { RequestMethod.GET, RequestMethod.POST })
public class UserHomePageController {
	@Autowired
	JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/getRequest", method = RequestMethod.GET)
	public Request getRequestDetails(@RequestParam("tokenId") int token, HttpServletRequest request) {
		String sqlSelect = "SELECT * FROM request_table where requestId = " + token;
		try {
		List<Request> req = jdbcTemplate.query(sqlSelect, new RequestRowMapper());
		return req.get(0);}
		catch(Exception e)
		{
			return new Request();
		}
	}

	@RequestMapping(value = "/completeRequest", method = RequestMethod.GET)
	public String completeRequest(@RequestParam("tokenId") int token, HttpServletRequest request) {
		try {
			jdbcTemplate.update("update request_table set status='COMPLETED' where requestId ="+token);
			return "SUCCESS";
		}
		catch(Exception e)
		{
			return "FAILURE: INVALID TOKEN";
		}		
	}
}
