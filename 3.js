x = [-3, -1, 0, 1, 2, 3];
y = [];
for (i = 0; i < x.length; i++) {
  y[i] = -x[i] + 5;
  document.write("(" + x[i] + "," + y[i] + ")");
}
