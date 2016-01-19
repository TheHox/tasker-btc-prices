//poloniex.js, parses poloniex API data for use with tasker.
//We're parsing the saved data from poloniex (https://poloniex.com/public?command=returnTicker) that should be in the %HTTPD variable. 

result = JSON.parse(global('HTTPD'));
setGlobal('CURRENTVTC', result.BTC_VTC.last);
setGlobal('VTCVOL', result.BTC_VTC.quoteVolume);

setGlobal('CURRENTETH', result.BTC_ETH.last);
setGlobal('ETHVOL', result.BTC_ETH.quoteVolume);

setGlobal('CURRENTETH', result.BTC_DASH.last);
setGlobal('ETHVOL', result.BTC_DASH.quoteVolume);
