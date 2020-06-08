package application.rest.v1;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import model.Request;

public class RequestRowMapper implements RowMapper<Request> {
	 public Request mapRow(ResultSet rs, int rowNum) throws SQLException {
         Request req = new Request();
         req.setRequestId(rs.getInt("requestId"));
         req.setFirstName(rs.getString("firstName"));
         req.setlName(rs.getString("lname"));
         req.setCategory(rs.getString("category"));
         req.setDescription(rs.getString("description"));
         req.setAddressL1(rs.getString("addressl1"));
         req.setAddressL2(rs.getString("addressl2"));
         req.setCity(rs.getString("city"));
         req.setState(rs.getString("state"));
         req.setRegion(rs.getString("region"));
         req.setPinCode(rs.getString("pincode"));
         req.setContactNumber(rs.getString("contactNumber"));
         req.setAcceptedBy(rs.getInt("acceptedBy"));
         req.setTypeOfRequest(rs.getString("typeofrequest"));
         req.setStatus(rs.getString("status"));
         return req;
     }

}
