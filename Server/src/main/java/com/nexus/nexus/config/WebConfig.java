package com.nexus.nexus.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // Override the addCorsMappings method to add CORS configurations
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") //All endpoints
                .allowedOrigins("http://localhost:4200") //Allow this origin. Port:4200
                .allowedMethods("GET", "POST", "PUT", "DELETE")//Allowed Methods
                .allowedHeaders("*") //Allow all headers
                .allowCredentials(true);
    }
}