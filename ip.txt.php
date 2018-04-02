<?php
if($_SERVER["REQUEST_METHOD"] != "GET")
{
	http_response_code($_SERVER["REQUEST_METHOD"] == "OPTIONS" ? 204 : 405);
	header("Allow: OPTIONS, GET");
	exit;
}

header("Cache-Control: private, max-age=5");
header("Content-Type: text/plain");

echo(isset($_SERVER["HTTP_CF_CONNECTING_IP"])?$_SERVER["HTTP_CF_CONNECTING_IP"]:$_SERVER['REMOTE_ADDR']);
