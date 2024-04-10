#
# HL_Signal_Steuerung BA-Glauchau
#
# Author(s): Colin Böttger
#

from  function.state import  State
from function.logic import Logic

def get_state(logic:Logic):
    return logic.get_state()

def set_state(state:State,logic:Logic):
    logic.set_state(state)
    return logic.get_state()


def get_run_time():
    return ""