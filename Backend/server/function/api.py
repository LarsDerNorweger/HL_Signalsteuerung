#
# HL_Signal_Steuerung BA-Glauchau
#
# Author(s): Colin Böttger
#

from  function.state import  State
from function.logic import Logic
from json import loads
def get_state(logic:Logic):
    return logic.get_state()

def set_state(data:str,logic:Logic):
    tmp:dict = loads(data)
    s = State()
    for i in s.__dict__.keys():
        t = tmp.get(i)
        if t is not None:
            s.__dict__[i]  = t

    print(s)
    logic.set_state(s)
    return logic.get_state()


def get_run_time():
    return ""