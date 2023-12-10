#!/bin/bash
# shellcheck source=./cook.sh
source cook.sh
# shellcheck source=./status.sh
source status.sh
# shellcheck source=./turn.sh
source turn.sh
# shellcheck source=./clean.sh
source clean.sh


rice_cooker_power="off"
rice_cooker_state="clean"

while true; do
printf "\n"
echo "What do you want to do with your rice cooker?"
echo "1. Cook some rice"
echo "2. Turn it on/off"
echo "3. Clean the rice cooker"
echo "4. Check its status"
echo "5. Exit"
read -r -p "Please enter a number (1-5): " choice

case $choice in
    1)
    read -r -p "How many cups of rice? " rice_cups
    read -r -p "How many cups of water? " water_cups
    cook_rice "$rice_cups" "$water_cups" "$rice_cooker_power" "$rice_cooker_state"
    ;;
    2)
    turn_on_orr_off "$rice_cooker_power"
    ;;
    3)
    clean_rice_cooker "$rice_cooker_state"
    ;;
    4)
    display_status "$rice_cooker_power" "$rice_cooker_state"
    ;;
    5)
    echo "Never mind"
    break
    ;;
    *)
    echo "Invalid choice. Choose another action"
    ;;
esac
done
