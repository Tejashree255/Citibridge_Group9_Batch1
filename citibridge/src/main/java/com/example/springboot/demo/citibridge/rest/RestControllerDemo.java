package com.example.springboot.demo.citibridge.rest;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;



import java.io.IOException;
import java.math.BigDecimal;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.springboot.demo.citibridge.entity.StockClass;

//import com.example.springboot.demo.citibridge.studententity.Student;

//import com.citi.stock_data.dto.StckDTO;
//import com.citi.stock_data.dto.StckDTO;
//import com.luv2code.springdemo.entity.Student;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.histquotes.HistoricalQuote;
import yahoofinance.histquotes.Interval;



@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("api/")
public class RestControllerDemo{
	
	 
	
	int cnt=0;
	int no_of_weeks=2;
	String searchtype="weekly";
	
	
	@GetMapping("{sector}")
	public List<StockClass> getStudentsfinance(@PathVariable String sector) throws IOException {

		int cnt=0;
		
		HashMap<String,List<String>> records=new HashMap<String,List<String>>();
		URL url = new URL("https://archives.nseindia.com/content/indices/ind_nifty50list.csv");

		CSVFormat csvFormat = CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase();
		List<String> niftycompanies=new ArrayList<String>();
		
		List<String> niftysectors=new ArrayList<String>();
		List<String> niftysymbols=new ArrayList<String>();
		List<Map<String,String>> list=new ArrayList<Map<String,String>>();


		try(CSVParser csvParser = CSVParser.parse(url, StandardCharsets.UTF_8, csvFormat)) {
			for(CSVRecord csvRecord : csvParser) {
				list.add(csvRecord.toMap());
				String company = csvRecord.get("Company Name");
				niftycompanies.add(company);

				String industry = csvRecord.get("Industry");
				niftysectors.add(industry);

				String symbol = csvRecord.get("Symbol");
				niftysymbols.add(symbol);
			}



			for(int i=0;i<list.size();i++)
			{
				System.out.println(list.get(i)+"\n");
			}

			HashSet<String> hsetsectors = new HashSet<String>(niftysectors); 
			System.out.println(hsetsectors.size());

			for(String str: hsetsectors)
			{
				records.put(str,null);
			}


			for(Map<String,String> ele: list)
			{
				for(Entry<String, List<String>> mapElement : records.entrySet())
				{
					if(ele.get("Industry").equals(mapElement.getKey()))
					{
						List<String> temp=new ArrayList<String>();
						if(mapElement.getValue()!=null)
						{
							temp=mapElement.getValue();
						}
						temp.add(ele.get("Symbol")+".NS");
						mapElement.setValue(temp);
					}
				}
			}


			for(Entry<String, List<String>> Element :records.entrySet())
			{
				System.out.println(Element.getKey()+"   :   "+Element.getValue());
				System.out.println();
			}




		} catch (IOException e) {
			e.printStackTrace();
		}


		int no_of_weeks=2;
		String searchtype="weekly";
		List<String> stocknames=null;
		for(Entry<String, List<String>> Element :records.entrySet())
		{
			if(Element.getKey().equals(sector))
			{
				stocknames=Element.getValue();
			}
		}
		List<StockClass> list1=new ArrayList<StockClass>();
		int cntCompanies=0;
		for(String ele:stocknames)
		{
			Calendar from=Calendar.getInstance();
			
			Calendar to=Calendar.getInstance();
			cntCompanies++;
			from.add(Calendar.DATE,-14);
			System.out.println(convertDate(from));
			to.add(Calendar.HOUR_OF_DAY, 0);
			System.out.println(convertDate(to));
			Stock stock=YahooFinance.get(ele);
			List<HistoricalQuote> history=stock.getHistory(from,to,Interval.DAILY);
			
			
			
			for(HistoricalQuote quote:history)
			{
				
				System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
				System.out.println("symbol : "+quote.getSymbol());
				System.out.println("date  : "+convertDate(quote.getDate()));
				System.out.println("High : "+quote.getHigh());
				System.out.println("Low : "+quote.getLow());
				System.out.println("Open : "+quote.getOpen());
				System.out.println("Closed : "+quote.getClose());
				cnt++;
				System.out.println(cnt);
				System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
			}

			System.out.println("Open price of stock before 2 weeks: "+ history.get(0).getOpen());
			System.out.println("symbol  *** "+history.get(0).getSymbol());
			System.out.println("Closed price of stock today: "+ history.get(history.size()-1).getClose());
			BigDecimal open_before_2_weeks=history.get(0).getOpen();
			BigDecimal closed_today=history.get(history.size()-1).getClose();
			
			
			
			
			
			StockClass StckObj=new StockClass();
			float open=(float)open_before_2_weeks.floatValue();
			float close=(float)closed_today.floatValue();//719
			System.out.println("float close "+close);
			float gain=((close -open)/open)*100;
			System.out.println("Percentage Gain : "+Math.abs(gain)+"%");

			
			//get current date and time
			 DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
			 LocalDateTime now = LocalDateTime.now();
			 System.out.println("Today's time and date : "+dtf.format(now));
			
			System.out.println("*************"+stock.getSymbol());
			//add to list
			
			StckObj.setId(cntCompanies);
			StckObj.setName(stock.getName());
			StckObj.setPrice(close);//set current market price
			StckObj.setDate(dtf.format(now));
			StckObj.setTickers(stock.getSymbol());
			StckObj.setChange(Math.abs(gain));
			list1.add(StckObj);
		}
		System.out.println(list1);
		Collections.sort(list1,Comparator.comparing(StockClass::getChange));
		Collections.reverse(list1);
		
		
		System.out.println("After Sorting based on the gain over last two weeks : ");
		for(int i=0;i<list1.size();i++)
		{
			list1.get(i).setId(i+1);
		}
		 Iterator iterator = list1.iterator();
	      while(iterator.hasNext()) {
	    	  StockClass obj=(StockClass) iterator.next();
	         System.out.println(obj.getPrice());
	      }
		
		return list1;
	}

	private String convertDate(Calendar cal)
	{
		SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd");
		String formatDate=format.format(cal.getTime());
		return formatDate;	
	}


	

}



