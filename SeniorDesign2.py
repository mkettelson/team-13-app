######################################################
# SeniorDesign1.py                                   #
# 4/17/2018 Megan Helms & Mitch Fitzpatrick          #
# Based off pyserialCommunicationV2.py               #
# With a Seeeduino or Arduino Yun plugged in         #
# to a serial port this program reads the serial     #
# values being passed and appends them to a txt file #
######################################################
import serial
import time
import re
import datetime
import sys
import socket
import atexit
from serial.tools import list_ports
import os
StartTime =  datetime.datetime.now().strftime("%m-%d")
print StartTime
filepath = os.path.dirname(os.path.realpath(__file__))
#gets the filepath this file is placed in and then displays it
print filepath

SerialPort = list(list_ports.grep('usbmodem1411'))[0][0]
#Searches all serial ports and finds the one named Arduino Yun. Should be COM1, COM2, etc
SessionNumber = raw_input("Enter in Session Number: ")
print 'Current COM port is: ' + SerialPort
ser = serial.Serial(str(SerialPort), 9600, timeout=0)
#make sure the baud rate is the same as your arduino program

print "Note - data is either 0 (no chew) or 1 (chew)"

while True:
    timeout = time.time() + 1
    FullArray = []
    #1 second long loop to collect data over that period and save to array
    while time.time() < timeout:
        try:
            data = ser.readline()
            list = re.search('^([0-1])$',data)
            FloatList = [int(x) for x in list.groups('0')]
            FullArray=FloatList
            #print FullArray
        except:
            time.sleep(.1)
    print FullArray
#   f = open(filepath + '\Chewing Session ' + SessionNumber + ' ' + StartTime + '.html','a+')
    f = open(filepath + '\Chewing Session.html','a+')
    f.truncate(0)
    chew = 0
    if (str(FullArray) == '[1]'):
        chew = 1
    if(chew == 1):
        f.write('1' + '\n')
    else:
        f.write('0' + '\n')
    FullArray=[]
    f.close()
atexit.register(serial.close())

