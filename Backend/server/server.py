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
from  function.WebSite import getSite

PORT = 8001
http.server.SimpleHTTPRequestHandler

class Handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        print(self.headers.get_filename())
        self.send_response(http.HTTPStatus.OK)
        (mime,res) = function.function.process_get(self.path)
        self.send_header("Content-type", mime)
        encoded =  res.encode(sys.getfilesystemencoding(), 'surrogateescape')
        f = io.BytesIO()
        f.write(encoded)
        f.seek(0)
        self.end_headers()
        shutil.copyfileobj(f, self.wfile)
        f.close()



with socketserver.TCPServer(("localhost", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()