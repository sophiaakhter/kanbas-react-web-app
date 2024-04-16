import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil } from "react-icons/bs";
import * as client from "./client";
import { User } from "./client";
export default function UserTable() {
    const [users, setUsers] = useState<User[]>([]);
    const deleteUser = async (user: User) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };

    const [user, setUser] = useState<User>({
        _id: "", username: "", password: "", firstName: "",
        lastName: "", role: "USER"
    });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };
    const selectUser = async (user: User) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) =>
                (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Credentials</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>&nbsp;</th>
                    </tr>
                    <tr>
                        <td>
                            <input value={user.username}
                                placeholder="Username"
                                onChange={(e) =>
                                    setUser({ ...user, username: e.target.value })} />
                            <input value={user.password}
                                placeholder="Password"
                                onChange={(e) =>
                                    setUser({ ...user, password: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.firstName} onChange={(e) =>
                                setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.lastName} onChange={(e) =>
                                setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select value={user.role} onChange={(e) =>
                                setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td className="text-nowrap">
                        <button onClick={() => updateUser()} className="btn btn-success me-2">
                                    <BsFillCheckCircleFill />
                                </button>
                            <button onClick={() => createUser()} className="btn btn-success me-2">
                                <BsPlusCircleFill />
                            </button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td className="text-nowrap">
                                <td>
                                    <button onClick={() => deleteUser(user)}>
                                        <BsTrash3Fill />
                                    </button>
                                </td>
                            </td>
                            <td className="text-nowrap">
                                <button className="btn btn-danger me-2">
                                    <BsTrash3Fill onClick={() => deleteUser(user)} />
                                </button>
                                <button className="btn btn-warning me-2">
                                    <BsPencil onClick={() => selectUser(user)} />
                                </button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}