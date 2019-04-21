// final product should be 5-10 min long

// maybe
// smaller bin drop targets
// put name of bin underneath bin
// populate bins with pictures once they are dragged to correct bin
// make users look at bin info page that contains the most amount of Qs they got wrong
// shuffle quiz pictures

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

function makeNames(names, class_name, caption) {
	$(class_name).empty()
	$.each(names, function( index, value ) {
		// Make the draggable name object
		var new_row = $("<figure class='move' id='" + value + "'>")
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
			alert("You got " + number_wrong + " answers wrong in total: " + black_wrong + 
				" of your answers should've been in the black bin, " + green_wrong + 
				" of your answers should've been in the green bin, and " + blue_wrong +
				" of your answers should've been in the blue bin.")
			// Make retake quiz button
			var new_button = $("<div>")
			var button = $("<button class='btn btn-warning retake-button'>")
			$(new_button).append(button.text("RETAKE QUIZ WITH WRONG ANSWERS"))
	   		$(".right-bin").append(new_button)
   		} else {
   			alert("Congratulations, you have mastered the quiz!")
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
	number_wrong += 1
	if (parent.hasClass("ceramics")) {
		black_wrong += 1
		wrong.push(".ceramics")
		alert("Ceramics actually belong in the BLACK bin!") 
		alert("According to Waste Management, the presence of ceramics like coffee mugs and plates in a batch of your typical, curbside-recyclable glass will weaken the recycled product, which is why ceramics aren’t usually accepted.")
	}
	if (parent.hasClass("styrofoam")) {
		black_wrong += 1
		wrong.push(".styrofoam")
		alert("Styrofoam actually belongs in the BLACK bin!")
		alert("Styrofoam is a Dow Chemical Company trademark for a specific type of extruded polystyrene (EPS) foam used only for art supplies and insulation. There are two reasons EPS isn’t allowed in recycle bins: density and contamination. Polystyrene foam is 95% air so it is not cost-effective to store or ship. It is often contaminated with food or drink, and it is difficult to clean because it is so porous.")
	}
	if (parent.hasClass("candy-wrapper")) {
		black_wrong += 1
		wrong.push(".candy-wrapper")
		alert("Candy wrappers actually belong in the BLACK bin!")
		alert("Candy wrappers are usually made up of mixed materials, making the recovery of useful materials difficult and expensive. As a result, most waste management companies, manufacturers and municipal recycling facilities tend to turn their backs from candy wrappers.")
	}
	if (parent.hasClass("plastic-toys")) {
		black_wrong += 1
		wrong.push(".plastic-toys")
		alert("Plastic toys actually belong in the BLACK bin!")
		alert("Plastic toys pose a unique challenge because they're typically composed of other materials too, such as metals. The recyclable components can't be separated out, and become prohibitive for recycling centers.")
	}

	if (parent.hasClass("paper")) {
		green_wrong += 1
		wrong.push(".paper")
		alert("Paper actually belongs in the GREEN bin!")
		alert("Paper... is paper, so it belongs in the 'Mixed Paper' bin.")
	}
	if (parent.hasClass("newspaper")) {
		green_wrong += 1
		wrong.push(".newspaper")
		alert("Newspapers actually belong in the GREEN bin!")
		alert("Newspapers are made of paper, so they belong in the 'Mixed Paper' bin.")
	}
	if (parent.hasClass("phonebook")) {
		green_wrong += 1
		wrong.push(".phonebook")
		alert("Phonebooks actually belong in the GREEN bin!")
		alert("Phonebooks are made of paper, so they belong in the 'Mixed Paper' bin.")
	}
	if (parent.hasClass("wrapping-paper")) {
		green_wrong += 1
		wrong.push(".wrapping-paper")
		alert("Wrapping paper actually belongs in the GREEN bin!")
		alert("Wrapping paper is made of paper, so it belongs in the 'Mixed Paper' bin.")
	}

	if (parent.hasClass("plastic")) {
		blue_wrong += 1
		wrong.push(".plastic")
		alert("Plastic actually belongs in the BLUE bin!")
		alert("Plastic... is plastic, so it belongs in the 'Metal, Plastic, Glass, Cartons' bin!")
	}
	if (parent.hasClass("glass")) {
		blue_wrong += 1
		wrong.push(".glass")
		alert("Glass actually belongs in the BLUE bin!")
		alert("Glass... is glass, so it belongs in the 'Metal, Plastic, Glass, Cartons' bin!")
	}
	if (parent.hasClass("aluminum-foil")) {
		blue_wrong += 1
		wrong.push(".aluminum-foil")
		alert("Aluminum foil actually belongs in the BLUE bin!")
		alert("Aluminum foil is made of metal, so it belongs in the 'Metal, Plastic, Glass, Cartons' bin!")
	}
	if (parent.hasClass("drink-box")) {
		blue_wrong += 1
		wrong.push(".drink-box")
		alert("Drink boxes actually belong in the BLUE bin!")
		alert("Drink boxes are cartons, so they belong in the 'Metal, Plastic, Glass, Cartons' bin!")
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
				$(this).remove("red")
				$(this).addClass("black")
				$(".blue-bin-label").remove("red")
				$(".blue-bin-label").addClass("blue")
				$(".green-bin-label").remove("red")
				$(".green-bin-label").addClass("green")
				// Get dropped name
				var draggableId = ui.draggable.attr("id")

				if(ui.draggable.parent().hasClass("ceramics")) {
					var item = ceramicslist[ceramicslist.indexOf(draggableId)]
					ceramicslist.splice(ceramicslist.indexOf(draggableId), 1)
				} else if (ui.draggable.parent().hasClass("styrofoam")) {
					var item = styrofoamlist[styrofoamlist.indexOf(draggableId)]
					styrofoamlist.splice(styrofoamlist.indexOf(draggableId), 1)
				} else if (ui.draggable.parent().hasClass("candy-wrapper")) {
					var item = wrapperlist[wrapperlist.indexOf(draggableId)]
					wrapperlist.splice(wrapperlist.indexOf(draggableId), 1)
				} else if (ui.draggable.parent().hasClass("plastic-toys")) {
					var item = toylist[toylist.indexOf(draggableId)]
					toylist.splice(toylist.indexOf(draggableId), 1)
				}

				// Update the interface to display the new lists
				makeAllNames()
			} else {
				$(".blue-bin-label").remove("red")
				$(".blue-bin-label").addClass("blue")
				$(".green-bin-label").remove("red")
				$(".green-bin-label").addClass("green")
				$(this).removeClass("black")
				$(this).addClass("red")
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
				$(this).remove("red")
				$(this).addClass("green")
				$(".blue-bin-label").remove("red")
				$(".blue-bin-label").addClass("blue")
				$(".black-bin-label").remove("red")
				$(".black-bin-label").addClass("black")
				// Get dropped name
				var draggableId = ui.draggable.attr("id")

				if(ui.draggable.parent().hasClass("paper")) {
					var item = paperlist[paperlist.indexOf(draggableId)]
					paperlist.splice(paperlist.indexOf(draggableId), 1)
				} else if (ui.draggable.parent().hasClass("newspaper")) {
					var item = newspaperlist[newspaperlist.indexOf(draggableId)]
					newspaperlist.splice(newspaperlist.indexOf(draggableId), 1)
				} else if (ui.draggable.parent().hasClass("phonebook")) {
					var item = phonebooklist[phonebooklist.indexOf(draggableId)]
					phonebooklist.splice(phonebooklist.indexOf(draggableId), 1)
				} else if (ui.draggable.parent().hasClass("wrapping-paper")) {
					var item = wrappinglist[wrappinglist.indexOf(draggableId)]
					wrappinglist.splice(wrappinglist.indexOf(draggableId), 1)
				}

				// Update the interface to display the new lists
				makeAllNames()
			} else {
				$(".blue-bin-label").remove("red")
				$(".blue-bin-label").addClass("blue")
				$(".black-bin-label").remove("red")
				$(".black-bin-label").addClass("black")
				$(this).removeClass("green")
				$(this).addClass("red")
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
				$(this).removeClass("red")
				$(this).addClass("blue")
				$(".green-bin-label").remove("red")
				$(".green-bin-label").addClass("green")
				$(".black-bin-label").remove("red")
				$(".black-bin-label").addClass("black")
				// Get dropped name
				var draggableId = ui.draggable.attr("id")

				if(ui.draggable.parent().hasClass("plastic")) {
					var item = plasticlist[plasticlist.indexOf(draggableId)]
					plasticlist.splice(plasticlist.indexOf(draggableId), 1)
				} else if (ui.draggable.parent().hasClass("glass")) {
					var item = glasslist[glasslist.indexOf(draggableId)]
					glasslist.splice(glasslist.indexOf(draggableId), 1)
				} else if (ui.draggable.parent().hasClass("aluminum-foil")) {
					var item = aluminumlist[aluminumlist.indexOf(draggableId)]
					aluminumlist.splice(aluminumlist.indexOf(draggableId), 1)
				} else if (ui.draggable.parent().hasClass("drink-box")) {
					var item = drinklist[drinklist.indexOf(draggableId)]
					drinklist.splice(drinklist.indexOf(draggableId), 1)
				}

				// Update the interface to display the new lists
				makeAllNames()
			} else {
				$(".green-bin-label").remove("red")
				$(".green-bin-label").addClass("green")
				$(".black-bin-label").remove("red")
				$(".black-bin-label").addClass("black")
				$(this).removeClass("blue")
				$(this).addClass("red")
				incorrectAnswer(ui.draggable.parent())
			}
		}
	})

	// User clicks 'RETAKE QUIZ WITH WRONG ANSWERS'
	$(function(){
		$(document).on("click", ".retake-button", function(){
			$(".retake-button").remove()
			populateListsWithIncorrect()
			makeAllNames()
			wrong = []
		})
	})
})