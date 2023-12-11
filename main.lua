local cook = require("cook")


function displayMenu()
    print("What do you want to do with your rice cooker ? ")
    print("1. Cook some rice")
    print("2. Turn on/off the rice cooker")
    print("3. Clean the rice cooker")
    print("4. Check its status")
    print("5. Exit")
end


while true do
    displayMenu()
    io.write("Enter your choice: ")
    local choice = tonumber(io.read())

    if choice == 1 then
        cook.cook()
    elseif choice == 2 then
        cook.turnOnOrOff()
    elseif choice == 3 then
        cook.clean()
    elseif choice == 4 then
        cook.showStatus()
    elseif choice == 5 then
        print("Bye !")
        break
    else
        print("Invalid choice !")
    end
end
