#include <stdio.h>
#include "cooker.c"

int main() {
    int choice;

    do {
        // Display menu
        printf("What do you want to do with your rice cooker\n");
        printf("1. Cook some rice\n");
        printf("2. Turn on/off the rice cooker\n");
        printf("3. Clean the rice cooker\n");
        printf("4. Check its status\n");
        printf("5. Exit\n");

        // Get user input
        printf("Enter your choice: ");
        scanf("%d", &choice);

        // Perform actions based on user choice
        switch (choice) {
            case 1:
                cook();
                break;
            case 2:
                turnOnOrOff();
                break;
            case 3:
                clean();
                break;
            case 4:
                showStatus();
                break;
            case 5:
                printf("Bye!\n");
                break;
            default:
                printf("Invalid choice.\n");
        }

    } while (choice != 5);

    return 0;
}