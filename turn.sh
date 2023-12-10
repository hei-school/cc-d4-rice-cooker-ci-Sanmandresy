#!/bin/bash

turn_on_orr_off(){
    if [ "$rice_cooker_power" == "off"  ]; then
        rice_cooker_power="on"
        echo "Rice cooker turned on"
    else 
        rice_cooker_power="off"
        echo "Rice cooker turned off"
    fi
}