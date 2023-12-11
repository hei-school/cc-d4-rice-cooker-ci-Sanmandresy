local riceCooker = {
    powerOn = false,
    cleanliness = true,
}

function cook()
    if riceCooker.cleanliness and riceCooker.powerOn then
        print("Enter the number of cups of rice (not exceeding 5): ")
        local cupsOfRice = tonumber(io.read())
        print("Enter the number of cups of water (not exceeding 5): ")
        local cupsOfWater = tonumber(io.read())

        if cupsOfRice and cupsOfWater and cupsOfRice <= 5 and cupsOfWater <= 5 then
            local cookingTime = cupsOfRice * cupsOfWater
            os.execute("sleep " .. cookingTime)

            print("Done !")
        else
            print("Too much cups of water/rice")
        end
    else
        print("Error: Cannot cook. Rice cooker must be clean and ON.")
    end
end

-- Function to toggle power
function turnOnOrOff()
    riceCooker.powerOn = not riceCooker.powerOn
    print("Rice cooker is now " .. (riceCooker.powerOn and "ON" or "OFF"))
end

function clean()
    if not riceCooker.powerOn then
        print("Cleaning done. Rice cooker is now clean.")
        riceCooker.cleanliness = true
    else
        print("Cannot clean while the rice cooker is ON. Turn it off first.")
    end
end

function showStatus()
    print("Rice cooker status: " .. (riceCooker.powerOn and "ON" or "OFF") .. ", Cleanliness: " .. (riceCooker.cleanliness and "Clean" or "Dirty"))
end


return {
    cook = cook,
    turnOnOrOff = turnOnOrOff,
    clean = clean,
    showStatus = showStatus
}