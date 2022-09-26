"use strict";
const verifyUser = (user, sentValue) => {
    return (user.username === sentValue.username && user.password === sentValue.password);
};
const bdUser = { username: 'Bruno', password: '123' };
const sentUser = { username: 'Bruno', password: '123' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
