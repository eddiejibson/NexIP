# NexIP

A lightweight javascript library to determine for quickly determining user's IPv6 and IPv4 addresses.

## Installing

You can either include the script as hosted on ip.nex.li:

	<script src="https://ip.nex.li/NexIP.js"></script>

Or [download the NexIP.js](https://ip.nex.li/NexIP.js), put it on your server and then include it.

## Functions

If you are intersted in a specific IP you can just use the `NexIP.getIPv4(callback, forgetOld)` or `NexIP.getIPv6(callback, forgetOld)` functions for IPv4 and IPv6, respectively.

Alternatively, if you're interested in both IPs, then use `NexIP.redetermineIPs(callback, forgetOld)`.

- `callback` is your javascript function that will be called once the IP is determined. In the case of `NexIP.getIPv4` and `NexIP.getIPv6` the argument given to your function is the IPv4 or IPv6, respectively.
- `forgetOld` will tell the library that you don't want to use the already-determined IP, if applicable.

## The variables

With the callback of `NexIP.getIPv4` and `NexIP.getIPv6` and `NexIP.ipv4` and `NexIP.ipv6` you will get an IP address. In most cases, this should be a string. However, it could also be `null` or `undefined`:

- `null` means that the IP could not be determined do to an error, most likely because the user doesn't have an IP address of that kind.
- `undefined` mean that the IP was not yet determined. This will only happen if you ask `NexIP.ipv4` and `NexIP.ipv6` directly.
