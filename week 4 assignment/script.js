var names=new Array();
names[0]="Hemant";
names[1]="John";
names[2]="Jan";
names[3]="joson";
names[4]="paal";
names[5]="frank";
names[6]="janki";
names[7]="paula";
names[8]="laura";
names[9]="janvi";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
