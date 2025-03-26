import { ChangeEvent } from "react";

export const fileValidator = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0];
    const maxSize = 1 * 1024 * 1024; // 1MB

    const hasValidDimension = ():void => {
        const image = new Image();
        image.onload = function() {
            if (image.height > 600 || image.width > 600) {
                console.error("File is not fitting into 600x600 pixels");
                alert("File is too large dimensionally. Maximum is 600x600 pixels.");
                // Clear the file input
                target.value = "";
            }
        }

        image.src = URL.createObjectURL(file);
    };

    const hasError = ():void => {
        if (file.size > maxSize) {
            console.error("File is too large. Maximum size is 1MB.");
            alert("File is too large. Maximum size is 1MB.");
            // Clear the file input
            target.value = "";
        }
    };

    hasError();
    hasValidDimension();
};

export const getLocalStorageValue = (key: string) => {
    return localStorage.getItem(key);
}
