parseInt("100"); //= 100
parseInt("2019@marketkoin.com"); //= 2018
parseInt("marketkoin@2019"); //= NaN
parseInt("3.14"); //= 3
parseInt("21 7 2018"); //= 21
parseInt("100", 10); //= 100
parseInt("8", 8); //= NaN
parseInt("15", 8); //= 13
parseInt("16", 16); //= 22
parseInt(" 100 "); //= 100
parseInt("0x16"); //= 22
parseInt("10"); //= 10
parseInt("10.33"); //= 10
parseInt("10 20 30"); //= 10
parseInt("10 tahun"); //= 10
parseInt("tahun ke 10"); //= NaN
