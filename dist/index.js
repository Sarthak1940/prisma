"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName,
            }
        });
        console.log(res);
    });
}
insertUser("sarthak12ashba3godse@gmail.com", "Sarthak@123", "Sarthak", "Godse");
function updateUser(email_1, _a) {
    return __awaiter(this, arguments, void 0, function* (email, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: {
                email
            },
            data: {
                firstName,
                lastName,
            }
        });
        console.log(res);
    });
}
updateUser("sarthak123godse@gmail.com", { firstName: "Pajya", lastName: "Walzade" });
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findFirst({
            where: {
                email
            }
        });
    });
}
getUser("sarthak123godse@gmail.com");
function getTodo(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                user_id: user_id
            }
        });
        console.log(response);
    });
}
function getTodoAndUser(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                user_id: user_id
            },
            select: {
                title: true,
                description: true,
                user: true,
            }
        });
        console.log(response);
    });
}
