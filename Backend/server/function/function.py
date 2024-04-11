#
# HL_Signal_Steuerung BA-Glauchau
#
# Author(s): Colin Böttger
#

import function.WebSite as WebSite
import function.api as API
from  function.logic import Logic

from json import dumps
def process_get(path:str,parameters:dict,logic:Logic):
    path = path[1:]
    print("Param",parameters)

    print("PATH",path)
    if(path in ["index.htm","index.html",""]):
        return ("text/html",WebSite.getSite())
    
    if(path == "api/v1/state"):
        d = parameters.get("data")
        if d  is not None:
            
            return ("text/json",dumps(API.set_state(d.replace('%22','"'),logic).__dict__))
        else: return ("text/json",dumps(API.get_state(logic).__dict__))
    
    return ("text/plain","Test") 