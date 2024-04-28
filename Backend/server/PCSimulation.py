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
from function.PicoWRegLogicImp import showSignal
from function.logic import Logic
from html import unescape
from threading import Thread
PORT = 8001



scet = {}
def scetule(function,timeInS):
    t = time.time()+timeInS
    v = scet.get(t)
    if(v is not None):
        v.append(function)
    else: scet[t] = [function]

def performScetule():
    global scet
    while(True):
        time.sleep(.1)
        t = time.time()
        stamps = list(filter(lambda x:x<=t,scet.keys())) 
        for s in stamps:
            for cb in scet[s]:
                cb() 
            scet.__delitem__(s)

def show(signal:str):
    print("SHOW",signal)
    # uncomment when running on PicoW
    #showSignal(signal)



class Handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        print(self.headers.get_filename())
        self.send_response(http.HTTPStatus.OK)
        print(self.__dict__)
        
        (mime,res) = function.function.process_get(*get_param(self.path),logic)
        
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


logic = Logic(show,scetule)

th = Thread(target=performScetule)
th.start()

with socketserver.TCPServer(("localhost", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()