$%if PRESENTATIONTYPE != Portlet || IS_RUNPREVIEW == "Y"$
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
$%SET CURRENT_LANGUAGE_ISO_CODE$$%IF LANGUAGE_MAP_CODE != ''$$$LANGUAGE_MAP_CODE$$%ELSE$en$%ENDIF$$%ENDSET$
  <html dir="$$PRESENTATIONTYPE.LAYOUTDIRECTION$" xmlns="http://www.w3.org/1999/xhtml" xml:lang="$$!CURRENT_LANGUAGE_ISO_CODE$" lang="$$!CURRENT_LANGUAGE_ISO_CODE$" >
    <head>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
      <meta name="author" content="Temenos"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Temenos $$PRESENTATIONTYPE$ $$PHASE$ $%IF !VALIDATION_ERROR_COUNT > 0$ - $$!VALIDATION_ERROR_COUNT$ problems exist in your phase.$%ENDIF$</title>
      <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"/>
                $$HEADCONTENT$

        $%IF DEVICE_INFO.isHybrid == "Y"$
            <script type="text/javascript" src="html/js/cordova/cordova_loader.js"></script>
        $%ENDIF$

    </head>
    <body class="BrowserWindow">
$%endif$
$%if PRESENTATIONTYPE != "Pure HTML" && PRESENTATIONTYPE != "Accessibility Compliant"$
        <!-- UNCOMMENT IFRAME IF USING AUTOCOMPLETE - PROVIDES WORK-AROUND FOR IE6 ISSUE -->
    <!--iframe id="ec_suggest_iframe" style="position:absolute; left:0; top:0px; width:0px; height: 0px; " ></iframe-->
    <form id="$$NAMESPACE$form1" method="post" action="$$ACTIONURL$" onsubmit="return false;">
      <div><input type="hidden" name="MODE"/></div>
      $%if PRESENTATIONTYPE == "Offline"$
      	<div><input type="hidden" name="PAGE" value="$$PAGE$"/></div>
      $%ELSE$
      	<div><input type="hidden" name="$$PAGE_KEY$" value="$$PAGE_VAL$"/></div>
      $%ENDIF$
	  <div><input type="hidden" name="MENUSTATE"/></div>
$%else$
    <form id="$$NAMESPACE$form1" method="post" action="$$ACTIONURL$">
      <div style="display: none;"><input type="text" name="MODE"/></div>
      <div style="display: none;"><input type="text" name="$$PAGE_KEY$" value="$$PAGE_VAL$"/></div>
      <div style="display: none;"><input type="text" name="MENUSTATE"/></div>
$%endif$
  $%if IN_POPUP != "Y"$ <!-- don't show the branding in a popup -->
      <div class="Banner" ></div>
$%endif$
      <!-- To center the contents of your form, set style="text-align:center;" on the form tag (works in IE), 
          and style="margin-left:auto; margin-right:auto;" on the following table (works in Mozilla) -->
          $%IF PRESENTATIONTYPE.LAYOUTCONTROL == "HTML Divs" || PRESENTATIONTYPE.LAYOUTCONTROL == "HTML DispInlineBlock"$
              <div style="width: 100%">
                      $%IF !VALIDATION_ERROR_COUNT = 1$<div class='errorMessageRed'>1 problem exist in your phase.</div>$%ENDIF$
                      $%IF !VALIDATION_ERROR_COUNT > 1$<div class='errorMessageRed'>$$!VALIDATION_ERROR_COUNT$ problems exist in your phase.</div>$%ENDIF$
          $%else$
              <table cellpadding="0" cellspacing="0" border="0" width="100%" summary="edgeConnect Layout">
                      $%IF !VALIDATION_ERROR_COUNT = 1$<tr><td class='errorMessageRed'>1 problem exist in your phase.</td></tr>$%ENDIF$
                      $%IF !VALIDATION_ERROR_COUNT > 1$<tr><td class='errorMessageRed'>$$!VALIDATION_ERROR_COUNT$ problems exist in your phase.</td></tr>$%ENDIF$
          $%endif$