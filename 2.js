x=[-3,-1,0,1,2,3];
y=[];
z=[];
for ( i = 0; i < x.length; i++) {
  y[i] = 0.5 * x[i] + 2;
  z[i] = -1* x[i] + 5;
  document.write("<t class='red'>("+x[i]+","+y[i]+")</t>");

  document.write("<t class='blue'>(" + x[i] + "," + z[i] + ")</t>");
}
