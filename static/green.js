var ceramicslist = ["/static/images/ceramics.jpg"]
var styrofoamlist = ["/static/images/styrofoam.jpg"]
var wrapperlist = ["/static/images/candy-wrapper.jpg"]
var toylist = ["/static/images/plastic-toys.jpg"]
var heavilysoiledpaperlist = ["/static/images/heavily-soiled-paper.jpg"]
var soiledpaperlist = ["/static/images/soiled-paper-cup.png"]
var usednapkinslist = ["/static/images/used-napkins.jpg"]
var hardcoverlist = ["/static/images/hardcover-books.jpg"]

var paperlist = ["/static/images/paper.jpeg"]
var newspaperlist = ["/static/images/newspapers.jpeg"]
var phonebooklist = ["/static/images/phonebook.jpg"]
var wrappinglist = ["/static/images/wrapping-paper.jpg"]
var cardboardlist = ["/static/images/egg-carton.jpg"]
var maillist = ["/static/images/mail-and-envelopes.jpg"]
var paperbagslist = ["/static/images/paper-bags.jpg"]
var smoothcardboardlist = ["/static/images/smooth-cardboard.jpg"]
var corrugatedcardboardlist = ["/static/images/corrugated-cardboard.jpg"]

var plasticlist = ["/static/images/plastic-bottles.png"]
var glasslist = ["/static/images/glass.jpg"]
var aluminumlist = ["/static/images/aluminum-foil.jpg"]
var drinklist = ["/static/images/drink-box.jpeg"]

var all = ".ceramics, .styrofoam, .candy-wrapper, .plastic-toys, .paper, .newspaper, \
			.phonebook, .wrapping-paper, .plastic, .glass, .aluminum-foil, .drink-box, \
			.heavily-soiled-paper, .soiled-paper, .used-napkins, .hardcover, .cardboard, .mail, \
			.paper-bags, .smooth-cardboard, .corrugated-cardboard"
var black = ".ceramics, .styrofoam, .candy-wrapper, .plastic-toys, .heavily-soiled-paper, \
			.soiled-paper, .used-napkins, .hardcover"
var green = ".paper, .newspaper, .phonebook, .wrapping-paper, .cardboard, .mail, \
			.paper-bags, .smooth-cardboard, .corrugated-cardboard"
var blue = ".plastic, .glass, .aluminum-foil, .drink-box"

var wrong = []
var number_wrong = 0
var black_wrong = 0
var green_wrong = 0
var blue_wrong = 0
var past_draggable = ""

function makeNames(names, class_name, caption) {
	$(class_name).empty()
	$.each(names, function( index, value ) {
		// Make the draggable name object
		var new_row = $("<figure class='move gray-border' id='" + value + "'>")
		var new_img = $("<img src='" + value + "'>")
		new_row.append(new_img)
		$(function() {
		    $(new_row).draggable({
		    	zIndex: 10000,
		    	revert: true
		    })
		})
   		$(class_name).append(new_row)
	})
}

function makeAllNames() {
	$(".wrong-info").remove()

	makeNames(paperlist, ".paper", "Paper")
	makeNames(plasticlist, ".plastic", "Plastic")
	makeNames(newspaperlist, ".newspaper", "Newspaper")
	makeNames(ceramicslist, ".ceramics", "Ceramics")
	makeNames(styrofoamlist, ".styrofoam", "Styrofoam")
	makeNames(wrapperlist, ".candy-wrapper", "Candy Wrapper")
	makeNames(toylist, ".plastic-toys", "Plastic Toys")
	makeNames(phonebooklist, ".phonebook", "Phonebook")
	makeNames(wrappinglist, ".wrapping-paper", "Wrapping Paper")
	makeNames(glasslist, ".glass", "Glass")
	makeNames(aluminumlist, ".aluminum-foil", "Aluminum Foil")
	makeNames(drinklist, ".drink-box", "Drink Box")
	makeNames(heavilysoiledpaperlist, ".heavily-soiled-paper", "Heavily Soiled Paper")
	makeNames(soiledpaperlist, ".soiled-paper", "Soiled Paper")
	makeNames(usednapkinslist, ".used-napkins", "Used Napkins")
	makeNames(hardcoverlist, ".hardcover", "Hardcover Books")
	makeNames(cardboardlist, ".cardboard", "Cardboard")
	makeNames(maillist, ".mail", "Mail")
	makeNames(paperbagslist, ".paper-bags", "Paper Bags")
	makeNames(smoothcardboardlist, ".smooth-cardboard", "Smooth Cardboard")
	makeNames(corrugatedcardboardlist, ".corrugated-cardboard", "Corrugated Cardboard")

	if (allListsEmpty()) {
		if (wrong.length != 0) {
			// Make retake quiz button
			var new_button = $("<div>")
			var button = $("<button class='btn btn-warning retake-button'>")
			$(new_button).append(button.text("RETAKE QUIZ WITH WRONG ANSWERS"))
	   		$(".right-bin").append(new_button)
	   		// Display wrong message
			var new_row = $("<div class='row wrong-message'>")
			var new_col = $("<div class='col-md-12 wrong-text'>")
			$(new_row).append(new_col.text("You got " + number_wrong + " answer(s) wrong in total: " + black_wrong + 
				" of your answer(s) should've been in the black bin, " + green_wrong + 
				" of your answer(s) should've been in the green bin, and " + blue_wrong +
				" of your answer(s) should've been in the blue bin."))
	   		$(".right-column").append(new_row)
   		} else {
   			// Clear instructions
   			$(".instructions").empty()
   			// Display completion message
			var new_row = $("<div class='row'>")
			var new_col = $("<div class='col-md-12'>")
			var new_sub_row = $("<div class='row middle'>")
			var new_sub_col = $("<div class='col-md-12 congrats'>")
			$(new_sub_row).append(new_sub_col.text("Congratulations, you have mastered the quiz!"))
			$(new_col).append(new_sub_row)
			$(new_row).append(new_col)
	   		$(".instructions").append(new_row)
   		}
	}
}

function allListsEmpty() {
	return paperlist.length == 0 && plasticlist.length == 0 && newspaperlist.length == 0 &&
		ceramicslist.length == 0 && styrofoamlist.length == 0 && wrapperlist.length == 0 &&
		toylist.length == 0 && phonebooklist.length == 0 && wrappinglist.length == 0 &&
		glasslist.length == 0 && aluminumlist.length == 0 && drinklist.length == 0
}

function incorrectAnswer(parent) {
	$(".wrong-info").remove()
	number_wrong += 1

	if (parent.hasClass("ceramics")) {
		black_wrong += 1
		wrong.push(".ceramics")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***According to Waste Management, the presence of ceramics like coffee mugs and plates in a batch of your typical, curbside-recyclable glass will weaken the recycled product, which is why ceramics aren’t usually accepted."))
   		$(".instructions").append(new_row)
	}
	if (parent.hasClass("styrofoam")) {
		black_wrong += 1
		wrong.push(".styrofoam")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Styrofoam is a Dow Chemical Company trademark for a specific type of extruded polystyrene (EPS) foam used only for art supplies and insulation. There are two reasons EPS isn’t allowed in recycle bins: density and contamination. Polystyrene foam is 95% air so it is not cost-effective to store or ship. It is often contaminated with food or drink, and it is difficult to clean because it is so porous."))
   		$(".instructions").append(new_row)
	}
	if (parent.hasClass("candy-wrapper")) {
		black_wrong += 1
		wrong.push(".candy-wrapper")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Candy wrappers are usually made up of mixed materials, making the recovery of useful materials difficult and expensive. As a result, most waste management companies, manufacturers and municipal recycling facilities tend to turn their backs from candy wrappers."))
   		$(".instructions").append(new_row)
	}
	if (parent.hasClass("plastic-toys")) {
		black_wrong += 1
		wrong.push(".plastic-toys")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Plastic toys pose a unique challenge because they're typically composed of other materials too, such as metals. The recyclable components can't be separated out, and become prohibitive for recycling centers."))
   		$(".instructions").append(new_row)
	}

	if (parent.hasClass("paper")) {
		green_wrong += 1
		wrong.push(".paper")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Paper... is paper, so it belongs in the 'Mixed Paper' bin!"))
   		$(".instructions").append(new_row)
	}
	if (parent.hasClass("newspaper")) {
		green_wrong += 1
		wrong.push(".newspaper")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Newspapers are made of paper, so they belong in the 'Mixed Paper' bin."))
   		$(".instructions").append(new_row)
	}
	if (parent.hasClass("phonebook")) {
		green_wrong += 1
		wrong.push(".phonebook")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Phonebooks are made of paper, so they belong in the 'Mixed Paper' bin."))
   		$(".instructions").append(new_row)
	}
	if (parent.hasClass("wrapping-paper")) {
		green_wrong += 1
		wrong.push(".wrapping-paper")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Wrapping paper is made of paper, so it belongs in the 'Mixed Paper' bin."))
   		$(".instructions").append(new_row)
	}

	if (parent.hasClass("plastic")) {
		blue_wrong += 1
		wrong.push(".plastic")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Plastic... is plastic, so it belongs in the 'Metal, Plastic, Glass, Cartons' bin!"))
   		$(".instructions").append(new_row)
	}
	if (parent.hasClass("glass")) {
		blue_wrong += 1
		wrong.push(".glass")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Glass... is glass, so it belongs in the 'Metal, Plastic, Glass, Cartons' bin!"))
   		$(".instructions").append(new_row)
	}
	if (parent.hasClass("aluminum-foil")) {
		blue_wrong += 1
		wrong.push(".aluminum-foil")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Aluminum foil is made of metal, so it belongs in the 'Metal, Plastic, Glass, Cartons' bin."))
   		$(".instructions").append(new_row)
	}
	if (parent.hasClass("drink-box")) {
		blue_wrong += 1
		wrong.push(".drink-box")
		// Display wrong message
		var new_row = $("<div class='row wrong-info'>")
		var new_col = $("<div class='col-md-12 wrong-info-text'>")
		$(new_row).append(new_col.text("***Drink boxes are cartons, so they belong in the 'Metal, Plastic, Glass, Cartons' bin."))
   		$(".instructions").append(new_row)
	}
}

function populateListsWithIncorrect() {
	// eliminate duplicates in wrong list
	wrong = jQuery.unique(wrong)

	$.each(wrong, function( index, value ) {
		if (value == ".ceramics") {
			ceramicslist.push("/static/images/ceramics.jpg")
		}
		if (value == ".styrofoam") {
			styrofoamlist.push("/static/images/styrofoam.jpg")
		}
		if (value == ".candy-wrapper") {
			wrapperlist.push("/static/images/candy-wrapper.jpg")
		}
		if (value == ".plastic-toys") {
			toylist.push("/static/images/plastic-toys.jpg")
		}

		if (value == ".paper") {
			paperlist.push("/static/images/paper.jpeg")
		}
		if (value == ".newspaper") {
			newspaperlist.push("/static/images/newspapers.jpeg")
		}
		if (value == ".phonebook") {
			phonebooklist.push("/static/images/phonebook.jpg")
		}
		if (value == ".wrapping-paper") {
			wrappinglist.push("/static/images/wrapping-paper.jpg")
		}

		if (value == ".plastic") {
			plasticlist.push("/static/images/plastic-bottles.png")
		}
		if (value == ".glass") {
			glasslist.push("/static/images/glass.jpg")
		}
		if (value == ".aluminum-foil") {
			aluminumlist.push("/static/images/aluminum-foil.jpg")
		}
		if (value == ".drink-box") {
			drinklist.push("/static/images/drink-box.jpeg")
		}
	})
}

$(document).ready(function(){
	makeAllNames()

	$(".black-bin-label").droppable({
		accept: function(d) { 
			if (d.parent().is(all)) 
				return true
	    },
		drop: function( event, ui ) {
			if(ui.draggable.parent().is(black)) {
				// Get dropped name
				var draggableId = ui.draggable.attr("id")

				if(ui.draggable.parent().hasClass("ceramics")) {
					var item = ceramicslist[ceramicslist.indexOf(draggableId)]
					ceramicslist.splice(ceramicslist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Any glass items other than glass bottles and jars")
					$(new_div_2).text("Mirrors, light bulbs, ceramics, glassware")
					$(new_div_1).append(new_div_2)
					$(new_div).append(new_div_1)
			   		$(".black-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("styrofoam")) {
					var item = styrofoamlist[styrofoamlist.indexOf(draggableId)]
					styrofoamlist.splice(styrofoamlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Styrofoam")
					$(new_div_2).text("Cups, egg cartons, trays")
					$(new_div_1).append(new_div_2)
					$(new_div).append(new_div_1)
			   		$(".black-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("candy-wrapper")) {
					var item = wrapperlist[wrapperlist.indexOf(draggableId)]
					wrapperlist.splice(wrapperlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Plastic- or wax-coated paper or cardboard")
					$(new_div_2).text("Candy wrappers, take-out containers")
					$(new_div_1).append(new_div_2)
					$(new_div).append(new_div_1)
			   		$(".black-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("plastic-toys")) {
					var item = toylist[toylist.indexOf(draggableId)]
					toylist.splice(toylist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Any plastic items other than plastic bottles, jugs and containers")
					$(new_div_2).text("Plastic toys, cups, bags, wrap")
					$(new_div_1).append(new_div_2)
					$(new_div).append(new_div_1)
			   		$(".black-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("heavily-soiled-paper")) {
					var item = heavilysoiledpaperlist[heavilysoiledpaperlist.indexOf(draggableId)]
					heavilysoiledpaperlist.splice(heavilysoiledpaperlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Heavily soiled paper")
					$(new_div_1).append(new_div_2)
			   		$(".black-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("soiled-paper")) {
					var item = soiledpaperlist[soiledpaperlist.indexOf(draggableId)]
					soiledpaperlist.splice(soiledpaperlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Soiled paper cups or plates")
					$(new_div_1).append(new_div_2)
			   		$(".black-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("used-napkins")) {
					var item = usednapkinslist[usednapkinslist.indexOf(draggableId)]
					usednapkinslist.splice(usednapkinslist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Used napkins, paper towels or tissues")
					$(new_div_1).append(new_div_2)
			   		$(".black-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("hardcover")) {
					var item = hardcoverlist[hardcoverlist.indexOf(draggableId)]
					hardcoverlist.splice(hardcoverlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Hardcover books")
					$(new_div_2).text("Recyclable only if the cover is removed")
					$(new_div_1).append(new_div_2)
					$(new_div).append(new_div_1)
			   		$(".black-title").append(new_div)
				}

				// Update the interface to display the new lists
				makeAllNames()
			} else {
				$(past_draggable).removeClass("red-border")
				$(past_draggable).addClass("gray-border")
				$(ui.draggable).removeClass("gray-border")
				$(ui.draggable).addClass("red-border")
				past_draggable = ui.draggable
				incorrectAnswer(ui.draggable.parent())
			}
		}
	})

	$(".green-bin-label").droppable({
		accept: function(d) { 
	        if (d.parent().is(all)) 
				return true
	    },
		drop: function( event, ui ) {
			if(ui.draggable.parent().is(green)) {
				// Get dropped name
				var draggableId = ui.draggable.attr("id")

				if(ui.draggable.parent().hasClass("paper")) {
					var item = paperlist[paperlist.indexOf(draggableId)]
					paperlist.splice(paperlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("White, colored and glossy paper")
					$(new_div_2).text("Staples OK, but not spiral bindings")
					$(new_div_1).append(new_div_2)
					$(new_div).append(new_div_1)
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("newspaper")) {
					var item = newspaperlist[newspaperlist.indexOf(draggableId)]
					newspaperlist.splice(newspaperlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Newspapers, magazines and catalogs")
					$(new_div).append(new_div_1)
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("phonebook")) {
					var item = phonebooklist[phonebooklist.indexOf(draggableId)]
					phonebooklist.splice(phonebooklist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Phone books, soft-cover books")
					$(new_div_2).text("Paperbacks, comic books, etc.")
					$(new_div_1).append(new_div_2)
					$(new_div).append(new_div_1)
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("wrapping-paper")) {
					var item = wrappinglist[wrappinglist.indexOf(draggableId)]
					wrappinglist.splice(wrappinglist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Wrapping paper")
					$(new_div_2).text("Remove ribbon and tape")
					$(new_div_1).append(new_div_2)
					$(new_div).append(new_div_1)
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("cardboard")) {
					var item = cardboardlist[cardboardlist.indexOf(draggableId)]
					cardboardlist.splice(cardboardlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Cardboard egg cartons and trays")
					$(new_div).append(new_div_1)
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("mail")) {
					var item = maillist[maillist.indexOf(draggableId)]
					maillist.splice(maillist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Mail and envelopes")
					$(new_div).append(new_div_1)
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("paper-bags")) {
					var item = paperbagslist[paperbagslist.indexOf(draggableId)]
					paperbagslist.splice(paperbagslist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Paper bags")
					$(new_div).append(new_div_1)
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("smooth-cardboard")) {
					var item = smoothcardboardlist[smoothcardboardlist.indexOf(draggableId)]
					smoothcardboardlist.splice(smoothcardboardlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Smooth cardboard")
					$(new_div_2).text("Shoe boxes, tubes from paper towel and toilet paper rolls, cardboard from product packaging. For food boxes, remove inside and outside plastic wrappers")
					$(new_div_1).append(new_div_2)
					$(new_div).append(new_div_1)
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("corrugated-cardboard")) {
					var item = corrugatedcardboardlist[corrugatedcardboardlist.indexOf(draggableId)]
					corrugatedcardboardlist.splice(corrugatedcardboardlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<li>")
					var new_div_1 = $("<ul>")
					var new_div_2 = $("<li>")
					$(new_div).text("Corrugated cardboard")
					$(new_div_2).text("If flattened boxes are large, place them next to the recycling bin")
					$(new_div_1).append(new_div_2)
					$(new_div).append(new_div_1)
			   		$(".green-title").append(new_div)
				}

				// Update the interface to display the new lists
				makeAllNames()
			} else {
				$(past_draggable).removeClass("red-border")
				$(past_draggable).addClass("gray-border")
				$(ui.draggable).removeClass("gray-border")
				$(ui.draggable).addClass("red-border")
				past_draggable = ui.draggable
				incorrectAnswer(ui.draggable.parent())
			}
		}
	})

	$(".blue-bin-label").droppable({
		accept: function(d) { 
	        if (d.parent().is(all)) 
				return true
	    },
		drop: function( event, ui ) {
			if(ui.draggable.parent().is(blue)) {
				// Get dropped name
				var draggableId = ui.draggable.attr("id")

				if(ui.draggable.parent().hasClass("plastic")) {
					var item = plasticlist[plasticlist.indexOf(draggableId)]
					plasticlist.splice(plasticlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<div>")
					$(new_div).text("Plastic ✔")
			   		$(".blue-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("glass")) {
					var item = glasslist[glasslist.indexOf(draggableId)]
					glasslist.splice(glasslist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<div>")
					$(new_div).text("Glass ✔")
			   		$(".blue-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("aluminum-foil")) {
					var item = aluminumlist[aluminumlist.indexOf(draggableId)]
					aluminumlist.splice(aluminumlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<div>")
					$(new_div).text("Aluminum Foil ✔")
			   		$(".blue-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("drink-box")) {
					var item = drinklist[drinklist.indexOf(draggableId)]
					drinklist.splice(drinklist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<div>")
					$(new_div).text("Drink Box ✔")
			   		$(".blue-title").append(new_div)
				}

				// Update the interface to display the new lists
				makeAllNames()
			} else {
				$(past_draggable).removeClass("red-border")
				$(past_draggable).addClass("gray-border")
				$(ui.draggable).removeClass("gray-border")
				$(ui.draggable).addClass("red-border")
				past_draggable = ui.draggable
				incorrectAnswer(ui.draggable.parent())
			}
		}
	})

	// User clicks 'RETAKE QUIZ WITH WRONG ANSWERS'
	$(function(){
		$(document).on("click", ".retake-button", function(){
			$(".wrong-message").remove()
			$(".retake-button").remove()
			populateListsWithIncorrect()
			makeAllNames()
			wrong = []
		})
	})
})