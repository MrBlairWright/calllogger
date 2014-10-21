var express = require('express')
var app = express();
var cool = require('cool-ascii-faces');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var htmlText;
fs = require('fs')
fs.readFile('example.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  htmlText = data;
});

app.get('/', function(request, response) {
  var result = ''
  var times = process.env.TIMES || 5
  for (i=0; i < times; i++)
    result += cool();
  response.send(result);
});

app.get('/example.html', function(request, response) {
  //Simple call to get HTML if available.
  response.send(htmlText);
});

app.get('/scrape', function(req, res){
    // The URL we will scrape from - in our example Anchorman 2.
	url = 'http://192.168.1.105/index.htm';
	//url = 'http://www.imdb.com/title/tt1229340/';

  //Simple call to get HTML if available.
	request(url, function(error, response, html){
	 if(error || response.statusCode != 200) return;
    htmlText = html;
	});

  var $ = cheerio.load(htmlText);


  console.log("loaded html text into Cheerio");

  var a = [];
  //    $('td.normalText').each(function(i, element){
  $('td.normalText').each(function(i, element){
  var a = $(this);

  if(a.text() > "") {

  //  if(a.text().trim() = "Dialed Numbers") {
  //    console.log(i + "***");     
  //  }

  console.log(i + "[" + a.text().trim() + "]");

  //    if(a.text() = "Dialed Numbers") {
  //      console.log(n + "***");     
  //    }
}

	});
});


            // Finally, we'll define the variables we're going to capture

//			var sdate, stime, sduration, scosts, slocalidentity, snumber;
//			var json = { sdate : "", stime : "", sduration : "", scosts : "", slocalidentity : "", snumber : ""};

            // We'll use the unique header class as a starting point.

		//	$('.Date').filter(function(){
			//$('.header').filter(function(){
//	$('#data .name').each(function() {
//   	console.log($(this).text());
//		});
//console.log("here:**************************************************************");

  //           var name;
 //             $('.name').filter(function(){
 //               var data = $(this);
 //               name = data.text();
 //               console.log("name = " + name);
 //           });

//	$(html).each(function() {
//    $(this).find('normalText').each(function() {
//       console.log("here: " + $(this).text());
//   });
//    });

           // Let's store the data we filter into a variable so we can easily see what's going on.
//	console.log("here 2.5");

//		        var data = $(this);
//	console.log("here 3");

           // In examining the DOM we notice that the title rests within the first child element of the header tag. 
           // Utilizing jQuery we can easily navigate and get the text by writing the following code:
//	console.log(data);
//				sdate = data.txt();
		        //sdate = data.children().first().text();
//	console.log("here 3");

           // Once we have our title, we'll store it to the our json object.
//	console.log("sdate: " + sdate);
	//console.log(sdate);
//		        json.sdate = sdate;
//			})
		
			
//		}
//		else{
//			console.log("probably error then?");
//			console.log(error);
//		}
//	})
//})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
