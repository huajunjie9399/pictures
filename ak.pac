function FindProxyForURL(url, host) {
if (dnsDomainIs(host, "ak-gs-gf.hypergryph.com")) {
  return "PROXY 192.168.137.1:12450";
}
  return "DIRECT";
}
