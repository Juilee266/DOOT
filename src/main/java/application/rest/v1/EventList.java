package application.rest.v1;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import model.Event;

@RestController
@RequestMapping(value="/Events",method= {RequestMethod.POST,RequestMethod.GET})
public class EventList {
	@RequestMapping(value = "/getEventsForCity", method = RequestMethod.GET)
	public ResponseEntity<List<Event>> getTablesForNGO(@RequestParam("city") String city, HttpServletRequest request) {
		String query = "select n.name , e.*  from event_table e,ngo_table n where e.city= '"+city+"'"+" and e.ngoId = n.ngoId ";
		List<Event> evList = jdbcTemplate.query(query, new EventRowMapper());
		return new ResponseEntity<List<Event>>(evList, HttpStatus.OK);
	}
	@Autowired
	JdbcTemplate jdbcTemplate;

			
}
