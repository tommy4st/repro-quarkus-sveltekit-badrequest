package org.itdoesntwork.pgen;

import java.io.IOException;
import java.net.URL;

import javax.ws.rs.NotFoundException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class NotFoundHandler implements ExceptionMapper<NotFoundException> {

  final static URL fallback;

  static {
    fallback = NotFoundHandler.class.getClassLoader().getResource("META-INF/resources/index.html");
  }

  @Override
  public Response toResponse(NotFoundException exception) {
    try {
      return Response.ok(fallback.openStream()).build();
    }
    catch (IOException ex) {
      return exception.getResponse();
    }
  }
  
}