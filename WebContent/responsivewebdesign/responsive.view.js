sap.ui.jsview("responsivewebdesign.responsive", {

      getControllerName : function() {
         return "responsivewebdesign.responsive";
      },

      createContent : function(oController) {
    	  var oMenuButton = new sap.ui.commons.MenuButton({
  			  id: "menuButton", 
  			  text: "Menu",
  		  }); 
  		  var oMenu1 = new sap.ui.commons.Menu("menu1", {ariaDescription: "File Menu"});
  		  var oMenuItem1 = new sap.ui.commons.MenuItem("menuDogs",{text: "Dogs"});
  		  oMenu1.addItem(oMenuItem1);
  		  var oMenuItem2 = new sap.ui.commons.MenuItem("menuCats",{text: "Cats"});
  		  oMenu1.addItem(oMenuItem2);
  		  var oMenuItem3 = new sap.ui.commons.MenuItem("menuBirds",{text: "Birds"});
  		  oMenu1.addItem(oMenuItem3);
  		  var oMenuItem4 = new sap.ui.commons.MenuItem("menuZebras",{text: "Zebras"});
		  oMenu1.addItem(oMenuItem4);
		  var oMenuItem5 = new sap.ui.commons.MenuItem("menuTigers",{text: "Tigers"});
		  oMenu1.addItem(oMenuItem5);
		  var oMenuItem6 = new sap.ui.commons.MenuItem("menuElephants",{text: "Elephants"});
		  oMenu1.addItem(oMenuItem6);
		  var oMenuItem7 = new sap.ui.commons.MenuItem("menuGiraffes",{text: "Giraffes"});
		  oMenu1.addItem(oMenuItem7);
  		  oMenuButton.setMenu(oMenu1);
  		  oMenuButton.attachItemSelected(function (oEvent){
  			  //alert("Items \"" + oEvent.getParameter("itemId") + "\" was selected.");
  			  var callEvent = oEvent.getParameter("itemId");
	  		  if (callEvent == "menuDogs") {
	  			  animal.showDogs();
	  		  }
	  		 else if (callEvent == "menuCats") {
	  			  animal.showCats();
	  		  }
	  		  else if (callEvent == "menuBirds") {
	  			  animal.showBirds();
	  		  }
	  		  else if (callEvent == "menuZebras") {
	  			  animal.showZebras();
	  		  }
	  		  else if (callEvent == "menuTigers") {
	  			  animal.showTigers();
	  		  }
	  		  else if (callEvent == "menuElephants") {
	  			  animal.showElephants();
	  		  }
	  		  else if (callEvent == "menuGiraffes") {
	  			  animal.showGiraffes();
	  		  }
  		  });
  		  this.addContent(oMenuButton);

    	  var oLink1 = new sap.ui.commons.Link({
      	  	  id: "Dogs",
      		  text: "Dogs", 
      		  press: function() {
    			  animal.showDogs();
    		  }});
      	  var oLink2 = new sap.ui.commons.Link({
      	  	  id: "Cats",
      		  text: "Cats",
      		  press: function() {
      			animal.showCats();
    		  }});
      	  var oLink3 = new sap.ui.commons.Link({
      	  	  id: "Birds",
      		  text: "Birds", 
      		  press: function() {
      			  animal.showBirds();
      		  }});
      	 var oLink4 = new sap.ui.commons.Link({
    	  	  id: "Zebras",
    		  text: "Zebras", 
    		  press: function() {
    			  animal.showZebras();
    	 }});
      	 var oLink5 = new sap.ui.commons.Link({
      		 id: "Tigers",
      		 text: "Tigers", 
      		 press: function() {
      			 animal.showTigers();
      	 }});
      	 var oLink6 = new sap.ui.commons.Link({
      		 id: "Elephants",
      		 text: "Elephants", 
      		 press: function() {
  			 animal.showElephants();
  		 }});
      	 var oLink7 = new sap.ui.commons.Link({
      		 id: "Giraffes",
      		 text: "Giraffes", 
      		 press: function() {
  			 animal.showGiraffes();
  		 }});
      	 var oLayout = new sap.ui.commons.layout.HorizontalLayout("Layout1", {
    	  	 content: [oLink1, oLink2, oLink3, oLink4, oLink5, oLink6, oLink7]
    	 });
    	 this.addContent(oLayout);

 		 var oImage = new sap.ui.commons.Image({
 		   	 id: "imgAnimal"
 		 });
 		 this.addContent(oImage);
 		  
		 var oTextView = new sap.ui.commons.TextView({
	    	 id: "aboutAnimal"
	     });
		 this.addContent(oTextView);
		  
   		 animal = {
				    showDogs: function() {
						oTextView.setText("Dogs\n\nThe domestic dog (Canis lupus familiaris) is a subspecies of the gray wolf (Canis lupus), a member of the Canidae family of the mammalian order Carnivora. The term domestic dog is generally used for both domesticated and feral varieties. The dog has been the first animal to be domesticated.\n\nMtDNA evidence shows an evolutionary split between the modern dog's lineage and the modern wolf's lineage around 100,000 years ago but, as of 2013, the oldest fossil specimens genetically linked to the modern dog's lineage date to approximately 33,000-36,000 years ago. Dogs value to early human hunter-gatherers led to them quickly becoming ubiquitous across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling loads, protection, assisting police and military, companionship, and, more recently, aiding handicapped individuals. From Wikipedia.");
				    	oImage.setSrc("http://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/American_Foxhound_and_Labrador_Retriever_playing.jpg/800px-American_Foxhound_and_Labrador_Retriever_playing.jpg");
				    	//oImage.setSrc("http://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/260px-YellowLabradorLooking_new.jpg");
				    },
				    showCats: function() {
				    	oTextView.setText("Cats\n\nThe domestic cat (Felis catus or Felis silvestris catus) is a small, usually furry, domesticated, and carnivorous mammal. It is often called the housecat when kept as an indoor pet, or simply the cat when there is no need to distinguish it from other felids and felines. Cats are valued by humans for companionship and their ability to hunt vermin and household pests.\n\nCats are similar in anatomy to the other felids, with strong, flexible bodies, quick reflexes, sharp retractable claws, and teeth adapted to killing small prey. Cat senses fit a crepuscular and predatory ecological niche. Cats can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small game. They can see in near darkness. Like most other mammals, cats have poorer color vision and a better sense of smell than humans. From Wikipedia.");
				    	oImage.setSrc("http://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Cat_poster_2.jpg/250px-Cat_poster_2.jpg");
				    },
				    showBirds: function() {
				    	oTextView.setText("Birds\n\nBirds (class Aves) are feathered, winged, bipedal, endothermic (warm-blooded), egg-laying, vertebrate animals. With around 10,000 living species, they are the most speciose class of tetrapod vertebrates. All present species belong to the subclass Neornithes, and inhabit ecosystems across the globe, from the Arctic to the Antarctic. Extant birds range in size from the 5 cm (2 in) Bee Hummingbird to the 2.75 m (9 ft) Ostrich.\n\nModern birds are characterised by feathers, a beak with no teeth, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a lightweight but strong skeleton. All living species of birds have wings; the most recent species without wings was the moa, which is generally considered to have become extinct in the 16th century. Wings are evolved forelimbs, and most bird species can fly. Flightless birds include ratites, penguins, and a number of diverse endemic island species. Birds also have unique digestive and respiratory systems that are highly adapted for flight. Some birds, especially corvids and parrots, are among the most intelligent animal species; a number of bird species have been observed manufacturing and using tools, and many social species exhibit cultural transmission of knowledge across generations. From Wikipedia.");
				    	oImage.setSrc("http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Monticola_gularis_male_non-breeding_-_Khao_Yai.jpg/220px-Monticola_gularis_male_non-breeding_-_Khao_Yai.jpg");
				    },
				    showZebras: function() {
				    	oTextView.setText("Zebras\n\nZebras are several species of African equids (horse family) united by their distinctive black and white stripes. Their stripes come in different patterns, unique to each individual. They are generally social animals that live in small harems to large herds. Unlike their closest relatives, horses and asses, zebras have never been truly domesticated.\n\nThere are three species of zebras: the plains zebra, the Grevy's zebra and the mountain zebra. The plains zebra and the mountain zebra belong to the subgenus Hippotigris, but Grevy's zebra is the sole species of subgenus Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more horse-like. All three belong to the genus Equus, along with other living equids.\n\nThe unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grevy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century though there is currently a plan, called the Quagga Project, that aims to breed zebras that are phenotypically similar to the quagga in a process called breeding back. From Wikipedia.");
				    	oImage.setSrc("http://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Plains_Zebra_Equus_quagga.jpg/220px-Plains_Zebra_Equus_quagga.jpg");
				    },
				    showTigers: function() {
				    	oTextView.setText("Tigers\n\nThe tiger (Panthera tigris) is the largest cat species, reaching a total body length of up to 3.3 m (11 ft) and weighing up to 306 kg (670 lb). It is the third largest land carnivore (behind only the polar bear and the brown bear). Its most recognizable feature is a pattern of dark vertical stripes on reddish-orange fur with a lighter underside. It has exceptionally stout teeth, and the canines are the longest among living felids with a crown height of as much as 74.5 mm (2.93 in) or even 90 mm (3.5 in).\n\nTigers once ranged widely across Asia, from Turkey in the west to the eastern coast of Russia. Over the past 100 years, they have lost 93% of their historic range, and have been extirpated from southwest and central Asia, from the islands of Java and Bali, and from large areas of Southeast and Eastern Asia. Today, they range from the Siberian taiga to open grasslands and tropical mangrove swamps. The remaining six tiger subspecies have been classified as endangered by IUCN. The global population in the wild is estimated to number between 3,062 and 3,948 individuals, down from around 100,000 at the start of the 20th century, with most remaining populations occurring in small pockets isolated from each other. Major reasons for population decline include habitat destruction, habitat fragmentation and poaching. The extent of area occupied by tigers is estimated at less than 1,184,911 km2 (457,497 sq mi), a 41% decline from the area estimated in the mid-1990s. From Wikipedia.");
				    	oImage.setSrc("http://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tigerramki.jpg/220px-Tigerramki.jpg");
				    },
				    showElephants: function() {
				    	oTextView.setText("Elephants\n\nElephants are large mammals of the family Elephantidae and the order Proboscidea. Traditionally, two species are recognised, the African elephant (Loxodonta africana) and the Asian elephant (Elephas maximus), although some evidence suggests that African bush elephants and African forest elephants are separate species (L. africana and L. cyclotis respectively). Elephants are scattered throughout sub-Saharan Africa, and South and Southeast Asia. They are the only surviving proboscideans; extinct species include mammoths and mastodons.\n\nElephants are herbivorous and can be found in different habitats including savannahs, forests, deserts and marshes. They prefer to stay near water. They are considered to be keystone species due to their impact on their environments. Other animals tend to keep their distance, and predators such as lions, tigers, hyenas and wild dogs usually target only the young elephants (or calves). Females (or cows) tend to live in family groups, which can consist of one female with her calves or several related females with offspring. The latter are led by the oldest cow, known as the matriarch. Elephants have a fission-fusion society in which multiple family groups come together to socialise. Males (or bulls) leave their family groups when they reach puberty, and may live alone or with other males. Adult bulls mostly interact with family groups when looking for a mate and enter a state of increased testosterone and aggression known as musth, which helps them gain dominance and reproductive success. Calves are the centre of attention in their family groups and rely on their mothers for as long as three years. Elephants can live up to 70 years in the wild. They communicate by touch, sight, and sound; elephants use infrasound, and seismic communication over long distances. Elephant intelligence has been compared with that of primates and cetaceans. They appear to have self-awareness and show empathy for dying or dead individuals of their kind. From Wikipedia.");
				    	oImage.setSrc("http://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/220px-African_Bush_Elephant.jpg");
				    },
				    showGiraffes: function() {
				    	oTextView.setText("Giraffes\n\nThe giraffe (Giraffa camelopardalis) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant. Its species name refers to its camel-like appearance and the patches of color on its fur. Its chief distinguishing characteristics are its extremely long neck and legs, its horn-like ossicones and its distinctive coat patterns. It stands 5 to 6 m (16 to 20 ft) tall and has an average weight of 1,600 kg (3,500 lb) for males and 830 kg (1,800 lb) for females. It is classified under the family Giraffidae, along with its closest extant relative, the okapi. The nine subspecies are distinguished by their coat patterns.\n\nThe giraffe's scattered range extends from Chad in the north to South Africa in the south, and from Niger in the west to Somalia in the east. Giraffes usually inhabit savannas, grasslands, and open woodlands. Their primary food source is acacia leaves, which they browse at heights most other herbivores cannot reach. Giraffes are preyed on by lions, and calves are also targeted by leopards, spotted hyenas and wild dogs. Adult giraffes do not have strong social bonds, though they do gather in loose aggregations if they happen to be moving in the same general direction. Males establish social hierarchies through necking, which are combat bouts where the neck is used as a weapon. Dominant males gain mating access to females, which bear the sole responsibility for raising the young. From Wikipedia.");
				    	oImage.setSrc("http://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/220px-Giraffe_Mikumi_National_Park.jpg");
				    }
				    
		};
		 
		//Start the application with showing the dogs
		animal.showDogs();
      }
});


