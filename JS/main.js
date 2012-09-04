//Angela Koepplinger
//Visual Frameworks: Term 1209
// Project 2: Web App Part 2
//Date: 09/03/12


//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementById Function
	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}


	//Create select field element and populate with options.
	function makeCats(){
		var formTag = document.getElementsByTagName("form");   //formTag is an array of all of the form tags.
		var selectLi = $('select');
		var makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups")
		
		for(var i=0, j=purchaseTypeOptions.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = purchaseTypeOptions[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);

		};
		selectLi.appendChild(makeSelect);
	};



	//Variable defaults
	var purchaseTypeOptions = ["Select A Type", "Maintenance", "Product"];
	makeCats();




	//Set Link & Submit Click Events
	// var displayData = $('displayData');
	// displayData.addEventLister("click", getData);
	// var clearData = $('clearData');
	// clearData.addEventLister("click", clearLocal);
	// var save = $('submit');
	// submit.addEventLister('click', storeData);


});














































/*JavaScript: Save Data

Now let's make our form actually do something. Let's have it save data submitted through 
your form into Local Storage.

Requirements

Use an external .js file
Write a saveData function that saves all data input into the form into Local Storage.
This means the values for your input, select, radio or checkboxes etc.
You should also save a key(random number) for your values(array or object). Each 
saved entry will be a key:value pair.
The key should be a random number which will create a unique id.
The value should be an array or object that contains all the values of your form 
field data.
This allows for our form to save multiple submissions into Local Storage without 
overwriting data.
Remember you can test your local storage by using the Web Inspector

JavaScript: Get Data

So now that we have items saved into Local Storage. But that's not really useful to our 
user's since they can't see what they saved. That means we need to list out our saved data 
onto the screen.

Requirements

Once data has been submitted through the form, we can grab the data submitted from 
Local Storage. List out your saved data from Local Storage on the additem.html document using 
the Display Data link you created. Make sure you hide the form when you display your data on 
screen as shown in the example screenshots. You can use these the following screenshots as a 
guideline. Your project's screen will vary from this example based on your topic.
 Form filled out before submission.
 Form has been submitted, form is now hidden, and data is displayed.

JavaScript: Clear Data

Now that data is stored in local storage, we need a way to delete the data.

Requirements

Create a function that removes all data from local storage.
Be sure to create a clear data link or button in your app that runs the function 
that removes all data.

JavaScript: Array Function

Write an array function(s) that populates at least one select form element. 
This probably will be for your categories but you may have more select fields for other things 
depending on the topic you chose. This will REPLACE your static HTML select element(s) so that 
you can see an alterative way to create HTML elements. */




