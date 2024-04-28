from phew import server
from function.WifiAndTimeSetup import Setup
from WebSite import getSite

import machine
import json

# Connect to Wifi and safe current time to Pico RTC
Setup()

# load blank page
@server.route("", methods=["GET"])
def get_blankpage(request):
    return getSite(), 200

@server.catchall()
def catchall(request):
  return "Not found", 404

server.run(host="0.0.0.0", port=8001)