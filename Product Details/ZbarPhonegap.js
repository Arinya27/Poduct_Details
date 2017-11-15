function ZbarPlug() {
}


ZbarPlug.prototype.getQrCode = function () {
	PhoneGap.exec("ZbarPlug.showZbar");
};

PhoneGap.addConstructor( function () 
{
  if (typeof window.plugins == 'undefined')
    window.plugins = {};
  if( typeof window.plugins.ZbarPlug == 'undefined' )
    window.plugins.ZbarPlug = new ZbarPlug();
});

