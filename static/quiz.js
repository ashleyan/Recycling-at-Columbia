// further implementation ideas
// making "why wrong" descriptions more readable
// rn it tells total Qs wrong (but includes each retake instead of per retake)
// have a quiz that includes ALL the images as well
// have a gallery that includes ALL the images to drag
// replacing "drag items to correct bin" text with "why wrong" descriptions
// put name of bin underneath bin
// make users look at bin info page that contains the most amount of Qs they got wrong
// shuffle quiz pictures
// make end of quiz have print out certificate

var ceramicslist = ["/static/images/ceramics.jpg"]
var styrofoamlist = ["/static/images/styrofoam.jpg"]
var wrapperlist = ["/static/images/candy-wrapper.jpg"]
var toylist = ["/static/images/plastic-toys.jpg"]

var paperlist = ["/static/images/paper.jpeg"]
var newspaperlist = ["/static/images/newspapers.jpeg"]
var phonebooklist = ["/static/images/phonebook.jpg"]
var wrappinglist = ["/static/images/wrapping-paper.jpg"]

var plasticlist = ["/static/images/plastic-bottles.png"]
var glasslist = ["/static/images/glass.jpg"]
var aluminumlist = ["/static/images/aluminum-foil.jpg"]
var drinklist = ["/static/images/drink-box.jpeg"]

var all = ".ceramics, .styrofoam, .candy-wrapper, .plastic-toys, .paper, .newspaper, \
			.phonebook, .wrapping-paper, .plastic, .glass, .aluminum-foil, .drink-box"
var black = ".ceramics, .styrofoam, .candy-wrapper, .plastic-toys"
var green = ".paper, .newspaper, .phonebook, .wrapping-paper"
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
		var new_cap = $("<figcaption class='caption'>")
		new_cap.text(caption)
		new_row.append(new_img).append(new_cap)
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
			var new_sub_row = $("<div class='row'>")
			var new_sub_col = $("<div class='col-md-12 congrats'>")
			$(new_sub_row).append(new_sub_col.text("Congratulations, you have mastered the quiz!"))
			$(new_col).append(new_sub_row)
			$(new_row).append(new_col)
	   		$(".instructions").append(new_row)
	   		$("#backtohome").toggle();
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
					var new_div = $("<div>")
					$(new_div).text("Ceramics ✔")
			   		$(".black-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("styrofoam")) {
					var item = styrofoamlist[styrofoamlist.indexOf(draggableId)]
					styrofoamlist.splice(styrofoamlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<div>")
					$(new_div).text("Styrofoam ✔")
			   		$(".black-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("candy-wrapper")) {
					var item = wrapperlist[wrapperlist.indexOf(draggableId)]
					wrapperlist.splice(wrapperlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<div>")
					$(new_div).text("Candy Wrapper ✔")
			   		$(".black-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("plastic-toys")) {
					var item = toylist[toylist.indexOf(draggableId)]
					toylist.splice(toylist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<div>")
					$(new_div).text("Plastic Toys ✔")
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
					var new_div = $("<div>")
					$(new_div).text("Paper ✔")
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("newspaper")) {
					var item = newspaperlist[newspaperlist.indexOf(draggableId)]
					newspaperlist.splice(newspaperlist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<div>")
					$(new_div).text("Newspaper ✔")
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("phonebook")) {
					var item = phonebooklist[phonebooklist.indexOf(draggableId)]
					phonebooklist.splice(phonebooklist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<div>")
					$(new_div).text("Phonebook ✔")
			   		$(".green-title").append(new_div)
				} else if (ui.draggable.parent().hasClass("wrapping-paper")) {
					var item = wrappinglist[wrappinglist.indexOf(draggableId)]
					wrappinglist.splice(wrappinglist.indexOf(draggableId), 1)
					// Add correct to bin
					var new_div = $("<div>")
					$(new_div).text("Wrapping Paper ✔")
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
			$(".black-title").empty()
			$(".green-title").empty()
			$(".blue-title").empty()
			populateListsWithIncorrect()
			makeAllNames()
			wrong = []
		})
	})
})