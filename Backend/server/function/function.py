#
# HL_Signal_Steuerung BA-Glauchau
#
# Author(s): Colin Böttger
#

import function.WebSite as WebSite

def process_get(path:str):
    path = path[1:]

    print("PATH",path)
    if(path in ["index.htm","index.html",""]):
        return ("text/html",WebSite.getSite())
    return ("text/plain","Test") 