#!/bin/bash

turn_on_orr_off(){
    if [ "$rice_cooker_power" == "OFF"  ]; then
        rice_cooker_power="ON"
        echo "Rice cooker turned ON"
    else 
        rice_cooker_power="OFF"
        echo "Rice cooker turned OFF"
    fi
}