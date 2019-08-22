PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "details", "trial", "trialbunny", "trialbunny2", "introductionanimals", "experiment", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Salutare tuturor! </p>")
    ,
    newText("<p> Salutare tuturor, vom juca un joc foarte distractiv împreună cu un vrăjitor şi un pui de dragon şi nişte umbre fascinante care aparţin unor animale.</p>" ),
    newText("<p> Te rog introdu ID-ul tău, răspunde la nişte întrebări, iar apoi fă click pe butonul de mai jos pentru a începe experimentul.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
     newText("<p> Ce vârstă ai? </p>"),
    newTextInput("Age")
        .print()
	       ,
	  newText("<p> Ce sex ai? (M/ F/ Altul)</p>"),
	       newTextInput ("Gender")
        .print()
	       , 
	        newText("<p> Cu ce te ocupi?</p>"),
	    newTextInput ("Profession")  
        .print()
	       ,
	       
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID")))
	      
.log( "ID" , getVar("ID") );
PennController("welcome" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> A fost odată ca niciodată, într-un ţinut îndepărtat, un vrăjitor foarte talentat pe nume Merlin, căruia îi plăcea foarte mult să se joace cu umbre şi să îi facă pe ceilalţi să ghicească ale cui sunt. </p>")
	    ,
	                  
	     newImage ("wizardanddragon.png")
               .print ()
	       ,
	       newKey(" ")
        .wait());
PennController("details" ,
	    defaultText
	        .print()
	    
	       ,
newText ("<p> Acum Merlin joacă jocul umbrelor cu un pui de dragon foarte drăguţ care trebuie să ghicească a cărui animal este umbra pe care o are în faţa sa.</p>")
	,
newText ("<p> Când ghiceşte a cui e umbra în mod corect, trebuie să recompensezi puiul de dragon cu un măr uriaş, când răspunsul lui e aşa şi aşa, îi dai un măr mare, iar atunci când nu ghiceşte a cui e umbra, îi dai doar un măr mic. </p>")
,
	   newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
    ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController("trial" ,
	    defaultText
	        .print()
	    
	       ,
newText ("<p> Hai să facem cunoştinţă cu un iepuraş foarte drăguţ. </p> "),
	       newImage ("smallpinkbunny", "smallpinkbunny.png")
	       .print ()
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
)
;

PennController("trialbunny" ,
	    defaultText
	        .print()
	    
	       ,
	       newText 
	       ("<p> Hop-hop, iată că s-a dus în spatele cortinei. </p>"),
	      
	       newImage ("bunnyshadow2", "bunnyshadow2.jpg")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Puiul de dragon: Este o vacă. Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;
PennController("trialbunny2" ,
	    defaultText
	        .print()
	    
	       ,
	       
	      
	       newImage ("bunnyshadow2", "bunnyshadow2.jpg")
	       .print ( )
	       ,
	       newText ("<p> Puiul de dragon: Este un iepuraş. Cum vei răsplati puiul de dragon? </p>")
	       ,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
   
.log( "ID" , getVar("ID") )
;
PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> Hai acum să facem cunoştinţă cu animalele din spectacol. Avem un grup de trei câini.</p>")
	    ,
	                  
	     newImage ("threedogs.png")
               .print ()
	       ,
	       newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	      )
;

PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	   
	       newText ("<p> Un grup de trei broaşte. </p>")
	    ,
	                  
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       )
;       
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> Un grup de trei pisici. </p>")
	    ,
	                  
	     newImage ("threecats.png")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> Un grup de trei vaci. </p>")
	    ,
	                  
	     newImage ("threecows.png")
               .print ()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Toate animale au plecat de pe scenă. Hai să vedem dacă puiul de dragon ghiceşte animalul după umbra de pe cortină şi să îl răsplătim.</p>")
		,
		newImage ("dogshadow.jpg")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,

		newText ("<p> Puiul de dragon: Sigur că este un câine. </p>")
	       ,
	     newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
	
		newText ("<p> Puiul de dragon: Poate că este o pisică. </p>")
	       ,
	     newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Sigur că este o pisică. </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este un câine. </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Foarte bine. Într-adevăr, umbra e a unui câine, a unuia din cei trei câini pe care i-ai văzut la început.</p>")
	         ,         
	     newImage ("threedogs.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Umbra se poate încă vedea dar câinele galben s-a întors înapoi pe scenă.</p>")
	          ,        
	     newImage ("yellowdog.png")
               .print ()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,

		newText ("<p> Hai să vedem ce zice puiul de dragon despre umbră şi să îl răsplătim. </p>")
	       ,
		newText ("<p> Puiul de dragon: Poate că este câinele roşu. </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este câinele roşu. </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este câinele galben.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este câinele galben.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este câinele albastru.</p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este câinele albastru.</p>")
		,
	     newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Umbra este încă în lumina reflectoarelor dar câinele roşu s-a întors şi el pe scenă, alăturându-se câinelui galben.</p>")
	         ,         
	     newImage ("twodogs.png")
               .print ()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Hai să vedem acum ce are de zis puiul de dragon despre umbră şi să îl răsplătim.</p>")
		,
		newText ("<p> Puiul de dragon: Sigur că este pisica albastră.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
	
		newText ("<p> Puiul de dragon: Sigur că este câinele albastru. </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este câinele albastru.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadow.jpg")
               .print ()
		,
	
		newText ("<p> Puiul de dragon: Poate că este pisica albastră. </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem a cui este umbra. Pam-pam! Este câinele albastru! </p>")
	         ,         
	     newImage ("bluedogonstage.jpg")
               .print ()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
)
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să facem cunoştinţă cu grupul broaştelor. </p>")
	    ,
	                  
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
	        newText ("<p> Acum toate broaştele se duc în spatele cortinei. </p>") 
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să ne uităm la umbra pe care puiul de dragon o vede şi să îl răsplătim pentru ce spune. </p>")
		,
		newImage ("frogshadow.jpg")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Puiul de dragon: Poate că este un câine. </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Sigur că este o broască. </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este un câine.</p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este o broască. </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Foarte bine. Într-adevăr, umbra e a unei broaşte, a uneia din cele trei broaşte pe care le-ai văzut la început.</p>")
	         ,         
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Umbra este încă acolo dar broasca albastră s-a întors pe scenă.</p>")
	          ,        
	     newImage ("bluefrog.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newAudio("frogsoundsshort", "frogsoundsshort.mp3")
		.play()
		,

		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbră şi să îl răsplătim. </p>")
	       ,
		newText ("<p> Puiul de dragon: Sigur că este broasca mov.</p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este broasca roşie. </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este broasca albastră.</p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este broasca mov.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
	
		,
		newText ("<p> Puiul de dragon: Sigur că este broasca roşie.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este broasca albastră. </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Uite, nu e broasca mov. Broasca mov a revenit din spatele cortinei, alăturându-se broaştei albastre, dar umbra este încă acolo.</p>")
	         ,         
	     newImage ("twofrogs.png")
               .print ()
	       ,
	       newAudio("frogsoundsshort", "frogsoundsshort.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
		newText ("<p> Hai să vedem ce zice puiul de dragon despre ea şi să îl răsplătim. </p>")
		,
		newText ("<p> Puiul de dragon: Poate că este pisica roşie.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Sigur că este pisica roşie.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este broasca roşie.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		
		newText ("<p> Puiul de dragon: Sigur că este broasca roşie.</p>")
	       ,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să vedem a cui este umbra. Pam-pam! Este broasca roşie! </p>")
	         ,         
	     newImage ("redfrogrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
)
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Let's get acquainted with the group of cats. </p>")
	    ,
	                  
	     newImage ("threecats.png")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
		,
	        newText ("<p> Now they all go behind the curtain. </p>") 
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Let's take a look at the shadow, and reward him for what he says.</p>")
		,
		newImage ("catshadow.jpg")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is possible that it is a dog. </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,

		newText ("<p> Baby Dragon: It is certain that it is a cat. </p>")
	       ,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is a dog. </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that it is a cat. </p>")
	       ,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Very well. Yes, the shadow belongs to a cat indeed. It could be one of the three cats you saw in the beginning.</p>")
	         ,         
	     newImage ("threecats.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Now the shadow of the cat is still on but the green cat has come back on stage.</p>")
	          ,        
	     newImage ("greencat.jpg")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,

		newText ("<p> Now let's see what the baby dragon has to say about the shadow and reward him. </p>")
	       ,
		newText ("<p> Baby Dragon: It is possible that it is the blue cat.</p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
	
		newText ("<p> Baby Dragon: It is possible that it is the green cat.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the pink cat.</p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that it is the pink cat.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
	
		,
		newText ("<p> Baby Dragon: It is certain that it is the blue cat.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the green cat.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Look, it's not the blue cat. The blue cat has come back from behind the curtain, joining the green frog, but the shadow is still there.</p>")
	         ,         
	     newImage ("twocats.jpg")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,
		newText ("<p> Now let's see what the baby dragon has to say about the shadow and reward him. </p>")
		,
		newText ("<p> Baby Dragon: It is certain that it is the pink cat.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that it is the pink bunny.</p>")
		,
	     newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the pink cat.</p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		
		newText ("<p> Baby Dragon: It is certain that it is the pink bunny. </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Now let's see who the shadow belongs to.Pam-pam! It's the pink cat! </p>")
	         ,         
	     newImage ("pinkcatrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
)
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Let's get acquainted with the group of cows. </p>")
	    ,
	                  
	     newImage ("threecows.png")
               .print ()
	       ,
	       newAudio("cowsounds", "cowsounds.mp3")
		.play()
		,
	        newText ("<p> Now they all go behind the curtain. </p>") 
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Let's take a look at the shadow, and reward him for what he says.</p>")
		,
		newImage ("cowshadow.jpg")
               .print ()
		,
		newAudio("cowsounds", "cowsounds.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is certain that it is a cat. </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that it is a cow. </p>")
	       ,
	     newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is a cow. </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that it is a cat. </p>")
	       ,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Very well. Yes, the shadow belongs to a cow indeed. It could be one of the three cows you saw in the beginning.</p>")
	         ,         
	     newImage ("threecows.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Now the shadow of the cow is still on but the orange cow has come back on stage.</p>")
	          ,        
	     newImage ("orangecow.png")
               .print ()
	       ,
	       newAudio("cowsounds", "cowsounds.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newAudio("cowsounds", "cowsounds.mp3")
		.play()
		,

		newText ("<p> Now let's see what the baby dragon has to say about the shadow and reward him. </p>")
	       ,
		newText ("<p> Baby Dragon: It is certain that it is the green cow.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the yellow cow.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the orange cow.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that it is the green cow.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
	
		,
		newText ("<p> Baby Dragon: It is certain that it is the yellow cow.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the orange cow.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Look, it's not the yellow cow. The yellow cow has come back from behind the curtain, joining the orange cow, but the shadow is still there.</p>")
	         ,         
	     newImage ("twocows.png")
               .print ()
	       ,
	       newAudio("cowsounds", "cowsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newAudio("cowsounds", "cowsounds.mp3")
		.play()
		,
		newText ("<p> Now let's see what the baby dragon has to say about the shadow and reward him. </p>")
		,
		newText ("<p> Baby Dragon: It is possible that it is the green cow.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,

		newText ("<p> Baby Dragon: It is certain that it is the green cat.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the green cow.</p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		
		newText ("<p> Baby Dragon: It is possible that it is the green cat. </p>")
	       ,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Now let's see who the shadow belongs to.Pam-pam! It's the green cow! </p>")
	         ,         
	     newImage ("greencowrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("cowsounds", "cowsounds.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
)
;
PennController.SendResults( "send" );
PennController( "final" ,
    newText("<p> The baby dragon thanks you for the apples, and so does the wizard! Bubbye! :) Thank you for your participation!</p>")
        .print()
	       ,
	newImage ("dragon.png")
     .print ()
    ,
    newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
	       )

  
