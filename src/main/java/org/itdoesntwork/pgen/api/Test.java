package org.itdoesntwork.pgen.api;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("api/test")
public class Test {
  @GET
  public String test() {
    return "Test";
  }
}
