Your Standing orders

Customer Number:  $$InputParameters[1].CustomerNo$

Payee Name,Payee Account,Currency,Amount,Frequency,Next Payment,End Date
$%for 1 to StandingOrderList[C].lastInstance() $$$StandingOrderList[C].ToAcctName$,$$StandingOrderList[C].ToAcctNo$,$$StandingOrderList[C].Currency$,$$StandingOrderList[C].CurrentAmountBal$,$$StandingOrderList[C].Frequency$,$$StandingOrderList[C].CurrFreqDate$,$$StandingOrderList[C].CurrentEndDate$
$%endfor$