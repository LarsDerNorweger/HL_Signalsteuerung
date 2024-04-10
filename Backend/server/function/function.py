#
# HL_Signal_Steuerung BA-Glauchau
#
# Author(s): Colin Böttger
#

import function.WebSite as WebSite
import function.api as API
from  function.logic import Logic

from json import dumps,loads
def process_get(path:str,parameters:dict,logic:Logic):
    path = path[1:]
    print("Param",parameters)

    print("PATH",path)
    if(path in ["index.htm","index.html",""]):
        return ("text/html",WebSite.getSite())
    
    if(path == "api/v1/state"):
        return ("text/json",dumps(API.get_state(logic).__dict__))
    
    return ("text/plain","Test") 