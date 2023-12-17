#!/bin/bash

clean_rice_cooker(){
    # shellcheck disable=SC2154
    if [ "$rice_cooker_state" == "dirty" ] && [ "$rice_cooker_power" == "OFF" ]; then
        rice_cooker_state="clean"
        echo "Cleaning done"
    else 
        echo "No need to clean something that is already shining and you may be electrocuted if it is still ON"
    fi
}