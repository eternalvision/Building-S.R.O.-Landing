let userNumber = "+420776766906";
export const PhoneNumber = () => {
    if (!userNumber.startsWith("+420")) {
        userNumber = `+420${userNumber}`;
    }
    return userNumber;
};
