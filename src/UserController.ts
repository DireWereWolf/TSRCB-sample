import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import * as fs from 'fs';
import * as users from './users.json';

@Controller()
export class UserController {

    @Get("/users")
    getAll() {
        return users;
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
        return users.find(item => item.id === id);
    }

    @Post("/users")
    post(@Body() user: any) {
        fs.writeFileSync('users.json', user);
        return "New users saved";
    }

    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
        const updatedList = users.map(item => {
           return item.id === id ? user : item;
        });
        fs.writeFileSync('users.json', updatedList);
        return `User with id ${id} has been updated`;
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        const updatedList = users.filter(item => item.id === id);
        fs.writeFileSync('users.json', updatedList);
        return `User with id ${id} has been removed`;
    }

}