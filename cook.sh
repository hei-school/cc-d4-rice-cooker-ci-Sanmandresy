#!/bin/bash
# shellcheck source=./alert.sh
source alert.sh

cook_rice(){
    # The rice cooker limits
    max_rice_cups=5
    max_water_cups=6

    # The params
    rice_cups=$1
    water_cups=$2

    if [ "$3" == "OFF" ]; then
        echo "You need to turn On the rice cooker first to cook"
        return 1
    fi

    if [ "$rice_cooker_state" == "dirty" ]; then
        echo "Clean the rice cooker first !!!"
        return 1
    fi

    if (( rice_cups > max_rice_cups)); then
        echo "Error: Too much rice! Maximum allowed: $max_rice_cups cups."
        return 1
    fi

    if (( water_cups > max_water_cups )); then
        echo "Error: Too much water! Maximum allowed: $max_water_cups cups."
        return 1
    fi

    echo "Starting..."
    sleep 1

    cooking_time=$((rice_cups * water_cups))
    echo "Rice is cooking..."
    sleep $cooking_time

    echo "Done !!!"
    alert_done
    rice_cooker_state="dirty"
}