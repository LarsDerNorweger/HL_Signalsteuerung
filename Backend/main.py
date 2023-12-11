from machine import *
from utime import sleep
import clock
from ShiftRegister import ShiftRegister


class LED(clock.ClockSlave):
    pin: Pin

    def __init__(self, parent: clock.Clock, pin: int):
        super().__init__(parent)
        self.pin = Pin(pin, Pin.OUT)

    def __executeTick(self, phase: bool):
        super().__executeTick(phase)
        self.pin.value(1 if phase else 0)


c = clock.Clock(1)
LED(c, 25)
s = ShiftRegister(8, c, 11, 12, 13, 14, 15)
c.start()
s.setData([0, 0, 1, 1, 1, 1, 0, 0])
while True:
    sleep(1)
