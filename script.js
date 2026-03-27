const makeChange = (c) => {
  // your name here
	let q=0,d=0,n=0,p=0;
	if(c>0&&c<25)
	{
		q=0;
	}
	else if(c>=25&&c<50){
		q=1;
	}
	else if(c>=50&&c<75)
	{
		q=2;
	}
	else
	{
		q=4;
	}
     c=c-(q*25);
if(c>0&&c<10)
{
	d=0;
}
else if(c>=10&&c<20)
{
	d=1;
}
else if(c>=20&&c<30)
{
	d=2;
}
c=c-(d*10);
if(c>0&&c<5)
{
	n=0;
}
else if(c>=5&&c<10)
{
	n=1;
}
	else if(c>=10&&c<15)
	{
		n=2;
	}
else if(c>=15&&c>20)
{
	n=3;
}
c=c-(n*5);
	p=c;
c=c-(p*1);	
let obj={
q:q,
	d:d,
	n:n,
	p:p};
	return obj;}

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
