#
# HL_Signal_Steuerung BA-Glauchau
#
# Author(s): Colin Böttger
#

import http.server
import socketserver
import sys
import io
import shutil
import function.function
import time , sched
from  function.WebSite import getSite
from html import unescape
from threading import Thread
PORT = 8000
http.server.SimpleHTTPRequestHandler

class Handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        print(self.headers.get_filename())
        self.send_response(http.HTTPStatus.OK)
        print(self.__dict__)
        (mime,res) = function.function.process_get(*get_param(self.path))
        self.send_header("Content-type", mime)
        encoded =  res.encode(sys.getfilesystemencoding(), 'surrogateescape')
        f = io.BytesIO()
        f.write(encoded)
        f.seek(0)
        self.end_headers()
        shutil.copyfileobj(f, self.wfile)
        f.close()

def get_param(path:str):
    if path.find("?")<0:
        return (path,{})
    (path,param) = path.split("?")

    res = {}
    for p in param.split(" "):
        k,v = p.strip().split("=")
        v = None if v == "" else unescape(v.strip())    
        res[k.strip()] = v; 
    
    return (path,res)


scet = {}
def scetule(function,timeInS):
    t = time.time()+timeInS
    if(scet[t]is not None):
        scet[t].append(function)
    else: scet[t] = [function]
    


with socketserver.TCPServer(("localhost", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()