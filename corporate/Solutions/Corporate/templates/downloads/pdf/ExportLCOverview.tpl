<pdf baseFont="Helvetica,Cp1252,false" charset=UTF-8>
<page>
<footer align="center" page="y"></footer>
<right><img src="$$PROJECTHOME$/images/TCIBIcons/img_logo.jpg" width="100" height="35"></img></right>
<center>
<br />
<br />
<font size="15">Export Letter Of Credit</font>
<br />
<br />
<font size="8">
<table width="100%" border="0" bordercolor="ffffff" cellspacing="2" cellpadding="4">
<tr>
<td bgcolor="95B3D7">User Name</td><td bgcolor="95B3D7">$$InputParameters[1].UserId$</td>
</tr>
<tr>
<td bgcolor="95B3D7">Transaction Reference</td><td bgcolor="95B3D7">$$InputParameters[1].ExportLetterOfCreditList[C].TransRef$</td>
</tr>
</table>

<div style="width:100%;clear:both;">
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
<tr><td rowspan="2"><font size="10"><b>LC Details</b></font></td></tr>
</table>
<font size="8">
<!---LC Details--->
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
  $%if LetterOfCreditOverview[C].Amount != ''$
  <tr>
     <td bgcolor="DBE5F1"><b>Document amount</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].Currency$ $$LetterOfCreditOverview[C].Amount$</td>
  </tr>
  $%endif$
   $%if LetterOfCreditOverview[C].Applicant_Details[C].ApplicantDetails != ''$
  <tr>
      	<td bgcolor="DBE5F1"><b>Applicant details</b></td>
		<td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].Applicant_Details[C].ApplicantDetails$</td>
  </tr>
   $%endif$
   $%if LetterOfCreditOverview[C].IssueDate != ''$
  <tr>
	 <td bgcolor="DBE5F1"><b>Issue date</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].IssueDate$</td>
 </tr>
 $%endif$
   $%if LetterOfCreditOverview[C].ExpiryDate != ''$ 
	<tr>
	    <td bgcolor="DBE5F1"><b>Expiry Date</b></td>
		<td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].ExpiryDate$</td>
	</tr>
   $%endif$
</table>
</font>
</div>

<div style="width:100%;clear:both;">
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
<tr><td rowspan="2"><font size="10"><b>Export LC Advising Summary</b></font></td></tr>
</table>
<font size="8">
<!---LC Details--->
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
  $%if LetterOfCreditOverview[C].PercentageDrAmt != ''$
  <tr>
     <td bgcolor="DBE5F1"><b>Tolerance -</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].PercentageDrAmt$</td>
  </tr>
  $%endif$
   $%if LetterOfCreditOverview[C].PercentageCrAmt != ''$
  <tr>
     <td bgcolor="DBE5F1"><b>Tolerance +</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].PercentageCrAmt$</td>
  </tr>
  $%endif$
  $%if LetterOfCreditOverview[C].MaximumCrAmt != ''$
  <tr>
     <td bgcolor="DBE5F1"><b>Maximum credit amount</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].MaximumCrAmt$</td>
  </tr>
  $%endif$
  $%if LetterOfCreditOverview[C].LatestShipment != ''$
  <tr>
     <td bgcolor="DBE5F1"><b>Latest shipment date</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].LatestShipment$</td>
  </tr>
  $%endif$
  $%if LetterOfCreditOverview[C].PayTypeEnrich != ''$
  <tr>
     <td bgcolor="DBE5F1"><b>Pay type</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].PayTypeEnrich$</td>
  </tr>
  $%endif$
  $%if LetterOfCreditOverview[C].IssBankRef != ''$
  <tr>
     <td bgcolor="DBE5F1"><b>Issuing bank reference</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].IssBankRef$</td>
  </tr>
  $%endif$
  $%if LetterOfCreditOverview[C].ConfirmInst != ''$
  <tr>
     <td bgcolor="DBE5F1"><b>Confirm Instructions</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].ConfirmInst$</td>
  </tr>
  $%endif$
  $%if LetterOfCreditOverview[C].IbReason[C].IbReason[C].IbReason != ''$
  <tr>
     <td bgcolor="DBE5F1"><b>Message from bank</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].IbReason[C].IbReason[C].IbReason$</td>
  </tr>
  $%endif$
  $%if LetterOfCreditOverview[C].PresentPeriod[C].PresentPeriod != ''$
  <tr>
     <td bgcolor="DBE5F1"><b>Presentation period</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].PresentPeriod[C].PresentPeriod$</td>
  </tr>
  $%endif$
</table>
</font>
</div>

$%if LetterOfCreditOverview[C].Beneficiary_Details[C].BeneficiaryDetails != ''$
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
<tr><td rowspan="2"><font size="10"><b>Beneficiary Details</b></font></td></tr>
</table>
<font size="8">
<div style="width:100%;clear:both;">
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
  <tr>
     <td bgcolor="DBE5F1"><b>Beneficiary name and address</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].Beneficiary_Details[C].BeneficiaryDetails$</td>
  </tr>
</table>
</div>
</font>
$%endif$

$%if LetterOfCreditOverview[C].IssuingBank[C].IssuingBank != ''$
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
<tr><td rowspan="2"><font size="10"><b>Issuing bank details</b></font></td></tr>
</table>
<font size="8">
<div style="width:100%;clear:both;">
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
  <tr>
     <td bgcolor="DBE5F1"><b>Issuing bank name and address</b></td>
	 <td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].IssuingBank[C].IssuingBank$</td>
  </tr>
</table>
</div>
</font>
$%endif$

$%if LetterOfCreditOverview[C].DescGoods[C].DescGoods != '' OR LetterOfCreditOverview[C].DocumentsReq[C].DocumentsReq != '' OR LetterOfCreditOverview[C].AdditionlConds[C].AdditionlConds != '' $
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
<tr><td rowspan="2"><font size="10"><b>Document & Terms</b></font></td></tr>
</table>
<font size="8">
<div style="width:100%;clear:both;">
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
  $%if LetterOfCreditOverview[C].DescGoods[C].DescGoods != ''$ 
	<tr>
	    <td bgcolor="DBE5F1"><b>Goods description</b></td>
		<td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].DescGoods[C].DescGoods$</td>
	</tr>
   $%endif$
  $%if LetterOfCreditOverview[C].DocumentsReq[C].DocumentsReq != ''$ 
	<tr>
	    <td bgcolor="DBE5F1"><b>Documents required</b></td>
		<td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].DocumentsReq[C].DocumentsReq$</td>
	</tr>
   $%endif$
   $%if LetterOfCreditOverview[C].AdditionlConds[C].AdditionlConds != ''$ 
	<tr>
	    <td bgcolor="DBE5F1"><b>Additional Conditions</b></td>
		<td bgcolor="DBE5F1">$$LetterOfCreditOverview[C].AdditionlConds[C].AdditionlConds$</td>
	</tr>
   $%endif$
</table>
</div>
</font>
$%endif$

<div style="width:100%;clear:both;">
<br/>
<table width="100%" border="1" bordercolor="ffffff" cellspacing="2" cellpadding="5" cellsfitpage="true">
<tr><td rowspan="2"><font size="10"><b>Swift Messages and Advices</b></font></td></tr>
</table>
$%if DeliveryAdvice[C].lastInstance() > 0$
<font size="8">
<table width="100%" border="0" bordercolor="ffffff" cellspacing="2" cellpadding="4">
  <tr>
  <td bgcolor="95B3D7"><b>Message Type</b></td>
  <td bgcolor="95B3D7"><b>Delivered To/From</b></td>
  <td bgcolor="95B3D7"><b>Date</b></td>
  <td bgcolor="95B3D7"><b>Inward / Outward</b></td>  
  </tr>
  $%for 1 to DeliveryAdvice[C].lastInstance() $
  <tr>
  <td bgcolor="DBE5F1">$$DeliveryAdvice[C].MessageType$</td>
  <td bgcolor="DBE5F1">$$DeliveryAdvice[C].ShortName$</td>
  <td bgcolor="DBE5F1">$$DeliveryAdvice[C].BankDate$</td>
  <td bgcolor="DBE5F1">$$DeliveryAdvice[C].MessageCategory$</td>
  </tr>
  $%endfor$
</table>
</font>
$%endif$
$%if DeliveryAdvice[C].lastInstance() == 0$
<font size="8">
<table width="100%" border="0" bordercolor="ffffff" cellspacing="2" cellpadding="4">
  <tr><td bgcolor="DBE5F1">There are no swift details to display</td></tr>
</table>
</font>
$%endif$
</div>

</center>
</page>
</pdf>