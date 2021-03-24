/* Create an online order form for a pizza company - CA Web Design & Client Side Scripting 
	@Author Karen O' Donoghue 20144148 NCI HDSEP_DEV 20.11.2020.
*/

//supersize warning - if supersize clicked user will be warned and asked to confirm choice
function choiceSuper(select){
	if(select.options[select.selectedIndex].value=="super"){
		alert("Are you sure you want to order a supersize pizza?");
	}
}

//hide & show order block  - JQuery to hide the order section until the user logs in.  https://beginnersbook.com/2019/04/jquery-effects-show-and-hide/
$('document').ready(function() {
    $('#order').hide();
    $('#logIn').submit(function(e) {
        $('#order').show();
		$('#logIn').hide();
        e.preventDefault();
    });
});

//input validation for the order part 
function calculation(){
	var total=0;
	var q = (document.getElementById('qty').value);
	var d = (document.getElementById('disc').value);
	
	//check size of the pizza the user has chosen and update total variable
	if(document.getElementById('selectPizza').value=="None"){
		alert("Please choose your pizza size");
		return;
	}else if(document.getElementById('selectPizza').value=="large"){
		total = total + 5.00;
	}else if(document.getElementById('selectPizza').value=="extra"){
		total = total + 7.00;
	}else if(document.getElementById('selectPizza').value=="super"){
		total = total + 17.00;
	}
	
	//validate quantity ordered - must be greater than 1 - user will be prompted if left empty, 0 or negative number
	if (q < 1){
	alert("Please enter a quantity")
	return;
	}	
	
	//calculate discount code if the text 'extracheese' is added to the discount box, If discount code is not input, this code below will not be executed
	if (d == 'extracheese'){
		var c = total * 0.1;
		total = total - c;
	}	
	
	/*confirmation of order & display price - Customer is prompted to confirm their order price - they can click OK or CANCEL. If they click ok
	 a prompt box will thank them for their order. If they click cancel it will bring them back to the order page*/
	 
	 //the total price cell in the order table will be also updated with the total price. 
	 //button value will change text on confirmation and disable submit button
	
	var x;
	if(confirm("Please confirm that you wish to place your order" +
	"\n      Your total price is: €"+(total*q).toFixed(2))==true){
		x = "Thanks for your order. Your tasty pizza will be with you shortly";
			document.getElementById("totalPrice").innerHTML=("€"+(total * q).toFixed(2));
		alert("Thank you for your order. \n Your tasty pizza will be with you shortly")
		document.getElementById("submit").value="Order complete";
		document.getElementById("submit").disabled = true;

		return;
	}else{
		document.getElementById("totalPrice").innerHTML=("€"+(total * q).toFixed(2));
	}

}

	








	
/* NOTES*/	
		
		
/*hide and show price block - not working as it overrides the calculation fuctions. Try and fix
$('document').ready(function() {
    $('#hidePrice').hide();
    $('#logIn').submit(function(e) {
        $('#hidePrice').show();
        e.preventDefault();
    });
});
*/



	

