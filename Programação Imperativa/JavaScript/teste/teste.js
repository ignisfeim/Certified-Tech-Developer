short FirstTime
short Button
short Activated
short LastHour
set LastHour to -1

float fireDistance

if ( FirstTime == 0 )
	StartScript "sc_illegal_to_camp_script"
	set FirstTime to 1
endif

if ( OnActivate == 1 )
	set Activated to 1
	MessageBox "Decide what to do with your bedroll:" "Sleep in it" "Pack it Up" "Cancel"
endif