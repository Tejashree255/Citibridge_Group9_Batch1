package com.example.springboot.demo.citibridge;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//import com.example.springboot.demo.citibridge.repository.UserRepository;
//import com.example.springboot.demo.citibridge.studententity.Student;

@SpringBootApplication
public class CitibridgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(CitibridgeApplication.class, args);
	}
//	@Autowired
//	private UserRepository userRepository;
//	
//	@Override
//	public void run(String... args) throws Exception {
//		Student st=new Student();
//		this.userRepository.save(new Student("aa","bb","ccs"));
//	}
}
