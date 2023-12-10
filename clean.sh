#!/bin/bash

clean_rice_cooker(){
    if (("$rice_cooker_state" = "dirty")); then
        rice_cooker_state="clean"
    else 
        echo "No need to clean something that is already shining"
    fi
}