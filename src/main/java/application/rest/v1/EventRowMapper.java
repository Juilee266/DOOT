package application.rest.v1;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import model.Event;

public class EventRowMapper implements RowMapper<Event> {
	 public Event mapRow(ResultSet rs, int rowNum) throws SQLException {
         Event ev = new Event();
         ev.setName(rs.getString("name"));
         ev.setNgoId(rs.getInt("ngoId"));
         ev.setDescription(rs.getString("description"));
         ev.setStartTime(rs.getString("startTime"));
         ev.setEndTime(rs.getString("endTime"));
         ev.setAddressL1(rs.getString("addressl1"));
         ev.setAddressL2(rs.getString("addressl2"));
         ev.setCity(rs.getString("city"));
         ev.setState(rs.getString("state"));
         ev.setPinCode(rs.getString("pinCode"));
         ev.setContactNumber(rs.getString("contactNumber"));
         return ev;
     }

}
