let NexIPObject = function()
{
	this.ipv4 = undefined;
	this.ipv6 = undefined;
};
NexIPObject.prototype.redetermineIPs = function(callback, forgetOld)
{
	if(typeof callback != "function")
	{
		callback = function(){};
	}
	if(forgetOld === true)
	{
		this.ipv4 = undefined;
		this.ipv6 = undefined;
	}
	let that = this;
	this.getIPv6(function()
	{
		if(that.ipv4 === undefined)
		{
			that.getIPv4(function()
			{
				callback();
			}, forgetOld);
		}
		else
		{
			callback();
		}
	}, forgetOld);
};
NexIPObject.prototype.getXHR = function()
{
	if(window.XMLHttpRequest)
	{
		return new XMLHttpRequest();
	}
	else
	{
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
};
NexIPObject.prototype.getIPv4 = function(callback, forgetOld)
{
	if(typeof callback != "function")
	{
		callback = function(){};
	}
	if(forgetOld === true)
	{
		this.ipv4 = undefined;
	}
	if(this.ipv4 === undefined)
	{
		let that = this, xhr = this.getXHR();
		xhr.onreadystatechange = function()
		{
			if(this.readyState == 4)
			{
				that.ipv4 = this.responseText;
				callback(that.ipv4);
			}
		};
		xhr.onerror = function()
		{
			that.ipv4 = null;
			callback(null);
		};
		xhr.ontimeout = xhr.onerror;
		xhr.open("GET", "https://ip.nex.li/ipv4-director", true);
		xhr.send(null);
	}
};
NexIPObject.prototype.getIPv6 = function(callback, forgetOld)
{
	if(typeof callback != "function")
	{
		callback = function(){};
	}
	if(forgetOld === true)
	{
		this.ipv6 = undefined;
	}
	if(this.ipv6 === undefined)
	{
		let that = this, xhr = this.getXHR();
		xhr.onreadystatechange = function()
		{
			if(this.readyState == 4)
			{
				if(this.responseText.indexOf(":") > -1)
				{
					that.ipv6 = this.responseText;
					callback(that.ipv6);
				}
				else
				{
					that.ipv4 = this.responseText;
					that.ipv6 = null;
					callback(null);
				}
			}
		};
		xhr.onerror = function()
		{
			that.ipv4 = null;
			that.ipv6 = null;
			callback(null);
		};
		xhr.ontimeout = xhr.onerror;
		xhr.open("GET", "https://ip.nex.li/ip.txt", true);
		xhr.send(null);
	}
};
window.NexIP = new NexIPObject();
