package application.rest.v1;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import model.NGODetails;

public class NGORowMapper implements RowMapper<NGODetails> {
	 public NGODetails mapRow(ResultSet rs, int rowNum) throws SQLException {
         NGODetails ngo = new NGODetails();
         ngo.setNgoId(rs.getInt("ngoID"));
        
         return ngo;
     }

}
