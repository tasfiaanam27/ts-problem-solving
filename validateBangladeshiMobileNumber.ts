function isValidBdMobileNumber(phoneNumber: string): boolean {
    const regex = /^(?:01|\+8801|8801)[3-9][0-9]{8}$/;

    return regex.test(phoneNumber);
}