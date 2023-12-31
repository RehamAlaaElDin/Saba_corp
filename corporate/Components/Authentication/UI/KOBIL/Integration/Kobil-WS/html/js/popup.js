/*
 * Copyright (c) TEMENOS HEADQUARTERS SA, All rights reserved.
 *
 * This source code is protected by copyright laws and international copyright treaties,
 * as well as other intellectual property laws and treaties.
 *  
 * Alteration, duplication or redistribution of this source code in any form 
 * is not permitted without the prior written authorisation of TEMENOS HEADQUARTERS SA.
 * 
 */

var timeout = 2000;

var skipcycle = false;

function initPopup()  {
	if (!this["beforeInitPopup"] || beforeInitPopup() ) {
		if (document.addEventListener) {
			document.addEventListener("keydown", function(e){
				return handleRefresh(e);
			});
		} else {
			document.attachEvent( "onkeydown",  function(e){
				return handleRefresh(e);
			});
		}
	}

	if ( this["afterInitPopup"] ){
		afterInitPopup();
	}
}


function handleRefresh(e) {
	if (e.which == 116 || e.keyCode == 82 && e.ctrlKey) { //116 = F5
		e.stopPropagation();
		e.preventDefault();
		document.location.reload();
		return false;
   }
}

function cancelCallerPopup(ns, pageno, pageKey, pageValue, event)
{
  if (!getVariable(ns, 'hasSubmitted') && (!event.clientX || event.clientX < -3000 || event.clientY < 0))
  {
	  try{
		window.opener.cancelpopup(ns, pageno, pageKey, pageValue, "CANCELPOPUP");
	  }
	  catch (e){}
	  try{
		window.close();
	  }
	  catch (e){}	  
  }
}


function fcsOnMe()
{
  if (!skipcycle)
  {
    window.focus();
  }
  mytimer = setTimeout('fcsOnMe()', timeout);
}