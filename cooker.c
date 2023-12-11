// cooker.c

#include <stdio.h>
#include <unistd.h>

static int powerOn = 0; 
static int cleanliness = 1;

#define MAX_CUPS 5

void cook() {
    int cupsOfRice, cupsOfWater;
    if( cleanliness == 1 && powerOn == 1) {
    printf("Enter the number of cups of rice (not exceeding %d): ", MAX_CUPS);
    scanf("%d", &cupsOfRice);

    printf("Enter the number of cups of water (not exceeding %d): ", MAX_CUPS);
    scanf("%d", &cupsOfWater);

    if (cupsOfRice > MAX_CUPS || cupsOfWater > MAX_CUPS) {
        printf("Error: Exceeded the limit of %d cups for rice or water. Cooking aborted.\n", MAX_CUPS);
    } else {
        int cookingTime = cupsOfRice * cupsOfWater;

        printf("Cooking time: %d seconds\n", cookingTime);
        sleep(cookingTime);

        printf("Done!\n");
        printf("\a");}
    }   else {
        printf("Error: Cannot cook. Rice cooker must be clean and ON.\n");
        }
}

void turnOnOrOff() {
    powerOn = !powerOn;
    printf("Rice cooker is now %s\n", (powerOn ? "on" : "off"));
}

void clean() {
    if (cleanliness == 0 && powerOn == 0) {
        printf("Cleaning done. Rice cooker is now clean.\n");
        cleanliness = 1;
    } else if (cleanliness == 1) {
        printf("No need to clean something that is already shining.\n");
    } else if (powerOn == 1) {
        printf("Cannot clean while the rice cooker is ON. Turn it off first.\n");
    }
}

void showStatus() {
    printf("Rice cooker status: %s, Cleanliness: %s\n",
           (powerOn ? "ON" : "OFF"),
           (cleanliness ? "Clean" : "Dirty"));
}
