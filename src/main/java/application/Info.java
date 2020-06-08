package application;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.boot.context.event.ApplicationReadyEvent;

@Component
public class Info {

  @EventListener(ApplicationReadyEvent.class)
    public void contextRefreshedEvent() {
      System.out.println("Welcome to doot app go to the following links once front end is up :-");
      System.out.println("  HOME       : http://localhost:3000/");
    }

}
